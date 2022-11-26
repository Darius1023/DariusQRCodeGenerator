import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';

// styles
import styles from './App.module.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';

export default function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Header/>
        <Routes>
           <Route path="/" element={ <Home/> }  />
           <Route path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

