import HomePage from "./components/homepage";
import Library from "./components/library";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/library" exact element={<Library />} />
      </Routes>
    </Router>
  );
}

export default App;
