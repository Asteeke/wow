import { Check } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
}

interface FeatureListProps {
  features: Feature[];
  variant?: 'default' | 'checklist';
}

export function FeatureList({ features, variant = 'default' }: FeatureListProps) {
  return (
    <div className="w-full max-w-4xl space-y-6">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          {variant === 'checklist' ? (
            <div className="flex-shrink-0 w-6 h-6 bg-[var(--color-alfa-red)] rounded-full flex items-center justify-center mt-1">
              <Check className="w-4 h-4 text-white" />
            </div>
          ) : (
            <div className="flex-shrink-0 w-8 h-8 bg-[var(--color-alfa-red)] rounded-lg flex items-center justify-center text-white font-bold">
              {index + 1}
            </div>
          )}
          <div>
            <h3 className="text-xl text-[var(--color-alfa-gray)] mb-2">{feature.title}</h3>
            <p className="text-[var(--color-alfa-gray-medium)] leading-relaxed">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}