import React from 'react';
import { Phone, Palette, MessageSquare, Brain, Sparkles, ArrowRight, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const products = [
    {
      icon: Phone,
      title: '电话智能体',
      description: '智能语音交互系统，提供自然流畅的电话对话体验，支持多种业务场景。',
      features: ['智能语音识别', '自然语言理解', '多轮对话管理', '情感识别'],
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      icon: Palette,
      title: '绘画智能体',
      description: '基于AI的创意绘画工具，能够理解描述并生成高质量的艺术作品。',
      features: ['文本转图像', '风格迁移', '图像编辑', '创意生成'],
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      icon: MessageSquare,
      title: '对话智能体',
      description: '智能客服和对话系统，提供24/7全天候的智能客户服务支持。',
      features: ['智能问答', '知识库管理', '多渠道接入', '数据分析'],
      gradient: 'from-green-600 to-teal-600'
    },
    {
      icon: Brain,
      title: '推理智能体',
      description: '强大的逻辑推理和决策支持系统，帮助解决复杂的业务问题。',
      features: ['逻辑推理', '决策支持', '数据分析', '智能建议'],
      gradient: 'from-orange-600 to-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50">
        <div className="max-w-[224rem] mx-auto px-8">
          <div className="flex items-center justify-between h-28">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="text-4xl font-bold group cursor-pointer">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_ease_infinite] group-hover:animate-[gradient_1s_ease_infinite]">
                  Claymore
                </span>
                <span className="text-gray-800 ml-1 group-hover:text-blue-600 transition-colors duration-300">AI Lab</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-lg text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                关于我们
              </Link>
              <span className="text-lg text-blue-600 font-medium">
                AI产品
              </span>
              <Link to="/contact" className="text-lg text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                联系我们
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-md">
              <div className="py-4 space-y-4">
                <Link
                  to="/"
                  className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  关于我们
                </Link>
                <span className="block text-blue-600 font-medium">
                  AI产品
                </span>
                <Link
                  to="/contact"
                  className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  联系我们
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 pt-40">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
            AI产品矩阵
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            探索我们的智能体产品系列，每一个都经过精心设计，为不同场景提供智能化解决方案
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${product.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{product.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-all duration-200">
                      <span>了解更多</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <Sparkles className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              准备好体验AI的力量了吗？
            </h2>
            <p className="text-xl opacity-90 mb-8">
              联系我们，让我们一起探讨如何将这些智能体集成到您的业务中
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors duration-200"
            >
              <span>立即联系</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-100 to-blue-100 text-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-bold">Claymore AI Lab</span>
          </div>
          <p className="text-gray-600 mb-4">
            专注于AI技术创新与应用，为未来智能世界而构建
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 Claymore AI Lab. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Products;