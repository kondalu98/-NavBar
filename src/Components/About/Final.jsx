import "./Final.css";

import { BackGround } from "./BackGround";
import { Cards } from "./Cards";
import { Carousel } from "./Carousel";
import { ContactFooter } from "../ContactPages/ContactFotter";
import { Layer } from "./Layer";
import { Middles } from "./Middles";
import React from "react";
import { SecondCard } from "./SecondCard";
import { SecondLayer } from "./SecondLayer";
import { Videos } from "./Videos";

export function Final() {
  return (
    <div>
      <BackGround></BackGround>
      <div className="css">
        <Middles></Middles>
        <Carousel></Carousel>
        <Layer></Layer>
        <Cards></Cards>
        <Videos></Videos>
        <SecondLayer></SecondLayer>
        <SecondCard></SecondCard>
        <ContactFooter></ContactFooter>
      </div>
    </div>
  );
}
