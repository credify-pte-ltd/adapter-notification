import { AppContextProvider } from "context/AppContext";
import "i18n";
import NotificationPage from "pages/Notification";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [commonData, setCommonData] = useState({});

  return (
    <AppContextProvider value={{ commonData, setCommonData }}>
      <Router basename="notification">
        <Switch>
          <Route path={"/"}>
            <NotificationPage />
          </Route>
        </Switch>
      </Router>
    </AppContextProvider>
  );
}

export default App;
