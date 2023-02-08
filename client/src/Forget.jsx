import React, { useRef } from 'react';
import ScrollToTop from 'react-scroll-to-top';

import './Forget.scss';

function Forget() {
  const position = useRef(null);
  const scrollToBottom = (elementRef) => {
   window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior: "smooth",
   });
  }

  return ( 
  <> 
    <div className='forget' onClick={() => scrollToBottom(position)}>
      <h1>Forget</h1>
      </div>
      <div className='finance' style={{ marginTop: "800px" }} ref={position}>
        <ScrollToTop smooth color='#5532c8'/>
        <h1 style={{marginTop:"15vh"}}>Finance</h1>
      </div>
      </>
  )
}



export default Forget;