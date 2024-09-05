import ImageCard from "./components/ImageCard";
import r from "../assets/random.png";
import ImageUpload from "./components/ImageUpload";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-slate-400 h-screen">
      <Navbar/>
      <ImageUpload/>
      <div className="flex justify-center gap-10 mt-20 px-10">
        <ImageCard src={r} alt={"original image"} title={"Original Image"}/>
        <ImageCard src={r} alt={"Colorized image"} title={"Colorized Image"}/>
      </div>
    </div>
  );
}

export default App;
