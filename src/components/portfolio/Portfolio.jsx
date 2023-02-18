import "./portfolio.css";
import img1 from "../../assets/dilivva.png";
import img2 from "../../assets/mypincoop.png";
import img3 from "../../assets/airbnb.png";
import img4 from "../../assets/portfolio4.jpg";
import img5 from "../../assets/portfolio5.png";
import img6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: img1,
      title: "Dilivva Delivery Website",
      github: "https://github.com/Beaskyy/",
      demo: "https://dilivva.com/",
    },
    {
      id: 2,
      image: img2,
      title: "Mypincoop Real Estate Website",
      github: "https://github.com/Beaskyy/mypincoop",
      demo: "https://mypincoop.netlify.app/",
    },
    {
      id: 3,
      image: img3,
      title: "AirBnB Clone",
      github: "https://github.com/",
      demo: "https://airbnbc.netlify.app/",
    },
    {
      id: 4,
      image: img4,
      title: "Digital Agency Website",
      github: "https://github.com/Beaskyy/Digital-Agency",
      demo: "https://beasky-digital.netlify.app/#",
    },
    {
      id: 5,
      image: img5,
      title: "Food Web",
      github: "https://github.com/Beaskyy/food-website",
      demo: "https://foodweby.netlify.app/",
    },
    {
      id: 6,
      image: img6,
      title: "Dilivva Admin Dashboard",
      github: "https://github.com/Beaskyy/",
      demo: "https://admin.dilivva.com/",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => (
          <article className="portfolio__item" key={id}>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className="btn" target="_blank" rel="noreferrer">
                Github
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
