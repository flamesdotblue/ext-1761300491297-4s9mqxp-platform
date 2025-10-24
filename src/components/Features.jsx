import { ShieldCheck, BarChart3, Zap, Coins } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Hardened Security',
      desc: 'JWT auth, 2FA-ready, rate limiting, and strict validation. Admin actions fully logged.'
    },
    {
      icon: Coins,
      title: 'LTC Deposits & Withdrawals',
      desc: 'Manual deposits with TXID verification via BlockCypher. Configurable fees and limits.'
    },
    {
      icon: Zap,
      title: 'Daily Auto Earnings',
      desc: 'Automated cron distributes payouts at 00:00 UTC based on purchased power and ROI.'
    },
    {
      icon: BarChart3,
      title: 'Admin Analytics',
      desc: 'Realtime stats, filters, CSV export, and complete transaction history visibility.'
    }
  ];

  return (
    <section id="features" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Why Choose Our Cloud Mining</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Built with modern tooling and security-first practices. Scale confidently and manage operations with ease.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, idx) => (
          <div
            key={idx}
            className="group relative flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-800 dark:bg-gray-800"
          >
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-blue-100 text-blue-700 group-hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{f.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
