import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categories = [
  { id: 1, name: "Frontend developer" },
  { id: 2, name: "Backend developer" },
  { id: 3, name: "Full Stack" },
  { id: 4, name: "Mern Stack" },
  { id: 5, name: "Mean Stack" },
];

const CategoryCarousal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-[45%] m-auto py-10">
      <Slider {...settings}>
        {categories.map((category) => (
          <div key={category.id} className="item-center p-10 ">
            <h3 className="bg-green-500  border-none rounded-lg text-white font-semibold p-2 text-center">
              {category.name}
            </h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategoryCarousal;
