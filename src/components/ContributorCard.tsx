import { Github, Linkedin, Twitter } from 'lucide-react';
import { Contributor } from '../types';
import { PokemonImage } from './PokemonImage';

interface ContributorCardProps {
  contributor: Contributor;
}

export function ContributorCard({ contributor }: ContributorCardProps) {
  const getBannerColor = (str: string): string => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color = Math.abs(hash).toString(16).substring(0, 6);
    return `#${color.padStart(6, '0')}`;
  };

  const truncateWords = (text: string, maxWords: number) => {
  if (!text) return '';
  const words = text.trim().split(/\s+/);
  return words.length > maxWords
    ? words.slice(0, maxWords).join(' ') + '…'
    : text;
   };

  const bannerColor = getBannerColor(contributor.rollno || contributor.name);

  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div 
        className="w-full h-24" 
        style={{ backgroundColor: bannerColor }}
      />
      
      <div className="p-6 flex flex-col items-center -mt-12">
        <div className="mb-4 relative z-10 border-2 border-black rounded-full shadow-lg">
          <PokemonImage pokemonName={contributor.pokemon} />
        </div>

        <h3 className="text-lg font-semibold text-gray-900 text-center mb-1">
          {contributor.name}
        </h3>

        <p className="text-sm text-blue-600 font-medium mb-4">
          {contributor.rollno}
        </p>

        <p className="text-sm text-gray-600 text-center italic dark:text-gray-400 font-medium mb-6">
          {contributor.bio
            ? truncateWords(contributor.bio, 50)
            : 'No bio available.'}
        </p>
        <div className="flex gap-3">
          {contributor.github ? (
            <a
              href={contributor.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              <Github size={18} />
            </a>
          ) : null}
          {contributor.linkedin ? (
            <a
              href={contributor.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              <Linkedin size={18} />
            </a>
          ) : null}
          {contributor.twitter ? (
            <a
              href={contributor.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              <Twitter size={18} />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}