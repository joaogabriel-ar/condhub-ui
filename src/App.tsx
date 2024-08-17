import ProtectedRouter from "./components/protected/protectedRouter";
import Home from "./pages/home/home";
import Login from "./pages/login/login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
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
