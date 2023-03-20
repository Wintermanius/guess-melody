import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/img/melody-logo.png"
import { AppRoute } from "../../const";
import { useAppDispatch } from "../../hooks";
import { resetGame } from "../../store/action";

const Fail: FC = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return(
    <section className="result">
      <Helmet>
        <title>Угадай мелодию. Какая жалость!</title>
      </Helmet>
      <div className="result__logo"><img src={Logo} alt="Угадай мелодию" width="186" height="83"/></div>
      <h2 className="result__title">Какая жалость!</h2>
      <p className="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий раз!</p>
      <button onClick={() => {
          dispatch(resetGame());
          navigate(AppRoute.Game);
        }}
        className="replay"
        type="button"
      >
        Попробовать ещё раз
      </button>
    </section>
  )
}

export default Fail;
