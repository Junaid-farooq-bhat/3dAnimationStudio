import { Zap } from 'lucide-react';
import { ENROLL_URL, COURSE_NAME, CURRENT_PRICE } from '@/constants';

export default function StickyTopBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-white/5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg btn-gradient">
            <Zap className="h-4 w-4 text-white" fill="white" />
          </div>
          <span className="truncate font-heading text-sm font-700 text-white sm:text-base">
            {COURSE_NAME}
          </span>
        </div>
        <a
          href={ENROLL_URL}
          className="btn-gradient flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-600 text-white transition-transform hover:scale-105 active:scale-95 sm:px-6"
        >
          <span>Enroll Now</span>
          <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs font-700">₹{CURRENT_PRICE}</span>
        </a>
      </div>
    </header>
  );
}
