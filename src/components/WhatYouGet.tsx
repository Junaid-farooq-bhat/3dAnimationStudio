import {
  PlayCircle,
  Infinity as InfinityIcon,
  Map,
  FolderOpen,
  Smartphone,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import { WHAT_YOU_GET } from '@/constants';

const ICONS: Record<string, typeof PlayCircle> = {
  PlayCircle,
  Infinity: InfinityIcon,
  Map,
  FolderOpen,
  Smartphone,
};

export default function WhatYouGet() {
  return (
    <section id="included" className="relative bg-ink-950 py-20 sm:py-28">
      <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-blue-600/10 blur-[100px]" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal className="text-center">
          <span className="text-sm font-600 uppercase tracking-widest text-blue-400">
            What You Get
          </span>
          <h2 className="mt-3 font-heading text-3xl font-800 text-white sm:text-4xl lg:text-5xl">
            Everything <span className="text-gradient">Included</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400 sm:text-lg">
            One payment. Everything unlocked. Forever.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {WHAT_YOU_GET.map((item, i) => {
            const Icon = ICONS[item.icon] ?? PlayCircle;
            return (
              <Reveal key={item.text} delay={i * 70}>
                <div className="glass flex items-center gap-4 rounded-xl p-5 transition-all duration-300 hover:border-purple-500/20 hover:bg-white/[0.05]">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600/30 to-blue-600/30 ring-1 ring-white/10">
                    <Icon className="h-5 w-5 text-purple-300" />
                  </div>
                  <span className="font-500 text-gray-200">{item.text}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
