import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;

    height: 50px;
    background-color: black;
    align-items: center;
    gap: 15px;
    padding-left: 10px;
    color: white;
`

export const FooterSection = styled.div<{active: boolean}>`
    color: ${(props) => props.active ? 'white' : '#999999'};
    
    &:hover {
        color: white;
    };
    //width: 100px;
    justify-content: center;
    padding: 10px;
    cursor: pointer;
`