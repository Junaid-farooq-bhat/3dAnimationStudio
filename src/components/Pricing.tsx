import { Check, Zap, Clock, ShieldCheck } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { useCountdown } from '@/hooks/useCountdown';
import { ENROLL_URL, ORIGINAL_PRICE, CURRENT_PRICE, WHAT_YOU_GET } from '@/constants';

export default function Pricing() {
  const { hours, minutes, seconds } = useCountdown();

  return (
    <section id="pricing" className="relative bg-ink-950 py-20 sm:py-28">
      <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/15 blur-[120px]" />
      <div className="relative mx-auto max-w-2xl px-4 sm:px-6">
        <Reveal className="text-center">
          <span className="text-sm font-600 uppercase tracking-widest text-purple-400">
            Pricing
          </span>
          <h2 className="mt-3 font-heading text-3xl font-800 text-white sm:text-4xl lg:text-5xl">
            Invest In Your <span className="text-gradient">Future</span>
          </h2>
        </Reveal>

        <Reveal delay={150} className="mt-10">
          <div className="glass-strong relative overflow-hidden rounded-3xl border border-purple-500/20 glow-soft">
            {/* Top accent bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500" />

            {/* Countdown */}
            <div className="flex flex-col items-center gap-2 border-b border-white/5 px-6 py-5">
              <div className="flex items-center gap-2 text-amber-400">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-600">Offer ends in</span>
              </div>
              <div className="flex items-center gap-2 font-heading text-2xl font-800 text-white sm:text-3xl">
                <span className="rounded-lg bg-ink-700 px-3 py-1.5 tabular-nums">{hours}</span>
                <span className="text-purple-400">:</span>
                <span className="rounded-lg bg-ink-700 px-3 py-1.5 tabular-nums">{minutes}</span>
                <span className="text-purple-400">:</span>
                <span className="rounded-lg bg-ink-700 px-3 py-1.5 tabular-nums">{seconds}</span>
              </div>
              <span className="text-xs text-gray-500">Price increases after offer ends</span>
            </div>

            <div className="px-6 py-8 sm:px-10">
              {/* Price */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-3">
                  <span className="font-heading text-2xl text-gray-600 line-through">
                    ₹{ORIGINAL_PRICE}
                  </span>
                  <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-700 text-emerald-400">
                    95% OFF
                  </span>
                </div>
                <div className="mt-2 flex items-end justify-center gap-1">
                  <span className="font-heading text-6xl font-900 text-white sm:text-7xl">
                    ₹{CURRENT_PRICE}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-400">
                  One-time payment • Lifetime access
                </p>
              </div>

              {/* Benefits checklist */}
              <div className="mt-8 space-y-3">
                {WHAT_YOU_GET.map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                      <Check className="h-3 w-3 text-emerald-400" strokeWidth={3} />
                    </span>
                    <span className="text-sm text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href={ENROLL_URL}
                className="btn-gradient mt-8 flex w-full items-center justify-center gap-2 rounded-2xl px-8 py-4 text-lg font-700 text-white transition-transform hover:scale-[1.02] active:scale-95"
              >
                <Zap className="h-5 w-5" fill="white" />
                Enroll Now — ₹{CURRENT_PRICE}
              </a>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
                <ShieldCheck className="h-4 w-4" />
                <span>Secure payment • Instant access</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
