import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signin from './Pages/Signin/Signin';
import Fonts from './Styles/Fonts';
import InputOutput from './Pages/InputOutput/InputOutput';

export default function App() {
  return (
    <>
      <Fonts />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/sign-in' element={<Signin />} />
          <Route path='/home' element={<Home />} />
          <Route path='/input' element={<InputOutput />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
