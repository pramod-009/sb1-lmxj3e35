import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { concernsList } from '../data/yogaPoses';

interface YogaFormProps {
  onSearch: (concern: string) => void;
}

export default function YogaForm({ onSearch }: YogaFormProps) {
  const [concern, setConcern] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (concern.trim()) {
      onSearch(concern.toLowerCase());
    }
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="concern" className="block text-sm font-medium text-gray-700">
            What's your wellness goal?
          </label>
          <div className="relative">
            <input
              type="text"
              id="concern"
              list="concerns"
              value={concern}
              onChange={(e) => setConcern(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., back pain, stress, flexibility"
            />
            <datalist id="concerns">
              {concernsList.map((c) => (
                <option key={c} value={c} />
              ))}
            </datalist>
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-blue-500"
            >
              <Search size={20} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}