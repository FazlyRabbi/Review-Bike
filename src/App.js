import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Component";
import { About } from "./Component";
import { Blogs } from "./Component";
import { Dashboard } from "./Component";
import { Reviews } from "./Component";
import { Notfound } from "./Component";

import p1 from "./assets/man1.webp";
import p2 from "./assets/man2.webp";
import p3 from "./assets/man3.webp";
import p4 from "./assets/man4.jpg";
import p5 from "./assets/man5.webp";
import p6 from "./assets/man6.webp";

const reviews = [
  {
    imgUrl: `${p1}`,
    userName: "jhone",
    ratting: " Ratting 5",
    des: "The Yamaha R15 V4 has witnessed its first price hike since i",
  },
  {
    imgUrl: `${p2}`,
    userName: "Riding posture",
    ratting: "Ratting 5",
    des: "This one comes with all in one ! love the riding posture",
  },
  {
    imgUrl: `${p3}`,
    userName: "Money issues",
    ratting: "Ratting 5",
    des: "Best look and best price i really want a bike like this but i have money issues",
  },
  {
    imgUrl: `${p4}`,
    userName: "Nyato Riba",
    ratting: "Ratting 5",
    des: "I love this bike seat is also very comfortable even it's comes with abs overall i love this bike at this price range",
  },
  {
    imgUrl: `${p5}`,
    userName: "Zafar Aqeel",
    ratting: "Ratting 5",
    des: "The bike is very awesome and loveable and the control system is also good",
  },
  {
    imgUrl: `${p6}`,
    userName: "Anish Singh",
    ratting: "Ratting 5",
    des: "My favourite bike is r15 v4.This bike future is so fantastic.",
  },
];

export const ReviewContext = createContext();
export const ChartContext = createContext();

function App() {
  const [chart, setChart] = useState();

  useEffect(() => {
    axios.get("/db.json").then(function (data) {
      setChart(data);
    });
  }, []);

  return (
    <ReviewContext.Provider value={reviews}>
      <ChartContext.Provider value={[chart, setChart]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/reviews" element={<Reviews />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </ChartContext.Provider>
    </ReviewContext.Provider>
  );
}

export default App;
