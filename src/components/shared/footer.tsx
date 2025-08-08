import {
  FaTelegramPlane,
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
  FaUserAlt,
} from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-10">
      <div className="container mx-auto">
        <div className="w-full border-b border-gray-700 pb-6">
          <div className="flex flex-col md:flex-row md:gap-16 items-start md:items-start">
            <div className="flex items-center space-x-3 mb-6 md:mb-0 mt-10 ml-[360px] ">
              <FaCircleUser className="text-4xl text-green-400" />
              <span className="text-2xl font-bold text-green-400">
                IT Center
              </span>
            </div>

            <div className="w-full ml-[60px] md:w-[330px] mb-6 md:mb-0">
              <h3 className="font-medium text-xl mb-2 text-amber-50">
                Biz haqimizda
              </h3>
              <p className="text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus in odio perspiciatis deleniti similique quo atque
                quia quae corrupti ullam modi vero veritatis repellendus, quod
                aut! Quia corporis natus atqu.
              </p>
            </div>

            <div className="ml-[50px]">
              <h4 className="text-lg font-semibold mb-4">
                Bizni kuzatib boring
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-base">
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-blue-400 transition duration-300"
                >
                  <FaTelegramPlane />
                  Telegram
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-pink-500 transition duration-300"
                >
                  <FaInstagram />
                  Instagram
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-gray-300 transition duration-300"
                >
                  <FaGithub />
                  GitHub
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-blue-300 transition duration-300"
                >
                  <FaTwitter />
                  Twitter
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-green-400 transition duration-300"
                >
                  <FaWhatsapp />
                  WhatsApp
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-red-600 transition duration-300"
                >
                  <FaYoutube />
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <FaUserAlt />
            <span>Alisher</span>
          </div>
          <div className="flex items-center gap-2">
            <FaUserAlt />
            <span>Suntonbek</span>
          </div>
          <div className="flex items-center gap-2">
            <FaUserAlt />
            <span>Shamsiddin</span>
          </div>
          <div className="flex items-center gap-2">
            <FaUserAlt />
            <span>Ibrohim</span>
          </div>
          <div className="flex items-center gap-2">
            <FaUserAlt />
            <span>Aziza</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
