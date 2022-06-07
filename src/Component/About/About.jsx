import React from "react";
import Navbar from "../Shared/Navbar/Navbar";

import bike from "../../assets/bike.jpg";
import "./about.css";
function About() {
  return (
    <div>
      <Navbar />

      <div className="container mx-auto px-9">
        <div className="flex justify-center ">
          <img src={bike} alt="this is bike" className="h-80 py-8" />
        </div>
        <article className="py-4 text-center font-medium">
          Overview The Yamaha YZF-R15 can easily feature on the list of most
          popular motorcycles sold in India. A very potent 150cc engine, a
          phenomenal delta box frame and a very sporty styling were a few
          quality features of the Yamaha R15 which had truly blown the minds of
          the customers back in 2008 when it was first introduced. And over its
          14 years of lifespan, the motorcycle has only gotten better. Now, for
          2022, Yamaha has introduced the fourth version of the R15 with certain
          changes which promised to make it even more extraordinary. Yamaha R15
          V4 Review 17 Jan, 2022 09:42 AM Detailed Review by Maxabout Team
          Overview The Yamaha YZF-R15 can easily feature on the list of most
          popular motorcycles sold in India. A very potent 150cc engine, a
          phenomenal delta box frame and a very sporty styling were a few
          quality features of the Yamaha R15 which had truly blown the minds of
          the customers back in 2008 when it was first introduced. And over its
          14 years of lifespan, the motorcycle has only gotten better. Now, for
          2022, Yamaha has introduced the fourth version of the R15 with certain
          changes which promised to make it even more extraordinary. Yamaha R15
          V4 Design and Style If we talk about the looks, unlike the R15 V3’s
          dual-LED headlamp layout, the latest-gen R15 V4 series has a
          single-pod LED headlamp with integrated LED DRLs. The styling of the
          Yamaha R15 V4 is inspired by the new model of the Yamaha YZF-R7 and
          its elder sibling, the YZF-R1 and that is pretty evident from its
          front fascia. So, it gets a nice projector headlamp which is nestled
          within the central air intake and it is flanked by slim LED DRLs which
          look like those eyes of a predator. The sculpted fuel tank, the
          angular fairing and the nice rake tail section get large scoops and
          all this sporty appearance collectively makes it a true delight for
          the eyes. However, the most significant change in the new-gen model of
          Yamaha R15 is the addition of upside-down (USD) front forks, which
          have replaced the conventional telescopic forks.
        </article>
      </div>
    </div>
  );
}

export default About;
