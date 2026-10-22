import { Sparkles, GraduationCap, Briefcase, Camera, Film } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { TARGET_AUDIENCE } from '@/constants';

const ICONS: Record<string, typeof Sparkles> = {
  Sparkles,
  GraduationCap,
  Briefcase,
  Camera,
  Film,
};

export default function WhoFor() {
  return (
    <section id="who" className="relative bg-ink-900 py-20 sm:py-28">
      <div className="absolute top-0 right-1/4 h-64 w-64 rounded-full bg-purple-600/10 blur-[100px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <span className="text-sm font-600 uppercase tracking-widest text-purple-400">
            Who This Is For
          </span>
          <h2 className="mt-3 font-heading text-3xl font-800 text-white sm:text-4xl lg:text-5xl">
            Made For <span className="text-gradient">You</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400 sm:text-lg">
            No prior experience needed. If you've ever wanted to create 3D animations, this course
            is for you.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TARGET_AUDIENCE.map((item, i) => {
            const Icon = ICONS[item.icon] ?? Sparkles;
            return (
              <Reveal key={item.title} delay={i * 80}>
                <div className="glass group flex h-full items-start gap-4 rounded-2xl p-6 transition-all duration-300 hover:border-purple-500/30 hover:bg-white/[0.06]">
                  <div className="shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600/30 to-blue-600/30 ring-1 ring-white/10 transition-transform group-hover:scale-110">
                      <Icon className="h-6 w-6 text-purple-300" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-700 text-white">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-gray-400">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}

          {/* Last cell: no-experience highlight */}
          <Reveal delay={TARGET_AUDIENCE.length * 80}>
            <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-600/15 to-blue-600/10 p-6 text-center">
              <Sparkles className="mb-3 h-8 w-8 text-purple-300" />
              <h3 className="font-heading text-lg font-700 text-white">No Experience Needed</h3>
              <p className="mt-1.5 text-sm text-gray-300">
                We start from absolute zero. If you can use a computer, you can learn this.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
