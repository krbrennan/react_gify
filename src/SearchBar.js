import React from 'react';
import './searchBar.css';

const Scroll = (props) => {
  return(
    <div class='card-collection-div' style={{overflow: 'scroll', height: '75vh'}}>
      {props.children}
    </div>
  );
};


export default Scroll;
