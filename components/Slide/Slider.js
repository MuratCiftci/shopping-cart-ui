import { sliderItems } from "../../data";
import styled from './Slider.module.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const Slider = () => {
  return (
    <div>
      <Slide easing="ease">
        {sliderItems.map((sliderItem) => (
          <div className={styled.eachSlide} key={sliderItem.id}>
            <div className={styled.image} style={{ backgroundImage: `url(${sliderItem.img})`}}>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slider;
