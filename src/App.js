import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserPage from "./components/userpage";
import Login from "./components/login";
import HomePage from "./components/homepage";
import Signup from "./components/signup";
import Market from "./components/market";
import DeckDetail from "./components/deckDetail";
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
          path="/tarabol-app-front-end-web/detailcard"
          exact
          element={<DeckDetail />}
        />
      </Routes>
    </Router>
  );
}

export default App;
