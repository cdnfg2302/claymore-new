import { MessageSquare, Palette, Users, Utensils, Phone, Globe, BarChart3, Cpu, ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Products = () => {
  const products = [
    {
      icon: MessageSquare,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-50",
      title: "Claymore聊天智能体",
      subtitle: "CHAT AGENT",
      description: "基于大语言模型的智能对话系统，支持多轮对话、上下文理解和个性化回复。可广泛应用于客服、咨询、教育等场景。",
      features: ["多轮对话", "上下文理解", "个性化回复", "多场景适配"]
    },
    {
      icon: Palette,
      iconColor: "text-purple-500",
      bgColor: "bg-purple-50",
      title: "绘画智能体",
      subtitle: "AI ART GENERATOR",
      description: "先进的AI绘画生成系统，支持文本到图像、风格转换、图像编辑等功能。让创意无限延伸，艺术触手可及。",
      features: ["文本生图", "风格转换", "图像编辑", "高清输出"]
    },
    {
      icon: Users,
      iconColor: "text-green-500",
      bgColor: "bg-green-50",
      title: "换脸智能体",
      subtitle: "FACE SWAP AI",
      description: "基于深度学习的人脸替换技术，实现高质量、自然的人脸交换效果。支持视频和图片处理，广泛应用于娱乐和创意制作。",
      features: ["高精度换脸", "视频处理", "实时预览", "批量处理"]
    },
    {
      icon: Utensils,
      iconColor: "text-orange-500",
      bgColor: "bg-orange-50",
      title: "Claymore智能菜单",
      subtitle: "MENU TRANSLATION AI",
      description: "专为餐饮行业打造的智能翻译系统，支持菜单拍照识别、多语言翻译和文化适配，让美食跨越语言障碍。",
      features: ["拍照识别", "多语言翻译", "文化适配", "菜品推荐"]
    },
    {
      icon: Phone,
      iconColor: "text-red-500",
      bgColor: "bg-red-50",
      title: "电话外呼智能体",
      subtitle: "AI CALL CENTER",
      description: "智能语音外呼系统，具备自然语音交互、意图识别和情感分析能力。提升客户服务效率，降低人工成本。",
      features: ["语音识别", "意图理解", "情感分析", "自动记录"]
    },
    {
      icon: Globe,
      iconColor: "text-indigo-500",
      bgColor: "bg-indigo-50",
      title: "VidLingual多语言翻译工具",
      subtitle: "YOUTUBE MULTI-LANGUAGE PUBLISHER",
      description: "一键将YouTube视频翻译成多种语言并自动发布，支持字幕生成、语音合成和视频优化，助力内容全球化传播。",
      features: ["多语言翻译", "字幕生成", "语音合成", "自动发布"]
    },
    {
      icon: BarChart3,
      iconColor: "text-pink-500",
      bgColor: "bg-pink-50",
      title: "TikTok直播数据获取工具",
      subtitle: "TIKTOK LIVE DATA ANALYTICS",
      description: "实时监控和分析TikTok直播数据，提供观众行为分析、热点话题追踪和营销效果评估，助力直播运营优化。",
      features: ["实时监控", "数据分析", "热点追踪", "效果评估"]
    },
    {
      icon: Cpu,
      iconColor: "text-teal-500",
      bgColor: "bg-teal-50",
      title: "智能硬件ESP32开发板",
      subtitle: "ESP32 SMART HARDWARE",
      description: "基于ESP32芯片的智能硬件开发平台，集成AI算法和物联网功能，支持边缘计算和实时数据处理。",
      features: ["边缘计算", "物联网连接", "AI算法", "实时处理"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/50 to-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-6">
            AI 产品矩阵
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            全方位的AI解决方案，从对话交互到视觉创作，从数据分析到硬件开发
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["全球化部署", "高性能处理", "企业级安全"].map((feature, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                {feature}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm hover:scale-105"
                >
                  <CardHeader className="space-y-4">
                    <div className={`w-16 h-16 ${product.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-8 h-8 ${product.iconColor}`} />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {product.title}
                      </CardTitle>
                      <CardDescription className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        {product.subtitle}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground">核心特性：</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.features.map((feature, featureIndex) => (
                          <Badge 
                            key={featureIndex} 
                            variant="outline" 
                            className="text-xs px-2 py-1"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                    >
                      了解更多
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            开启AI智能化之旅
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            我们的产品矩阵覆盖了从对话交互到视觉创作，从数据分析到硬件开发的全方位AI解决方案。每一个产品都经过精心打磨，致力于为用户提供最优质的智能化体验。
          </p>
          <Button size="lg" className="px-8 py-6 text-lg">
            联系我们了解更多
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Products;