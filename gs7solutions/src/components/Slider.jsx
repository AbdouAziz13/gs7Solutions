import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { RxDotFilled } from 'react-icons/rx';


const Slider = () => {
  const [listOfSlider, setListOfSlider] = useState([]);

  // get list of Sliders
  useEffect(() => {
    axios
      .get("http://localhost:3030/slider/")
      .then((response) => setListOfSlider(response.data.map(slider => ({ ...slider, currentIndex: 0 }))));
  }, []);

  // slider function
  const prevSlide = (sliderIndex) => {
    const updatedListOfSlider = [...listOfSlider];
    const slider = updatedListOfSlider[sliderIndex];
    const isFirstSlide = slider.currentIndex === 0;
    const newIndex = isFirstSlide
      ? slider.images.length - 1
      : slider.currentIndex - 1;
    slider.currentIndex = newIndex;
    setListOfSlider(updatedListOfSlider);
  };

  const nextSlide = (sliderIndex) => {
    const updatedListOfSlider = [...listOfSlider];
    const slider = updatedListOfSlider[sliderIndex];
    const isLastSlide = slider.currentIndex === slider.images.length - 1;
    const newIndex = isLastSlide ? 0 : slider.currentIndex + 1;
    slider.currentIndex = newIndex;
    setListOfSlider(updatedListOfSlider);
  };

  const goToSlide = (sliderIndex, slideIndex) => {
    const updatedListOfSlider = [...listOfSlider];
    updatedListOfSlider[sliderIndex].currentIndex = slideIndex;
    setListOfSlider(updatedListOfSlider);
  };

  return (
    <div>
      {listOfSlider.map((slider, sliderIndex) => (
        <div className="w-[80%] flex flex-col border-b p-2 rounded mx-auto relative" key={sliderIndex}>
          <p className="text-center text-3xl my-5 font-bold ">{slider.name}</p>
          <div
          
            style={{
              backgroundImage: `url(http://localhost:3030/images/${slider.images[slider.currentIndex]})`,
            }}
            className="w-full h-[300px] rounded-md md:h-[500px] bg-contain bg-no-repeat bg-center  duration-400"
          ></div>
          <div className="hover:block  absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/10 text-white cursor-pointer">
            <BsChevronLeft size={30} onClick={() => prevSlide(sliderIndex)} />
          </div>
          <div className="hover:block  absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/10 text-white cursor-pointer">
            <BsChevronRight size={30} onClick={() => nextSlide(sliderIndex)} />
          </div>
          <div className="flex top-4 justify-center py-2">
            {slider.images.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(sliderIndex, slideIndex)}
                className="text-2xl cursor-pointer"
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
