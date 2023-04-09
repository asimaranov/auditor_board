import { useCompetitionTops } from "@state/hooks";
import { CompetitionsContainer, CompetitionsList } from "./styled"
import { formatAddress, getMedal, guessCompetitionName } from "@utils/utils";
import { AuditorLink } from "components/AuditorLink.tsx";

export const CompetitionsView = () => {
    const [competitionTops, setCompetitionTops] = useCompetitionTops();

    return (
        <CompetitionsContainer>
            
            <p>Contests</p>
            <CompetitionsList>
                <p>
                {competitionTops.slice().reverse().map((x, i) => 
                    (<p key={i}>{x.id} {guessCompetitionName(x.id)} <p>{x.top.slice().sort((a, b) => b.amount - a.amount).slice(0, 3).map((u, place) => (<p>{getMedal(place)} <AuditorLink address={u.address}></AuditorLink> – {u.amount.toLocaleString()} </p>))}</p><br/></p>)
                )}
                </p>
            </CompetitionsList>
            </CompetitionsContainer>
    )
}