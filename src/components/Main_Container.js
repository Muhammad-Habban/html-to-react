import React from "react";
import Article from "./Article";
import Inside_Container from "./Inside_Container";

const Main_Container = () => {
  return (
    <div>
      <section className="main container">
        <Article />
        <Inside_Container />
      </section>
    </div>
  );
};

export default Main_Container;
