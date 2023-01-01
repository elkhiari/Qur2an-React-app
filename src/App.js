import './App.css';
import Navbar from './Navbar';
import {Route , Routes} from "react-router-dom"
import Qari2 from './pages/Qari2';
import Surah from './pages/Surah';
import Abouts from './pages/About';
import Home from './pages/Home';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Qari2' element={<Qari2 />}/>
        <Route path='/Surah' element={<Surah />}/>
        <Route path='/About' element={<Abouts />}/>
      </Routes>
    </>
  );
}

export default App;
