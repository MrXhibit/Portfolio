import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#00ADB5] text-white py-6">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto text-center space-y-2">
        <p className="text-sm md:text-base font-medium">
          © {new Date().getFullYear()} Harish B. All rights reserved.
        </p>
        <div className="flex justify-center gap-4 mt-2">
        <a  
            href="https://github.com/MrXhibit"
            className="hover:text-[#101010]"
          >
            <FaGithub size={29} />
          </a>
          <a 
            
            href="https://www.linkedin.com/in/harish-baskar/"
            className="hover:text-[#0d0d0d]"
          >
            <FaLinkedin  size={29} />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
