import React from 'react';
function Card(props){
    return(
     <>
<div className='cards'>
    <div className='card'>
      <img src={props.imgsrc} alt='myphoto' className='card_img'/>
      <div className='card_details'>
      <h3 className='card_title'>{props.title}</h3>
        <a href={props.link} target='_blank'>
          <button>Click Here</button>
        </a>
      </div>
      </div>
    </div>
    
     </>
    );
}
export default Card;