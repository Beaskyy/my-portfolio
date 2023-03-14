import "./testimonials.css";
import avatar1 from "../../assets/ameenah.jpg";
import avatar2 from "../../assets/karen.png";
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
      name: "Ameenah Adebayo",
      review:
        "I have been using the products of beaskydev for several months now and I am extremely satisfied with the results. Their products are of high quality and their customer service is exceptional. I will definitely be a long-term customer!",
    },
    {
      avatar: avatar2,
      name: "Karen Ziboh",
      review:
        "I recently used the services of beaskydev and I have to say, it was a great experience. Their team was easy to work with and very accommodating. They provided me with a great solution that fit my needs perfectly. I would definitely recommend them to others!",
    },
    {
      avatar: avatar3,
      name: "Samuel Snow",
      review:
        "I have been a customer of beaskydev for over a year now and I have nothing but positive things to say about their services. Their team is knowledgeable and always ready to help with any issues I encounter. I highly recommend them!",
    },
    {
      avatar: avatar4,
      name: "Salwa Raheem",
      review:
        "I was hesitant to use beaskydev's services at first, but I am so glad I did! They exceeded my expectations and provided me with the support I needed to achieve my goals. Their team is friendly, professional, and dedicated to their work. Thank you, beasky!",
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
