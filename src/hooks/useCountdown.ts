import { useEffect, useState } from 'react';

function getMsUntilMidnight(): number {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  return midnight.getTime() - now.getTime();
}

function format(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  return {
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0'),
  };
}

export function useCountdown() {
  const [time, setTime] = useState(() => format(getMsUntilMidnight()));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(format(getMsUntilMidnight()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
}
