const ImageCard = (props) => {

  return (
    <div className="bg-slate-800 shadow-lg w-72">
      <div className="text-center p-2">
        <img className="w-full rounded-lg" src={props.src} alt={props.alt}></img>
        <span className="font-medium text-xl p-2 text-white ">{props.title}</span>
      </div>
    </div>
  );
};

export default ImageCard;
