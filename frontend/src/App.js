import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddEmployee from './Components/AddEmployee';
import Employees from './Components/Employees';
import Login from './Components/Login';


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/addEmp' element={<AddEmployee />} />
          <Route path='/emps' element={<Employees />} />
      </Routes>
    </div>
  );
}

export default App;
