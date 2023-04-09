'use client';

import styled from 'styled-components';

export const MainContainerSection = styled.div`
margin: 10px;
gap: 20px;

display: flex;

flex-direction: row;

  @media (max-width: 800px) {
    & {
      flex-direction: column;
      align-items: center;
    }
  }

`
export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;


  

  //justify-content: center;
  //align-items: center;
  //pointer-events: none;
  //background-color: ${({ theme }) => theme.bg0};
`;
