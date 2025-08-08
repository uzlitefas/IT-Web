import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="min-h-[80vh] bg-background content-center">
      <div className="grid grid-cols-2 max-lg:grid-cols-1 w-[1200px] m-auto">
        <div className="m-auto space-y-5">
          <div className="flex items-end gap-2">
            <h1 className="text-7xl text-[70px] font-medium">
              Kelajagingni qur!
              <h1 className="text-blue-500">IT Center</h1> bilan.
            </h1>
          </div>{" "}
          <p className="text-foreground/90 text-2xl text-[16px]">
            IT Center — Web Dasturlash Kursi Web dasturlash bu internetda
            ishlaydigan saytlar va ilovalarni yaratish san’ati. Facebook,
            YouTube, Instagram, Telegram Web bularning barchasini dasturchilar
            yaratgan. Endi esa sen ham shu sohani o‘rganib, kelajagingni
            qurishing mumkin.
          </p>
          <Button
            variant={"secondary"}
            className="bg-blue-500 hover:bg-blue-600"
          >
            Bizga Bog'laning
          </Button>
        </div>
        <div className="m-auto">2</div>
      </div>
    </div>
  );
};

export default Hero;
