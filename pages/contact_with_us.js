import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Container from "../components/Container";

const ContactWithUs = ({ item, i }) => {
  return (
    <Container>
      <div>
        <h1 className="text-black text-[32px]">Habarlaşmak</h1>
        <div>
          <div className="flex">
            <Image src={""} width={1000} height={1000} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactWithUs;
