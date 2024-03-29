import { ChangeEvent, FC, PropsWithChildren } from "react";
import { Helmet } from "react-helmet-async";
import Logo from "../../assets/img/melody-logo.png"
import { QuestionArtist, UserArtistQuestionAnswer } from "../../types/question";

type QuestionArtistScreenProps = PropsWithChildren<{
  question: QuestionArtist;
  onAnswer: (question: QuestionArtist, answer: UserArtistQuestionAnswer) => void;
  renderPlayer: (src: string, playerIndex: number) => JSX.Element;
}>

const QuestionArtistScreen: FC<QuestionArtistScreenProps> = ({ question, onAnswer, renderPlayer, children}) => {

  const {answers, song} = question;

  return(
    <section className="game game--artist">

      <Helmet>
        <title>Угадай мелодию. Кто исполняет эту песню?</title>
      </Helmet>

      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src={Logo} alt="Угадай мелодию"/>
        </a>
        {children}
      </header>

      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            {renderPlayer(song.src, 0)}
          </div>
        </div>

        <form className="game__artist">
        {answers.map((answer, id) => (
          <div key={answer.artist} className="artist">
            <input
              className="artist__input visually-hidden"
              type="radio"
              name="answer"
              value={`answer-${id}`}
              id={`answer-${id}`}
              onChange={(evt: ChangeEvent<HTMLInputElement>) => {
                evt.preventDefault();
                onAnswer(question, answer.artist);
              }}
            />
            <label className="artist__name" htmlFor={`answer-${id}`}>
              <img className="artist__picture" src={answer.picture} alt={answer.artist} />
              {answer.artist}
            </label>
          </div>
        ))}
        </form>
      </section>
    </section>
  )
}

export default QuestionArtistScreen;
