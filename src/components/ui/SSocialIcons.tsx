import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const SSocialIcons = () => {
  return (
    <>
      <ul className="flex items-center gap-4 text-xl">
        <li className="cursor-pointer">
          <a href="/#" target="_blank">
            <FaFacebookF />
          </a>
        </li>
        <li className="cursor-pointer">
          <a href="/#" target="_blank">
            <FaInstagram />
          </a>
        </li>
        <li className="cursor-pointer">
          <a href="/#" target="_blank">
            <FaYoutube />
          </a>
        </li>
        <li className="cursor-pointer">
          <a href="/#" target="_blank">
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </>
  );
};

export default SSocialIcons;
