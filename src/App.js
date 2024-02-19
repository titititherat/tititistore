import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Openbullet from './pages/Openbullet';
import Checkers from './pages/Checkers';
import Encomendas from './pages/Encomendas';
import Aulas from './pages/Aulas'

function App() {
  return (
    <Router>
      <Sidebar/>
      <Routes>
        <Route path='/openbullet' element={<Openbullet/>}/>
        <Route path='/encomendas' element={<Encomendas/>}/>
        <Route path='/checkers' element={<Checkers/>}/>
        <Route path='/aulas' element={<Aulas/>}/>
      </Routes>
    </Router>
  );
}

export default App;
