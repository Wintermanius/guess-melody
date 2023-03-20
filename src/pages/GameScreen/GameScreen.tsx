import { FC } from "react";
import { Navigate } from "react-router-dom";
import { AppRoute, GameType, MAX_MISTAKE_COUNT } from "../../const";
import { Question, Questions, UserAnswer } from "../../types/question";
import QuestionArtistScreen from "../QuestionArtistScreen/QuestionArtistScreen";
import QuestionGenreScreen from "../QuestionGenreScreen/QuestionGenreScreen";
import withAudioPlayer from "../../components/hocs/with-AudioPlayer/with-AudioPlayer";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { checkUserAnswer, incrementStep } from "../../store/action";
import Mistakes from "../../components/Mistakes/mistakes";

const QuestionArtistScreenWrapped = withAudioPlayer(QuestionArtistScreen);
const QuestionGenreScreenWrapped = withAudioPlayer(QuestionGenreScreen);

function GameScreen(): JSX.Element {
  const step = useAppSelector((state) => state.step);
  const mistakes = useAppSelector((state) => state.mistakes);
  const questions = useAppSelector((state) => state.questions);

  const question = questions[step]

  const dispatch = useAppDispatch();

  if (mistakes >= MAX_MISTAKE_COUNT) {
    return <Navigate to={AppRoute.Lose} />;
  }

  if (step >= questions.length || !question) {
    return <Navigate to={AppRoute.Result} />
  }

  const onUserAnswer = (questionItem: Question, userAnswer: UserAnswer) => {
    dispatch(incrementStep());
    dispatch(checkUserAnswer({question: questionItem, userAnswer}));
  };

  switch (question.type) {
    case GameType.Artist:
      return (
        <QuestionArtistScreenWrapped
          key={step}
          question={question}
          onAnswer={onUserAnswer}
        >
          <Mistakes count={mistakes} />
        </QuestionArtistScreenWrapped>
      )
    case GameType.Genre:
      return (
        <QuestionGenreScreenWrapped
          key={step}
          question={question}
          onAnswer={onUserAnswer}
          >
          <Mistakes count={mistakes} />
        </QuestionGenreScreenWrapped>
      )
    default:
      return <Navigate to={AppRoute.Root} />
  }
}

export default GameScreen;
