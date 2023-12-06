import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Employees from './Components/DisplayData';
import AddData from './Components/AddData';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/employees' element={<Employees />} />
          <Route path='/add' element={<AddData />} />
          <Route path='/add/employees' element={<Employees />} />
      </Routes>
    </div>
  );
}

export default App;
