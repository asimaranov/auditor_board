import { ScoreBoardCell, ScoreBoardContainer, ScoreBoardHeader, ScoreBoardHeaderCell, ScoreBoardTable } from './styled';
import { useAuditorsResults, useCompetitionIds, useAuditorContacts } from 'state/hooks';
import { SbtInfoUpdater } from 'components/SbtInfoUpdater';
import { getMedal, useClient } from '@utils/utils';
import { AuditorLink } from 'components/AuditorLink';
import { Socials } from 'components/AuditorPage/styled';
import Image from 'next/image';


export const ScoreBoard = ({ extended, title }: { extended: boolean, title: string }) => {
    const [auditorResults, setAuditorResults] = useAuditorsResults();
    const [competitionIds, setCompetitionIds] = useCompetitionIds();
    const [auditorContacts, setAuditorContacts] = useAuditorContacts();

    const isClient = useClient();

    const isMobile = isClient && window.innerWidth < 800;
    const competitionsNum = Math.min(isMobile ? 3 : 7, competitionIds.length);
    const hideSocials = extended && isMobile;

    return (
        <ScoreBoardContainer suppressHydrationWarning={true}>
            <p>{title}</p>
            <SbtInfoUpdater />
            <ScoreBoardTable competitionsNum={extended ? competitionsNum : 0} displaySocials={!hideSocials}>
                <thead style={{ display: 'contents' }}>
                    <ScoreBoardHeader>
                        <ScoreBoardHeaderCell>#</ScoreBoardHeaderCell>
                        <ScoreBoardHeaderCell>Address</ScoreBoardHeaderCell>
                        {!hideSocials && (<ScoreBoardHeaderCell>Socials</ScoreBoardHeaderCell>)}
                        {extended && competitionIds?.slice(-competitionsNum).map((x, i) => (
                            <ScoreBoardHeaderCell key={i}>{x}</ScoreBoardHeaderCell>
                        ))}
                        <ScoreBoardHeaderCell>Total</ScoreBoardHeaderCell>
                    </ScoreBoardHeader>
                </thead>
                <tbody style={{ display: 'contents' }} suppressHydrationWarning={true}>
                    {auditorResults?.slice().sort((x, y) => y.total - x.total).map((x, i) => (<ScoreBoardHeader suppressHydrationWarning={true} key={i}>
                        <ScoreBoardCell>{getMedal(i)} {i + 1}</ScoreBoardCell>
                        <ScoreBoardCell><AuditorLink address={x.address} /></ScoreBoardCell>
                        {!hideSocials && (
                            <ScoreBoardCell>
                                <Socials>
                                    {auditorContacts?.[x.address]?.['telegram'] && (
                                        <a href={`https://t.me/${auditorContacts?.[x.address]?.['telegram']}`}>
                                            <Image src='/icons/telegram.svg' alt='Telegram' width={16} height={16} style={{ cursor: 'pointer' }}></Image>
                                        </a>
                                    )}
                                    {auditorContacts?.[x.address]?.['twitter'] && (
                                        <a href={`https://twitter.com/${auditorContacts?.[x.address]?.['twitter']}`}>
                                            <Image src='/icons/twitter.svg' alt='Twitter' width={16} height={16} style={{ cursor: 'pointer' }}></Image>
                                        </a>
                                    )}
                                    {auditorContacts?.[x.address]?.['github'] && (
                                        <a href={`https://github.com/${auditorContacts?.[x.address]?.['github']}`}>
                                            <Image src='/icons/github.svg' alt='Github' width={16} height={16} style={{cursor: 'pointer' }}></Image>
                                        </a>
                                    )}
                                </Socials>
                            </ScoreBoardCell>
                        )}

                        {extended && competitionIds?.slice(-competitionsNum).map((y, i) => {
                            const foundUserCompetition = x.competitions.find(e => e.id == y);
                            return (
                                <ScoreBoardCell key={i}>
                                    {foundUserCompetition ?
                                        (
                                            <>{foundUserCompetition.amount}
                                                <div style={{ display: 'inline', color: '#999999' }}>x{foundUserCompetition.weight}</div>
                                            </>
                                        ) : (<></>)
                                    }
                                </ScoreBoardCell>
                            )
                        })}
                        <ScoreBoardCell>{x.total.toLocaleString()}</ScoreBoardCell>
                    </ScoreBoardHeader>
                    ))}
                </tbody>
            </ScoreBoardTable>
        </ScoreBoardContainer>
    )
}