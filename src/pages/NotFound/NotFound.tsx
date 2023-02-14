import { FC } from "react";
import { Link } from "react-router-dom";

const NotFound: FC = () => {
return(
  <>
    <h1>404 Not Found</h1>
    <Link to="/">Go to WelcomeScreen</Link>
  </>
  )
}

export default NotFound;