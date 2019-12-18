import React from 'react';

const TopEvents=()=>{
  const HandleFooter=(value,e)=>{
    e.preventDefault();
    alert(value);
  }
  return(
    <div>
      <br/>
      <a href="/" onClick={e => HandleFooter("Back to Home", e  )}>
        Back to Home
      </a>
    </div>
  );
}

export default TopEvents;
