import { useState, useEffect } from "react";
import imageRightBig from "./assets/images/illustration-sign-up-desktop.svg";
import imageRightSm from "./assets/images/illustration-sign-up-mobile.svg";
import iconList from "./assets/images/icon-list.svg";
import "./App.css";

function App() {
  // const [email, setEmail] = useState("");
  // const [success, setSuccess] = useState(false);
  const [imageSrc, setImageSrc] = useState(imageRightBig);
  const imageObject = {
    imageDesktop: imageRightBig,
    imageMobile: imageRightSm,
  };
  useEffect(() => {
    // Step 3: Add a "load" event listener for initial size

    const handleLoad = () => {
      // Check window dimensions and update src accordingly
      if (window.innerWidth < 1000) {
        setImageSrc(`.${imageObject.imageMobile}`);
      } else {
        setImageSrc(`.${imageObject.imageDesktop}`);
      }
    };
    // Add a "resize" event listener for window resizing
    const handleResize = () => {
      // Check window dimensions and update src accordingly
      if (window.innerWidth < 1000) {
        setImageSrc(`.${imageObject.imageMobile}`);
      } else {
        setImageSrc(`.${imageObject.imageDesktop}`);
      }
    };

    // Attach the "load" event listener when the component mounts

    window.addEventListener("load", handleLoad);

    // Attach the "resize" event listener for window resizing
    window.addEventListener("resize", handleResize);

    // Clean up the event listeners when the component unmounts
    return () => {
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setSuccess(true);
  // };

  // const handleChange = (e) => {
  //   setEmail(e.target.value);
  // };

  return (
    <div className="App">
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
              <form>
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="email@company.com"
                  autoComplete
                />
                <button>Subscribe to monthly newsletter</button>
              </form>
            </div>
            {/*Sign-up form end*/}
          </div>
        </div>
        <div className="card-right">
          <img src={imageSrc} alt="background design" />
        </div>
        {/*Success message start*/}

        {/* 
        <div className="hidden">
          <p>Thanks for subscribing!</p>
          <p>A confirmation email has been sent to ash@loremcompany.com.</p>
          <p>
            Please open it and click the button inside to confirm your
            subscription.
          </p>
          <p>Dismiss message</p>
          
        </div>
      */}
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
