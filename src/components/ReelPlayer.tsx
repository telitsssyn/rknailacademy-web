"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Volume2, VolumeX } from "lucide-react";

// Иконка Instagram (бренд-иконка убрана из lucide — рисуем сами).
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

type Props = {
  src: string;
  poster?: string;
  href?: string;
};

export function ReelPlayer({ src, poster, href }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  // Запускаем видео, только когда карточка попадает в зону видимости,
  // и ставим на паузу, когда уходит — экономит трафик и батарею.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  function toggleSound() {
    const video = videoRef.current;
    if (!video) return;
    const next = !muted;
    video.muted = next;
    if (!next) video.play().catch(() => {});
    setMuted(next);
  }

  return (
    <div className="group relative aspect-[9/16] overflow-hidden rounded-card bg-zinc-200">
      <video
        ref={videoRef}
        src={src}
        poster={poster || undefined}
        muted={muted}
        loop
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
      />

      {/* Кнопка звука */}
      <button
        type="button"
        onClick={toggleSound}
        aria-label={muted ? "Включить звук" : "Выключить звук"}
        className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur transition-colors hover:bg-black/65"
      >
        {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </button>

      {/* Ссылка на рилс в Instagram */}
      {href ? (
        <Link
          href={href}
          target="_blank"
          aria-label="Открыть в Instagram"
          className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur transition-colors hover:bg-black/65"
        >
          <InstagramIcon className="h-4 w-4" />
        </Link>
      ) : null}
    </div>
  );
}
