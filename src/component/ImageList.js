import ImageItem from "./imageItem";

function ImageList(props) {
  const { images } = props;

  return (
    <div className="imagelist">
      {images.map((image, index) => {
        return <ImageItem key={index} image={image} />;
      })}
    </div>
  );
}
export default ImageList;
