import ProtectedRouter from "./components/protected/protectedRouter";
import Home from "./pages/home/home";
import LoginPage from "./pages/login/login-page/loginPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={
          <ProtectedRouter>
            <Home />
          </ProtectedRouter>
        } />
      </Routes>
    </Router>
  )
}

export default App
