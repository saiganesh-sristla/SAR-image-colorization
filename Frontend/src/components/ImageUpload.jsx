const ImageUpload = () => {
  return (
    <div className="flex flex-col items-center gap-2 m-5 p-5">
      <label className="font-semibold text-xl" for="file" >Select Image</label>
      <input className="pl-20" type="file" id="file"></input>
      <button className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">Submit</button>
    </div>
  );
};

export default ImageUpload;
