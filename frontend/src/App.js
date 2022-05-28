import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AuthenLayout from './components/Layout/AuthenLayout'
import {publicRoutes} from './routes'
import MainLayout from './components/Layout/MainLayout';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const authenStore = useSelector(state => state.authen)
  const [isAuthenLayout, setIsAuthenLayout] = useState(authenStore.loginSuccess ? false : true)

  useEffect(() => {
    setIsAuthenLayout(authenStore.loginSuccess ? false : true)
  } ,[authenStore.loginSuccess])

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = isAuthenLayout ? AuthenLayout : MainLayout
            const Page = route.element

            return <Route key={index} path={route.path} element={
              <Layout>
                <Page />    
              </Layout>
            } />
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
