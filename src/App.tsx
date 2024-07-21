import ProtectedRouter from "./components/protected/protectedRouter";
import Home from "./pages/home/home";
import LoginPage from "./pages/login/loginPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={
          <ProtectedRouter>
            <Home />
          </ProtectedRouter>
        } />
      </Routes>
    </Router>
  )
}

export default App
