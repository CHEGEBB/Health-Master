import './App.scss';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Signup from './authpages/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
