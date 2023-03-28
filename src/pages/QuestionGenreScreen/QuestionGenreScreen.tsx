import { FC, PropsWithChildren } from "react";
import { Helmet } from "react-helmet-async";
import Logo from "../../assets/img/melody-logo.png"
import GenreQuestionList from "../../components/GenreQuestionList/GenreQuestionList";
import { QuestionGenre, UserGenreQuestionAnswer } from "../../types/question";

type QuestionGenreScreenProps = PropsWithChildren<{
  question: QuestionGenre
  onAnswer: (question: QuestionGenre, answers: UserGenreQuestionAnswer) => void
  renderPlayer: (src: string, playerIndex: number) => JSX.Element;
}>

const QuestionGenreScreen: FC<QuestionGenreScreenProps> = ({ question, onAnswer, renderPlayer, children }) => {
  
  const {genre} = question;

  return(
    <section className="game game--genre">

      <Helmet>
        <title>Угадай мелодию. Выберите {genre} треки</title>
      </Helmet>

      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src={Logo} alt="Угадай мелодию"/>
        </a>
        {children}
      </header>

      <section className="game__screen">
        <h2 className="game__title">Выберите инди-рок треки</h2>
        <GenreQuestionList
          question={question}
          onAnswer={onAnswer}
          renderPlayer={renderPlayer}
        />
      </section>
    </section>
  )
}

export default QuestionGenreScreen;
