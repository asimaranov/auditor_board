import styled from "styled-components";

export const ScoreBoardContainer = styled.div`
    display: flex;   
    flex-direction: column;
    align-items: center; 
    width: 100%;
`

export const ScoreBoardTable = styled.table<{ competitionsNum: number }>`
    display: grid;    
    border-collapse: collapse;
    grid-template-columns: 
        minmax(150px, 0.2fr)
        minmax(150px, 0.5fr) 
        minmax(150px, 0.4fr) 
        ${(props) => `minmax(100px, 0.1fr) `.repeat(props.competitionsNum)}  
        minmax(150px, 0.2fr);

    @media screen and (max-width: 800px) {
        & {
            grid-template-columns: 
                minmax(80px, 0.1fr)
                minmax(100px, 0.4fr) 
                minmax(100px, 0.2fr) 
                ${(props) => `minmax(80px, 0.1fr) `.repeat(props.competitionsNum)}  
                minmax(100px, 0.1fr);
        }
    }
`

export const ScoreBoardHeaderCell = styled.th`
    display: flex;
    justify-content: center;

    padding: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    position: sticky;
    top: 0;
    background: #6c7ae0;
    text-align: left;
    font-weight: normal;
    font-size: 1.1rem;
    color: white;
    
    &:last-child {
        border: 0;
    }
`

export const ScoreBoardCell = styled.td`
    display: flex;
    justify-content: center;

    padding: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    padding-top: 10px;
    padding-bottom: 10px;
    color: #808080;
      text-overflow: ellipsis;

      
    &:last-child {
        border: 0;
    }
`


export const ScoreBoardHeader = styled.tr`
    display: contents;
    &:nth-child(even) td {
        background: #f8f6ff;
      }
`
export const ScoreBoardRow = styled.td`
    display: contents;
`
