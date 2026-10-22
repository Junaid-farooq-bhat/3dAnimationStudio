import { FileText, Gift } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { BONUS_ITEMS } from '@/constants';

const ICONS: Record<string, typeof FileText> = {
  FileText,
  Gift,
};

export default function Bonus() {
  return (
    <section id="bonus" className="relative bg-ink-900 py-20 sm:py-28">
      <div className="absolute top-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-500/10 blur-[120px]" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal className="text-center">
          <span className="text-sm font-600 uppercase tracking-widest text-amber-400">
            Bonus
          </span>
          <h2 className="mt-3 font-heading text-3xl font-800 text-white sm:text-4xl lg:text-5xl">
            Free <span className="text-gradient-warm">Bonuses</span> Included
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400 sm:text-lg">
            Enroll today and get these exclusive bonuses at no extra cost.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {BONUS_ITEMS.map((item, i) => {
            const Icon = ICONS[item.icon] ?? FileText;
            return (
              <Reveal key={item.title} delay={i * 120}>
                <div className="glass group relative h-full overflow-hidden rounded-2xl border border-amber-500/20 p-6 transition-all duration-300 hover:border-amber-500/40 hover:bg-white/[0.06]">
                  <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-amber-500/10 blur-2xl transition-opacity group-hover:opacity-150" />
                  <div className="relative">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/30 to-orange-500/20 ring-1 ring-amber-500/20">
                        <Icon className="h-7 w-7 text-amber-300" />
                      </div>
                      <span className="rounded-full bg-amber-500/15 px-3 py-1 text-xs font-700 uppercase tracking-wide text-amber-400">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-700 text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-400">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
