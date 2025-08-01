import { useState, useEffect } from 'react';

export const useProductSlider = (totalProducts: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToProduct = (index: number) => {
    setCurrentIndex(index);
    const element = document.getElementById(`product-${index}`);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const products = document.querySelectorAll('[data-product-index]');
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      products.forEach((product, index) => {
        const rect = product.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementBottom = elementTop + rect.height;
        
        if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
          setCurrentIndex(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { currentIndex, scrollToProduct };
};