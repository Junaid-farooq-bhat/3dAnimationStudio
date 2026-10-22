import { Zap, ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { ENROLL_URL, CURRENT_PRICE, ORIGINAL_PRICE } from '@/constants';

export default function FinalCTA() {
  return (
    <section className="relative bg-ink-950 py-20 sm:py-28">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-purple-500/20 glow-purple">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-ink-900 to-blue-900/30" />
            <div className="absolute inset-0 grid-glow opacity-30" />
            <div className="absolute -top-20 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-purple-600/30 blur-[80px]" />

            <div className="relative flex flex-col items-center gap-6 px-6 py-14 text-center sm:px-12 sm:py-20">
              <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                <span className="text-xs font-600 text-emerald-300">Limited Time Offer</span>
              </div>

              <h2 className="font-heading text-3xl font-800 leading-tight text-white sm:text-5xl lg:text-6xl">
                Start Your 3D Animation
                <br />
                <span className="text-gradient-warm">Journey Today</span>
              </h2>

              <p className="max-w-xl text-base text-gray-300 sm:text-lg">
                Join thousands of students learning 3D animation the right way. Lifetime access,
                one-time payment.
              </p>

              <div className="flex items-baseline gap-3">
                <span className="font-heading text-xl text-gray-600 line-through">
                  ₹{ORIGINAL_PRICE}
                </span>
                <span className="font-heading text-5xl font-900 text-white sm:text-6xl">
                  ₹{CURRENT_PRICE}
                </span>
                <span className="text-sm text-gray-400">only</span>
              </div>

              <a
                href={ENROLL_URL}
                className="btn-gradient group flex items-center gap-2 rounded-2xl px-10 py-4 text-lg font-700 text-white transition-transform hover:scale-105 active:scale-95"
              >
                <Zap className="h-5 w-5 transition-transform group-hover:scale-110" fill="white" />
                Enroll Now
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>

              <p className="text-xs text-gray-500">
                One-time payment • Lifetime access • Instant access
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
