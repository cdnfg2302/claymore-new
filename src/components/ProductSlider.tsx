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
            className={`min-h-screen flex items-center justify-center transition-all duration-700 relative ${
              isActive ? 'opacity-100 scale-100' : 'opacity-60 scale-95'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('/lovable-uploads/${
                index < 3 ? ['027c626f-edc7-462e-a517-7044c2e77619.png', 'b25e0306-4671-43cb-aaff-c109532cf78b.png', 'dac9da36-69d5-4637-b181-e36b6aaf5d71.png'][index] : 'ai-product-bg.png'
              }')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
              {/* Icon */}
              <div className="mb-8 flex justify-center">
                <div className={`w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center transform transition-all duration-500 ${
                  isActive ? 'scale-110 rotate-3' : 'scale-100'
                }`}>
                  <IconComponent className={`w-12 h-12 text-white`} />
                </div>
              </div>

              {/* Title and Subtitle */}
              <div className="mb-6">
                <p className="text-sm font-medium text-white/80 uppercase tracking-wider mb-2">
                  {product.subtitle}
                </p>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                  {product.title}
                </h1>
              </div>

              {/* Description */}
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                {product.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {product.features.map((feature, featureIndex) => (
                  <Badge 
                    key={featureIndex}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 transition-colors"
                  >
                    {feature}
                  </Badge>
                ))}
              </div>

              {/* CTA Button */}
              <div className="space-y-4">
                <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
                  了解更多
                </button>
                <p className="text-sm text-white/70">
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