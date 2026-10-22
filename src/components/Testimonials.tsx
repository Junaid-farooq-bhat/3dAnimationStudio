import { Star, Quote } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { TESTIMONIALS } from '@/constants';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-ink-950 py-20 sm:py-28">
      <div className="absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-purple-600/10 blur-[100px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <span className="text-sm font-600 uppercase tracking-widest text-purple-400">
            Testimonials
          </span>
          <h2 className="mt-3 font-heading text-3xl font-800 text-white sm:text-4xl lg:text-5xl">
            What Students <span className="text-gradient">Say</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400 sm:text-lg">
            Real stories from students who transformed their skills with this course.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <div className="glass flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:border-purple-500/30 hover:bg-white/[0.06]">
                <Quote className="mb-3 h-8 w-8 text-purple-500/40" />
                <div className="mb-3 flex items-center gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 text-amber-400" fill="currentColor" />
                  ))}
                </div>
                <p className="flex-1 text-sm leading-relaxed text-gray-300">"{t.quote}"</p>
                <div className="mt-5 flex items-center gap-3 border-t border-white/5 pt-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-600/30 to-blue-600/30 text-xl ring-2 ring-purple-500/20">
                    {t.emoji}
                  </span>
                  <div>
                    <p className="text-sm font-700 text-white">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
