import { getAwardedBooks } from "api";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Header } from "./Header";
import scss from "./app.module.scss";
import { Hero } from "./Hero";
import { Products } from "./products";
import { Story } from "./Story";
import { Ticker } from "./Ticker-bottom";

export const App = () => {
  return (
    <div className={scss.wrapper}>
      <Header />
      <Hero />
      <Products />
      <Story />
      <Ticker />
    </div>
  );
};
