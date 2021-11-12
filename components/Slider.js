import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styled from "styled-components";
import { sliderItems } from "../data";

const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
const Image = styled.div`
 height: 60vh ;
 width: 90%;
 background-repeat: no-repeat;
 background-position: center;
`
const Slider = () => {
  return (
    <div>
      <Slide easing="ease">
        {sliderItems.map((sliderItem) => (
          <Container key={sliderItem.id}>
            <Image style={{ backgroundImage: `url(${sliderItem.img})`}}>
            </Image>
          </Container>
        ))}
      </Slide>
    </div>
  );
};

export default Slider;
