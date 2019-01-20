 import React from 'react';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import './TableRows.css';


const TableRows = ({persons, sortBy}) => {
   
    const person = persons.map(persons => 
    <tr>
    <td>{persons.id}</td>
    <td>{persons.firstName}</td>
    <td>{persons.lastName}</td>
    <td>{persons.email}</td>
    <td>{persons.phone}</td>
    </tr> 
    )    
    return(      
      <table className=' table table-bordered table-striped'>      
      <thead>
        <tr>
        <th className='table-th' onClick={() => sortBy('id')}>#id</th>
        <th className='table-th' onClick={() => sortBy('firstName')}>FirstName</th>
        <th className='table-th' onClick={() => sortBy('lastName')}>LastName</th>
        <th>Email</th>
        <th>Phone</th>        
        </tr>
        </thead>        
      <tbody>        
      {person}   
      </tbody>  
    </table>    
    )}
    export default TableRows

    