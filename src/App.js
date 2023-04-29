import React from "react";
import "./App.css";

function App() {
  // Function to smoothly scroll to a specific section of the page when a navigation button is clicked
  const scrollToSection = (sectionID) => {
    const section = document.getElementById(sectionID);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a>
      <div className="container">
        <div className="buttons">
          {/* Navigation bar that allows easy access to different sections of the site*/}
          <a onClick={() => scrollToSection("contact")} className="button">
            Contact
          </a>
          <a onClick={() => scrollToSection("about")} className="button2">
            About PlantFashion
          </a>
          <a onClick={() => scrollToSection("inspiration")} className="button3">
            Inspirations
          </a>
          <a onClick={() => scrollToSection("plantshop")} className="button4">
            Plant Shop
          </a>
        </div>
        <div className="title">
          {/* Simple and straightforward title */}
          <h6>PlantFashion</h6>
        </div>
        <div className="text">
          {/* Large, eye-catching text that draws attention */}
          <h1>
            <span>Find the perfect </span>
            <span>complement</span>
            <span> to your room</span>
          </h1>
        </div>
        <div className="paragraph">
          {/* Paragraph below the large text, providing additional information */}
          <p>We can help you find plants that suit your needs and style.</p>
          <p>
            Check out our selection in the store and surround yourself with
            greenery!
          </p>
        </div>
        {/* Button that takes the user to the store to buy plants */}
        <button className="btn-now">Buy now</button>
        {/* Large image of a plant, prominently displayed */}
        <div className="image">
          <a href="https://ibb.co/vLGWZhM">
            <img
              src="https://i.ibb.co/vLGWZhM/planta.png"
              alt="plant"
              target="_blank"
              border="0"
            />
          </a>
        </div>
      </div>
    </a>
  );
}

export default App;
