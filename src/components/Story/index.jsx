import React from "react";
import scss from "./story.module.scss";
import story from "../../assets/img/story.jpg";

export const Story = () => {
  return (
    <section className={scss.story}>
      <div className={scss.story__left}>
        <h2 className={scss.story__title}>the story behind the souce</h2>
        <img className={scss.story__image} src={story} alt="" />
      </div>
      <div className={scss.story__right}>
        <div className={scss.story__content}>
          <p className={scss.story__text}>
            HELLO, I’M LAUREN AND AS A LIFELONG ADVENTUROUS EATER, I’VE TRIED A
            LOT OF CRAZY THINGS, BUT I NEVER THOUGHT HOT SAUCE IN COFFEE WAS A
            SANE OPTION UNTIL A FRIEND DARED ME TO TRY IT.
          </p>
          <p className={scss.story__text}>AND IT SUCKED.</p>
          <p className={scss.story__text}>
            BUT I WONDERED IF THERE WAS A WAY TO ADD SPICE TO MY COFFEE. WHEN
            THERE WAS NO EASY SOLUTION, UJJO WAS BORN.
          </p>
          <p className={scss.story__text}>
            UJJO (OOO-JOE): THE WORD FOR “FIRE” IN KONKANI, SPOKEN ON THE WEST
            COAST OF INDIA, IS AN HOMAGE AND A LOVE LETTER TO MY DAD, AN INDIAN
            IMMIGRANT WHO INSTILLED A FIRE IN MY PALATE – AND MY HEART – FROM
            THE VERY BEGINNING.
          </p>
        </div>
      </div>
    </section>
  );
};
