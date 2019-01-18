import React from 'react';
import './ButtonData.css';
import PreLoad from './pre-load'


const ButtonData = ({miniData, maxData, start, loading}) => {

    let classNames = 'enterWinow';
    if (!start) {
      classNames += ' hide';
    }
    if (loading){
       return <PreLoad/>
    }   
    
return(            
    <div className={classNames}>     
    <div className='butControll'>
        <button onClick={miniData} className='buttonData'>Маленькая база</button>
        <button onClick={maxData} className='buttonData'>Большая база</button>
    </div>
    </div>
    
    
)}

export default ButtonData