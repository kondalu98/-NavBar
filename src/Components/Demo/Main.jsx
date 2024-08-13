import "./Main.css";

import { Contacs, ContactFooter } from "../ContactPages/ContactFotter";

import { First } from "./First";
import { Middle } from "./Middle";
import { NavBars } from "../NavBar/NavBars";
import React from "react";

export function Main() {
  return (
    <div className="dt">
    <NavBars/>
      <First></First>
      <Middle></Middle>
      <ContactFooter></ContactFooter>
    </div>
  );
}
