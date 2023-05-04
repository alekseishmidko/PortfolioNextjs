/* eslint-disable @next/next/no-img-element */
import styles from "../../src/styles/about.module.scss";
import MainTitle from "../MainTitle/MainTitle";
import ArrowSVG from "../ArrowSVG/ArrowSVG";
import SocialList from "./SocialList";
import { useMediaQuery } from "../../hooks";
const About = () => {
  const isMobile1080 = useMediaQuery(1080);
  return (
    <section id="about">
      <div className="container">
        <MainTitle text="обо мне" />
        <div className={`sub-container ${styles.about__sub_container}`}>
          <img
            className={styles.about__img}
            src="/img/about.png"
            alt="avatar"
          />
          <div className={styles.about__inner}>
            <h3 className={styles.about__title}>
              {" "}
              Aleksei Shmidko
              <span className={styles.about__title__border}>
                <span className={styles.about__title__border__arrow}>
                  <ArrowSVG />
                </span>
                <span className={styles.about__title__border__line}></span>
              </span>
            </h3>
            <div className={styles.about__text}>
              <p>
                Расположенный в Хартфорде, штат Коннектикут. В настоящее время я
                работаю по совместительству Удаленным младшим веб-разработчиком
                для Coolor, расположенного в Лас-Вегасе.
              </p>
              <p>
                Я ищу, чтобы взять на себя больше работы и повысить свои навыки
                в качестве веб-разработчика.
              </p>
            </div>
            {!isMobile1080 && <SocialList />}
          </div>
        </div>
      </div>
      {isMobile1080 && (
        <div className="sub-container">
          <SocialList />
        </div>
      )}
    </section>
  );
};

export default About;
