import "remixicon/fonts/remixicon.css";
import Dock from "./Dock/Dock";
import { VscHome, VscArchive, VscAccount } from "react-icons/vsc";
import { RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  const items = [
    { icon: <VscHome size={18} />, label: "Home", onClick: () => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscAccount size={18} />, label: "About Me", onClick: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscArchive size={18} />, label: "Project", onClick: () => document.getElementById("project")?.scrollIntoView({ behavior: "smooth" }) },
  ];

  return (
    <div className="mt-32 pb-8 flex flex-col items-center relative z-10">
      {/* Flex container adaptif */}
      <div className="w-full flex flex-col md:flex-row items-center md:justify-between gap-6">
        
        {/* Judul - paling atas di mobile */}
        <h1 className="text-2xl font-bold order-1 md:order-none">
          Portofolio © 2025 Timotius Avaro Andrelo Putra.
        </h1>

        {/* Ikon Sosmed - di tengah di mobile */}
       <div className="flex gap-4 order-2 md:order-none items-center">

  <a href="https://github.com/timotiusavaroandreloputra" target="_blank">
    <i className="ri-github-fill ri-2x"></i>
  </a>

  <a href="https://www.instagram.com/vaerdano/" target="_blank">
    <i className="ri-instagram-fill ri-2x"></i>
  </a>

  {/* ✅ WhatsApp */}
  <a
    href="https://wa.me/62895606091424?text=Halo%20saya%20dari%20portofolio%20react%20anda"
    target="_blank"
    className="text-white/80 hover:text-white hover:scale-110 transition duration-300">
    <RiWhatsappFill size={26} />
  </a>

</div>


        {/* Dock - paling bawah di mobile */}
        <div className="order-3 md:order-none mt-15 md:mt-0  md:mb-0">
          <Dock 
            items={items}
            panelHeight={30}
            baseItemSize={60}
            magnification={100}
          />
        </div>

      </div>
    </div>
  );
};

export default Footer;
