import "./testimonials.css";
import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";
import avatar4 from "../../assets/avatar4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const data = [
    {
      avatar: avatar1,
      name: "Tina Snow",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque necessitatibus ab quam ut obcaecati. Obcaecati quam nostrum ex doloribus veniam deserunt iste ullam quia dolorem corrupti, aspernatur et ducimus placeat.",
    },
    {
      avatar: avatar2,
      name: "Tina Snow",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque necessitatibus ab quam ut obcaecati. Obcaecati quam nostrum ex doloribus veniam deserunt iste ullam quia dolorem corrupti, aspernatur et ducimus placeat.",
    },
    {
      avatar: avatar3,
      name: "Tina Snow",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque necessitatibus ab quam ut obcaecati. Obcaecati quam nostrum ex doloribus veniam deserunt iste ullam quia dolorem corrupti, aspernatur et ducimus placeat.",
    },
    {
      avatar: avatar4,
      name: "Tina Snow",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque necessitatibus ab quam ut obcaecati. Obcaecati quam nostrum ex doloribus veniam deserunt iste ullam quia dolorem corrupti, aspernatur et ducimus placeat.",
    },
  ];
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container testimonial__container"
      >
        {data.map(({ avatar, name, review }, index) => (
          <SwiperSlide className="testimonial" key={index}>
            <div className="client__avatar">
              <img src={avatar} alt="beasky" />
            </div>
            <h5>{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
