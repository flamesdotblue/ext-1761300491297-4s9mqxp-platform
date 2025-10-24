export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-900/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} CloudMining Pro. All rights reserved.</p>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#features" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Features</a>
          <a href="#packages" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Packages</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Privacy</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Terms</a>
        </nav>
      </div>
    </footer>
  );
}
