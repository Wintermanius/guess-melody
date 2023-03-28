import { NameSpace } from "../../const";
import { Questions } from "../../types/question";
import { State } from "../../types/state";

export const getQuestions = (state: State): Questions => state[NameSpace.Data].questions;
export const getQuestionsDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isQuestionsDataLoading;
export const getErrorStatus = (state: State): boolean => state[NameSpace.Data].hasError;
