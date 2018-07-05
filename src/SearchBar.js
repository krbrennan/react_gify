import React from 'react';


const SearchBar = (props) => {
  return(
    <div style={{overflow: 'scroll', height: '75vh'}}>
      {props.children};
    </div>
  );
};


export default SearchBar;
