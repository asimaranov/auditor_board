'use client';

import { ScoreBoard } from "components/ScoreBoard";
import { MainContainer, MainContainerSection } from "./styled";
import { Navbar } from "components/Navbar";
import { CompetitionsView } from "components/CompetitionsView";

export const MainPage = () => (
    <MainContainer>
        <Navbar />
        <MainContainerSection>
            <ScoreBoard extended={false} title="Global top"/>
            <CompetitionsView />
        </MainContainerSection>
    </MainContainer>
)