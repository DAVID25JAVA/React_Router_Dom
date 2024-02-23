import {NavLink} from "react-router-dom"

function Header() {
    return (
        <>
            {/* Nav code start */}
            <div className=" w-100 h-16 shadow-md flex fixed-top flex-wrap  justify-between " style={{backgroundColor:"#EFFAEA"}}>
                <div className="img">
                    <img className="w-14 ms-10 mt-1 rounded-md" src="IMAGE/logo.png" alt="" />
                 </div>
                <div className="nav-content">
                <ul className="flex justify-center align-items-center pt-4 gap-6 ">
                    < NavLink  to="/home" className={({isActive})=> `text-gray-600  font-serif ${isActive ? "text-orange-600" : "text-gray-600" } text-lg font-semibold` } ><li>Home</li></ NavLink>
                    < NavLink  to="/about" className={({isActive})=> `text-gray-600  font-serif ${isActive ? "text-orange-600" : "text-gray-600" } text-lg font-semibold` }><li>About</li></ NavLink>
                    < NavLink  to="/contact" className={({isActive})=> `text-gray-600  font-serif ${isActive ? "text-orange-600" : "text-gray-600" } text-lg font-semibold` } ><li>ContactUs</li></ NavLink>
                 </ul>
                </div>
                <div className="search">
                    <span className="me-4 font-bold text-lg cursor-pointer">Log In</span>
                    <button className="px-4 me-10 mt-2 py-3 bg-orange-700 text-white font-bold rounded-md">Get Started</button>
                </div>
            </div>
            {/* nav code end */}

            
        
        </>
    )
}
export default Header