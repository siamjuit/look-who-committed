import { GitBranch } from 'lucide-react';

export function Hero() {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center gap-3 mb-4">
        <GitBranch size={32} className="text-blue-600" />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          look who committed
        </h1>
      </div>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        An open source showcase celebrating contributors and teaching the power of collaborative development.
      </p>
    </div>
  );
}
