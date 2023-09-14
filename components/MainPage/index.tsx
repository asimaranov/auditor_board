'use client';
import { ScoreBoard } from "components/ScoreBoard";
import { MainContainerSection } from "./styled";
import { CompetitionsView } from "components/CompetitionsView";

export const MainPage = () => (
    <MainContainerSection>
        <ScoreBoard extended={false} title="Global top"/>
        <CompetitionsView />
    </MainContainerSection>
)