import { Play, Users, Star, Zap, Clock, BookOpen, Infinity as InfinityIcon } from 'lucide-react';
import { ENROLL_URL, HERO_VIDEO, ORIGINAL_PRICE, CURRENT_PRICE, ENROLLED_COUNT } from '@/constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-ink-900 pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute inset-0 grid-glow opacity-40" />
      <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="absolute top-20 -right-20 h-80 w-80 rounded-full bg-blue-600/15 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 sm:pt-12 lg:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Social proof badge */}
            <div className="mb-5 flex justify-center lg:justify-start">
              <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2">
                <Users className="h-4 w-4 text-emerald-400" />
                <span className="text-sm font-500 text-gray-300">
                  <span className="font-700 text-white">{ENROLLED_COUNT.toLocaleString('en-IN')}</span> enrolled
                </span>
                <span className="flex items-center gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3" fill="currentColor" />
                  ))}
                </span>
              </div>
            </div>

            <h1 className="font-heading text-4xl font-800 leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Create Stunning{' '}
              <span className="text-gradient-warm">3D Animations</span>
              <br />
              From Zero to Pro
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg lg:mx-0">
              Learn to make viral 3D animations like Zack D. Films & Professor of How, realistic
              product ads, and cinematic scenes- Lecture Language Hindi.
            </p>

            {/* Badges */}
            <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
              {[
                { icon: BookOpen, label: '8 Modules' },
                { icon: Clock, label: '30+ Hours' },
                { icon: InfinityIcon, label: 'Lifetime Access' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="glass flex items-center gap-2 rounded-full px-4 py-2"
                >
                  <Icon className="h-4 w-4 text-purple-400" />
                  <span className="text-sm font-500 text-gray-200">{label}</span>
                </div>
              ))}
            </div>

            {/* Price */}
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start lg:justify-start">
              <div className="flex items-baseline gap-3">
                <span className="font-heading text-2xl text-gray-600 line-through sm:text-3xl">
                  ₹{ORIGINAL_PRICE}
                </span>
                <span className="font-heading text-5xl font-900 text-white sm:text-6xl">
                  ₹{CURRENT_PRICE}
                </span>
              </div>
              <div className="rounded-full bg-emerald-500/15 px-3 py-1.5">
                <span className="text-sm font-700 text-emerald-400">95% OFF — Limited Time</span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col items-center gap-4 lg:items-start">
              <a
                href={ENROLL_URL}
                className="btn-gradient group flex w-full items-center justify-center gap-2 rounded-2xl px-8 py-4 text-lg font-700 text-white transition-transform hover:scale-105 active:scale-95 sm:w-auto"
              >
                <Zap className="h-5 w-5 transition-transform group-hover:scale-110" fill="white" />
                Enroll Now
              </a>
              <p className="text-xs text-gray-500">
                One-time payment • Lifetime access • No hidden fees
              </p>
            </div>
          </div>

          {/* Right: Demo video */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-purple-600/30 to-blue-600/30 blur-2xl" />
            <div className="glass relative overflow-hidden rounded-3xl border border-white/10 glow-soft">
              <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full bg-black/40 px-3 py-1.5 backdrop-blur">
                <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                <span className="text-xs font-600 text-white">LIVE DEMO</span>
              </div>
              <video
                src={HERO_VIDEO}
                autoPlay
                loop
                muted
                playsInline
                className="aspect-[9/12] w-full object-cover sm:aspect-[4/3] lg:aspect-[3/4]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent" />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-4 -left-4 glass animate-float rounded-2xl p-3">
              <div className="flex items-center gap-2">
                <Play className="h-5 w-5 text-purple-400" fill="currentColor" />
                <span className="text-sm font-600 text-white">Watch in action</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ink-900 to-transparent" />
    </section>
  );
}
