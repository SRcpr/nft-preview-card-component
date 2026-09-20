import imageEquilibrium from "./assets/image-equilibrium.jpg";
import authorImage from "./assets/image-avatar.png";
import iconClock from "./assets/icon-clock.svg";
import iconEthereum from "./assets/icon-ethereum.svg";
function App() {
  return (
    <>
      <main className="border">
        <div className="card-image">
          <div className="image-container border">
            <img
              className="border"
              src={imageEquilibrium}
              alt="image equilibrium"
            />
          </div>
          <div className="figcaption">
            <h1>
              <a href="#">Equilibrium #3429</a>
            </h1>
            <p>Our Equilibrium collection promotes balance and calm.</p>
            <div className="card-details">
              <div>
                <img className="card-im" src={iconEthereum} alt="" />
                <p>0.041 ETH</p>
              </div>
              <div>
                <img className="card-ima" src={iconClock} alt="" />
                <p>3 days left</p>
              </div>
            </div>
          </div>
        </div>
        <section className="author">
          <img src={authorImage} alt="" />
          <p>
            Creation of
            <a href="#" className="author-name">
              Jules Wyvern
            </a>
          </p>
        </section>
      </main>
    </>
  );
}

export default App;
