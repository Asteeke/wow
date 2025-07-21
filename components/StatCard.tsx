interface StatCardProps {
  value: string;
  label: string;
  subtitle?: string;
  icon?: React.ReactNode;
}

export function StatCard({ value, label, subtitle, icon }: StatCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
      {icon && (
        <div className="mb-4 text-[var(--color-alfa-red)]">
          {icon}
        </div>
      )}
      <div className="text-4xl font-bold text-[var(--color-alfa-gray)] mb-2">
        {value}
      </div>
      <div className="text-lg text-[var(--color-alfa-gray)] mb-1">
        {label}
      </div>
      {subtitle && (
        <div className="text-sm text-[var(--color-alfa-gray-medium)]">
          {subtitle}
        </div>
      )}
    </div>
  );
}