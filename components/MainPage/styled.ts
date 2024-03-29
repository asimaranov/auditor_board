import styled from 'styled-components';

export const MainContainerSection = styled.div`
    flex: 1;
    margin: 10px;
    gap: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media screen and (max-width: 800px) {
        & {
            flex-direction: column;
            align-items: center;
        }
    }
`

export const MainContainerSubSection = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
`

export const MainContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
`;
