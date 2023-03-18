import {createReducer} from '@reduxjs/toolkit';
import {checkUserAnswer, incrementStep, resetGame} from './action';
import {FIRST_GAME_STEP} from '../const';
import { isAnswerCorrect } from '../game';
import { questions } from '../mocks/questions';

const STEP_COUNT = 1;

const initialState = {
  mistakes: 0,
  step: FIRST_GAME_STEP,
  questions,
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
});

export {reducer};
