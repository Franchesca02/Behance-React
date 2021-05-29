import React from 'react';
import laptop from './Images/Laptop.jpg';
import books from './Images/Book icon.PNG';
import lady from './Images/Smiling lady.jpg';
import icon from './Images/Icon.PNG';
import cardone from './Images/Card 1.PNG';
import cardtwo from './Images/Card 2.PNG';
import cardthree from './Images/Card 3.PNG';
import cardfour from './Images/Card 4.PNG';
import jane from './Images/Excited lady.jpeg';
import { Link } from "react-router-dom";
import Button from "./button"

function Home() {
    const cons = () => {
        console.log("i see click")
    }
   return (
        <div className="first-div">
<div className="parent-div">

<div className="left">
    
<h1 className="head-text">We Make Your Dream Website</h1>
<p className="paragraph-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Nunc odio in et, lectus sit lorem id integer</p>
  
        <Button child="Get Started" click={cons} />
</div>
<div className="right">
    <div className="nav-pic">
    <img src={laptop} alt="A laptop" />
    </div>

</div>
</div>
<div className="ratings">
    <div className="books">
    <img src={books} alt="Books icon" />
    <h2 className="forty">40+</h2>
    <p className="clients">Happy Clients</p>
    </div>

    <div className="books">
    <img src={books} alt="Books icon" />
    <h2 className="forty">540+</h2>
    <p className="clients">Project Completed</p>
    </div>

    <div className="books">
    <img src={books} alt="Books icon" />
    <h2 className="forty">300+</h2>
    <p className="clients">Dedicated Members</p>
    </div>

    <div className="books">
    <img src={books} alt="Books icon" />
    <h2 className="forty">25+</h2>
    <p className="clients">Awards Won</p>
    </div>

</div>

<div className="about-section">
<div className="lady">
<img src={lady} alt="A smiling black lady" />
</div>
<div className="about">
<h2 className="about-head">About</h2>
<p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Condimentum diam orci pretium a pharetra feugiat cursus. 
    Dictumst risus, sem egestas odio cras adipiscing vulputate. 
    Nisi, risus in suscipit non. Non commodo volutpat, pharetra vel.</p>
<Link to="/Button"><button className="second-btn">Get Started</button></Link>
</div>
</div>

<div className="approach">
<div className="approach-head">
<h1>Our Approach</h1>
</div>

<div className="approach-div">
<div className="icon">
<img src={icon} alt="The approach icon" />
<h6 className="ideate">Ideate</h6>
<p className="ideas">Turn your idea from concept to MVP</p>
</div>

<div className="icon">
<img src={icon} alt="The approach icon" />
<h6 className="ideate">Design</h6>
<p className="ideas">Sketch out the product to align with the user needs</p>
</div>

<div className="icon">
<img src={icon} alt="The approach icon" />
<h6 className="ideate">Develop</h6>
<p className="ideas">Convert the designs into live application</p>
</div>

<div className="icon">
<img src={icon} alt="The approach icon" />
<h6 className="ideate">Deploy</h6>
<p className="ideas">Launching the application to the market</p>
</div>

</div>
</div>

<div className="cards">
    <p className="card-text">SELECTED WORKS</p>
    
    <div className="top-cards">

<div className="top-left">
    <img src={cardone} alt="The top left card item" />
</div>
<div className="top-right">
<img src={cardtwo} alt="The top right card item" />
</div>
    </div>

    <div className="bottom-cards">
<div className="bottom-left">
    <img src={cardthree} alt="The bottom left card item" />
</div>
<div className="bottom-right">
    <img src={cardfour} alt="The bottom right card item" />
</div>
    </div>
</div>

<div className="craft">
<h2 className="craft-head">Craft your new website with</h2>
<h2 className="craft-head">WEBO</h2>
<button className="craft-btn">Get Started</button>
</div>

<div className="testimonials">
    <div className="testify">
        <h2>Our clients speaks</h2>
    </div>
<div className="twin-div">
<div className="left-twin-div">
    <h5 className="left-twin-div-head">Incredible Experience</h5>
    <p className="left-twin-div-paragraph">We had an incredible experience working with Landify and we're impressed they made 
        such a big difference in only three weeks.
        Our team is so grateful for the wonderful improvements 
        they made and their ability to get familiar with the concept so quickly.
        It acted as a catalyst to take our design to the next level and get more eyes on our product.
    </p>
    <div className="jane">
        <img src={jane} alt="Jane Cooper icon" />
   
    <div>
    <h5 className="cooper">Jane Cooper</h5>
    </div>
   
    </div>
        <p className="cooper-text">CEO ABC Corporation</p>
    
</div>

<div className="right-twin-div">
    <h5 className="left-twin-div-head">Dependable, Responsive, Professional Partner</h5>
    <p className="left-twin-div-paragraph">Fermin apps have collaborated with Landify team for several projects such as 
        Photo Shering Apps and Custome Social Networking Apps. The experience has been 
        pleasant, professional and exceeding our expectations. The team is always thinking beyond the current tasks 
        and helps us formulate a vision and possibilities for future.
    </p>

 <div className="jane">
        <img src={jane} alt="Jane Cooper icon" />
   
    <div>
    <h5 className="cooper">Jane Cooper</h5>
    </div>
   
    </div>
        <p className="cooper-text">CEO ABC Corporation</p>

</div>

</div>
</div>

</div>

    );
}

export default Home;