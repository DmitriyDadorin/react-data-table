import React from 'react';
import './ButtonData.css';


const ButtonData = ({miniData, start}) => {

    let classNames = 'enterWinow';
    if (!start) {
      classNames += ' hide';
    }
  
    
return(
    <div className={classNames}>        
        <button onClick={miniData} className='buttonData'>Маленькая база</button>
        <button className='buttonData'>Большая база</button>
    </div>
    
)}

export default ButtonData