import Spline from '@splinetool/react-spline';
import { Rocket, Shield, Coins } from 'lucide-react';

export default function HeroCover() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/80 dark:from-gray-900/70 dark:via-gray-900/60 dark:to-gray-900/90 pointer-events-none" />

      <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-white/70 px-4 py-1 text-sm text-blue-700 shadow-sm backdrop-blur dark:border-blue-500/30 dark:bg-blue-900/20 dark:text-blue-200">
          <Shield className="h-4 w-4" />
          Secure Litecoin Cloud Mining
        </div>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-6xl dark:text-white">
          Earn Daily Profits with Litecoin Mining Power
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-700 md:text-lg dark:text-gray-300">
          Invest in mining power, track your earnings, and withdraw anytime. Modern dashboard, admin controls, and automated daily distributions.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#packages"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white shadow hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Rocket className="h-5 w-5" />
            Start Mining
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-800 shadow hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
          >
            <Coins className="h-5 w-5" />
            Learn More
          </a>
        </div>

        <div className="mt-10 grid w-full max-w-3xl grid-cols-3 gap-4 rounded-xl border border-gray-200 bg-white/70 p-4 text-left shadow backdrop-blur dark:border-gray-800 dark:bg-gray-800/70">
          <Stat label="Platform Wallet" value="LKKEARwhFHcRhQbV84cgBJzftg8DRSk5QM" truncate />
          <Stat label="Min Deposit" value="0.01 LTC" />
          <Stat label="Daily Payout" value="00:00 UTC" />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, truncate = false }) {
  return (
    <div className="flex flex-col">
      <span className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">{label}</span>
      {truncate ? (
        <span className="mt-1 max-w-full truncate font-mono text-sm text-gray-900 dark:text-gray-100" title={value}>
          {value}
        </span>
      ) : (
        <span className="mt-1 font-semibold text-gray-900 dark:text-gray-100">{value}</span>
      )}
    </div>
  );
}
