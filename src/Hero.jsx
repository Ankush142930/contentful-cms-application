import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            aliquid, ipsam doloremque nesciunt voluptatem repellat corporis
            nihil voluptate odio blanditiis adipisci sequi ipsa eum sit, rem
            fugiat quis consequuntur laudantium.
          </p>
        </div>
        <img src={heroImg} alt="woman and the browser" className="img" />
      </div>
    </section>
  );
};
export default Hero;
