"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const metode = [
    {
      img: "/computer.png",
      alt: "computer",
      title: "Teknologi Cukup",
      desc: "agar murid bisa mengikuti perkembangan zaman",
    },
    {
      img: "/bank.png",
      alt: "bank",
      title: "Mencintai Lingkungan",
      desc: "pentingnya menjaga dan mencintai lingkungan",
    },
    {
      img: "/team.png",
      alt: "team",
      title: "Hormat Pada Guru",
      desc: "menjaga sopan santun terhadap yang lebih tua",
    },
    {
      img: "/teamwork.png",
      alt: "teamwork",
      title: "Saling Kerja Sama",
      desc: "Untuk memecahkan masalah, murid harus saling bekerja sama",
    },
  ];

  const alumni = [
    {
      name: "Ahmad Diallo",
      img: "/ahmad.png",
      testimonial:
        "Sekolah ini bukan hanya tempat belajar, tapi tempat saya menemukan arah hidup. Guru-guru di sini mengajar dengan hati dan ketulusan. Banyak pelajaran hidup yang saya dapatkan di luar kelas. Teman-teman dan lingkungan sekolah memberi semangat luar biasa.",
    },
    {
      name: "Fajri Samir",
      img: "/fajri.png",
      testimonial:
        "Belajar di sekolah ini membuat saya percaya diri untuk menghadapi masa depan. Setiap guru selalu mendukung muridnya untuk terus maju, baik dalam akademik maupun non-akademik. Saya merasa dihargai, didorong, dan diarahkan dengan penuh perhatian.",
    },
    {
      name: "Alex Marsudin",
      img: "/alex.png",
      testimonial:
        "Di sekolah ini saya belajar arti persahabatan sejati. Selain ilmu, banyak pengalaman hidup yang sangat berarti. Saya bangga pernah menjadi bagian dari sekolah ini, karena semuanya meninggalkan kesan yang mendalam bagi perjalanan hidup saya. Terima kasih untuk kenangan dan ilmu yang tak ternilai.",
    },
  ];

  const [selected, setSelected] = useState(alumni[0]); // default Ahmad

  return (
    <main className="w-full justify-center items-center flex flex-col py-10">
      <section className="w-full flex justify-between items-center">
        <div className="flex flex-col gap-7 max-w-[494px] justify-center items-start">
          <h1 className="font-black text-5xl leading-14">
            SMA <span className="text-[#607459]">NEGERI</span> KUPANG
          </h1>
          <p className="text-[#4C4C4C] font-medium text-lg">
            Tempat membentuk generasi yang berkarakter, menjunjung tinggi
            kedisiplinan, serta memiliki kepedulian dan tanggung jawab terhadap
            kelestarian lingkungan.
          </p>
          <Link
            href="/"
            className="group flex items-center gap-3 text-lg font-medium p-3 w-fit border hover:bg-[#607459] hover:text-white transition-colors cursor-pointer"
          >
            Selengkapnya
            <span>
              <img
                src="/arrow.svg"
                alt="arrow"
                className="transition group-hover:invert"
              />
            </span>
          </Link>
        </div>

        {/* Gambar menyesuaikan tinggi section */}
        <div className="flex justify-center items-center max-w-[484px]">
          <img src="/hero.png" className="" alt="Hero" />
        </div>
      </section>
      <section className="w-full flex items-center mt-40 bg-[#607459] min-h-[500px]">
        <div
          className="relative flex-1"
          style={{
            backgroundImage: "url('/pattern-2.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover", // atau "cover" kalau mau penuh
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col gap-8 justify-center items-start  max-w-[400px] self-start pt-8 pb-40 pl-12">
            <h2 className="font-bold text-4xl text-white leading-12">
              SARANA PRASARANA
            </h2>
            <p className="text-base font-medium text-white">
              SMA negeri kupang menyediakan berbagai sarana dan fasilitas
              pendukung untuk menunjang kenyamanan dan efektivitas proses
              pembelajaran para santri.
            </p>
            <Link
  href="/"
  className="group flex items-center gap-3 text-base font-medium p-3 w-fit border hover:border-white hover:bg-white text-white hover:text-black transition-colors cursor-pointer"
>
  lebih lanjut
  <span>
    <img
      src="/arrow.svg"
      alt="arrow"
      className="transition filter invert group-hover:invert-0"
    />
  </span>
</Link>
          </div>
        </div>
        <div
          className="relative flex-1 py-63 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/sarana-1.png')" }}
        >
          <div className="absolute bottom-0 w-full flex justify-between items-center px-8 pb-6">
            <p className="text-base font-medium text-white">Lapangan sekolah</p>
            <div className="flex items-center gap-6">
              <div className="border rounded-full p-3 border-white">
                <img src="/light-arrow-left.svg" alt="light arrow" />
              </div>
              <div className="border rounded-full p-3 border-white">
                <img src="/light-arrow-right.svg" alt="light arrow" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col items-center gap-16 mt-40">
        <div className="flex flex-col items-center justify-center gap-3">
          <h2 className="font-extrabold text-4xl">
            <span className="text-[#607459]">METODE</span> PEMBELAJARAN
          </h2>
          <p className="text-[#4C4C4C] font-medium text-lg text-center max-w-xl">
            yang tertera disini adalah sebagian dari metode pembelajaran SMAKU
          </p>
        </div>

        {/* pakai grid biar seragam */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-6xl">
          {metode.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-sm p-6 flex flex-col items-center gap-4 h-full"
            >
              <img src={item.img} alt={item.alt} className="w-[60px]" />
              <h3 className="font-semibold text-xl text-center">
                {item.title}
              </h3>
              <p className="font-medium text-[#4C4C4C] text-base text-center">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section
        className="w-full flex items-center mt-40 bg-[#607459] py-18 px-14 relative"
        style={{
          backgroundImage: "url('/pattern.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain", // atau "cover" kalau mau penuh
          backgroundPosition: "center",
        }}
      >
        {/* KIRI: daftar alumni */}
        <div className="flex flex-col gap-7 justify-center items-start flex-1">
          {alumni.map((alumnus, index) => (
            <div
              key={index}
              onClick={() => setSelected(alumnus)}
              className={`flex gap-5 p-5 justify-center items-center cursor-pointer transition-all duration-300 ${
                selected.name === alumnus.name
                  ? "bg-white shadow-lg"
                  : "bg-transparent"
              }`}
            >
              <img src={alumnus.img} alt={alumnus.name} className="w-10" />
              <p
                className={`font-medium text-base ${
                  selected.name === alumnus.name ? "text-black" : "text-white"
                }`}
              >
                {alumnus.name}
              </p>
            </div>
          ))}
        </div>

        {/* KANAN: konten testimoni */}
        <div className="flex flex-col gap-8 flex-2">
          <h2 className="text-3xl font-extrabold text-white">
            APA KATA <span className="text-[#C3E7B6]">ALUMNI</span> ?
          </h2>
          <div className="flex items-center gap-3">
            <img src="/star.svg" alt="star" />
            <p className="font-extrabold text-6xl text-white">5.0</p>
          </div>
          <p className="text-base text-white">“{selected.testimonial}”</p>
        </div>
      </section>
      <footer className="w-full mt-40 flex flex-col gap-6">
        <div className="flex justify-between">
          <div className="flex flex-col gap-4 max-w-[400px]">
            <h4 className="font-black text-5xl">
              SMA<span className="text-[#607459]">KU</span>
            </h4>
            <p className="text-[#4C4C4C] font-medium text-sm">
              Tempat membentuk generasi yang berkarakter, menjunjung tinggi
              kedisiplinan, serta memiliki kepedulian dan tanggung jawab
              terhadap kelestarian lingkungan.
            </p>
          </div>
          <div className="flex gap-10">
            <p className="font-medium text-base">TENTANG KAMI</p>
            <p className="font-medium text-base">FASILITAS</p>
            <p className="font-medium text-base">METODE PEMBELAJARAN</p>
            <p className="font-medium text-base">ALUMNI</p>
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <div className="bg-[#607459] p-2.5 rounded-full border-2 border-white shadow-lg">
              <Link href="/" className="">
                <img src="/instagram.svg" alt="Instagram" />
              </Link>
            </div>
            <div className="bg-[#607459] p-2.5 rounded-full border-2 border-white shadow-lg">
              <Link href="/" className="">
                <img src="/facebook.svg" alt="Facebook" />
              </Link>
            </div>
            <div className="bg-[#607459] p-2.5 rounded-full border-2 border-white shadow-lg">
              <Link href="/" className="">
                <img src="/twitter.svg" alt="Twitter" />
              </Link>
            </div>
            <div className="bg-[#607459] p-2.5 rounded-full border-2 border-white shadow-lg">
              <Link href="/" className="">
                <img src="/tiktok.svg" alt="Tiktok" />
              </Link>
            </div>
          </div>
          <div>
            <p className="text-base">© 2025 SMAKU. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
