import { useState, useEffect } from 'react';
import { Contributor } from './types';
import { Hero } from './components/Hero';
import { Header } from './components/Header';
import { ContributorsGrid } from './components/ContributorsGrid';
import { HowToContribute } from './components/HowToContribute';
import { loadContributors } from './utils/loadContributors';

function App() {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchContributors = async () => {
      const data = await loadContributors();
      setContributors(data);
      setIsLoading(false);
    };

    fetchContributors();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header/>
      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <Hero />

        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Meet the Contributors
          </h2>
          {isLoading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-blue-600"></div>
            </div>
          ) : (
            <ContributorsGrid contributors={contributors} />
          )}
        </div>
        <div id="how-to-contribute">
          <HowToContribute />
        </div>
        

        <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-600 text-sm">
          <p>
            Built with love by <a href="https://github.com/siamjuit" target='_blank' className="text-blue-600 hover:underline">SIAM-JUIT</a> X <a href="https://instagram.com/crewsphere_juit" target='_blank' className="text-blue-600 hover:underline">ICP-JUIT</a>.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
