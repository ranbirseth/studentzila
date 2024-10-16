import './App.css'
import About from './Component/About'
import Home from './Component/Home';
import Help from './Component/Help';
import Shoppin from './Component/Shoppin';
import LOGIN from './Component/LOGIN';
import Search from './Component/Search';
import LOGoutBtn from './Component/LOGoutBtn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Account from './Component/Account';
import Dasboard from './Component/Dasboard';
import Navbar from './Component/Nav';
import Footer from './Component/Footer';
import ItemPage from './Component/ItemPage';
function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar className='h-[10%]' />
        <Routes>
          <Route path='/Shopping' element={<Shoppin />} />
          <Route path='/About' element={<About />} />
          <Route path='/Help' element={<Help />} />
          <Route path='/login' element={<LOGIN />} />
          <Route path='/logout' element={<LOGoutBtn />} />
          <Route path='/Search' element={<Search />} />
          <Route path='/Account' element={<Account />} />
          <Route path='/Dasboard' element={<Dasboard />} />
          <Route path='/' element={<Home />} />
          <Route path='/itemPage' element={<ItemPage />} />
        </Routes>
        <Footer className='h-[10%]' />
      </BrowserRouter>
  

    </>
  )
}

export default App