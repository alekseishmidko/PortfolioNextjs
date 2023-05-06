import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import PortfolioSliderItem from "./PortfolioSliderItem";
import { Key } from "react";
import { useMediaQuery } from "../../hooks";
interface IPortfolioSlider {
  TabItems: {
    map: any;
    title: string;
    imgSrc: string;
    link: string;
  };
}
const PortfolioSlider = ({ TabItems }: IPortfolioSlider) => {
  const isMobile485 = useMediaQuery(485);
  const isMobile800 = useMediaQuery(800);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Carousel
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        centerMode={true}
        centerSlidePercentage={isMobile485 ? 75.4 : isMobile800 ? 49.4 : 45}
      >
        {TabItems.map(
          (item: {
            id: Key | null | undefined;
            title: any;
            img: any;
            link: any;
          }) => (
            <PortfolioSliderItem
              key={item.id}
              title={item.title}
              imgSrc={item.img}
              link={item.link}
            />
          )
        )}
      </Carousel>
    </motion.div>
  );
};

export default PortfolioSlider;
