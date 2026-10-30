import { useEffect } from "react";

const ContactModal = ({ isOpen, onClose, contacts }) => {
  // Tutup modal saat tekan tombol Escape
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-3xl border border-white/20 bg-zinc-900/90 p-6 shadow-[0_0_30px_rgba(31,151,166,0.4)]"
        onClick={(e) => e.stopPropagation()} // supaya klik di dalam tidak menutup modal
      >
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-xl font-bold text-white">Hubungi Saya</h3>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white text-2xl leading-none"
            aria-label="Tutup"
          >
            ×
          </button>
        </div>

        <p className="text-sm text-zinc-400 mb-4">
          Pilih cara yang kamu mau untuk menghubungi saya:
        </p>

        <div className="flex flex-col gap-3">
          {contacts.map((c) => (
            <a
  key={c.name}
  href={c.href}
  target={c.href.startsWith("http") ? "_blank" : undefined}
  rel="noopener noreferrer"
  className="flex items-center gap-4 rounded-xl border border-zinc-700 bg-zinc-800/70 p-4 text-white transition-all hover:bg-zinc-700 hover:border-[#1F97A6]"
>
              <span className="text-2xl">{c.icon}</span>
              <span className="font-semibold">{c.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;