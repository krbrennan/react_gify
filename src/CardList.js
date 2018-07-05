import React from 'react';
import Card from './Card';
import 'tachyons';

const CardList = (props) => {
  return (
    <div className='tc'>
      {
        props.cards.map((user, i) => {
          return <Card
          key={user.id}
          embed_url={user.embed_url} />
        })
      }
    </div>
  )
}

export default CardList;

// console.log(props.cards)
