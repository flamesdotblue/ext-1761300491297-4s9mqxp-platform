import HeroCover from './components/HeroCover';
import Features from './components/Features';
import Packages from './components/Packages';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <HeroCover />
      <main>
        <Features />
        <Packages />
      </main>
      <Footer />
    </div>
  );
}

export default App;
