import React, { useContext } from "react";
import Review from "../Review/Review";
import Navbar from "../Shared/Navbar/Navbar";
import { ReviewContext } from "../../App";
import "./reviews.css";

function Reviews() {
  const reviewData = useContext(ReviewContext);
  console.log(reviewData);
  return (
    <div>
      <Navbar />

      <h1 className="text-center text-[40px] py-10">What our customer says</h1>
      <div className="container mx-auto px-9 py-9">
        <div className="flex justify-center gap-12 flex-wrap">
          {reviewData.map((review) => (
            <Review review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
