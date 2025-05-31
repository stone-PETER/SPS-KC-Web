import "./event.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const cards = [
  {
    img: "img/events/WhatsApp-Image-2023-10-24-at-7.01.06-PM-qec7o4oryuf1bff4wba8p5haj5a93d1y40p5s4czfc.jpeg",
  },
  {
    img: "img/events/WhatsApp-Image-2023-11-16-at-19.01.38_e5ec5b19-qfhyywbvwkxiiew2ay5dnywp9yrlkjt731t41fx9p4.jpg",
  },
  {
    img: "img/events/WhatsApp-Image-2023-11-17-at-17.48.42_e4b128f8-qfhyyx9q3eysu0up5gk08go5vcmys8wxf6glipvviw.jpg",
  },
  {
    img: "img/events/WhatsApp-Image-2024-07-11-at-4.32.30-PM-qr28dlnch54oets8xuusdeo0d8mctszkmx3frbejq0.jpeg",
  },
  {
    img: "img/events/WhatsApp-Image-2023-11-16-at-19.01.38_e5ec5b19-qfhyywbvwkxiiew2ay5dnywp9yrlkjt731t41fx9p4.jpg",
  },
  {
    img: "img/events/WhatsApp-Image-2024-07-11-at-4.32.30-PM-qr28dlnch54oets8xuusdeo0d8mctszkmx3frbejq0.jpeg",
  },
];

export default function Event() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1624,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="main-event">
      <h1 className="event-title">Events</h1>
      <div className="event">
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={index} className="card">
              <div className="card-body">
                <img src={card.img} alt={`Slide ${index + 1}`} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
