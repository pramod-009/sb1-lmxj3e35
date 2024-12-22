import React from 'react';

interface PoseCardProps {
  sanskritName: string;
  englishName: string;
  instructions: string[];
  duration: string;
  benefits: string[];
  precautions: string[];
}

export default function PoseCard({
  sanskritName,
  englishName,
  instructions,
  duration,
  benefits,
  precautions,
}: PoseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
      <div>
        <h3 className="text-xl font-semibold text-gray-900">{englishName}</h3>
        <p className="text-sm text-gray-500 italic">{sanskritName}</p>
      </div>
      
      <div>
        <h4 className="font-medium text-gray-900">Instructions</h4>
        <ol className="mt-2 space-y-2">
          {instructions.map((instruction, index) => (
            <li key={index} className="text-gray-600 text-sm">
              {index + 1}. {instruction}
            </li>
          ))}
        </ol>
      </div>

      <div>
        <h4 className="font-medium text-gray-900">Duration</h4>
        <p className="mt-1 text-sm text-gray-600">{duration}</p>
      </div>

      <div>
        <h4 className="font-medium text-gray-900">Benefits</h4>
        <ul className="mt-2 list-disc list-inside space-y-1">
          {benefits.map((benefit, index) => (
            <li key={index} className="text-sm text-gray-600">{benefit}</li>
          ))}
        </ul>
      </div>

      {precautions.length > 0 && (
        <div>
          <h4 className="font-medium text-red-600">Precautions</h4>
          <ul className="mt-2 list-disc list-inside space-y-1">
            {precautions.map((precaution, index) => (
              <li key={index} className="text-sm text-red-500">{precaution}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}