export default function Education() {
  const items = [
    {
      year: "2023 - Sekarang",
      title: "Mahasiswa Sistem Informasi",
      place: "Universitas Tarumanagara",
      desc: "Belajar analisis sistem, pemrograman web, dan logika program."
    },
    {
      year: "2020 - 2023",
      title: "Siswa Rekayasa Perangkat Lunak (RPL)",
      place: "SMK Cinta Kasih Tzu Chi",
      desc: "Belajar pemrograman web, desain, hardware, rancangan sistem."
    }
  ];

  return (
    <div className="mt-32 p-6" id="education">
      <h1 
        className="text-4xl font-bold mb-10 text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Pendidikan
      </h1>

      <div className="flex flex-col gap-8">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="bg-zinc-800 p-6 rounded-xl border border-zinc-700"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={200 + index * 150}
          >
            <p className="text-sm opacity-60">{item.year}</p>
            <h2 className="text-xl font-semibold mt-1">{item.title}</h2>
            <p className="opacity-80 mb-3">{item.place}</p>
            <p className="text-sm opacity-70">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
