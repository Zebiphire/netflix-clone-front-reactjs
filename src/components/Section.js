const Section = ({ category, images }) => {
  return (
    <div className="container">
      <p className="title">{category}</p>
      <div className="list">
        {images.map((image, index) => {
          return <img key={index} alt="movie" src={image} />;
        })}
      </div>
    </div>
  );
};

export default Section;
