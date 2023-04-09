'use client'
import React from 'react';
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
import { Line, Bar } from 'react-chartjs-2';
import { AuditorPageContainer, AuditorPageSection, ChartWrapper } from './styled';
import { useAuditorsResults, useCompetitionTops } from '@state/hooks';
import { Navbar } from 'components/Navbar';
import { MainContainer } from 'components/MainPage/styled';
import { getMedal, guessCompetitionName } from '@utils/utils';
import { SbtInfoUpdater } from 'components/SbtInfoUpdater';

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

    return (
    <MainContainer>
      <SbtInfoUpdater />
      <Navbar />
      <AuditorPageContainer>
        <AuditorPageSection>
          <p>Auditor statistics: {props.address}</p>
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
            console.log('Competition tops', x.id, competitionTops.find(c => c.id == x.id));
            const topPlace = competitionTops.find(c => c.id == x.id)?.top.findIndex(t => t.address == props.address);
            return (
              <div>
                [{x.id} {guessCompetitionName(x.id)}] {x.amount}<div style={{display: 'inline', color: '#777777'}}>x{x.weight}</div> score. Top – {topPlace! + 1} {getMedal(topPlace!)}
              </div>
            );
          }
          )}
        </AuditorPageSection>

      </AuditorPageContainer>
    </MainContainer>
  )
}