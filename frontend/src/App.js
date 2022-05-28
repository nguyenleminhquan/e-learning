import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import { AuthenLayout } from './components/Layout';
import AuthenLayout from './components/Layout/AuthenLayout'
import {publicRoutes} from './routes'
import Register from './page/Authen/Register'
import MainLayout from './components/Layout/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = localStorage.getItem('userInfo') ? MainLayout : AuthenLayout
            const Page = route.element

            return <Route key={index} path={route.path} element={
              <Layout>
                <Page />    
                {/* <Register /> */}
              </Layout>
            } />
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
