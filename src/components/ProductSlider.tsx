import { MessageSquare, Palette, Users, Utensils, Phone, Globe, BarChart3, Cpu } from "lucide-react";

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
  const getProductImage = (title: string) => {
    const imageMap: { [key: string]: string } = {
      "Claymore聊天智能体": "/lovable-uploads/027c626f-edc7-462e-a517-7044c2e77619.png",
      "绘画智能体": "/lovable-uploads/b25e0306-4671-43cb-aaff-c109532cf78b.png",
      "换脸智能体": "/lovable-uploads/dac9da36-69d5-4637-b181-e36b6aaf5d71.png",
      "智能硬件ESP32开发板": "/lovable-uploads/027c626f-edc7-462e-a517-7044c2e77619.png",
      "TikTok直播数据获取工具": "/lovable-uploads/b25e0306-4671-43cb-aaff-c109532cf78b.png",
      "VidLingual多语言翻译工具": "/lovable-uploads/dac9da36-69d5-4637-b181-e36b6aaf5d71.png",
      "电话外呼智能体": "/lovable-uploads/027c626f-edc7-462e-a517-7044c2e77619.png",
      "Claymore智能菜单": "/lovable-uploads/b25e0306-4671-43cb-aaff-c109532cf78b.png"
    };
    return imageMap[title] || "/lovable-uploads/027c626f-edc7-462e-a517-7044c2e77619.png";
  };

  const getImageAlignment = (title: string) => {
    return (title === "电话外呼智能体") ? "object-left" :
           (title === "VidLingual多语言翻译工具") ? "object-top" :
           (title === "TikTok直播数据获取工具") ? "object-center" :
           (title === "换脸智能体") ? "object-center" : "object-left";
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateY(-${currentIndex * 100}vh)`,
        }}
      >
        {products.map((product, index) => {
          const IconComponent = product.icon;
          
          return (
            <div
              key={index}
              className="relative h-screen w-full flex flex-col"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={getProductImage(product.title)}
                  alt={product.title}
                  className={`w-full h-full object-cover ${getImageAlignment(product.title)}`}
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                  {/* Icon */}
                  <div className="mb-8">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${product.iconColor} shadow-2xl`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-semibold text-white/80 uppercase tracking-[0.2em] mb-4">
                        {product.subtitle}
                      </p>
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                        {product.title}
                      </h1>
                    </div>

                    <p className="text-xl sm:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap justify-center gap-3 mt-8">
                      {product.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/30"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-12">
                      <button className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                        了解更多
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSlider;