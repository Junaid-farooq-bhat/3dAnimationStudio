import { useState } from 'react';
import { ChevronDown, Layers } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { MODULES } from '@/constants';

export default function Curriculum() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="curriculum" className="relative bg-ink-950 py-20 sm:py-28">
      <div className="absolute top-1/2 right-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal className="text-center">
          <span className="text-sm font-600 uppercase tracking-widest text-blue-400">
            Course Curriculum
          </span>
          <h2 className="mt-3 font-heading text-3xl font-800 text-white sm:text-4xl lg:text-5xl">
            8 Modules: <span className="text-gradient">Beginner → Advanced</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400 sm:text-lg">
            A structured roadmap that takes you from opening Blender for the first time to creating
            professional 3D animations.
          </p>
        </Reveal>

        <div className="mt-12 space-y-3">
          {MODULES.map((mod, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={mod.number} delay={i * 60}>
                <div
                  className={`glass overflow-hidden rounded-xl border transition-all duration-300 ${
                    isOpen ? 'border-purple-500/40 glow-soft' : 'border-white/8'
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center gap-4 px-5 py-4 text-left sm:px-6"
                    aria-expanded={isOpen}
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg font-heading text-sm font-800 transition-colors ${
                        isOpen
                          ? 'btn-gradient text-white'
                          : 'bg-white/5 text-purple-300'
                      }`}
                    >
                      {mod.number}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-base font-700 text-white sm:text-lg">
                        {mod.name}
                      </h3>
                      <p className="text-xs text-gray-500 sm:text-sm">
                        Module {mod.number}
                      </p>
                    </div>
                    <Layers className={`h-5 w-5 shrink-0 transition-colors ${isOpen ? 'text-purple-400' : 'text-gray-600'}`} />
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-4 pl-[4.5rem] text-sm leading-relaxed text-gray-400 sm:px-6 sm:pl-20">
                        {mod.desc}
                      </p>
                    </div>
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
