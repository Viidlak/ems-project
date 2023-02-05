import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
 function Home() {
  return (
    <>
    <h1 className=' text-primary my-5 mx-5'>List of Employees &nbsp;
    <Button variant="success" > <i class="fa-solid fa-user-plus"></i>Add</Button>
    </h1>
    <div style={{margin:"10rem"}}>
   
    <Table striped bordered hover variant="dark" >
      <thead>
        <tr>
          <th>#</th>
          <th>Employee Name</th>
          <th>Employee Desgnation</th>
          <th>Employee Salary</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>
            <Button variant='warning'><i class="fa-solid fa-user-pen"></i></Button>
            &nbsp; &nbsp; &nbsp; 
            <Button variant='danger'><i class="fa-solid fa-trash"></i>
            </Button>
          </td>
        </tr>
        
        
      </tbody>
    </Table>
  </div>
    </>
  )
}
export default Home