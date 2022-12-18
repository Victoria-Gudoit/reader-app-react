import React from "react";
import logo from "../../assets/img/logo.svg";
import scss from "./header.module.scss";

export const Header = () => {
  return (
    <div className={scss.header}>
      <button className={scss.header__btn} type="button">
        Sign In
      </button>
      <ul className={scss.header__list}>
        <li className={scss.header__item}>
          <a className={scss.header__link} href="">
            Story
          </a>
        </li>
        <li className={scss.header__item}>
          <a className={scss.header__link} href="">
            Shop
          </a>
        </li>
        <li className={scss.logo}>
          <a c href="">
            <img src={logo} alt="" />
          </a>
        </li>

        <li className={scss.header__item}>
          <a className={scss.header__link} href="">
            Contact
          </a>
        </li>
        <li className={scss.header__item}>
          <a className={scss.header__link} href="">
            Wholesale
          </a>
        </li>
      </ul>
      <button className={scss.header__btn} type="button">
        Sign Up
      </button>
    </div>
  );
};
