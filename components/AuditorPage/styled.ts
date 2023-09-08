import styled, { keyframes } from "styled-components";

export const AuditorPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: center;
    flex: 1;
`

export const AuditorPageSection = styled.div`
    display: flex;
    padding-top: 25px;
    flex-direction: column;
    width: 100%;
    align-items: center;
`


export const ChartWrapper = styled.div`
    display: flex;
    max-height: 300px;
    width: 100%;
    justify-content: center;
`

export const Socials = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`

export const SocialsForm = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
export const Button = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    margin: 10px;
    padding: 10px;

    &:hover {
        text-decoration: underline;
    }

    background: #6c7ae022;
`

const dots = keyframes`
  0%, 20% {
    color: rgba(0,0,0,0);
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);}
  40% {
    color: black;
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);}
  60% {
    text-shadow:
      .25em 0 0 black,
      .5em 0 0 rgba(0,0,0,0);}
  80%, 100% {
    text-shadow:
      .25em 0 0 black,
      .5em 0 0 black;
    }
`;

export const DotsLoader = styled.div`
  &:after {
    content: ' .';
    animation: ${dots} 1s steps(5, end) infinite;
  }
`