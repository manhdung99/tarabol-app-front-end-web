import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserPage from "./components/userpage";
import Login from "./components/login";
import HomePage from "./components/homepage";
import Signup from "./components/signup";
import Market from "./components/market";
import DeckDetail from "./components/deckDetail";
import Learn from "./components/learn";
import Practice from "./components/practice";
import DeckIntrodule from "./components/deckIntrodule";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/tarabol-app-front-end-web/"
          exact
          element={<HomePage />}
        />
        <Route
          path="/tarabol-app-front-end-web/homepage"
          exact
          element={<UserPage />}
        />
        <Route
          path="/tarabol-app-front-end-web/marketplace"
          exact
          element={<Market />}
        />
        <Route
          path="/tarabol-app-front-end-web/login"
          exact
          element={<Login />}
        />
        <Route
          path="/tarabol-app-front-end-web/signup"
          exact
          element={<Signup />}
        />
        <Route
          path="/tarabol-app-front-end-web/detaildeck"
          exact
          element={<DeckDetail />}
        />
        <Route
          path="/tarabol-app-front-end-web/introduledeck"
          exact
          element={<DeckIntrodule />}
        />
        <Route
          path="/tarabol-app-front-end-web/learn"
          exact
          element={<Learn />}
        />
        <Route
          path="/tarabol-app-front-end-web/practice"
          exact
          element={<Practice />}
        />
      </Routes>
    </Router>
  );
}

export default App;
