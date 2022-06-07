import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

import bike from "../../assets/bike.jpg";
import Review from "../Review/Review";
import { ReviewContext } from "../../App";

import "./home.css";

function Home() {
  const reviewData = useContext(ReviewContext);

  return (
    <div className="container mx-auto px-9">
      <Navbar />
      <div className="grid grid-cols-2 gap-2 items-center  ">
        <div className="justify-self-end uppercase">
          <h1 className=" text-[80px] font-medium">Your Dream Bike</h1>
          <h1 className="text-[40px]">
            Turn Around switch & turn on r15{" "}
            <span className="text-red-500">bitch!</span>
          </h1>
          <p className="lowercase text-lg text-gray-900 text-justify py-4 mb-4">
            The Yamaha R15 V4 has witnessed its first price hike since its
            launch. Good news is that the premium isn’t too hefty. Take a look
            at the latest price list here. The Yamaha R15 was the
            highest-selling two-wheeler for the company in September 2021, with
            over 11,500 units sold. Here are the details.
          </p>
          <a href="*" className="bg-red-500 text-white p-3 rounded-lg mt-8">
            live demo
          </a>
        </div>
        <div className="mt-9">
          <img src={bike} alt="bike-img" />
        </div>
      </div>

      <div>
        <h3 className="text-[30px] my-12 font-medium text-center">
          User Reviews
        </h3>

        <div className="flex justify-center gap-12 flex-wrap">
          {reviewData.map((review, i) =>
            i < 3 ? <Review key={i} review={review} /> : ""
          )}
        </div>

        <div className="text-center py-12">
          <NavLink
            to="/reviews"
            className="text-center  font-medium underline text-red-500 text-xl mt-8 p-2 rounded-lg "
          >
            Show All
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
