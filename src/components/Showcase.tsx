import { useRef } from 'react';
import { Play } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { SHOWCASE_VIDEOS } from '@/constants';

function ShowcaseCard({ src, title, index }: { src: string; title: string; index: number }) {
  const ref = useRef<HTMLVideoElement>(null);

  const handleEnter = () => {
    ref.current?.play().catch(() => {});
  };
  const handleLeave = () => {
    ref.current?.pause();
  };

  return (
    <Reveal delay={index * 80}>
      <div
        className="glass group relative overflow-hidden rounded-2xl border border-white/10"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onTouchStart={handleEnter}
      >
        <video
          ref={ref}
          src={src}
          loop
          muted
          playsInline
          preload="none"
          poster=""
          className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-4">
          <span className="font-heading text-sm font-600 text-white">{title}</span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur transition-colors group-hover:bg-purple-600/60">
            <Play className="h-4 w-4 text-white" fill="white" />
          </span>
        </div>
      </div>
    </Reveal>
  );
}

export default function Showcase() {
  return (
    <section id="showcase" className="relative bg-ink-900 py-20 sm:py-28">
      <div className="absolute top-1/3 left-0 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <span className="text-sm font-600 uppercase tracking-widest text-purple-400">
            Showcase
          </span>
          <h2 className="mt-3 font-heading text-3xl font-800 text-white sm:text-4xl lg:text-5xl">
            What You'll <span className="text-gradient">Create</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400 sm:text-lg">
            A glimpse of the kind of 3D animations you'll be making by the end of this course.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SHOWCASE_VIDEOS.map((v, i) => (
            <ShowcaseCard key={v.src} src={v.src} title={v.title} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
