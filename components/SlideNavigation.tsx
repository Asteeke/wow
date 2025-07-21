import { ChevronLeft, ChevronRight, Circle, Dot } from 'lucide-react';
import { Button } from './ui/button';

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onSlideSelect: (slideIndex: number) => void;
}

export function SlideNavigation({ 
  currentSlide, 
  totalSlides, 
  onPrevious, 
  onNext, 
  onSlideSelect 
}: SlideNavigationProps) {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border">
        <Button
          variant="ghost"
          size="sm"
          onClick={onPrevious}
          disabled={currentSlide === 0}
          className="rounded-full p-2 hover:bg-[var(--color-alfa-red)]/10"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        
        <div className="flex items-center gap-2">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => onSlideSelect(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-[var(--color-alfa-red)]' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="rounded-full p-2 hover:bg-[var(--color-alfa-red)]/10"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
      
      <div className="text-center mt-3 text-sm text-gray-600">
        {currentSlide + 1} / {totalSlides}
      </div>
    </div>
  );
}