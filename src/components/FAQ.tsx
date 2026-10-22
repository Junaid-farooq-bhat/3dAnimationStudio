import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { FAQS } from '@/constants';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-ink-900 py-20 sm:py-28">
      <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-blue-600/10 blur-[100px]" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <span className="text-sm font-600 uppercase tracking-widest text-blue-400">
            FAQ
          </span>
          <h2 className="mt-3 font-heading text-3xl font-800 text-white sm:text-4xl lg:text-5xl">
            Questions? <span className="text-gradient">Answered.</span>
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 50}>
                <div
                  className={`glass overflow-hidden rounded-xl border transition-all duration-300 ${
                    isOpen ? 'border-purple-500/30' : 'border-white/8'
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center gap-4 px-5 py-4 text-left sm:px-6"
                    aria-expanded={isOpen}
                  >
                    <HelpCircle
                      className={`h-5 w-5 shrink-0 transition-colors ${isOpen ? 'text-purple-400' : 'text-gray-600'}`}
                    />
                    <span className="flex-1 text-sm font-600 text-white sm:text-base">
                      {faq.q}
                    </span>
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
                      <p className="px-5 pb-4 pl-[3.5rem] text-sm leading-relaxed text-gray-400 sm:px-6 sm:pl-14">
                        {faq.a}
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
