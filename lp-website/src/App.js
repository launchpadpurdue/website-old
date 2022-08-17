import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Main from './components/pages/Main.js'
import Sponsorship from './components/pages/Sponsorship';
import NavBar from './components/pages/NavBar';



function App() {
  return (
    <div>
      
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route exact path='./components/pages/Sponsorship' element={<Sponsorship />} />
        </Routes>
      </Router>
      <Sponsorship/>
    </div>
  );
}

export default App;
