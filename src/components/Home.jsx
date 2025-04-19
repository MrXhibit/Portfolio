import Typewriter from "typewriter-effect";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";


const Home = () => {
  return (
    <div id="home" className="bg-[#222831] text-[#EEEEEE]">
      <div  className="max-w-[85%] mx-auto font-inter grid grid-cols-1 md:grid-cols-2 gap-8 items-center  min-h-screen">
        {/* Left Section */}
        <div  className="order-2 lg:order-1 flex flex-col items-center md:items-start justify-start space-y-5 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">
            I'm <span className="text-[#00ADB5]">Harish B</span>
          </h1>
          <h2 className="text-xl sm:text-3xl font-bold flex gap-2">
            <span className="text-[#00ADB5]">I'm a</span>
            <Typewriter
              options={{
                strings: [
                  "React.js Developer.",
                  "MERN Stack Developer.",
                  "Freelancer.",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </h2>
          {/* About Me */}
          <p className="text-lg md:text-xl text-gray-300 font-medium">
          I am a frontend developer with expertise in React.js and Tailwind CSS, passionate about building responsive, user-friendly UIs. I'm expanding my skill set with the MERN stack to create dynamic, full-stack web applications.
          </p>

          {/* Contact Information */}

          {/* <div className="bg-[#fe5617] px-5 py-2 rounded-2xl font-bold "> */}
            <a download href="/Harish_Resume.pdf"  className="bg-[#00ADB5] px-5 py-2 rounded-2xl font-bold flex items-center gap-2 ">Download CV <FiDownload className="text-[20px]"/>
            </a>
          {/* </div> */}
        </div>

        {/* Right Section */}
        <div   className="order-1 lg:order-2 flex justify-center md:justify-start lg:justify-end items-center">
          <img
            className="w-[85%] rounded-[50px]"
            src="/PASS_SMALL.png"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
