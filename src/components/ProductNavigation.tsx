import { MessageSquare, Palette, Users, Utensils, Phone, Globe, BarChart3, Cpu } from "lucide-react";

interface Product {
  icon: any;
  iconColor: string;
  title: string;
}

interface ProductNavigationProps {
  products: Product[];
  currentIndex: number;
  onProductSelect: (index: number) => void;
}

const ProductNavigation = ({ products, currentIndex, onProductSelect }: ProductNavigationProps) => {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col gap-3">
        {products.map((product, index) => {
          const IconComponent = product.icon;
          const isActive = index === currentIndex;

          return (
            <button
              key={index}
              onClick={() => onProductSelect(index)}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg ${
                isActive
                  ? `${product.iconColor} shadow-xl`
                  : 'bg-white/90 backdrop-blur-sm border border-gray-200 hover:bg-white hover:shadow-xl'
              }`}
              title={product.title}
            >
              {product.title === "VidLingual多语言翻译工具" ? (
                <img src="/lovable-uploads/b25e0306-4671-43cb-aaff-c109532cf78b.png" alt="Video icon" className="w-6 h-6" />
              ) : (
                <IconComponent className={`w-6 h-6 ${isActive ? 'text-white' : 'text-gray-600'}`} />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductNavigation;