'use client';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { load, save } from 'redux-localstorage-simple';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import mainReducer from './reducer';

const IGNORED_KEYS: string[] = [];
const PERSISTED_KEYS: string[] = [];

export const store = configureStore({
  reducer: {
    mainReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true, serializableCheck: false }).concat(
      save({
        states: PERSISTED_KEYS,
        debounce: 1000,
        ignoreStates: IGNORED_KEYS,
      }),
    ),
  preloadedState:
    typeof window !== 'undefined'
      ? load({
          states: PERSISTED_KEYS,

          disableWarnings: process.env.NODE_ENV === 'test',
        })
      : {},

  devTools: true,
});

// assigning store to next wrapper
const makeStore = () => store;

// next wrapper for persisting state on ssr
export const wrapper = createWrapper(makeStore);

// store.dispatch(updateVersion())

setupListeners(store.dispatch);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
