import Head from "next/head";
import Link from "next/link";

const Container = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Logistic</title>
        <meta
          name="description"
          content="This is the description of my page."
        />

        <link rel="icon" href="" />
      </Head>
      <nav className="w-full bg-[#023D94]">navbar</nav>
      <nav className="shadow-md flex justify-between w-full px-10 py-2 items-center">
        <div className="text-[#216DCA] text-2xl">Logistic</div>
        <ul className="flex gap-3 ">
          <li>
            <Link href={`/`}>Baş sahypa</Link>
          </li>
          <li>
            <Link href={`/`}>Biz barada</Link>
          </li>
          <li>
            <Link href={`/`}>Hyzmatlar</Link>
          </li>
          <li>
            <Link href={`/`}>Habarlar</Link>
          </li>
          <li>
            <Link href={`/`}>Habarlaşmak</Link>
          </li>
        </ul>
        <div class="w-[130px] h-10 px-4 py-2 bg-blue-900 rounded-[10px] justify-center items-center gap-2 inline-flex">
          <div class="w-5 h-6 relative"></div>
          <div class="text-white text-sm font-normal font-['Roboto']">
            Şahsy otag
          </div>
        </div>
      </nav>
      {/* --------------------------------main place ------------------- */}
      <div className="flex m-auto justify-center w-9/12">{children}</div>
      {/* --------------footer-------------- */}
      <footer className="bg-[#023D94] flex  justify-center gap-44 pt-10 mt-10">
        <div className="text-white text-2xl">Logistic</div>
        <div>
          <table className="text-white">
            <tr>
              <th>Kompaniýamyz</th>
            </tr>
            <tr>
              <td>Biz barada</td>
            </tr>
            <tr>
              <td>Hyzmatlar</td>
            </tr>
            <tr>
              <td>Habarlar</td>
            </tr>
            <tr>
              <td>Habarlaşmak</td>
            </tr>
          </table>
        </div>
      </footer>
    </div>
  );
};

export default Container;
