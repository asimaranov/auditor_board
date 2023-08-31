'use client';
import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { AuditorPageContainer, AuditorPageSection, ChartWrapper, Button, Socials, SocialsForm, DotsLoader } from './styled';
import { useAuditorsResults, useCompetitionTops } from '@state/hooks';
import { competitionNames, getMedal, guessCompetitionName } from '@utils/utils';
import { SbtInfoUpdater } from 'components/SbtInfoUpdater';
import { ethers } from 'ethers';
import { useAccount, useContractReads } from 'wagmi';
import { SBT_ADDRESS } from '@constants/index';
import { SBT_ABI } from '@abis/SBT.js';
import { prepareWriteContract, writeContract } from '@wagmi/core';
import { useRouter } from 'next/navigation';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
  scales: {
    x: {
      offset: true
    }
  }
};

export const AuditorPage = (props: { address: string }) => {
  const [auditorResults, setAuditorResults] = useAuditorsResults();
  const [competitionTops, setCompetitionTops] = useCompetitionTops();
  const { address } = useAccount({});
  const [pendingNFTS, setPendingNFTS] = useState<{ nftId: number, competitionName: string, pendingAmount: number }[] | null>(null);
  const [telegramUsername, setTelegramUsername] = useState('');
  const [twitterUsername, setTwitterUsername] = useState('');
  const [githubUsername, setGithubUsername] = useState('');
  const [collectLoading, setCollectLoading] = useState(false);
  const [saveContactsLoading, setSaveContactsLoading] = useState(false);
  const [me, setMe] = useState(false);
  const router = useRouter();

  const competitionsNum = Object.keys(competitionNames).length;
  const {
    data: readData
  } = useContractReads({
    contracts: [
      {
        address: SBT_ADDRESS,
        abi: SBT_ABI as any,
        functionName: 'getPendingBalances',
        args: [
          Array(competitionsNum * 2).fill(1).map((_, i) => i),
          Array(competitionsNum * 2).fill(props.address)
        ],
      }]
  });

  useEffect(() => {
    if (!readData || !readData[0] || readData[0].status != 'success') {
      return;
    }
    const pendings = (readData?.[0]?.result as bigint[])
      ?.map((x, i) => [Number(x), i])
      .filter(x => x[0] > 0);

    setPendingNFTS(pendings.map(x => ({
      nftId: x[1],
      competitionName: competitionNames?.[x[1]] || '???',
      pendingAmount: x[0]
    })));
  }, [readData]);

  useEffect(() => {
    // Wallet changed while user in me section
    if (me && address != props.address) {
      router.push(`/auditor/${address ? address : 'me'}`)
    }
    setMe(props.address == 'me' || address == props.address);
  }, [address]);

  const auditorResult = auditorResults.find(x => x.address == props.address);
  const globalTop = auditorResults?.slice().sort((x, y) => y.total - x.total).findIndex(x => x.address == props.address);

  let sum = 0;
  const data = {
    labels: auditorResult?.competitions.map(x => `${x.id} ${guessCompetitionName(x.id)}`),
    datasets: [
      {
        label: 'Auditor\'s global score',
        data: auditorResult?.competitions.map(x => sum = (sum || 0) + x.amount * x.weight),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: ["rgb(255, 99, 132)"],
      },
    ],
  };

  const formatMetadata = (params: string[]) => {
    if (!params) {
      return '';
    }

    const scores = params.map(param => ethers.utils.parseBytes32String(param));

    if (scores.length == 0) {
      return `No results`
    } if (scores.length == 4) {
      return `${scores[0]} critical, ${scores[1]} high, ${scores[2]} medium, ${scores[3]} low`
    } else if (scores.length == 6) {
      return `CTF: ${scores[0]}, Audit: ${scores[1]} | ${scores[2]} critical, ${scores[3]} high, ${scores[4]} medium, ${scores[5]} low`
    }
  }

  const acceptTokenBatch = async () => {
    if (!address || !pendingNFTS) {
      return;
    }

    try {
      const config = await prepareWriteContract({
        address: SBT_ADDRESS,
        abi: SBT_ABI,
        functionName: 'acceptTokenBatch',
        args: [pendingNFTS!.map(x => x.nftId)],
      });
      setCollectLoading(true);
      const { hash } = await writeContract(config);
    } catch (e) {
      // @todo
      console.log(e)
    } finally {
      setCollectLoading(false);
    }
  };

  const saveContacts = async () => {
    console.log('Saving')
    if (!address) {
      return;
    }
    try {
      const config = await prepareWriteContract({
        address: SBT_ADDRESS,
        abi: SBT_ABI,
        functionName: 'saveContacts',
        args: [['telegram', 'twitter', 'github'], [telegramUsername, twitterUsername, githubUsername]],
      });
      setSaveContactsLoading(true);
      const { hash } = await writeContract(config);
    } catch (e) {
      // @todo
      console.log(e)
    } finally {
      setSaveContactsLoading(false);
    }
  };

  return (
    <AuditorPageContainer>
      <SbtInfoUpdater />
      <AuditorPageSection>
        <p>Auditor statistics: {props.address == 'me' ? (<b>Wallet not connected</b>) : props.address}</p>
        <p>Global top: {globalTop + 1} {getMedal(globalTop)}. Competition medals: {
          auditorResult?.competitions.map(x => {
            const topPlace = competitionTops.find(c => c.id == x.id)?.top.findIndex(t => t.address == props.address);
            return (
              <>
                {getMedal(topPlace!)}
              </>
            );
          }
          )}</p>
        <ChartWrapper>
          <Line data={data} options={options}></Line>
        </ChartWrapper>
      </AuditorPageSection>
      <AuditorPageSection>
        <p>Participated contests</p>
        {auditorResult?.competitions.map(x => {
          const topPlace = competitionTops.find(c => c.id == x.id)?.top.findIndex(t => t.address == props.address);
          return (
            <div style={{ textAlign: 'center' }} key={x.id}>
              [{x.id} {guessCompetitionName(x.id)}] {x.amount}<div style={{ display: 'inline', color: '#777777' }}>x{x.weight}</div> score. Top – {topPlace! + 1} {getMedal(topPlace!)}.<br /><div style={{ display: 'inline', color: '#777777' }}>{formatMetadata(x.params)}</div><br /><br />
            </div>
          );
        }
        )}
        <AuditorPageSection>
          <p>Contacts</p>
          <Socials>
            <img src='/icons/twitter.svg' style={{ width: '16px', height: '16px', cursor: 'pointer' }}></img>
            <img src='/icons/telegram.svg' style={{ width: '16px', height: '16px', cursor: 'pointer' }}></img>
          </Socials>
        </AuditorPageSection>
      </AuditorPageSection>
      {
        props.address == address && (
          <>
            <AuditorPageSection>
              <p>Personal infomation</p>
              <SocialsForm>
                <div>
                  <Socials>
                    <img src='/icons/telegram.svg' style={{ width: '16px', height: '16px', cursor: 'pointer' }}></img>
                    <input type="text" onChange={(x) => setTelegramUsername(x.target.value)} />
                  </Socials>
                  <Socials>
                    <img src='/icons/twitter.svg' style={{ width: '16px', height: '16px', cursor: 'pointer' }}></img>
                    <input type="text" onChange={(x) => setTwitterUsername(x.target.value)} />
                  </Socials>
                  <Socials>
                    <img src='/icons/github.svg' style={{ width: '16px', height: '16px', cursor: 'pointer' }}></img>
                    <input type="text" onChange={(x) => setGithubUsername(x.target.value)} />
                  </Socials>
                </div>
                <Button onClick={() => saveContacts()}>
                  Save {saveContactsLoading && (<DotsLoader />)}
                </Button>
              </SocialsForm>
            </AuditorPageSection>
          </>
        )
      }

      <AuditorPageSection>
        <p>Pending NFTS</p>
        {pendingNFTS?.length ? (
          <>
            {pendingNFTS?.map(x => (<u>{x.competitionName}: {x.pendingAmount}</u>))}
            {props.address == address && (
              <Button onClick={() => acceptTokenBatch()}>
                Collect {collectLoading && (<DotsLoader />)}
              </Button>
            )}
          </>
        ) : (
          <div>All NFTS are collected</div>
        )}
      </AuditorPageSection>
    </AuditorPageContainer>
  )
}
