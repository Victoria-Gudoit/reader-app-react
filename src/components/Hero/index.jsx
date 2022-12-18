import React from "react";
import scss from "./hero.module.scss";

import ujjo from "../../assets/img/ujjo.svg";
import pepper from "../../assets/img/pepper.svg";
import souse_left from "../../assets/img/souse_left.svg";
import souse__right from "../../assets/img/souse__right.svg";

export const Hero = () => {
  return (
    <section className={scss.hero}>
      <div className={scss.hero__left}>
        <img src={ujjo} alt="" />
        <div className={scss.ticker}>
          <div className={scss.ticker__wrapper}>
            <div className={scss.ticker__item}>
              put some fire in your belly
              <img
                src={pepper}
                alt=""
                aria-hidden="true"
                className={scss.ticker__icon}
              />
            </div>
            <div className={scss.ticker__item}>
              put some fire in your belly
              <img
                src={pepper}
                alt=""
                aria-hidden="true"
                className={scss.ticker__icon}
              />
            </div>
            <div className={scss.ticker__item}>
              put some fire in your belly
              <img
                src={pepper}
                alt=""
                aria-hidden="true"
                className={scss.ticker__icon}
              />
            </div>
            <div className={scss.ticker__item}>
              put some fire in your belly
              <img
                src={pepper}
                alt=""
                aria-hidden="true"
                className={scss.ticker__icon}
              />
            </div>
            <div className={scss.ticker__item}>
              put some fire in your belly
              <img
                src={pepper}
                alt=""
                aria-hidden="true"
                className={scss.ticker__icon}
              />
            </div>
          </div>
        </div>
        <div className={scss.hero__img}>
          <img src={souse_left} alt="" />
        </div>
      </div>
      <div className={scss.hero__right}>
        <h1 className={scss.hero__text}>THE FIRST HOT SAUCE MADE FOR COFFEE</h1>
        <div className={scss.hero__img}>
          <img src={souse__right} alt="" />
        </div>
      </div>
    </section>
  );
};
