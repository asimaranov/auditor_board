'use client';
import { FooterContainer } from "./styled";

export const Footer = () => {
    return (
        <div>
            <FooterContainer>
                <a href={'https://strongholdsec.io/'} > Get audit</a> | 
                <a href={'https://twitter.com/stronghold_dao'} >Twitter</a> | 
                <iframe src="https://ghbtns.com/github-btn.html?user=strongholdsec&repo=leaderboard&type=star&count=true" frameBorder="0" scrolling="0" width="150" height="20" title="GitHub"></iframe>
            </FooterContainer>
        </div>
    )
}
