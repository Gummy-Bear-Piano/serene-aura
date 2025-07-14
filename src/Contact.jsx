import Header from "./Header/Header";
import { IconPhone } from "@tabler/icons-react";
import { IconMapPin } from "@tabler/icons-react";
import { IconMail } from "@tabler/icons-react";
import Footer from "./Footer";
import MapErrorBoundary from "./MapErrorBoundary";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className=" bg-rose-50 m-10 ">
        <div className="mt-5">
          <h1 className="text-center font-semibold text-3xl p-5 font-sans">
            Write us a letter
          </h1>
        </div>
        <br />
        <br />
        {/* name */}
        <div className="flex p-5 gap-4">
          <input
            className="border-2 border-gray-300 rounded-md p-2 w-full  ml-2 h-18"
            type="text"
            name="First Name"
            id=""
            placeholder="Enter your first name"
          />

          <input
            className="border-2 border-gray-300 rounded-md p-2 w-full ml-2  h-18"
            type="text"
            name="last name"
            id=""
            placeholder="Enter your last name"
          />
        </div>
        {/* email and phone */}
        <div className="flex p-5 gap-4">
          <input
            className="border-2 border-gray-300 rounded-md p-2 w-full ml-2 h-18 "
            type="email"
            name="Email address"
            id=""
            placeholder="Enter your email address"
          />

          <input
            className="border-2 border-gray-300 rounded-md p-2 w-full ml-2 h-18"
            type="number"
            name="phone number"
            id=""
            placeholder="Enter your phone number"
          />
        </div>
        <div className="flex">
          {/* text */}
          <input
            className="border-3 border-gray-300 rounded-md p-5 w-full ml-6 mr-6  h-58"
            type="text"
            name="message"
            id=""
            placeholder="Enter your message"
          />
        </div>
        {/* button */}
        <div className="flex justify-center items-center ">
          <button className="flex  bottom-4  bg-amber-300 text-white p-3 rounded-md z-10 m-6 hover:bg-amber-900 ">
            Shop Now
          </button>
        </div>
      </div>

      <div className="bg-rose-50 m-10 ">
        <div className="flex gap-4 justify-between items-center m-10">
          {/* call */}
          <div className=" bg-amber-100">
            <IconPhone className="mt-5 ml-5" stroke={2} />
            <br />
            <p className="text-2xl  ml-5 ">+9 (245) 326-02-22</p>
            <br />
            <p className="ml-5">
              Perceived end knowledge certainly day sweetness why cordially.
            </p>
          </div>

          {/* location */}
          <div className=" bg-amber-100 m-5">
            <IconMapPin className="mt-5 ml-5" stroke={2} /> <br />
            <p className="text-xl ml-5 ">
              Chicago HQ Estica Cop. Macomb,MI48042
            </p>
            <br />
            <p className="ml-5">
              Suspicion neglected the resolving agreement perceived at an
            </p>
          </div>

          {/* mail box */}
          <div className="justify-center items-center bg-amber-100">
            <IconMail className="mt-5 ml-5" stroke={2} /> <br />
            <p className="text-2xl ml-5 ">Info@example.com</p>
            <br />
            <p className="ml-5">
              Dependent on so extremely delivered by. Yet no jokes worse her
              why.
            </p>
          </div>
        </div>
      </div>
      <MapErrorBoundary>
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1766.499082504866!2d85.29382088871368!3d27.686451594048627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18418484f5cb%3A0x47248c3878873e24!2sBalkhu%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1752043487585!5m2!1sen!2snp"
          width="100%"
          height="400"
          style={{ border: "none" }}
          loading="lazy"
        />
      </MapErrorBoundary>
      <Footer />
    </div>
  );
};

export default Contact;
