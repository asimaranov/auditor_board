import { useCallback } from 'react';

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from './state';
import { IAuditorContacts, IAuditorResult, ICompetitionTop } from './reducer';
import { updateAuditorContacts, updateAuditorResults, updateCompetitionIds, updateCompetitionTops } from './actions';
import { useClient } from '@utils/utils';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export function useAuditorsResults(): [IAuditorResult[], (auditorResults: IAuditorResult[]) => void] {
  const dispatch = useAppDispatch();
  const auditorHistory = useAppSelector((state) => state.mainReducer.auditorResults);
  const setAuditorHistory = useCallback(
    (auditorResults: IAuditorResult[]) => {
      dispatch(updateAuditorResults({ auditorResults }));
    },
    [dispatch],
  );

  const isClient = useClient();

  return [isClient ? auditorHistory : [], setAuditorHistory];
}

export function useCompetitionIds(): [number[], (auditorResults: number[]) => void] {
  const dispatch = useAppDispatch();
  const competitionIds = useAppSelector((state) => state.mainReducer.competitionIds);
  const setCompetitionIds = useCallback(
    (competitionIds: number[]) => {
      dispatch(updateCompetitionIds({ competitionIds }));
    },
    [dispatch],
  );

  const isClient = useClient();

  return [isClient ? competitionIds : [], setCompetitionIds];
}

export function useCompetitionTops(): [ICompetitionTop[], (competitionTops: ICompetitionTop[]) => void] {
  const dispatch = useAppDispatch();
  const competitionTops = useAppSelector((state) => state.mainReducer.competitionTops);
  const setCompetitionTops = useCallback(
    (competitionTops: ICompetitionTop[]) => {
      dispatch(updateCompetitionTops({ competitionTops }));
    },
    [dispatch],
  );

  const isClient = useClient();

  return [isClient ? competitionTops : [], setCompetitionTops];
}

export function useAuditorContacts(): [IAuditorContacts, (auditorContacts: IAuditorContacts) => void] {
  const dispatch = useAppDispatch();
  const auditorContacts = useAppSelector((state) => state.mainReducer.auditorContacts);
  const setAuditorContacts = useCallback(
    (auditorContacts: IAuditorContacts) => {
      dispatch(updateAuditorContacts({ auditorContacts }));
    },
    [dispatch],
  );

  const isClient = useClient();

  return [isClient ? auditorContacts : {}, setAuditorContacts];
}
