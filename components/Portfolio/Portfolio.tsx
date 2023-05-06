import styles from "../../src/styles/portfolio.module.scss";
import MainTitle from "../MainTitle/MainTitle";
import React from "react";
import PortfolioTabControl from "./PortfolioTabControl";
import PortfolioTabContent from "./PortfolioTabContent";
import {
  hiddenPortfolioItemsArray,
  portfolioItems1,
  portfolioItems2,
  portfolioItems3,
  portfolioItems4,
} from "./PortfolioTabContents";
import { AnimatePresence } from "framer-motion";
import { useMediaQuery } from "../../hooks";
import PortfolioSlider from "./PortfolioSlider";
// import portfolioItems1 from "./PortfolioTabContents";
const Portfolio = () => {
  const isMobile1080 = useMediaQuery(1080);
  const [portfolioTab1, setPortfolioTab1] = React.useState(true);
  const [portfolioTab2, setPortfolioTab2] = React.useState(false);
  const [portfolioTab3, setPortfolioTab3] = React.useState(false);
  const [portfolioTab4, setPortfolioTab4] = React.useState(false);
  const [hiddenPortfolioItems, setHiddenPortfolioItems] = React.useState(false);
  const toggleHiddenPortfolioItems = () => {
    setHiddenPortfolioItems(!hiddenPortfolioItems);
  };
  //
  const handleShowPortfolioItems1 = () => {
    setPortfolioTab1(true);
    setPortfolioTab2(false);
    setPortfolioTab3(false);
    setPortfolioTab4(false);
  };
  const handleShowPortfolioItems2 = () => {
    setPortfolioTab1(false);
    setPortfolioTab2(true);
    setPortfolioTab3(false);
    setPortfolioTab4(false);
  };
  const handleShowPortfolioItems3 = () => {
    setPortfolioTab1(false);
    setPortfolioTab2(false);
    setPortfolioTab3(true);
    setPortfolioTab4(false);
  };
  const handleShowPortfolioItems4 = () => {
    setPortfolioTab1(false);
    setPortfolioTab2(false);
    setPortfolioTab3(false);
    setPortfolioTab4(true);
  };
  //
  const portfolioTabControls = [
    {
      id: 1,
      title: "Веб-сайты",
      isActive: portfolioTab1,
      handler: handleShowPortfolioItems1,
    },
    {
      id: 2,
      title: "UI/UX дизайн",
      isActive: portfolioTab2,
      handler: handleShowPortfolioItems2,
    },
    {
      id: 3,
      title: "Внешний интерфейс",
      isActive: portfolioTab3,
      handler: handleShowPortfolioItems3,
    },
    {
      id: 4,
      title: "Все проекты",
      isActive: portfolioTab4,
      handler: handleShowPortfolioItems4,
    },
  ];
  return (
    <section className={styles.portfolio} id="portfolio">
      <div className="container">
        <MainTitle text="портфолио" />
      </div>
      <div className="sub-container">
        <div className={styles.portfolio__inner}>
          <ul className={styles.portfolio__tabs}>
            {portfolioTabControls.map((item) => (
              <PortfolioTabControl
                key={item.id}
                title={item.title}
                isActive={item.isActive}
                handleShowTab={item.handler}
              />
            ))}
          </ul>
        </div>
        {!isMobile1080 && (
          <ul className={styles.portfolio__list}>
            {portfolioTab1 && (
              <PortfolioTabContent TabItems={portfolioItems1} />
            )}
            {portfolioTab2 && (
              <PortfolioTabContent TabItems={portfolioItems2} />
            )}
            {portfolioTab3 && (
              <PortfolioTabContent TabItems={portfolioItems3} />
            )}
            {portfolioTab4 && (
              <PortfolioTabContent TabItems={portfolioItems4} />
            )}
            <AnimatePresence>
              {hiddenPortfolioItems && (
                <PortfolioTabContent TabItems={hiddenPortfolioItemsArray} />
              )}
            </AnimatePresence>
          </ul>
        )}
        {!isMobile1080 && (
          <div className={styles.portfolio__wrapper}>
            <button
              className={styles.portfolio__more}
              onClick={toggleHiddenPortfolioItems}
            >
              <span className={styles.portfolio__more__text}>
                {hiddenPortfolioItems ? "Свернуть" : "Показать еще проекты"}
              </span>
              <span className={styles.portfolio__more__border} />
            </button>
          </div>
        )}
      </div>
      {isMobile1080 && (
        <div className={styles.portfolio__list__mobile}>
          <div className={styles.portfolio__list__mobile__container}>
            {portfolioTab1 && <PortfolioSlider TabItems={portfolioItems1} />}
            {portfolioTab2 && <PortfolioSlider TabItems={portfolioItems2} />}
            {portfolioTab3 && <PortfolioSlider TabItems={portfolioItems3} />}
            {portfolioTab4 && <PortfolioSlider TabItems={portfolioItems4} />}
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
