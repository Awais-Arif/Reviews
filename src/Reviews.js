import React, {useState} from "react";
import ReviewsData from "./ReviewsData";
import {FaQuoteRight, FaChevronLeft, FaChevronRight} from "react-icons/fa";
const Reviews = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = ReviewsData[index];

  const CheckNumber = (number) => {
    // console.log(number);
    if (number < 0) {
      return ReviewsData.length - 1;
    }
    if (number > ReviewsData.length - 1) {
      return 0;
    }
    return number;
  };
  const NextButton = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return CheckNumber(newIndex);
    });
  };

  const PrevButton = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return CheckNumber(newIndex);
    });
  };

  const RandomButton = () => {
    let RandomNumber = Math.floor(Math.random() * ReviewsData.length);
    if (RandomNumber === index) {
      RandomNumber = index + 1;
    }
    setIndex(CheckNumber(RandomNumber));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="autj">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={PrevButton}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={NextButton}>
          <FaChevronRight />
        </button>
        <div>
          <button className="random-btn" onClick={RandomButton}>
            Surprise Me
          </button>
        </div>
      </div>
    </article>
  );
};
export default Reviews;
