import { Navigate } from "react-router-dom";
import { AppRoute, GameType, MAX_MISTAKE_COUNT } from "../../const";
import { Question, UserAnswer } from "../../types/question";
import QuestionArtistScreen from "../QuestionArtistScreen/QuestionArtistScreen";
import QuestionGenreScreen from "../QuestionGenreScreen/QuestionGenreScreen";
import withAudioPlayer from "../../components/hocs/with-AudioPlayer/with-AudioPlayer";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { checkUserAnswer, incrementStep } from "../../store/game-process/game-process";
import Mistakes from "../../components/Mistakes/mistakes";
import { getMistakeCount, getStep } from "../../store/game-process/selectors";
import { getQuestions } from "../../store/game-data/selectors";

const QuestionArtistScreenWrapped = withAudioPlayer(QuestionArtistScreen);
const QuestionGenreScreenWrapped = withAudioPlayer(QuestionGenreScreen);

function GameScreen(): JSX.Element {
  const step = useAppSelector(getStep);
  const mistakes = useAppSelector(getMistakeCount);
  const questions = useAppSelector(getQuestions);

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
