import React from 'react';
import 'tachyons';

const CurrentlyViewing = (props) => {
  let searchedTerm = null
  if(props.current === ''){
    searchedTerm = 'Trending'
  } else{
    searchedTerm = props.current
  }

  return(
    <div>
      <p className='f1 fw9 ph3 pv3'>{searchedTerm.toUpperCase()}</p>
    </div>
  )

}

export default CurrentlyViewing;
