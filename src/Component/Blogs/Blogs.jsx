import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import "./blog.css";

function Blogs() {
  return (
    <div>
      <Navbar />

      <div className=" container mx-auto px-9">
        <div className="qextion-1 py-12">
          <h1 className="font-bold text-left text-2xl">
            Q-1: What is Context Api?
          </h1>
          <article className="text-justify text-center py-4">
            The Context API is a React structure that enables you to exchange
            unique details and assists in solving prop-drilling from all levels
            of your application. the method of use context api in react. first
            of all import create context form react and crete instant to create
            context. then through context we have to pass value like props and
            then from child component we have to import useContext hook from
            react and the created context. finally we have to call imported
            context through use context hook.
          </article>
        </div>
        <div className="qextion-2 py-12">
          <h1 className="font-bold text-left text-2xl">
            Q-2: What is Semantic Tag?
          </h1>
          <article className="text-justify text-center py-4">
            Semantic HTML elements are those that clearly describe their meaning
            in a human- and machine-readable way. as like the header tag is a
            semantic tag that use to a webpage head section. there are some
            semantic tag nav, section, aside, article, footer.
          </article>
        </div>
        <div className="qextion-3 py-12">
          <h1 className="font-bold text-left text-2xl">
            Q-3: What is the difference between blok & inline block element?
          </h1>
          <article className="text-justify text-center py-4">
            A block elements take hole width of their sufficiency.Block elements
            always start in a line. Inline elements allow other inline elements
            to sit behind. some block elements are header, nav, p , div etc &
            and some inline elements are a, span, abb, br, b , code ect. we can
            convert a line elements to block elements.
          </article>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
