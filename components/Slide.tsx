import { ReactNode } from 'react';

interface SlideProps {
  children: ReactNode;
  variant?: 'default' | 'title' | 'section' | 'image';
  className?: string;
}

export function Slide({ children, variant = 'default', className = '' }: SlideProps) {
  const baseClasses = "w-full h-screen flex flex-col justify-center items-center p-16 relative overflow-hidden";
  
  const variantClasses = {
    default: "bg-white",
    title: "bg-gradient-to-br from-[var(--color-alfa-red)] to-[var(--color-alfa-red-dark)]",
    section: "bg-[var(--color-alfa-gray-light)]",
    image: "bg-gradient-to-b from-white to-[var(--color-alfa-gray-light)]"
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {/* Alfa Bank logo watermark */}
      <div className="absolute top-8 right-8 opacity-20">
        <div className="w-12 h-12 bg-[var(--color-alfa-red)] rounded-lg flex items-center justify-center">
          <span className="text-white text-xl font-bold">α</span>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-[var(--color-alfa-red)]"></div>
      
      {children}
    </div>
  );
}