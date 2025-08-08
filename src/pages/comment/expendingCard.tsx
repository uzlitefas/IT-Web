import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  PiPaintBrushHouseholdDuotone,
  PiCodeDuotone,
  PiGameControllerDuotone,
  PiRobotDuotone,
  PiDeviceMobileCameraDuotone,
} from "react-icons/pi";

type CardOption = {
  icon: JSX.Element;
  main: string;
  sub: string;
  background: string;
};



const options: CardOption[] = [
  {
    icon: <PiPaintBrushHouseholdDuotone />, 
    main: "Graphic Design Lab",
    sub: "Adobe, Figma, UI/UX loyihalash uchun mo‘ljallangan xona",
    background:
      "url(https://avatars.mds.yandex.net/get-altay/6674804/2a00000185e9582c915676871fc8b3facca3/L_height)",
  },
  {
    icon: <PiCodeDuotone />, 
    main: "Web Development Room",
    sub: "HTML, CSS, JavaScript va React o‘rganish uchun xona",
    background:
      "url(https://avatars.mds.yandex.net/get-altay/993981/2a00000185e958457b4a1bd883ad321de862/L_height)",
  },
  {
    icon: <PiGameControllerDuotone />, 
    main: "Game Development Zone",
    sub: "Unity, Unreal Engine asosidagi o‘yin yaratish kurslari",
    background:
      "url(https://it-park.uz/storage/images/newsimage/sss_4888-1024x683_1593080395.jpg)",
  },
  {
    icon: <PiDeviceMobileCameraDuotone />, 
    main: "Mobile App Lab",
    sub: "Android va iOS ilovalar ishlab chiqish muhiti",
    background:
      "url(https://yuz.uz/imageproxy/1200x/https://yuz.uz/file/news/f7a028961734489a8822cc9a460dbbe4.jpg)",
  },
  {
    icon: <PiRobotDuotone />, 
    main: "AI & Robotics Room",
    sub: "Sun'iy intellekt, robototexnika va IoT loyihalar uchun",
    background:
      "url(https://avatars.mds.yandex.net/get-altay/5527230/2a00000185e95839785621b46f9c1624284e/L_height)",
  },
];



export const ExpandingCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex justify-center items-center text-white overflow-hidden relative">
      <a
        href="http://victorofvalencia-blog.tumblr.com"
        target="_blank"
        className="absolute bottom-5 left-5 text-white text-xs"
      >
        Photos from Victor of Valencia on tumblr
      </a>

      <div className="flex gap-2 w-[calc(100%-100px)] max-w-[900px] min-w-[600px] h-[400px]">
        {options.map((option, idx) => {
          const isActive = idx === activeIndex;
          return (
            <div
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={cn(
                "relative flex-shrink-0 rounded-[30px] transition-all duration-500 ease-[cubic-bezier(0.05,0.61,0.41,0.95)] cursor-pointer overflow-hidden",
                isActive
                  ? "flex-grow-[10000] max-w-[600px] rounded-[40px] m-0"
                  : "flex-grow min-w-[60px] m-2"
              )}
              style={{
                backgroundImage: option.background,
                backgroundSize: isActive ? "auto 100%" : "auto 120%",
                backgroundPosition: "center",
              }}
            >
              <div
                className={cn(
                  "absolute bottom-0 left-0 right-0 h-[120px] transition-all duration-500 ease-[cubic-bezier(0.05,0.61,0.41,0.95)]",
                  isActive
                    ? "shadow-[inset_0_-120px_120px_-120px_black,inset_0_-120px_120px_-100px_black]"
                    : "shadow-[inset_0_-120px_0px_-120px_black,inset_0_-120px_0px_-100px_black] -bottom-10"
                )}
              />
              <div
                className={cn(
                  "absolute flex items-center h-10 right-0 transition-all duration-500 ease-[cubic-bezier(0.05,0.61,0.41,0.95)]",
                  isActive ? "bottom-5 left-5" : "bottom-2 left-2"
                )}
              >
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center">
                  {option.icon}
                </div>
                <div className="flex flex-col justify-center ml-3 text-white whitespace-pre">
                  <div
                    className={cn(
                      "text-lg font-bold transition-all",
                      isActive
                        ? "opacity-100 left-0"
                        : "opacity-0 left-5 absolute"
                    )}
                  >
                    {option.main}
                  </div>
                  <div
                    className={cn(
                      "text-sm transition-all delay-100",
                      isActive
                        ? "opacity-100 left-0"
                        : "opacity-0 left-5 absolute"
                    )}
                  >
                    {option.sub}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
