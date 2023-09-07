import "./App.css";

function App() {
  return (
    <div className="App">
      {/*Sign-up form start*/}
      <h1>Stay updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <p>
        Product discovery and building what matters Measuring to ensure updates
        are a success And much more!
      </p>
      <p>Email address</p>
      <p>email@company.com</p>
      <p>Subscribe to monthly newsletter</p>
      {/*Sign-up form end*/}
      {/*Success message start*/}
      <p>Thanks for subscribing!</p>
      <p>A confirmation email has been sent to ash@loremcompany.com.</p>
      <p>
        Please open it and click the button inside to confirm your subscription.
      </p>
      <p>Dismiss message</p>
      {/*Success message end */}
      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  );
}

export default App;
