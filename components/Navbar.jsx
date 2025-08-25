"use client";

import { useEffect, useState } from "react";
import ScrollLink from "./scrollLink";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false); // Scroll ke bawah
      } else {
        setShow(true); // Scroll ke atas
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white py-5 px-14 shadow-md z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-4xl font-black">
          SMA<span className="text-[#607459]">KU</span>
        </div>
        <div className="flex items-center gap-14">
          <div className="flex gap-12">
            <ScrollLink to="#tentang" className="text-base font-medium">
              TENTANG KAMI
            </ScrollLink>
            <ScrollLink to="#fasilitas" className="text-base font-medium">
              FASILITAS
            </ScrollLink>
            <ScrollLink to="#metode" className="text-base font-medium">
              METODE PEMBELAJARAN
            </ScrollLink>
            <ScrollLink to="#alumni" className="text-base font-medium">
              ALUMNI
            </ScrollLink>
          </div>
          <button className="font-medium text-base p-4 border border-black hover:bg-[#607459] hover:text-white transition-colors hover:cursor-pointer hover:border-[#607459]">
            DAFTAR SEKARANG
          </button>
        </div>
      </div>
    </nav>
  );
}
