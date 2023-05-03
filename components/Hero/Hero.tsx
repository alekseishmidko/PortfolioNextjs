import styles from "../../src/styles/hero.module.scss";
import { Link } from "react-scroll";
import { useMediaQuery } from "../../hooks";
import { gsap } from "gsap";
import { MutableRefObject, useRef, useEffect } from "react";

const Hero = () => {
  const isMobile485 = useMediaQuery(485);
  const isMobile = useMediaQuery(800);
  const heroTitle = useRef() as MutableRefObject<HTMLHeadingElement>;
  useEffect(() => {
    const colors = gsap.to(heroTitle.current, {
      paused: true,
      duration: 20,
      repeat: -1,
      "--hue": 360,
    });

    const doRandom = () => {
      gsap
        .timeline()
        .to(heroTitle.current, {
          duration: 0.1,
          opacity: function () {
            return gsap.utils.random(0.9, 0.95);
          },
          delay: function () {
            return gsap.utils.random(0.1, 2);
          },
        })
        .to(heroTitle.current, {
          duration: 0.1,
          opacity: 1,
          onComplete: function () {
            doRandom();
          },
        });
    };

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!mediaQuery || !mediaQuery.matches) {
      colors.play();
      doRandom();
    }
  }, []);

  return (
    <>
      <section
        className={styles.hero}
        style={{ backgroundImage: `url("/img/hero-bg.png")` }}
      >
        <div className="sub-container">
          <div>
            <h1 className={styles.hero__title} ref={heroTitle}>
              {" "}
              Web development
            </h1>
            <div className={styles.hero__description}>
              <p>Вы работаете над чем-то великим?</p>
              <p>
                Я с удовольствием помогу вам в этом! Напишите мне письмо и мы
                начнем проект прямо сейчас!
              </p>
            </div>

            <Link
              className={styles.hero__btn}
              href="/"
              to="about"
              spy={true}
              smooth={true}
              offset={30}
              duration={500}
            >
              {" "}
              Связать с разработчиком
            </Link>
            {/*  */}
            {!isMobile && (
              <Link
                className={styles.hero__arrow}
                href="/"
                to="contact"
                spy={true}
                smooth={true}
                offset={30}
                duration={500}
              >
                {" "}
                Связать с разработчиком
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
// className= {styles.hero__inner>}

// function doRandom() {
//   throw new Error("Function not implemented.");
// }

// function doRandom() {
//   throw new Error("Function not implemented.");
// }
