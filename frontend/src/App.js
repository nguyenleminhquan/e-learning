import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal'
import Mypage from './components/Mypage';
import Header from './components/Header';
import Footer from './components/Footer';
import './css/App.css'
import SignIn from './components/SignIn';

function App() {
  const [authStatus, setAuthStatus] = useState(true)

  useEffect(() => {
    let path = window.location.pathname

    if (path === '/' || path === '/register') {
      setAuthStatus(true)
    }
    else setAuthStatus(false)
  })

  console.log('App mounted')

  return (
    <div id="app">
      {authStatus ? <Header /> : null}
      <Routes>
        <Route path='/' element={<LoginModal /> } />
        <Route path='/register' element={<RegisterModal />} />
        <Route path='/mypage' element={<Mypage />} />
      </Routes> 
      {authStatus ? <Footer /> : null}
    </div>
  )
}



export default App;
