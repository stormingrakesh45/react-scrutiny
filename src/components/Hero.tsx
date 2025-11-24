import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Take Control of <br />
          Your Digital Assets
        </h1>

        <p>
          Cryptix offers a seamless, secure experience for managing your digital
          assets. Instant transactions, optimized fees, and premium design.
        </p>

        <button className="hero-btn">
          Get started now <span>↗</span>
        </button>

        <div className="trusted">
          <span>They trust us</span>
          <div className="stars">
            ★★★★☆ <strong>4.9</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
