import Image from "next/image";
import Container from "../components/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Scrollbar,
} from "swiper";
import "swiper/swiper-bundle.css";
import Card from "../components/Card";
SwiperCore.use([Navigation, Pagination, Autoplay, Scrollbar]);

const Index = () => {
  const comment = [
    { id: 1, title: "kerwen", body: "asd sad sad sad asd asd asdas das das d" },
    { id: 1, title: "kerwen", body: "asd sad sad sad asd asd asdas das das d" },
    { id: 1, title: "kerwen", body: "asd sad sad sad asd asd asdas das das d" },
    { id: 1, title: "kerwen", body: "asd sad sad sad asd asd asdas das das d" },
    { id: 1, title: "kerwen", body: "asd sad sad sad asd asd asdas das das d" },
    { id: 1, title: "kerwen", body: "asd sad sad sad asd asd asdas das das d" },
    { id: 1, title: "kerwen", body: "asd sad sad sad asd asd asdas das das d" },
    { id: 1, title: "kerwen", body: "asd sad sad sad asd asd asdas das das d" },
  ];
  const cards = [
    {
      id: 1,
      title: "kerwen",
      body: "asd sad sad sad asd asd asdas das das d",
      img: "/image 4.png",
    },
    {
      id: 1,
      title: "kerwen",
      body: "asd sad sad sad asd asd asdas das das d",
      img: "/image 4.png",
    },
    {
      id: 1,
      title: "kerwen",
      body: "asd sad sad sad asd asd asdas das das d",
      img: "/image 4.png",
    },
  ];
  return (
    <Container>
      <div className="">
        <div className="flex w-full justify-between gap-16">
          <div className="w-min">
            <div className="w-max text-blue-900 text-[62px] font-extrabold font-['Roboto']">
              Biz bilen <br /> bir ädim öňde
            </div>
            <div
              className="
              
              text-blue-900 text-xl font-semibold font-['Roboto']"
            >
              Islendik ýük amallaryňyzy ýerine ýetirmekde biziň bilen «Bir ädim
              öňde» gidiň!
            </div>
            <div class="w-[184px] h-[61px] px-[23px] py-3.5 bg-blue-900 rounded-2x p-5l justify-center items-center gap-2 inline-flex">
              <div class="text-white text-2xl font-medium font-['Roboto']">
                Ýüz tutmak
              </div>
            </div>
          </div>
          <div className="relative p-4">
            <Image
              src={`/92b26ce3c10810c2fad9fd5b9a02b8a7.png`}
              className="opacity-10 absolute object-cover h-[350px]"
              width={500}
              height={10}
            />
            <Image
              src={`/81198347cd01d5e0d565c5430c2fdc55.png`}
              className="h-[290px] object-cover m-5 object-left-top"
              width={1000}
              height={1000}
            />
          </div>
        </div>

        {/* ---------- */}
        <div className="flex gap-10">
          <div className="flex-1">
            <h1 className="text-neutral-800 text-[32px] font-bold font-['Roboto']">
              Hyzmatlarymyz
            </h1>
            <label>
              We move millions of truckloads through our optimized, connected
              network of carriers, saving money for shippers, increasing
              earnings for drivers, and eliminating carbon waste for our planet.
            </label>
            <Image
              src={"/image 1.png"}
              width={500}
              height={500}
              className="w-[725px] h-[484px] object-cover"
            />
          </div>
          <div className="flex-1 grid grid-cols-2 gap-8">
            <div className="bg-[#FAFAFA] rounded-xl p-5">
              <Image src={`/Group 2762.svg`} width={35} height={35} />
              <h1 className="text-neutral-800 text-[22px] font-semibold font-['Roboto']">
                HOWA GATNAWY
              </h1>
              <h5>
                Access real-time data that delivers insights to transform your
                business.
              </h5>
            </div>
            <div className="bg-[#FAFAFA] rounded-xl p-5">
              <Image src={`/Vector.svg`} width={35} height={35} />
              <h1 className="text-neutral-800 text-[22px] font-semibold font-['Roboto']">
                AWTOULAG GATNAWY
              </h1>
              <h5>
                Access real-time data that delivers insights to transform your
                business.
              </h5>
            </div>
            <div className="bg-[#FAFAFA] rounded-xl p-5">
              <Image src={`/Group 2761.svg`} width={35} height={35} />
              <h1 className="text-neutral-800 text-[22px] font-semibold font-['Roboto']">
                DEŇIZ GATNAWY
              </h1>
              <h5>
                Access real-time data that delivers insights to transform your
                business.
              </h5>
            </div>
            <div className="bg-[#FAFAFA] rounded-xl p-5">
              <Image src={`/Group.svg`} width={35} height={35} />
              <h1 className="text-neutral-800 text-[22px] font-semibold font-['Roboto']">
                DEMIR ÝOL GATNAWY
              </h1>
              <h5>
                Access real-time data that delivers insights to transform your
                business.
              </h5>
            </div>
            <div className="bg-[#FAFAFA] rounded-xl p-5">
              <Image src={`/Group 2760.svg`} width={35} height={35} />
              <h1 className="text-neutral-800 text-[22px] font-semibold font-['Roboto']">
                KONTEÝNER HYZMATY
              </h1>
              <h5>
                Access real-time data that delivers insights to transform your
                business.
              </h5>
            </div>
            <div className="bg-[#FAFAFA] rounded-xl p-5">
              <Image src={`/Vector11.svg`} width={35} height={35} />
              <h1 className="text-neutral-800 text-[22px] font-semibold font-['Roboto']">
                MULTIMODAL GATNAWLAR
              </h1>
              <h5>
                Access real-time data that delivers insights to transform your
                business.
              </h5>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-black text-[32px] font-bold mb-10">
            Kompaniýamyz hakynda
          </h1>
          <div>
            <div className="flex gap-3">
              <div className="bg-sky-50 rounded-[29px] flex flex-col justify-center items-center p-10">
                <div className="bg-[#185196] rounded-full p-2">
                  <Image
                    src={`/mingcute_building-6-fill.svg`}
                    width={31}
                    height={31}
                  />
                </div>
                <h2 className="text-black text-[28px] font-bold w-min">
                  Hemişelik müşderiler
                </h2>
                <h3 className="text-sky-800 text-[28px] font-normal mt-10">
                  50
                </h3>
              </div>
              <Image src={`/dotted line.svg`} width={90} height={26} />
              <div className="bg-sky-50 rounded-[29px] flex flex-col justify-center items-center p-10">
                <div className="bg-[#185196] rounded-full p-2">
                  <Image
                    src={`/heroicons-solid_user-group.svg`}
                    width={31}
                    height={31}
                  />
                </div>
                <h2 className="text-black text-[28px] font-bold w-min">
                  Hyzmatdaş ýurtlar
                </h2>
                <h3 className="text-sky-800 text-[28px] font-normal mt-10">
                  15
                </h3>
              </div>
              <Image src={`/dotted line.svg`} width={90} height={26} />
              <div className="bg-sky-50 rounded-[29px] flex flex-col justify-center items-center p-10">
                <div className="bg-[#185196] rounded-full p-2">
                  <Image
                    src={`/solar_buildings-bold.svg`}
                    width={31}
                    height={31}
                  />
                </div>
                <h2 className="text-black text-[28px] font-bold w-min">
                  Ýokary hilli hünarmenler
                </h2>
                <h3 className="text-sky-800 text-[28px] font-normal mt-10">
                  100
                </h3>
              </div>
              <Image src={`/dotted line.svg`} width={90} height={26} />
              <div className="bg-sky-50 rounded-[29px] flex flex-col justify-center items-center p-10">
                <div className="bg-[#185196] rounded-full p-2">
                  <Image
                    src={`/fluent_building-people-16-filled.svg`}
                    width={31}
                    height={31}
                  />
                </div>
                <h2 className="text-black text-[28px] font-bold w-min">
                  Ähli şahamçalar
                </h2>
                <h3 className="text-sky-800 text-[28px] font-normal mt-10">
                  10
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-10">
          <h1 className="text-black text-[32px] font-bold mb-10">
            Hyzmatdaşlarymyz
          </h1>
          <div className="flex gap-3">
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white border-[1px] border-[#F0F0F0] rounded-md p-2">
                <Image
                  src={`/image 3.png`}
                  width={310}
                  height={32}
                  className="object-contain w-[310px] h-[100px] "
                />
              </div>
              <div className="bg-white border-[1px] border-[#F0F0F0] rounded-md p-2">
                <Image
                  src={`/image 9.png`}
                  width={310}
                  height={32}
                  className="object-contain w-[310px] h-[100px] "
                />
              </div>
              <div className="bg-white border-[1px] border-[#F0F0F0] rounded-md p-2">
                <Image
                  src={`/image 7.png`}
                  width={310}
                  height={32}
                  className="object-contain w-[310px] h-[100px] "
                />
              </div>
              <div className="bg-white border-[1px] border-[#F0F0F0] rounded-md p-2">
                <Image
                  src={`/image 4.png`}
                  width={310}
                  height={32}
                  className="object-contain w-[310px] h-[100px] "
                />
              </div>
              <div className="bg-white border-[1px] border-[#F0F0F0] rounded-md p-2">
                <Image
                  src={`/image 5.png`}
                  width={310}
                  height={32}
                  className="object-contain w-[310px] h-[100px] "
                />
              </div>
              <div className="bg-white border-[1px] border-[#F0F0F0] rounded-md p-2">
                <Image
                  src={`/image 8.png`}
                  width={310}
                  height={32}
                  className="object-contain w-[310px] h-[100px] "
                />
              </div>
            </div>
            <div>
              <Image
                src={`/Rectangle 87.png`}
                width={1000}
                height={1000}
                className="h-[500px] object-contain"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-black text-[32px] font-bold my-10">Teswirler</h1>
          <div className="relative w-[70vw]">
            <Swiper
              modules={{ Autoplay }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              navigation
              loop
              slidesPerView={3}
              spaceBetween={30}
              className=" px-10 mb-24 "
            >
              {comment &&
                comment.map((item, index) => (
                  <SwiperSlide key={index} className="text-center">
                    <div className="border-2 border-gray-300 rounded-md relative">
                      <div className="mb-10 mt-5">{item.body}</div>
                      <div className="absolute bottom-3 right-3 font-bold">
                        {item.title}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex justify-between gap-4 items-center w-8/12">
            <h1 className="text-black text-[32px] font-bold my-10 mr-24">
              Habarlar
            </h1>
            <h2 className="text-center">Hemmesini gör</h2>
          </div>
          <div className="flex gap-10">
            {cards.map((item, index) => (
              <Card item={item} i={index} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Index;
