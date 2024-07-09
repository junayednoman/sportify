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
          <FaFacebookF />
        </li>
        <li className="cursor-pointer">
          <FaInstagram />
        </li>
        <li className="cursor-pointer">
          <FaYoutube />
        </li>
        <li className="cursor-pointer">
          <FaLinkedin />
        </li>
      </ul>
    </>
  );
};

export default SSocialIcons;
