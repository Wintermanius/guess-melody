import {createReducer} from '@reduxjs/toolkit';
import {checkUserAnswer, incrementStep, loadQuestions, requireAuthorization, resetGame, setQuestionsDataLoadingStatus} from './action';
import {AuthorizationStatus, FIRST_GAME_STEP} from '../const';
import { isAnswerCorrect } from '../game';
import { Questions } from '../types/question';

const STEP_COUNT = 1;

type InitalState = {
  mistakes: number;
  step: number;
  questions: Questions;
  authorizationStatus: AuthorizationStatus;
  isQuestionsDataLoading: boolean;
}

const initialState: InitalState = {
  mistakes: 0,
  step: FIRST_GAME_STEP,
  questions: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isQuestionsDataLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(incrementStep, (state) => {
      state.step = state.step + STEP_COUNT;
    })
    .addCase(resetGame, (state) => {
      state.mistakes = 0;
      state.step = FIRST_GAME_STEP;
    })
    .addCase(checkUserAnswer, (state, action) => {
      const {question, userAnswer} = action.payload;

      state.mistakes += Number(!isAnswerCorrect(question, userAnswer));
    })
    .addCase(loadQuestions, (state, action) => {
      state.questions = action.payload;
    })
    .addCase(setQuestionsDataLoadingStatus, (state, action) => {
      state.isQuestionsDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
});

export {reducer};
