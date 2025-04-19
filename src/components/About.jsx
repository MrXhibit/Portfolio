import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaFigma,
  FaNode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiNetlify,
  SiMongodb,
  SiPostman,
  SiRedux,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { DiVisualstudio } from "react-icons/di";
import { IoLogoNpm, IoLogoVercel } from "react-icons/io5";

const About = () => {
  return (
    <div id="about" className="bg-[#222831] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 data-aos="flip-up" data-aos-duration="200" className="text-4xl md:text-5xl font-bold text-center text-[#00ADB5]">
          About Me
        </h1>

        {/* About Me Section */}
        <p data-aos="fade-up" data-aos-duration="300" className="text-lg md:text-xl text-gray-300 text-center leading-relaxed">
          I'm <span className="font-bold text-[#00ADB5]">Harish B</span>,
          Motivated MERN Stack Developer with a strong foundation in full-stack web development,
          specializing in <span className="font-bold text-[#00ADB5]">React.js</span>, Node.js, Express.js, and MongoDB. Experienced in building
          scalable, responsive, and secure web applications with a user-centric approach.
          Passionate about real-time applications, API development, authentication systems, and
          UI/UX principles. Adept at collaborating with cross-functional teams to deliver high-quality
          software solutions.
        </p>

        {/* Skills Section */}
        <div className="space-y-8">
          <h2 data-aos="flip-up" data-aos-duration="200" className="text-2xl font-bold text-[#00ADB5] text-center">
            My Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-[#fff]">
            {/* Skill Icons */}
            <div data-aos="zoom-in" data-aos-duration="200" className="flex flex-col items-center space-y-2">
              <FaHtml5 size={40} className="text-[#e34c26]" />
              <span className="font-bold">HTML5</span>
            </div>
            <div data-aos="zoom-in" data-aos-duration="200" className="flex flex-col items-center space-y-2">
              <FaCss3Alt size={40} className="text-[#264de4]" />
              <span className="font-bold">CSS3</span>
            </div>
            <div data-aos="zoom-in" data-aos-duration="200" className="flex flex-col items-center space-y-2">
              <FaJsSquare size={40} className="text-[#f7df1e]" />
              <span className="font-bold">JavaScript</span>
            </div>
            <div data-aos="zoom-in" data-aos-duration="200" className="flex flex-col items-center space-y-2">
              <SiBootstrap size={40} className="text-[#563d7c]" />
              <span className="font-bold">Bootstrap</span>
            </div>
            <div data-aos="zoom-in" data-aos-duration="200" className="flex flex-col items-center space-y-2">
              <SiTailwindcss size={40} className="text-[#38bdf8]" />
              <span className="font-bold">Tailwind CSS</span>
            </div>
            <div data-aos="zoom-in" data-aos-duration="200" className="flex flex-col items-center space-y-2">
              <FaReact size={40} className="text-[#61dbfb]" />
              <span className="font-bold">React.js</span>
            </div>
            <div data-aos="zoom-in" data-aos-duration="200" className="flex flex-col items-center space-y-2">
              <SiRedux size={40} className="text-[#764abc]" />
              <span className="font-bold">Redux</span>
            </div>
            <div data-aos="zoom-in" data-aos-duration="200" className="flex flex-col items-center space-y-2">
              <TbBrandFramerMotion size={40} className="text-[#fff]" />
              <span className="font-bold">Framer Motion</span>
            </div>
            <div data-aos="zoom-in" data-aos-duration="200" className="flex flex-col items-center space-y-2">
              <IoLogoNpm size={40} className="text-[#CB3837]" />
              <span className="font-bold">NPM</span>
            </div>
            <div data-aos="zoom-in" data-aos-duration="200" className="flex flex-col items-center space-y-2">
              <FaNode size={40} className="text-[#68a063]" />
              <span className="font-bold">Node.js</span>
            </div>
            <div data-aos="zoom-in" data-aos-duration="200" className="flex flex-col items-center space-y-2">
              <SiExpress size={40} className="text-[#fff]" />
              <span className="font-bold">Express.js</span>
            </div>
            <div data-aos="zoom-in" data-aos-duration="200" className="flex flex-col items-center space-y-2">
              <SiMongodb size={40} className="text-[#47a248]" />
              <span className="font-bold">MongoDB</span>
            </div>
            <div data-aos="zoom-in" data-aos-duration="200" className="flex flex-col items-center space-y-2">
              <FaGitAlt size={40} className="text-[#f03832]" />
              <span className="font-bold">Git</span>
            </div>
            <div data-aos="zoom-in" data-aos-duration="200" className="flex flex-col items-center space-y-2">
              <FaGithub size={40} className="text-[#fff]" />
              <span className="font-bold">GitHub</span>
            </div>
            <div data-aos="zoom-in" data-aos-duration="200" className="flex flex-col items-center space-y-2">
              <DiVisualstudio size={40} className="text-[#0078d7]" />
              <span className="font-bold">VS Code</span>
            </div>
            <div data-aos="zoom-in" data-aos-duration="200" className="flex flex-col items-center space-y-2">
              <SiPostman size={40} className="text-[#ef5b25]" />
              <span className="font-bold">Postman</span>
            </div>
            <div data-aos="zoom-in" data-aos-duration="200" className="flex flex-col items-center space-y-2">
              <IoLogoVercel size={40} className="text-[#fff]" />
              <span className="font-bold">Vercel</span>
            </div>
            <div data-aos="zoom-in" data-aos-duration="200" className="flex flex-col items-center space-y-2">
              <SiNetlify size={40} className="text-[#00d1b2]" />
              <span className="font-bold">Netlify</span>
            </div>
            <div data-aos="zoom-in" data-aos-duration="200" className="flex flex-col items-center space-y-2">
              <FaFigma size={40} className="text-[#F24E1E]" />
              <span className="font-bold">Figma</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
