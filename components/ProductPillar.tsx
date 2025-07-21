import { ReactNode } from 'react';

interface Product {
  name: string;
  description: string;
  cost: string;
  effect: string;
  risks: string;
  synergy: string;
}

interface ProductPillarProps {
  title: string;
  subtitle: string;
  products: Product[];
  totalCost: string;
  roi: string;
  icon?: ReactNode;
  variant?: 'benefit' | 'good' | 'community';
}

export function ProductPillar({ 
  title, 
  subtitle, 
  products, 
  totalCost, 
  roi, 
  icon,
  variant = 'benefit' 
}: ProductPillarProps) {
  const variantColors = {
    benefit: 'from-blue-500 to-blue-600',
    good: 'from-green-500 to-green-600', 
    community: 'from-purple-500 to-purple-600'
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className={`bg-gradient-to-r ${variantColors[variant]} p-6 text-white`}>
        <div className="flex items-center gap-4 mb-2">
          {icon && <div className="text-3xl">{icon}</div>}
          <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-white/90">{subtitle}</p>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-[var(--color-alfa-red)]">
                <th className="text-left py-3 px-2 text-[var(--color-alfa-gray)]">Продукт</th>
                <th className="text-left py-3 px-2 text-[var(--color-alfa-gray)]">Суть</th>
                <th className="text-left py-3 px-2 text-[var(--color-alfa-gray)]">Стоимость, млн ₽</th>
                <th className="text-left py-3 px-2 text-[var(--color-alfa-gray)]">Эффект до 2026</th>
                <th className="text-left py-3 px-2 text-[var(--color-alfa-gray)]">Риски</th>
                <th className="text-left py-3 px-2 text-[var(--color-alfa-gray)]">Синергия</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-[var(--color-alfa-gray-light)] transition-colors">
                  <td className="py-4 px-2 font-medium text-[var(--color-alfa-gray)]">{product.name}</td>
                  <td className="py-4 px-2 text-sm text-[var(--color-alfa-gray-medium)]">{product.description}</td>
                  <td className="py-4 px-2 text-center font-bold text-[var(--color-alfa-red)]">{product.cost}</td>
                  <td className="py-4 px-2 text-sm text-[var(--color-alfa-gray-medium)]">{product.effect}</td>
                  <td className="py-4 px-2 text-sm text-[var(--color-alfa-gray-medium)]">{product.risks}</td>
                  <td className="py-4 px-2 text-sm text-[var(--color-alfa-gray-medium)]">{product.synergy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="bg-[var(--color-alfa-red)]/10 p-4 rounded-xl">
            <div className="text-sm text-[var(--color-alfa-gray-medium)] mb-1">ИТОГО столпа</div>
            <div className="text-2xl font-bold text-[var(--color-alfa-red)]">{totalCost}</div>
          </div>
          <div className="bg-green-50 p-4 rounded-xl">
            <div className="text-sm text-[var(--color-alfa-gray-medium)] mb-1">ROI за 3 года</div>
            <div className="text-2xl font-bold text-green-600">{roi}</div>
          </div>
        </div>
      </div>
    </div>
  );
}