import { AppContextProvider } from "context/AppContext";
import "i18n";
import NotificationPage from "pages/Notification";
import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [commonData, setCommonData] = useState({});

  return (
    <AppContextProvider value={{ commonData, setCommonData }}>
      <Router basename="notification">
        <Route path={"/"}>
          <NotificationPage />
        </Route>
      </Router>
    </AppContextProvider>
  );
}

export default App;
