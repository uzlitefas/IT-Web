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
            <div className="flex items-center space-x-3 mb-6 md:mb-0 mt-10 ml-[260px] ">
              <FaCircleUser className="text-4xl text-green-400" />
              <span className="text-2xl font-bold text-green-400">
                IT Center
              </span>
            </div>

            <div className="w-full ml-[60px] md:w-[330px] mb-6 md:mb-0">
              <h3 className="font-medium text-xl mb-2 text-amber-50">
                Biz haqimizda
              </h3>
              <div>
                <a className="text-cyan-500 gap-2" href="#">
                  <span className="mr-2">Email pochtamiz :</span>
                  <span className="text-white">teamsoftware@gmail.com</span>
                </a>
                <h3 className="">
                  <span className="text-blue-400">Asoschi :</span> Timur Ahmatov
                </h3>
                <h3 className="">
                  <span className="text-green-600">Manzil :</span>
                  <span className="ml-2">
                    Jizzax viloyati Zarbdor tumani Adliya bo`limi 1 qavati
                    binosi
                  </span>
                </h3>
              </div>
              <div className="flex gap-2">
                <h3 className="text-red-500">Telefon raqam :</h3>
                <span>+998 77 030 4321</span>
              </div>
            </div>

            <div className="ml-[50px]">
              <h4 className="text-lg font-semibold mb-4">
                Bizni kuzatib boring
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-base">
                <a
                  href="https://telegram.com/"
                  className="flex items-center gap-2 hover:text-blue-400 transition duration-300"
                >
                  <FaTelegramPlane />
                  Telegram
                </a>
                <a
                  href="https://instagram.com"
                  className="flex items-center gap-2 hover:text-pink-500 transition duration-300"
                >
                  <FaInstagram />
                  Instagram
                </a>
                <a
                  href="https://github.com/AhmatovT"
                  className="flex items-center gap-2 hover:text-gray-300 transition duration-300"
                >
                  <FaGithub />
                  GitHub
                </a>
                <a
                  href="https://twitter.com"
                  className="flex items-center gap-2 hover:text-blue-300 transition duration-300"
                >
                  <FaTwitter />
                  Twitter
                </a>
                <a
                  href="https://whatsapp.com"
                  className="flex items-center gap-2 hover:text-green-400 transition duration-300"
                >
                  <FaWhatsapp />
                  WhatsApp
                </a>
                <a
                  href="https://youtube.com"
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
