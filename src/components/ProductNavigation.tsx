interface Product {
  icon: any;
  iconColor: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

interface ProductNavigationProps {
  products: Product[];
  currentIndex: number;
  onProductSelect: (index: number) => void;
}

const ProductNavigation = ({ products, currentIndex, onProductSelect }: ProductNavigationProps) => {
  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-200">
        <div className="space-y-3">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            const isActive = index === currentIndex;
            
            return (
              <button
                key={index}
                onClick={() => onProductSelect(index)}
                className={`group relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? `${product.iconColor.replace('text-', 'bg-')}/20 scale-110`
                    : 'bg-gray-100 hover:bg-gray-200 hover:scale-105'
                }`}
                title={product.title}
              >
                <IconComponent 
                  className={`w-5 h-5 transition-colors ${
                    isActive ? product.iconColor : 'text-gray-600 group-hover:text-gray-800'
                  }`} 
                />
                
                {/* Tooltip */}
                <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {product.title}
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
                </div>
              </button>
            );
          })}
        </div>
        
        {/* Progress indicator */}
        <div className="mt-4 pt-3 border-t border-gray-200">
          <div className="text-xs text-gray-500 text-center">
            {currentIndex + 1} / {products.length}
          </div>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-1">
            <div 
              className="bg-blue-600 h-1 rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / products.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductNavigation;