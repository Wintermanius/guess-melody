import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const NotFound: FC = () => {
return(
  <>
    <Helmet>
        <title>Угадай мелодию. Страница не найдена</title>
    </Helmet>
    <h1>404 Not Found</h1>
    <Link to="/">Go to WelcomeScreen</Link>
  </>
  )
}

export default NotFound;
