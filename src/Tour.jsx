import React, { useState } from 'react';

const Tour = (props) => {
 const {id,image,info,name,price,removeTour} = props;
 const [readMore, setReadMore] = useState(false);
 console.log(info.substring(0,10));


 return(
  
  <article className="single-tour">
      <img src={image} alt={name}/>
      <span className="tour-price">${price}</span>
      <div className="info">
        <h5>{name}</h5>
        <p>{readMore ? info : `${info.substring(0,200)}readmore...`}
        <button  type="button" onClick={()=>setReadMore(!readMore)}>
        {readMore ? "show less":"read more" }
        </button>
        </p>
        <button type="button" className="btn btn-block delete-btn" onClick={() => removeTour(id)}>Not Intrerested</button>
      </div>
  </article>
  )
};

export default Tour;
