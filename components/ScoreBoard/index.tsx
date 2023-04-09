import { ScoreBoardCell, ScoreBoardContainer, ScoreBoardHeader, ScoreBoardHeaderCell, ScoreBoardTable } from './styled';
import { useAuditorsResults, useCompetitionIds } from 'state/hooks';
import { SbtInfoUpdater } from 'components/SbtInfoUpdater';
import { getMedal } from '@utils/utils';
import { AuditorLink } from 'components/AuditorLink.tsx';


export const ScoreBoard = ({ extended, title }: { extended: boolean, title: string }) => {
    const [auditorResults, setAuditorResults] = useAuditorsResults();
    const [competitionIds, setCompetitionIds] = useCompetitionIds();

    const competitionsNum = typeof window !== "undefined" ? Math.min(extended ? (window.innerWidth > 800 ? 7 : 3) : 0, competitionIds.length) : 0;
    
    return (
        <ScoreBoardContainer>
            <p>{title}</p>
            <SbtInfoUpdater />
            <ScoreBoardTable competitionsNum={competitionsNum}>
                <thead style={{ display: 'contents' }}>
                    <ScoreBoardHeader>
                        <ScoreBoardHeaderCell>#</ScoreBoardHeaderCell>
                        <ScoreBoardHeaderCell>Address</ScoreBoardHeaderCell>
                        <ScoreBoardHeaderCell>Socials</ScoreBoardHeaderCell>
                        {extended && competitionIds?.slice(-competitionsNum).map(x => (<ScoreBoardHeaderCell>{x}</ScoreBoardHeaderCell>))}
                        <ScoreBoardHeaderCell>Total</ScoreBoardHeaderCell>
                    </ScoreBoardHeader>
                </thead>
                <tbody style={{ display: 'contents' }}>
                    {auditorResults?.slice().sort((x, y) => y.total - x.total).map((x, i) => (<ScoreBoardHeader key={i}>
                        <ScoreBoardCell>{getMedal(i)} {i + 1}</ScoreBoardCell>
                        <ScoreBoardCell><AuditorLink address={x.address} /></ScoreBoardCell>
                        <ScoreBoardCell>{<div>N/A</div>}</ScoreBoardCell>

                        {extended && competitionIds?.slice(-competitionsNum).map((y, i) => {
                            const foundUserCompetition = x.competitions.find(e => e.id == y);
                            return (
                                <ScoreBoardCell key={i}>
                                    {foundUserCompetition ?
                                        (<>{foundUserCompetition.amount}<div style={{ display: 'inline', color: '#999999' }}>x{foundUserCompetition.weight}</div></>) : (<></>)}
                                </ScoreBoardCell>
                            )
                        }
                        )}
                        <ScoreBoardCell>{x.total.toLocaleString()}</ScoreBoardCell>
                    </ScoreBoardHeader>
                    ))}
                </tbody>
            </ScoreBoardTable>
        </ScoreBoardContainer>
    )
}