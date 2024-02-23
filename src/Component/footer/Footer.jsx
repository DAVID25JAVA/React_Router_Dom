import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="flex justify-around flex-wrap w-full h-52 bg-gray-200">
        <div className="">
          <img
            className="h-32 mt-10 mx-20 rounded-md"
            src="IMAGE/logo.png"
            alt=""
          />
        </div>
        <div className=" flex mt-10 gap-20 flex-wrap">
          <div>
            <h2 className="font-bold mb-4">RESOURCES</h2>
            <ul>
              <NavLink to="/home">
                {" "}
                <li className="mb-3">Home</li>
              </NavLink>
              <NavLink to="/about">
                <li>About</li>
              </NavLink>
            </ul>
          </div>

          <div>
            <h2 className="font-bold mb-4">FOLLOW US</h2>
            <ul>
              <NavLink to="">
                {" "}
                <li className="mb-3">Github</li>
              </NavLink>
              <NavLink to="">
                {" "}
                <li>Discord</li>
              </NavLink>
            </ul>
          </div>

          <div>
            <h2 className="font-bold mb-4">LEGAL</h2>
            <ul>
              <NavLink to="">
                <li className="mb-3">Privacy policy</li>
              </NavLink>
              <NavLink to="">
                <li>Terms & Condition</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
