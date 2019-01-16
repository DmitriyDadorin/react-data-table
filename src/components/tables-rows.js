 import React from 'react';


const TableRows = ({persons}) => {
   
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
      <table border="1" width="100%" cellPadding="5">
      <tbody>{person}</tbody>     
    </table>
    )
    
      }

    export default TableRows

    