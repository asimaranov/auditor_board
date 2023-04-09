"use client"
import { ScoreBoard } from "components/ScoreBoard";
import { MainContainer, MainContainerSection } from "./styled";
import { Navbar } from "components/Navbar";

export const ContestsPage = () => {
    return (
        <div>
            <MainContainer>
                <Navbar />
                <MainContainerSection>
                    <ScoreBoard extended={true} title="Competition results"/>
                </MainContainerSection>
            </MainContainer>

        </div>
    )
}