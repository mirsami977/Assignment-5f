import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    img: "https://plus.unsplash.com/premium_photo-1661964003668-f499e888f1b0?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Rising Urban Garbage Crisis",
    description: "Uncontrolled waste dumping is causing severe pollution, foul smells, and health risks in urban areas. Overflowing dustbins, plastic waste, clogged drains, and uncollected garbage are turning city spaces into high-risk zones for diseases and environmental damage.",
  },
  {
    img: "https://images.unsplash.com/photo-1700732813265-e551398cb0bf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Community-Driven Clean-Up Initiatives",
    description: "Local residents, youth, and volunteer groups are taking active roles in cleaning their neighborhoods. These campaigns promote awareness, responsibility, and teamwork—leading to visible improvement in community hygiene and reduction in random waste dumping.",
  },
  {
    img: "https://images.unsplash.com/photo-1599278486038-419faa3a8c80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Steps Toward a Sustainable Future",
    description: "Sustainability begins with smarter waste handling. Recycling plastic, composting organic waste, and using reusable products significantly reduce environmental damage. Smart bins, recycling programs, and renewable solutions create cleaner, healthier cities for future generations.",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  arrows: false,
};

const AnimatedSlider = () => {
  return (
    <div className="">
      <Slider {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[300px] md:h-[400px] w-full">

            <img
              src={slide.img}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />


            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start md:items-center text-white px-6 md:px-16">
              <h3 className="text-2xl md:text-4xl font-bold mb-2">{slide.title}</h3>
              <p className="text-sm md:text-base max-w-md mb-4 text-gray-200">{slide.description}</p>
              <button className="bg-green-600 hover:bg-green-700 transition px-6 py-2 text-sm rounded shadow-md">
                Explore Now
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AnimatedSlider;
