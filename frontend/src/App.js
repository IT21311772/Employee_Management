import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
