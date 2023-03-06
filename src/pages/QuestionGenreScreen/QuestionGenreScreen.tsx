import { ChangeEvent, FC, FormEvent, useState } from "react";
import { Helmet } from "react-helmet-async";
import Logo from "../../assets/img/melody-logo.png"
import { QuestionGenre, UserGenreQuestionAnswer } from "../../types/question";

type QuestionGenreScreenProps = {
  question: QuestionGenre
  onAnswer: (question: QuestionGenre, answers: UserGenreQuestionAnswer) => void
}

const QuestionGenreScreen: FC<QuestionGenreScreenProps> = ({ question, onAnswer }) => {

  const {answers, genre} = question
  const [userAnswers, setUserAnswers] = useState([false, false, false, false])

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
        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Выберите инди-рок треки</h2>
        <form className="game__tracks" onSubmit={(evt: FormEvent<HTMLFormElement>) => {
          evt.preventDefault();
          onAnswer(question, userAnswers);
        }}>
          {answers.map((answer, id) => {
            const keyValue = `${id}-${answer.src}`;
            return (

              <div key={keyValue} className="track">
                <button className="track__button track__button--play" type="button"/>

                <div className="track__status">
                  <audio src={answer.src} />
                </div>

                <div className="game__answer">
                  <input className="game__input visually-hidden" type="checkbox" name="answer"
                    value={`answer-${id}`}
                    id={`answer-${id}`}
                    checked={userAnswers[id]}
                    onChange={({target}: ChangeEvent<HTMLInputElement>) => {
                      const value = target.checked;
                      setUserAnswers([...userAnswers.slice(0, id), value, ...userAnswers.slice(id + 1)]);
                    }}
                  />
                  <label className="game__check" htmlFor={`answer-${id}`}>Отметить</label>
                </div>
              </div>
            );
          })}
          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    </section>
  )
}

export default QuestionGenreScreen;
