import Image from "next/image";

type Props = {
  src?: string;
  alt: string;
  className?: string;
  rounded?: string;
};

// Показывает картинку, если src указан, иначе серый плейсхолдер (как в макете).
export function Media({ src, alt, className = "", rounded = "rounded-card" }: Props) {
  if (!src) {
    return (
      <div
        className={`bg-zinc-200 ${rounded} ${className}`}
        role="img"
        aria-label={alt}
      />
    );
  }
  return (
    <div className={`relative overflow-hidden ${rounded} ${className}`}>
      <Image 
        src={src} 
        alt={alt} 
        fill 
        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        unoptimized
        className="object-cover" 
      />
    </div>
  );
}
