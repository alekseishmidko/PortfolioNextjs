import styles from "../../src/styles/portfolio.module.scss";
import ArrowSVG from "../ArrowSVG/ArrowSVG";
interface IPortfolioTabControl {
  title: string;
  isActive: boolean;
  handleShowTab: () => void;
}
const PortfolioTabControl = ({
  title,
  isActive,
  handleShowTab,
}: IPortfolioTabControl) => {
  return (
    <li className={styles.portfolio__tabs__item}>
      <button
        className={styles.portfolio__tabs__item__btn}
        onClick={handleShowTab}
      >
        <span
          className={styles.portfolio__tabs__item__btn__text}
          style={{ color: isActive ? "#f2f2f2" : "#b7bfd1" }}
        >
          {title}
        </span>
        <span className={styles.portfolio__tabs__item__btn__arrow}>
          {<ArrowSVG />}
        </span>
        <span className={styles.portfolio__tabs__item__btn__border}></span>
      </button>
    </li>
  );
};

export default PortfolioTabControl;
