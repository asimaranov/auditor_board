import { createAction } from '@reduxjs/toolkit';
import { IAuditorContacts, IAuditorResult, ICompetitionTop } from './reducer';


export const updateAuditorResults = createAction<{ auditorResults: IAuditorResult[] }>(
  'auditorResults/update',
);

export const updateCompetitionIds = createAction<{ competitionIds: number[] }>(
  'competitionIds/update',
);

export const updateCompetitionTops = createAction<{ competitionTops: ICompetitionTop[] }>(
  'competitionTops/update',
);

export const updateAuditorContacts = createAction<{ auditorContacts: IAuditorContacts }>(
  'auditorContacts/update',
);
