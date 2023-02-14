import { FC, Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fail from "../../pages/Fail/Fail";
import Login from "../../pages/Login/Login";
import NotFound from "../../pages/NotFound/NotFound";
import QArtist from "../../pages/QArtist/QArtist";
import QGenre from "../../pages/QGenre/QGenre";
import Results from "../../pages/Results/Results";
import WelcomeScreen from "../../pages/WelcomeScreen/WelcomeScreen";

type AppScreenProps = {
    errorsCount: number;
}


const App: FC<AppScreenProps> = ({ errorsCount }) => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<WelcomeScreen errorsCount={errorsCount} />} />
            <Route path='/res' element={<Results />} />
            <Route path='/qgen' element={<QGenre />} />
            <Route path='/qart' element={<QArtist />} />
            <Route path='/login' element={<Login />} />
            <Route path='/fail' element={<Fail />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
        </BrowserRouter>
    )
  }


export default App