/* eslint-disable jsx-a11y/img-redundant-alt */
import { React, useState } from "react";
import Header from "../../components/Header/Header";
import "./About.css";
import { FaAnglesUp } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import img1 from "../../assets/images/about/img1.png";
import img2 from "../../assets/images/about/pexels-photo-3183186.jpeg";
import img3 from "../../assets/images/about/team1-18ea4afd.jpg";
import img4 from "../../assets/images/about/team3.avif";
import Footer from "../../components/Footer/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import quteimge from '../../assets/images/about/quote1-.png'
import testimg from '../../assets/images/about/test.avif'
import 'swiper/css';
import 'swiper/css/pagination';

const testmonials = [
  {id:1 ,title:"Finding furniture that aligns with my sustainability values was a priority for me, and this website exceeded my expectations. I was able to find beautifully designed pieces that are made with sustainable materials.",name:"Jenny Wilsson" , job:"Graphic Designer" },
  {id:2 ,title:"I was impressed by the attention to detail and the exquisite craftsmanship of the furniture I purchased from this website. The pieces I received were even more beautiful in person than in the pictures.,name:Lesilia Alexander" ,name:"lisreen" ,job:"Frontend Develper" },
  {id:3 ,title:"I couldn't be happier with my experience shopping at this furniture website. The selection of furniture is amazing, and the quality is top-notch. The customer service team was incredibly helpful.",name:"Wade Warren" , job:"Backend Developer" },
  {id:4 ,title:"I just love their design for all stunning details. You must know what can you do for a project before taking it, but with Furnival, the sky is the limit.",name:"Jasmen Jason" , job:"Data Analyst" },
]


const About = () => {

  const [top, setTop] = useState(false);
  window.onscroll = () => {
    if (window.scrollY >= 400) {
      setTop(true);
    } else {
      setTop(false);
    }
  };
  return (
    <div>
      <Header />
      <button
        onClick={() => window.scrollTo(0, 0)}
        className={top === false ? "top-hide" : "topShow"}
      >
        {" "}
        <FaAnglesUp />{" "}
      </button>
      <div className="landing-contact land-about flex-column d-flex justify-content-center w-100 align-items-center">
        <h1>About</h1>
        <div className="d-flex justify-content-center  align-items-center">
          <h5 className="me-2">
            {" "}
            <FaHouse />{" "}
          </h5>
          <span className="me-2">Home /</span>
          <span className="me-2">About </span>
        </div>
      </div>
      <div className="container d-flex  justifiy-content-center align-items-center w-100 sec-about ">
        <div className="left-about-second me-5">
          <h6>We pick our team</h6>
          <p>
            Our team is passionate about furniture, and we collaborate
            effectively to achieve your goals and deliver high-quality work.
            We're trying to go above and beyond to meet your expectations and
            deliver exceptional results to make your dream home true.
          </p>
        </div>
        <div className="right-about-second">
          <img src={img1} alt="vector image" />
        </div>
      </div>
      <h1
        className="container mb-4  "
        style={{
          fontSize: "24px",
          color: "#133a5e",
          fontWeight: "700",
          lineHeight: "32px",
          fontFamily: "poppins , sans-serif",
          textAlign: "center",
        }}
      >
        {" "}
        More About Us{" "}
      </h1>
      <div className="container  d-flex  justifiy-content-center align-items-center w-100 mb-5 ">
        <div className="more-about ms-5">
          <img src={img2} alt="vector image" />
        </div>
        <div className="details-more-about ms-3 ">
          <h6>This is how it's began</h6>
          <p>
            From the initial stages of brainstorming and ideation to the final
            implementation, our team works hand in hand, pooling our collective
            talents and perspectives. We foster an environment that encourages
            open communication, creative thinking, and mutual respect.
          </p>
        </div>
      </div>
      <div className="container  d-flex  justifiy-content-center align-items-center w-100 mb-5  ">
        <div className="details-more-about ms-5 ">
          <h6>Attention to details</h6>
          <p>
            We are dedicated to provide our customers with the highest quality
            furniture that meets their lifestyle. Our team's commitment to
            meticulous craftsmanship, attention to detail, and a deep
            understanding of materials ensures that every piece we create
            reflects our passion for excellence.
          </p>
        </div>
        <div className="more-about ms-3">
          <img src={img3} alt="vector image" />
        </div>
      </div>
      <div className="container  d-flex  justifiy-content-center align-items-center w-100 mb-5 ">
        <div className="more-about ms-5">
          <img src={img4} alt="vector image" />
        </div>
        <div className="details-more-about ms-3 ">
          <h6>Collaborate Team</h6>
          <p>
            From the initial stages of brainstorming and ideation to the final
            implementation, our team works hand in hand, pooling our collective
            talents and perspectives. We foster an environment that encourages
            open communication, creative thinking, and mutual respect.
          </p>
        </div>
      </div>
   
      <section className="test-sec p-5 mb-5">
      <div className="text-center main-title-testmonial mb-5">
      <h2>Testimonials</h2>
      <h6>What People Says?</h6>
      </div>
     <div className="teston container mb-5">
     <Swiper
     slidesPerView={2}
     spaceBetween={30}
    
      className="mySwiper swiper-cont">
      {testmonials.map((test)=>(

        <SwiperSlide key={test.id} className="swiper-slider">
        <div className="title-test">
        <img src={quteimge} alt="imge qute" className="img_qute"/> 
        <p> {test.title} </p>
        </div>
        <div className="bot-sec d-flex justifiy-content-center align-items-center">
        <div>
        <img src={testimg}  className="img-test" alt="imge testmonials"/>
        </div>
        <div className="d-flex flex-column justify-content-center mt-2 ms-2 detail-testmoner"> 
        <h6> {test.name} </h6>
        <p>{test.job} </p> 
        </div>
        </div>
        </SwiperSlide>
      ))}
   
     </Swiper>
     </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
