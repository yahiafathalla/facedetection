import React from 'react';
import './Imagelinkform.css';


 const Imagelinkform=({oninputchange, onbuttonsubmit })=>  {
   
    return (
      <div>
                <p className='f3'>
                {'This Eye Can Detect How Many Faces In Your Picture.lets do it '}
                </p>
                <div className='center'>
                <div className='form pa3 br3 shadow-4'>
                 <input className='f3 pa2 w-70 center' type='tex' onChange={oninputchange}/>
                <button className='w-30 grow f4 link ph3 pv2 dib white'
                onClick={onbuttonsubmit}> Detect</button>
                </div>
          </div>
        
      </div>
    
    );
  }

export default Imagelinkform ;
