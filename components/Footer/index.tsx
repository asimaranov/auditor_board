'use client';
import { FooterContainer } from "./styled";

export const Footer = () => {
    return (
        <div>
            <FooterContainer>
                <a href={'https://strongholdsec.io/'} >Request audit</a> | 
                <a href={'https://twitter.com/stronghold_dao'} >Twitter</a> | 
                <iframe src="https://ghbtns.com/github-btn.html?user=asimaranov&repo=auditor_board&type=star&count=true" frameBorder="0" scrolling="0" width="150" height="20" title="GitHub"></iframe>
            </FooterContainer>
        </div>
    )
}