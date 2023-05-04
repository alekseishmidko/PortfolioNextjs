/* eslint-disable @next/next/no-img-element */
import styles from "../../src/styles/portfolio.module.scss";
interface IPortfolioTabItem {
  title: string;
  imgSrc: string;
  link: string;
}

const PortfolioTabItem = ({ title, imgSrc, link }: IPortfolioTabItem) => {
  return (
    <div className={styles.portfolio__list__item__inner}>
      <a className={styles.portfolio__list__item__link} href={link}>
        <img
          src={imgSrc}
          alt={title}
          className={styles.portfolio__list__item__img}
        />
        <h3 className={styles.portfolio__list__item__title}>{title}</h3>
      </a>
    </div>
  );
};

export default PortfolioTabItem;
