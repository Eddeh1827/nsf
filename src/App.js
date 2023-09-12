import "./App.css";
import imageRight from "./assets/images/illustration-sign-up-desktop.svg";
import iconList from "./assets/images/icon-list.svg";
function App() {
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
                  <img src={iconList} />
                  <p>Product discovery and building what matters</p>
                </div>
                <div>
                  <img src={iconList} />
                  <p>Measuring to ensure updates are a success</p>
                </div>
                <div>
                  <img src={iconList} />
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
                ></input>
                <button>Subscribe to monthly newsletter</button>
              </form>
            </div>
            {/*Sign-up form end*/}
          </div>
        </div>
        <div className="card-right">
          <img src={imageRight} alt="" />
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
        . Coded by <a href="javascript:void(0)">Eddie Bickham</a>.
      </div>
    </div>
  );
}

export default App;
