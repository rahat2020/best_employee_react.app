import React from 'react';
import { Card, Button,CardGroup } from 'react-bootstrap';

const EmployeInfo = (props) => {
    const { first_name, email, salary, img } = props.employee;
  const addEmployee = props.addEmployee;
    const divStyle = {
        border: '1px solid blue',
        margin: '10px',
        padding: '20px',
        color: 'blue',
        fontWeight: 'bold',
    }
    return (
        <div style={divStyle}>
            {/* <h4>Employee: {first_name} </h4>
            <h5>Email: {email} </h5>
            <h5>Month salary: {salary} </h5> */}
            {/* <img src={img} alt="" srcset=""/> */}

           < CardGroup>
             <Card style={{ width: '18rem'  }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>Employee details</Card.Title>
            <Card.Text>
             Name: {first_name} <br/>
             {email} <br/>
             Month salary: {salary} 
           </Card.Text>
            <Button onClick={()=>addEmployee(props.employee)} variant="primary">Add me</Button>
          </Card.Body>
        </Card> 
        </CardGroup> 
     </div>


    );
};

export default EmployeInfo;