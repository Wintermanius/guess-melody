import { FC } from "react";
import { Helmet } from "react-helmet-async";
import Logo from "../../assets/img/melody-logo.png"

const Results: FC = () => {
return(
    <section className="result">
      <Helmet>
        <title>Угадай мелодию. Вы настоящий меломан!</title>
      </Helmet>
      <div className="result-logout__wrapper">
        <a className="result-logout__link" href="#">Выход</a>
      </div>
      <div className="result__logo"><img src={Logo} alt="Угадай мелодию" width="186" height="83"/></div>
      <h2 className="result__title">Вы настоящий меломан!</h2>
      <p className="result__total">Вы ответили правильно на 6 вопросов и совершили 2 ошибки</p>
      <button className="replay" type="button">Сыграть ещё раз</button>
    </section>
  )
}

export default Results;
