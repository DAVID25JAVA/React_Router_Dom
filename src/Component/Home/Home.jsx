function Home() {
  return (
    <>
      {/* Home section code start */}
      <div className="flex justify-evenly mt-20 flex-wrap">
        <div className="">
          <img
            className=" w-96"
            src="https://i.ibb.co/5BCcDYB/Remote2.png"
            alt=""
          />
        </div>
        <div className="content">
          <span className="font-bold text-7xl">React Code</span>
          <h4 className=" font-bold text-2xl mt-2 ms-36">Frontend Developer</h4>
          <button className=" px-4 py-3 ms-52 bg-orange-700 text-white rounded-md font-bold font-serif mt-4">
            Download now
          </button>
        </div>
      </div>

      {/* Bottom Image code start */}
      <div className="flex justify-center align-items-center mt-28">
        <img
          className="w-96"
          src="https://i.ibb.co/2M7rtLk/Remote1.png"
          alt=""
        />
      </div>
      <div className="flex justify-center align-items-center mt-5">
        <span className="font-bold text-4xl mb-10">
          React is Javascript Library
        </span>
      </div>
      {/* Bottom Image code end */}
      {/* Home section code end */}
    </>
  );
}
export default Home;
