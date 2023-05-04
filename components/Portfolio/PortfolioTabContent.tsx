import { motion } from "framer-motion";
import PortfolioTabItem from "./PortfolioTabItem";
import styles from "../../src/styles/portfolio.module.scss";
interface IPortfoliTabContent {
  TabItems: { id: number; img: string; link: string; title: string }[];
}

const PortfolioTabContent = ({ TabItems }: IPortfoliTabContent) => {
  return (
    <>
      {TabItems.map((item) => (
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={item.id}
          className={styles.portfolio__list__item}
        >
          <PortfolioTabItem
            title={item.title}
            imgSrc={item.img}
            link={item.link}
          />
        </motion.li>
      ))}
    </>
  );
};

export default PortfolioTabContent;
