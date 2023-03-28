import { AuthorizationStatus } from '../const.js';
import { store } from '../store/index.js';
import { Questions } from './question.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type GameData = {
  questions: Questions;
  isQuestionsDataLoading: boolean;
  hasError: boolean;
};

export type GameProcess = {
  mistakes: number;
  step: number;
};
