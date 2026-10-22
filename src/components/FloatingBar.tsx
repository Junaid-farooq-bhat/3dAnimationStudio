import { Zap } from 'lucide-react';
import { ENROLL_URL, CURRENT_PRICE, ORIGINAL_PRICE } from '@/constants';

export default function FloatingBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 glass-strong border-t border-white/10 md:hidden">
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <div className="flex flex-col leading-tight">
          <div className="flex items-baseline gap-2">
            <span className="font-heading text-xl font-800 text-white">₹{CURRENT_PRICE}</span>
            <span className="text-sm text-gray-500 line-through">₹{ORIGINAL_PRICE}</span>
          </div>
          <span className="text-[11px] font-500 text-emerald-400">95% OFF — Limited Time</span>
        </div>
        <a
          href={ENROLL_URL}
          className="btn-gradient flex flex-1 items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-700 text-white transition-transform active:scale-95"
        >
          <Zap className="h-4 w-4" fill="white" />
          Enroll Now
        </a>
      </div>
    </div>
  );
}
