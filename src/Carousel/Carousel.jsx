import ImageSlider from "./ImageSlider";
import './Carousel.css';

const Carousel = () => {

  const slides = [
    { url: "qrstorage.PNG", title: "beach", description: "QRstorage", tech:["React", "Firebase", "Bootstrap5"], a:"https://louishouston.github.io/qrstoragev2/boxes"},
    { url: "", title: "boat", description: "Corpus Colusum", tech:["React", "Firebase", "Bootstrap5"]},
    { url: "", title: "forest" , description: "Rager", tech:["Python", "PIL", "C++"]}
  ];
  const containerStyles = {
    width: "620px",
    height: "360px",
    margin: "0 auto",
  };
  return (
    <div>
      <h1 className="Header">Projects</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      
    </div>
  );
};

export default Carousel;