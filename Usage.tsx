 import Carousel from "./Carousel"; // choose the right path

const imageSlides = [
  "/images/build1.jpg",  
  "/images/build2.jpg",
  "/images/build3.jpg",
  "/images/build4.jpg",
  "/images/build5.jpg",
];

export default function Slider() {
  return (
    <div  className="w-full rounded-md" >
      <h1 className="text-center">Idea</h1>
      <Carousel  slides={imageSlides} autoSlide autoSlideInterval={5000} />
    </div>
  );
}
