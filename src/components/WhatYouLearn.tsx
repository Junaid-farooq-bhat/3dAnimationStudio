import {
  Box,
  Clapperboard,
  Sun,
  ShoppingBag,
  Film,
  TrendingUp,
  Palette,
  Bone,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import { LEARNING_OUTCOMES } from '@/constants';

const ICONS: Record<string, typeof Box> = {
  Box,
  Clapperboard,
  Sun,
  ShoppingBag,
  Film,
  TrendingUp,
  Palette,
  Bone,
};

export default function WhatYouLearn() {
  return (
    <section id="learn" className="relative bg-ink-900 py-20 sm:py-28">
      <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-purple-600/10 blur-[100px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <span className="text-sm font-600 uppercase tracking-widest text-purple-400">
            What You'll Learn
          </span>
          <h2 className="mt-3 font-heading text-3xl font-800 text-white sm:text-4xl lg:text-5xl">
            Skills You'll <span className="text-gradient">Master</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400 sm:text-lg">
            From your first 3D model to cinematic rendered scenes — here's everything you'll be
            able to do by the end of this course.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {LEARNING_OUTCOMES.map((item, i) => {
            const Icon = ICONS[item.icon] ?? Box;
            return (
              <Reveal key={item.title} delay={i * 80}>
                <div className="glass group h-full rounded-2xl p-6 transition-all duration-300 hover:border-purple-500/30 hover:bg-white/[0.06]">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600/30 to-blue-600/30 ring-1 ring-white/10 transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6 text-purple-300" />
                  </div>
                  <h3 className="font-heading text-lg font-700 text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
