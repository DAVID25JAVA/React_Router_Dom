import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

function ContactUs() {
    return ( 
        <>
            <div className="flex justify-center gap-20 my-20 flex-wrap">
                <div className="bg-gray-200 px-5 py-5 rounded-md">
                    <span className=" ms-10 font-serif font-bold text-2xl">Get in touch:</span>
                    <p className="font-sans">Fill the form to start a conversation</p>
                    <p className="flex">< CiLocationOn className="mt-7 text-lg"/><span className="pt-3 max-w-40 ms-3 font-semibold">Acme Inc, Street, State, Postal Code</span></p>
                    <p className="flex"><FaPhoneAlt className="mt-4" /><span className="font-mono mt-3 ms-4 font-semibold">+44 123456789</span></p>
                    <p className="flex"><CiMail className="mt-4 text-lg" /><span className="mt-3 ms-4 font-semibold">info@acme.org</span></p>
                </div>
                <div className="right">
                    <form action="">
                       <p>  <input className="border-solid border-gray-700 border-2 rounded-md  px-14 py-3 my-3" type="text" placeholder="Full Name" /></p>
                       <p> <input className="border-solid border-gray-700 border-2 rounded-md  px-14 py-3 " type="text" placeholder="Email" /></p>
                       <p> <input className="border-solid border-gray-700 border-2 rounded-md  px-14 py-3 my-3" type="text" placeholder="Phone Number" /></p>
                       <button className="px-5 rounded-md py-2 ms-24 bg-orange-700 text-white">Submit</button>
                    </form>
                </div>
        </div>
        </>
     );
}

export default ContactUs;