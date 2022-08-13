import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Main from './components/layout/Main.js'
import Sponsorship from './components/layout/Sponsorship';
import NavBar from './components/layout/NavBar';



function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' exact element={<Main />} />
          <Route path='/sponsorship' element={<Sponsorship />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
