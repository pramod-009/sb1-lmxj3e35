import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import YogaForm from './components/YogaForm';
import PoseCard from './components/PoseCard';
import { yogaPoses } from './data/yogaPoses';

function App() {
  const [matchedPoses, setMatchedPoses] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = (concern: string) => {
    const matches = yogaPoses.filter(pose =>
      pose.concerns.some(c => c.includes(concern))
    );

    if (matches.length === 0) {
      setError('No poses found for your concern. Please try a different search term.');
      setMatchedPoses(null);
    } else {
      setError('');
      setMatchedPoses(matches);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Heart size={48} className="text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Personal Yoga Assistant
          </h1>
          <p className="text-gray-600">
            Find the perfect yoga poses for your wellness goals
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <YogaForm onSearch={handleSearch} />
        </div>

        {error && (
          <div className="text-center text-red-600 mb-8">
            {error}
          </div>
        )}

        {matchedPoses && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matchedPoses.map((pose) => (
              <PoseCard
                key={pose.sanskritName}
                {...pose}
              />
            ))}
          </div>
        )}

        {!matchedPoses && !error && (
          <div className="text-center text-gray-500">
            Enter your wellness goal above to get personalized yoga recommendations
          </div>
        )}
      </div>
    </div>
  );
}

export default App;