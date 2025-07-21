import { Check, X } from 'lucide-react';

interface TableRow {
  [key: string]: string | boolean | React.ReactNode;
}

interface TableComponentProps {
  headers: string[];
  rows: TableRow[];
  className?: string;
  variant?: 'default' | 'comparison' | 'trends';
}

export function TableComponent({ headers, rows, className = '', variant = 'default' }: TableComponentProps) {
  const renderCell = (value: string | boolean | React.ReactNode, isHeader = false) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-green-600 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-red-500 mx-auto" />
      );
    }
    
    if (typeof value === 'string' && value.includes('✅')) {
      return (
        <div className="space-y-1">
          <Check className="w-5 h-5 text-green-600 mx-auto mb-2" />
          <div className="text-xs text-[var(--color-alfa-gray-medium)]">
            {value.replace('✅', '').trim()}
          </div>
        </div>
      );
    }
    
    if (typeof value === 'string' && value.includes('❌')) {
      return (
        <div className="flex justify-center">
          <X className="w-5 h-5 text-red-500" />
        </div>
      );
    }
    
    return <div className={isHeader ? 'text-white' : ''}>{value}</div>;
  };

  const variantClasses = {
    default: 'bg-white',
    comparison: 'bg-white',
    trends: 'bg-gradient-to-br from-white to-[var(--color-alfa-gray-light)]'
  };

  return (
    <div className={`${variantClasses[variant]} rounded-2xl shadow-lg overflow-hidden ${className}`}>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[var(--color-alfa-red)]">
              {headers.map((header, index) => (
                <th key={index} className="px-4 py-4 text-left text-white font-medium border-r border-white/20 last:border-r-0">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className={`${rowIndex % 2 === 0 ? 'bg-white' : 'bg-[var(--color-alfa-gray-light)]'} hover:bg-[var(--color-alfa-red)]/5 transition-colors`}>
                {headers.map((header, cellIndex) => (
                  <td key={cellIndex} className="px-4 py-3 border-r border-gray-200 last:border-r-0 text-sm">
                    {renderCell(row[header])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}