function imageItem(props) {
  const { image } = props;
  console.log(image);
  return (
    <div>
      <img  className="imageListImg" src={image.urls.small} alt={image.alt_descrpition}/>
    </div>
  );
}

export default imageItem;
