import { Badge } from '@/components/ui/badge';

interface Product {
  icon: any;
  iconColor: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

interface ProductSliderProps {
  products: Product[];
  currentIndex: number;
}

const ProductSlider = ({ products, currentIndex }: ProductSliderProps) => {
  return (
    <div className="space-y-8">
      {products.map((product, index) => {
        const IconComponent = product.icon;
        const isActive = index === currentIndex;
        
        return (
          <div
            key={index}
            id={`product-${index}`}
            data-product-index={index}
            className={`min-h-screen flex items-center justify-center transition-all duration-700 ${
              isActive ? 'opacity-100 scale-100' : 'opacity-60 scale-95'
            }`}
          >
            <div className="max-w-4xl mx-auto px-4 text-center">
              {/* Icon */}
              <div className="mb-8 flex justify-center">
                <div className={`w-24 h-24 ${product.iconColor.replace('text-', 'bg-')}/10 rounded-3xl flex items-center justify-center transform transition-all duration-500 ${
                  isActive ? 'scale-110 rotate-3' : 'scale-100'
                }`}>
                  <IconComponent className={`w-12 h-12 ${product.iconColor}`} />
                </div>
              </div>

              {/* Title and Subtitle */}
              <div className="mb-6">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                  {product.subtitle}
                </p>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h1>
              </div>

              {/* Description */}
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {product.features.map((feature, featureIndex) => (
                  <Badge 
                    key={featureIndex}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                  >
                    {feature}
                  </Badge>
                ))}
              </div>

              {/* CTA Button */}
              <div className="space-y-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
                  了解更多
                </button>
                <p className="text-sm text-gray-500">
                  产品 {index + 1} / {products.length}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductSlider;