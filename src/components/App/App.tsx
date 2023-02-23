import { FC } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoute, AuthorizationStatus } from "../../const";
import Fail from "../../pages/Fail/Fail";
import GameScreen from "../../pages/GameScreen/GameScreen";
import Login from "../../pages/Login/Login";
import NotFound from "../../pages/NotFound/NotFound";
import Results from "../../pages/Results/Results";
import WelcomeScreen from "../../pages/WelcomeScreen/WelcomeScreen";
import { Questions } from "../../types/question";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


type AppScreenProps = {
    errorsCount: number;
    questions: Questions
}


const App: FC<AppScreenProps> =({errorsCount, questions}) => {
  return (
    <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<WelcomeScreen errorsCount={errorsCount} />}/>
        <Route path={AppRoute.Result} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <Results />
          </PrivateRoute>
        } />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Lose} element={<Fail />} />
        <Route path='*' element={<NotFound />} />
        <Route path={AppRoute.Game} element={<GameScreen questions={questions}/>}/>
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
  )
}


export default App