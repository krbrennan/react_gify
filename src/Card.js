import React from 'react';
import './card.css';

const Card = (props) => {
  const url = props.prop[0].embed_url;
  return (
    <div className='gifDiv'>
      <iframe className='iframeEle' src={url}></iframe>
    </div>
  )
}

export default Card;


    /* {console.log(props.prop[0].embed_url)} */
