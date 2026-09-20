import imageEquilibrium from "./assets/image-equilibrium.jpg";
import authorImage from "./assets/image-avatar.png";
import iconClock from "./assets/icon-clock.svg";
import iconEthereum from "./assets/icon-ethereum.svg";
function App() {
  return (
    <>
      <main className="border">
        <figure className="card-image">
          <div className="image-container border">
            <img
              className="border"
              src={imageEquilibrium}
              alt="image equilibrium"
            />
          </div>
          <figcaption>
            <h1>
              <a href="#">
                <h1>Equilibrium #3429</h1>
              </a>
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
          </figcaption>
        </figure>
        <section className="author">
          <img src={authorImage} alt="" />
          <p>
            Creation of{" "}
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
