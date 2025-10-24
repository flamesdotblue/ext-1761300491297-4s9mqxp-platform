import { Check, Zap } from 'lucide-react';

const PACKAGES = [
  { name: 'Starter', price: 0.1, power: 10, roi: 1.0, badge: 'Popular' },
  { name: 'Basic', price: 0.5, power: 60, roi: 1.2 },
  { name: 'Pro', price: 1.0, power: 150, roi: 1.5 },
  { name: 'Premium', price: 5.0, power: 800, roi: 2.0, badge: 'Best Value' }
];

export default function Packages() {
  return (
    <section id="packages" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Mining Packages</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Choose your mining power. Earnings are credited daily to your LTC balance.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PACKAGES.map((p) => (
          <div key={p.name} className="relative flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-800">
            {p.badge && (
              <span className="absolute right-4 top-4 rounded-full bg-blue-700 px-3 py-1 text-xs font-semibold text-white">
                {p.badge}
              </span>
            )}
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{p.name}</h3>
              <Zap className="h-4 w-4 text-yellow-500" />
            </div>
            <div className="mt-4">
              <div className="text-3xl font-extrabold text-gray-900 dark:text-white">{p.price} LTC</div>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">One-time purchase</p>
            </div>
            <ul className="mt-6 space-y-2 text-sm">
              <Feature text={`${p.power} GH/s mining power`} />
              <Feature text={`Daily ROI ~ ${p.roi}%`} />
              <Feature text="Automated daily earnings" />
              <Feature text="Withdraw anytime (limits apply)" />
            </ul>
            <a
              href="#"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-blue-700 px-4 py-2 font-semibold text-white shadow hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={`Purchase ${p.name} package`}
            >
              Purchase
            </a>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-yellow-300 bg-yellow-50 p-4 text-sm text-yellow-900 dark:border-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-200">
        Note: Minimum deposit is 0.01 LTC. Withdrawals start at 0.05 LTC with a 0.001 LTC network fee equivalent.
      </div>
    </section>
  );
}

function Feature({ text }) {
  return (
    <li className="flex items-start gap-2">
      <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
      <span className="text-gray-700 dark:text-gray-300">{text}</span>
    </li>
  );
}
