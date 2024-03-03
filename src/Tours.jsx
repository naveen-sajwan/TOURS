import React from 'react';
import Tour from './Tour';
const Tours = ({tour,removeTour}) => {
  return (
    <section>
      <div className="title">
      <h2>Our Tours</h2>
        <div className="title underline"></div>
      </div>
      <div className="tours">
        {tour.map((tour)=>{
          return <Tour key={tour.id} {...tour} removeTour={removeTour}/>
        })}
      </div>
    </section>
    )
};

export default Tours;
