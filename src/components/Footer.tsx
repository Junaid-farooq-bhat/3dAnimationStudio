import { Zap, Mail, Shield, FileText } from 'lucide-react';
import { ENROLL_URL, SUPPORT_EMAIL, COURSE_NAME } from '@/constants';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-ink-950 pb-20 pt-16 md:pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg btn-gradient">
                <Zap className="h-4 w-4 text-white" fill="white" />
              </div>
              <span className="font-heading text-base font-700 text-white">{COURSE_NAME}</span>
            </div>
            <p className="max-w-xs text-sm text-gray-500">
              Master 3D animation from zero to pro. Learn Blender the right way.
            </p>
          </div>

          {/* Support contact */}
          <div className="flex flex-col items-center gap-2 md:items-end">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-purple-400" />
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {SUPPORT_EMAIL}
              </a>
            </div>
            <div className="flex items-center gap-4 mt-1">
              <a
                href="/privacy"
                className="flex items-center gap-1.5 text-xs text-gray-500 transition-colors hover:text-gray-300"
              >
                <Shield className="h-3.5 w-3.5" />
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="flex items-center gap-1.5 text-xs text-gray-500 transition-colors hover:text-gray-300"
              >
                <FileText className="h-3.5 w-3.5" />
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} {COURSE_NAME}. All rights reserved.
          </p>
          <a
            href={ENROLL_URL}
            className="text-xs font-600 text-purple-400 transition-colors hover:text-purple-300"
          >
            Enroll Now →
          </a>
        </div>
      </div>
    </footer>
  );
}
