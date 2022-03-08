import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserPage from "./components/userpage";
import Library from "./components/library";
import Login from "./components/login";
import HomePage from "./components/homepage";
import Signup from "./components/signup";
import Market from "./components/market";
import CardDetail from "./components/cardDetail";
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
          path="/tarabol-app-front-end-web/library"
          exact
          element={<Library />}
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
          element={<CardDetail />}
        />
      </Routes>
    </Router>
  );
}

export default App;
