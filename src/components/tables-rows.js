 import React from 'react';


const TableRows = ({data}) => {
   
        const elem = data.map((item) => {  
      return( 
         <tr>{item}</tr>
      )
     })
    return(
        <td>{elem}</td>
    )
      }

    export default TableRows

   