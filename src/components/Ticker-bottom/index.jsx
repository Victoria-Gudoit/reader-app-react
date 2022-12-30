import React from "react";
import pepper from "../../assets/img/pepper.svg";
import scss from "./ticker.module.scss";
import style from "../Hero/hero.module.scss";

export const Ticker = () => {
  return (
    <div className={scss.wrapper}>
      <div className={scss.wrapper__content}>
        <div className={scss.ticker}>
          <div className={style.ticker__wrapper}>
            <div className={style.ticker__item}>
              download our media kit
              <img
                src={pepper}
                alt=""
                aria-hidden="true"
                className={scss.ticker__icon}
              />
              CONTACT FOR PARTNERSHIP OPPORTUNITIES
              <img
                src={pepper}
                alt=""
                aria-hidden="true"
                className={scss.ticker__icon}
              />
            </div>
            <div className={style.ticker__item}>
              download our media kit
              <img
                src={pepper}
                alt=""
                aria-hidden="true"
                className={scss.ticker__icon}
              />
              CONTACT FOR PARTNERSHIP OPPORTUNITIES
              <img
                src={pepper}
                alt=""
                aria-hidden="true"
                className={scss.ticker__icon}
              />
            </div>{" "}
            <div className={style.ticker__item}>
              download our media kit
              <img
                src={pepper}
                alt=""
                aria-hidden="true"
                className={scss.ticker__icon}
              />
              CONTACT FOR PARTNERSHIP OPPORTUNITIES
              <img
                src={pepper}
                alt=""
                aria-hidden="true"
                className={scss.ticker__icon}
              />
            </div>{" "}
            <div className={style.ticker__item}>
              download our media kit
              <img
                src={pepper}
                alt=""
                aria-hidden="true"
                className={scss.ticker__icon}
              />
              CONTACT FOR PARTNERSHIP OPPORTUNITIES
              <img
                src={pepper}
                alt=""
                aria-hidden="true"
                className={scss.ticker__icon}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
