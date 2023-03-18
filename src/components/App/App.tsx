import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoute, AuthorizationStatus, MAX_MISTAKE_COUNT } from "../../const";
import Fail from "../../pages/Fail/Fail";
import GameScreen from "../../pages/GameScreen/GameScreen";
import Login from "../../pages/Login/Login";
import NotFound from "../../pages/NotFound/NotFound";
import Results from "../../pages/Results/Results";
import WelcomeScreen from "../../pages/WelcomeScreen/WelcomeScreen";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

function App(): JSX.Element {
  return (
    <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<WelcomeScreen errorsCount={MAX_MISTAKE_COUNT} />}/>
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Game} element={<GameScreen />}/>
        <Route path={AppRoute.Result} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <Results />
          </PrivateRoute>
        } />
        <Route path={AppRoute.Lose} element={<Fail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
