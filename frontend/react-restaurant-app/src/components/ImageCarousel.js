import Carousel from "react-bootstrap/Carousel";
import image1 from "../assets/farmbuilding.jpeg";
import image2 from "../assets/farmfreshfastheroimage 2.jpg";
import image3 from "../assets/farmfreshfastheroimage 3.jpeg";

function ImageCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={image1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
         alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
         alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;
