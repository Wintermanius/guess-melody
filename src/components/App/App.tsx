import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fail from "../../pages/Fail/Fail";
import Login from "../../pages/Login/Login";
import NotFound from "../../pages/NotFound/NotFound";
import QuestionArtistScreen from "../../pages/QuestionArtistScreen/QuestionArtistScreen";
import QuestionGenreScreen from "../../pages/QuestionGenreScreen/QuestionGenreScreen";
import Results from "../../pages/Results/Results";
import WelcomeScreen from "../../pages/WelcomeScreen/WelcomeScreen";
import { Questions } from "../../types/question";

type AppScreenProps = {
    errorsCount: number;
    questions: Questions
}


const App: FC<AppScreenProps> =({errorsCount, questions}) => {
return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<WelcomeScreen errorsCount={errorsCount} />} />
      <Route path='/res' element={<Results />} />
      <Route path='/qgen' element={<QuestionGenreScreen />} />
      <Route path='/qart' element={<QuestionArtistScreen />} />
      <Route path='/login' element={<Login />} />
      <Route path='/fail' element={<Fail />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
    )
  }


export default App