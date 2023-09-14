import { createReducer } from '@reduxjs/toolkit';
import { updateAuditorResults, updateCompetitionIds, updateCompetitionTops, updateAuditorContacts } from './actions';

export interface ICompetitionInfo {
    id: number,
    amount: number,
    weight: number,
    params: string[]
}

export interface IAuditorResult {
    address: string,
    total: number,
    competitions: ICompetitionInfo[]
}

export interface ICompetitionTopAuditor {
    address: string,
    amount: number,
    weight: number
}
export interface ICompetitionTop {
    id: number,
    top: ICompetitionTopAuditor[]
}

export interface IAuditorContacts {
    [auditor: string]: {[socialNetwork: string]: string}
}


export interface AuditorHistoryState {
    auditorResults: IAuditorResult[]
    competitionIds: number[]
    competitionTops: ICompetitionTop[],
    auditorContacts: IAuditorContacts
}

export const initialState: AuditorHistoryState = {
    auditorResults: [],
    competitionIds: [],
    competitionTops: [],
    auditorContacts: {}
};
export default createReducer(initialState, (builder) => {
    builder.addCase(updateAuditorResults, (state, { payload: { auditorResults } }) => {
        state.auditorResults = auditorResults;
    });

    builder.addCase(updateCompetitionIds, (state, { payload: { competitionIds } }) => {
        state.competitionIds = competitionIds;
    });

    builder.addCase(updateCompetitionTops, (state, { payload: { competitionTops } }) => {
        state.competitionTops = competitionTops;
    });

    builder.addCase(updateAuditorContacts, (state, { payload: { auditorContacts } }) => {
        state.auditorContacts = auditorContacts;
    });
}
);
