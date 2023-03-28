import { HelmetProvider } from "react-helmet-async";
import { Routes, Route } from "react-router-dom";
import browserHistory from "../../browser-history";
import { AppRoute, MAX_MISTAKE_COUNT } from "../../const";
import { useAppSelector } from "../../hooks";
import ErrorScreen from "../../pages/ErrorScreen/ErrorScreen";
import Fail from "../../pages/Fail/Fail";
import GameScreen from "../../pages/GameScreen/GameScreen";
import LoadingScreen from "../../pages/LoadingScreen/LoadingScreen";
import Login from "../../pages/Login/Login";
import NotFound from "../../pages/NotFound/NotFound";
import Results from "../../pages/Results/Results";
import WelcomeScreen from "../../pages/WelcomeScreen/WelcomeScreen";
import { getErrorStatus, getQuestionsDataLoadingStatus } from "../../store/game-data/selectors";
import { getAuthCheckedStatus, getAuthorizationStatus } from "../../store/user-process/selectors";
import HistoryRouter from "../HistoryRouter/HistoryRouter";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

function App(): JSX.Element {

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isQuestionsDataLoading = useAppSelector(getQuestionsDataLoadingStatus);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const hasError = useAppSelector(getErrorStatus);

  if (!isAuthChecked || isQuestionsDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  if (hasError) {
    return (
      <ErrorScreen />);
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Root} element={<WelcomeScreen errorsCount={MAX_MISTAKE_COUNT} />}/>
          
          <Route path={AppRoute.Game} element={<GameScreen />}/>
          <Route path={AppRoute.Result} element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <Results />
            </PrivateRoute>
          } />
          <Route path={AppRoute.Lose} element={<Fail />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  )
}

export default App
