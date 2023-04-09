import { ScoreBoardCell, ScoreBoardContainer, ScoreBoardHeader, ScoreBoardHeaderCell, ScoreBoardTable } from './styled';
import { useAuditorsResults, useCompetitionIds } from 'state/hooks';
import { SbtInfoUpdater } from 'components/SbtInfoUpdater';
import { getMedal } from '@utils/utils';
import { AuditorLink } from 'components/AuditorLink.tsx';


export const ScoreBoard = ({ extended, title }: { extended: boolean, title: string }) => {
    const [auditorResults, setAuditorResults] = useAuditorsResults();
    const [competitionIds, setCompetitionIds] = useCompetitionIds();

    return (
        <ScoreBoardContainer>
            <p>{title}</p>
            <SbtInfoUpdater />
            <ScoreBoardTable competitionsNum={extended && competitionIds?.length || 0}>
                <thead style={{ display: 'contents' }}>
                    <ScoreBoardHeader>
                        <ScoreBoardHeaderCell>#</ScoreBoardHeaderCell>
                        <ScoreBoardHeaderCell>Address</ScoreBoardHeaderCell>
                        <ScoreBoardHeaderCell>Socials</ScoreBoardHeaderCell>
                        {extended && competitionIds?.map(x => (<ScoreBoardHeaderCell>{x}</ScoreBoardHeaderCell>))}
                        <ScoreBoardHeaderCell>Total</ScoreBoardHeaderCell>
                    </ScoreBoardHeader>
                </thead>
                <tbody style={{ display: 'contents' }}>
                    {auditorResults?.slice().sort((x, y) => y.total - x.total).map((x, i) => (<ScoreBoardHeader key={i}>
                        <ScoreBoardCell>{getMedal(i)} {i + 1}</ScoreBoardCell>
                        <ScoreBoardCell><AuditorLink address={x.address} /></ScoreBoardCell>
                        <ScoreBoardCell>{<div>N/A</div>}</ScoreBoardCell>

                        {extended && competitionIds?.map((y, i) => {
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