import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home';
import { About } from './components/About';
import { Error } from './components/Error';
import { HouseCard } from './components/HouseCard';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import './styles.scss';

// App
function App() {
  return (
    <>
      <Header/>
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='a_propos' element={ <About /> }></Route>
        <Route path='erreur' element={ <Error /> }></Route>
        <Route path=':logementId' element={<HouseCard />}></Route>
        <Route path='*' element={ <Error /> }></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
