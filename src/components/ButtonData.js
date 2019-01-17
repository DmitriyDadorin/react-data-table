import React from 'react';
import './ButtonData.css';


const ButtonData = ({miniData}) => {
return(
    <div className='enterWinow'>        
        <button onClick={miniData} className='buttonData'>Маленькая база</button>
        <button className='buttonData'>Большая база</button>
    </div>
    
)}

export default ButtonData