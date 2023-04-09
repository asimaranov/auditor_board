'use client'
import { SBT_ABI } from '@abis/SBT.js';
import { BigNumber, ethers } from 'ethers';
import { provider } from 'app/layout';
import { useEffect, useState } from 'react';
import { IAuditorResult, ICompetitionTop } from '@state/reducer';
import { useAuditorsResults, useCompetitionIds, useCompetitionTops } from '@state/hooks';

const sbtContract = new ethers.Contract(
    '0x45782146489271c135969c9d58fe5c73d3445808',
    SBT_ABI,
    provider
)

export const SbtInfoUpdater = () => {
    const [auditorResults, setAuditorResults] = useAuditorsResults();
    const [competitionIds, setCompetitionIds] = useCompetitionIds();
    const [competitionTops, setCompetitionTops] = useCompetitionTops();

    useEffect(() => {
        let eventFilter = sbtContract.filters.TransferSingleStarted()
        sbtContract.queryFilter(eventFilter, 0, 'latest').then(mints => {
            const ids: any[] = [];
            const users: any[] = [];
            const values: BigNumber[] = [];
            const userResults: { [address: string]: IAuditorResult } = {};
            const competitionResults: { [id: number]: ICompetitionTop } = {};

            const addresses: any[] = [];
            const competitionIds: number[] = [];

            // console.log('Mints', mints)

            for (const mint of mints) {
                const [operator, from, to, id, value] = mint.args!;
                ids.push(id.toNumber());
                users.push(to);
                values.push(value);
            }

            sbtContract.getTokensData(ids, users).then((tokenDatas: any[]) => {
                //console.log('Got token data')
                tokenDatas.forEach((tokenData, i) => {
                    //console.log('Token data', tokenData);

                    const competitionInfo = {
                        id: ids[i],
                        amount: values[i].toNumber(),
                        weight: tokenData.weight.toNumber()
                    };

                    if (!competitionIds.includes(competitionInfo.id))
                        competitionIds.push(competitionInfo.id);

                    if (!userResults[users[i]]) {
                        userResults[users[i]] = { address: users[i], total: values[i].toNumber() * tokenData.weight.toNumber(), competitions: [competitionInfo] };
                        addresses.push(users[i]);
                    } else {
                        userResults[users[i]].total += values[i].toNumber() * tokenData.weight.toNumber();
                        userResults[users[i]].competitions.push(competitionInfo);
                    }

                    const participantInfo = {
                        address: users[i],
                        amount: values[i].toNumber()
                    };

                    if (!competitionResults[ids[i]]) {
                        competitionResults[ids[i]] = { 
                            id: ids[i],
                            top: [participantInfo]
                         };
                        addresses.push(users[i]);
                    } else {
                        competitionResults[ids[i]].top.push(participantInfo);
                    }
                })
                setCompetitionIds(competitionIds);
                setAuditorResults(addresses.map(address => userResults[address]));
                console.log('Ids', ids)
                setCompetitionTops(competitionIds.map(id => competitionResults[id]));
            });
        })
    }, []);

    return (<></>);

}