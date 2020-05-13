import React from 'react';
import './card.css';

const Card = (props) => {
  const url = props;
  return (
    <div className='gifDiv tc dib br2 pa2 ma2 grow bw2 shadow-2'>
      <iframe className='iframeEle' src={url.embed_url} key={url.id}></iframe>
    </div>
  )
}

export default Card;


    /* {console.log(props.prop[0].embed_url)} */
