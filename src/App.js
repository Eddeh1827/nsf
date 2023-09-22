import { useState, useEffect } from "react";
import EmailModal from "./Modal.js";
import imageRightBig from "./assets/images/illustration-sign-up-desktop.svg";
import imageRightSm from "./assets/images/illustration-sign-up-mobile.svg";
import iconList from "./assets/images/icon-list.svg";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [IsModalOpen, setIsModalOpen] = useState(false);

  const imageObject = {
    imageDesktop: imageRightBig,
    imageMobile: imageRightSm,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(validEmail);
    if (validEmail) {
      setIsModalOpen(true);
    }
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setEmail("");
    setValidEmail(false);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);

    isValid ? setValidEmail(true) : setValidEmail(false);
  };

  return (
    <div className="App">
      <EmailModal isOpen={IsModalOpen} onClose={closeModal} />
      {/*Sign-up form start*/}
      <div className="container">
        <div className="card-left">
          <div className="content-left">
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <div>
              <section className="list">
                <div>
                  <img src={iconList} alt="checkmark" />
                  <p>Product discovery and building what matters</p>
                </div>
                <div>
                  <img src={iconList} alt="checkmark" />
                  <p>Measuring to ensure updates are a success</p>
                </div>
                <div>
                  <img src={iconList} alt="checkmark" />
                  <p>And much more!</p>
                </div>
              </section>
              <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  onChange={handleChange}
                  placeholder="email@company.com"
                />
                <button type="submit">Subscribe to monthly newsletter</button>
              </form>
            </div>
            {/*Sign-up form end*/}
          </div>
        </div>
        <div className="card-right">
          <picture>
            <source
              media="(width <= 1065px)"
              srcSet={`${imageObject.imageMobile}`}
            />
            <img src={`${imageObject.imageDesktop}`} alt="Responsive Image" />
          </picture>
        </div>
        {/*Success message start*/}
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Eddie Bickham</a>.
      </div>
    </div>
  );
}

export default App;
