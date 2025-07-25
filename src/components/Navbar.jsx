import logo from "/src/assets/ram-logo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaRobot } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-10 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-xl">
        <a href="https://www.linkedin.com/in/abhiram-reddy-mulinti-230b27188/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-500 transition-colors duration-200" />
        </a>
        <a href="https://github.com/abhiram0811" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-500 transition-colors duration-200" />
        </a>
        <a href="https://x.com/abcrypt0811?t=NmYy1hk-ITt8RF8p2vYKcg&s=09" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter className="hover:text-black transition-colors duration-200" />
        </a>
        <a href="https://www.instagram.com/abhiram.ry?igsh=NDlxZHhkZmx1aDNs" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-pink-500 transition-colors duration-200" />
        </a>
        <a href="https://www.ainews.com/archive" target="_blank" rel="noopener noreferrer">
          <FaRobot className="hover:text-purple-500 transition-colors duration-200" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

