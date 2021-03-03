
import './App.css';
import { useEffect, useState, } from 'react';
import employeeData from './fakedata/fakedata.json';
import EmployeInfo from './components/employee/EmployeInfo';
import EmCart from './components/Cart/EmCart';

function App() {
  const [employee, setEmployee] = useState([])
  const [emCart, setEmployeeCart] = useState([])

  useEffect(() => {
    setEmployee(employeeData);
    // console.log('setEmployee');
  }, [])

  const addEmployee = (employee)=>{
    // console.log('employee added');
    const newCart = [...emCart, employee]
    setEmployeeCart(newCart);
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <h2>Best Employee of the year</h2>
        <h3>Total employee: {employee.length}</h3>
        <h4>employee added: {emCart.length}</h4>
        <EmCart emCart={emCart}></EmCart>
        {
          employee.map(employee => <EmployeInfo addEmployee={addEmployee} employee={employee}> </EmployeInfo>)
        }
       
      </header>
    </div>
  );
}

export default App;
