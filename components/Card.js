import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Card = ({ item, i }) => {
  return (
    <div key={i} className="rounded-md border-2 border-gray-400 ">
      <Image
        src={item.img}
        width={500}
        height={500}
        className="w-full h-44 rounded-t-md"
      />
      <div className="my-5 px-6">
        <div className="font-bold">{item.title}</div>
        <div>{item.body}</div>
      </div>
    </div>
  );
};

export default Card;
