import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Container from "../../components/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Scrollbar,
} from "swiper";
import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation, Pagination, Autoplay, Scrollbar]);

const Index = ({ item, i }) => {
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
    {
      id: 1,
      title: "kerwen",
      body: "asd sad sad sad asd asd asdas das das d",
      img: "/image 4.png",
    },
  ];
  return (
    <Container>
      <div>
        <div className="flex">
          <div>
            <h1 className="text-black text-[32px] font-bold py-10">About us</h1>
            <h2>
              «Dogan Halkara Logistika» Hojalyk jemgyýeti ýerli we halkara
              düzgünlere laýyklykda, ýük gatnawlaryny amala aşyrýan
              kompaniýalaryň biri hökmünde tanalýar. Açylanyna sähel wagt
              geçendigine garamazdan, hojalyk jemgyýetimiz iň ygtybarly we işjeň
              ýük gatnawlaryny amala aşyrýan kompaniýalaryň birine öwrülmegi
              başardy.
            </h2>
          </div>
          <Image
            src={`/image-removebg-preview (5) 1.png`}
            width={1000}
            height={1000}
          />
        </div>
        <div className="">
          <Image
            src={`/Screen Shot 2022-06-18 at 19.05 1.png`}
            width={1000}
            height={1000}
            className="w-full"
          />
        </div>
        <div className="bg-[#F7F7FA] flex justify-between gap-44 p-44 rounded-md">
          <h1 className="font-bold text-2xl">Logistic</h1>
          <div>
            Kompaniýamyz ýerli we halkara düzgünlere laýyklykda, ýük
            gatnawlaryny amala aşyrýan kompaniýalaryň biri hökmünde tanalýar.
            Açylanyna sähel wagt geçendigine garamazdan, hojalyk jemgyýetimiz iň
            ygtybarly we işjeň ýük gatnawlaryny amala aşyrýan kompaniýalaryň
            birine öwrülmegi başardy.
          </div>
        </div>
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
            {cards &&
              cards.map((item, index) => (
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
    </Container>
  );
};

export default Index;
