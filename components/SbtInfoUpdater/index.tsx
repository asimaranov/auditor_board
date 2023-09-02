'use client';
import { SBT_ABI } from '@abis/SBT.js';
import { BigNumber, ethers, utils } from 'ethers';
import { useEffect } from 'react';
import { IAuditorContacts, IAuditorResult, ICompetitionTop } from '@state/reducer';
import { useAuditorContacts, useAuditorsResults, useCompetitionIds, useCompetitionTops } from '@state/hooks';
import { provider } from '@utils/utils';
import { CONTACTS_STORE, SBT_ADDRESS } from '@constants/index';
import { CONTACTS_STORE_ABI } from '@abis/ContactsStore';

const sbtContract = new ethers.Contract(
    SBT_ADDRESS,
    SBT_ABI,
    provider
)

const contactsContract = new ethers.Contract(
    CONTACTS_STORE,
    CONTACTS_STORE_ABI,
    provider
)

export const SbtInfoUpdater = () => {
    const [auditorResults, setAuditorResults] = useAuditorsResults();
    const [competitionIds, setCompetitionIds] = useCompetitionIds();
    const [competitionTops, setCompetitionTops] = useCompetitionTops();
    const [auditorContacts, setAuditorContacts] = useAuditorContacts();

    useEffect(() => {
        let eventFilter = sbtContract.filters.TransferSingleStarted()
        sbtContract.queryFilter(eventFilter, 0, 'latest').then(mints => {
            const ids: any[] = [];
            const users: any[] = [];
            const uniqueUsers: any[] = [];

            const values: BigNumber[] = [];
            const userResults: { [address: string]: IAuditorResult } = {};
            const competitionResults: { [id: number]: ICompetitionTop } = {};

            const addresses: any[] = [];
            const competitionIds: number[] = [];
            const seenMints: { [mintId: string]: boolean } = {};

            // console.log('Mints', mints)

            for (const mint of mints) {
                const [operator, from, to, id, value] = mint.args!;
                if (seenMints[`${to}_${id}`]) {
                    console.log('Seen mint', `${to}_${id}`, value)
                    continue;
                };

                ids.push(id.toNumber());
                users.push(to);

                if (!uniqueUsers.includes(to)) {
                    uniqueUsers.push(to);
                }
                values.push(value);
                seenMints[`${to}_${id}`] = true;
            }

            sbtContract.getTokensData(ids, users).then((tokenDatas: any[]) => {
                tokenDatas.forEach((tokenData, i) => {

                    const competitionInfo = {
                        id: ids[i],
                        amount: values[i].toNumber(),
                        weight: tokenData.weight.toNumber(),
                        params: tokenData.params
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
                        amount: values[i].toNumber(),
                        weight: tokenData.weight.toNumber()
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
                setAuditorResults(uniqueUsers.map(address => userResults[address]));
                competitionIds.map(id => competitionResults[id].top.sort((a, b) => b.amount * b.weight - a.amount * a.weight));
                setCompetitionTops(competitionIds.map(id => competitionResults[id]));
            });
        })

        let setContractFilter = contactsContract.filters.ConactSet();
        contactsContract.queryFilter(setContractFilter, 0, 'latest').then(contacts => {
            const newContacts: IAuditorContacts = {};

            for (const contactInfo of contacts) {
                const [auditor, socialNetwork, contact] = contactInfo.args!;
                console.log(auditor, socialNetwork, contact);
                let auditorMap = newContacts[auditor] ?? {};     
                auditorMap[utils.parseBytes32String(socialNetwork)] = utils.parseBytes32String(contact);
                newContacts[auditor] = auditorMap;
            }

            console.log('Setting contacts', newContacts);

            setAuditorContacts(newContacts);
        })
    }, []);

    return (
        <></>
    );
}