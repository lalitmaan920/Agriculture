import React from 'react';
import './Home.css'; // For custom styles
import { Layout } from './Layout';

export const Home = () => {
  return (
    <>
    <div class="carousel-wrapper bg-info">
    <div className="carousel-wrapper mt-5 pt-5 ">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="Ag1.png" className="d-block w-100 carousel-img" alt="Slide 1"/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Introduction to Agriculture</h5>
              <p>Agriculture is the practice of cultivating soil, growing crops, and raising animals to provide food, fiber, and other resources.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="Ag2.png" className="d-block w-100 carousel-img" alt="Slide 2"/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Agricultural Machinery</h5>
              <p>Agricultural machinery includes tools and equipment like tractors, harvesters, and plows that help farmers perform tasks efficiently and increase productivity.




</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="Ag3.png" className="d-block w-100 carousel-img" alt="Slide 3"/>
            <div className="carousel-caption d-none d-md-block ">
              <h5>Importance of Greenery in Agriculturel</h5>
              <p>Greenery in agriculture improves soil health, conserves water, supports biodiversity, reduces erosion, and enhances crop yields through natural ecological balance.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </div>
    <Layout/>
    </>
  );
};
