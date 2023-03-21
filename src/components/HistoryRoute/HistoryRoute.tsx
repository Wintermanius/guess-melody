import { BrowserHistory } from "history";
import { FC, useLayoutEffect, useState } from "react";
import { Router } from "react-router-dom";

export interface HistoryRouterProps {
  history: BrowserHistory;
  basename?: string;
  children?: React.ReactNode;
}
const HistoryRouter: FC<HistoryRouterProps> = ({basename, children, history}) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  );
}

export default HistoryRouter;
