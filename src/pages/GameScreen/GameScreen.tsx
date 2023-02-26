import { FC, useState } from "react";
import { Navigate } from "react-router-dom";
import { AppRoute, FIRST_GAME_STEP, GameType } from "../../const";
import { Questions, QuestionArtist, QuestionGenre } from "../../types/question";
import QuestionArtistScreen from "../QuestionArtistScreen/QuestionArtistScreen";
import QuestionGenreScreen from "../QuestionGenreScreen/QuestionGenreScreen";

type GameScreenProps = {
  questions: Questions
}

const GameScreen: FC <GameScreenProps> = ({ questions }) => {

  const [step, setStep] = useState(FIRST_GAME_STEP)

  const question = questions[step]

  if (step >= questions.length || !question) {
    return <Navigate to={AppRoute.Root} />
  }

  switch (question.type) {
    case GameType.Artist:
      return (
        <QuestionArtistScreen
          key={step}
          question={question as QuestionArtist}
          onAnswer={() => setStep((prevStep) => prevStep + 1)}
        />
      )
    case GameType.Genre:
      return (
        <QuestionGenreScreen
          key={step}
          question={question as QuestionGenre}
          onAnswer={() => setStep((prevStep) => prevStep + 1)}
        />
      )
    default:
      return <Navigate to={AppRoute.Root} />
  }
}

export default GameScreen;
