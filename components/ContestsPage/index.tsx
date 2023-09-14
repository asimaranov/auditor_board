'use client';
import { ScoreBoard } from "components/ScoreBoard";
import { MainContainerSection } from "./styled";

export const ContestsPage = () => {
    return (
        <MainContainerSection>
            <ScoreBoard extended={true} title="Competition results" />
        </MainContainerSection>
    )
}