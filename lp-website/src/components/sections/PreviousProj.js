import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliders.css";
import Slider from 'react-slick';

function PreviousProj() {

  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setSuggestions(data);
      });
  }, []);

  let settings = {
    infinite: false,
    speed: 1000,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div><center><h1>Previous Projects</h1></center>
    <div className="container">
      <h6 className="text-muted">Past Projects: Fall 20XX</h6>
      {suggestions.length === 0 ? (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <Slider {...settings}>
          {suggestions.map((current) => (
            <div className="out" key={current.id}>
              <div className="card">
                <img
                  
                  alt={"users here"}
                  src={`https://source.unsplash.com/random/${current.id}`}
                  height={150}
                  width={198}
                />
                <div className="card-body">
                  <h5 className="card-title">{current.username}</h5>
                  <small className="card-text text-sm-center text-muted">
                    Description about the project here.
                  </small>
                  <br />
                  <button className="btn btn-sm follow btn-primary">
                    More Info
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
    </div>
  );
  
}
  
  export default PreviousProj;