import { Route, Routes } from "react-router-dom"
import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage"
import HomePage from "./components/HomePage"

import './App.css'

function App() {
  return (
    <div id="app">
      {/* <Header /> */}
      {/* <LoginPage /> */}
      {/* <Footer /> */}
      {/* <HomePage /> */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/homepage/*" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App