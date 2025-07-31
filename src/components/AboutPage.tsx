import React from 'react';
import { ChevronDown, Sparkles, Users, Code, Globe, Zap, Target, Layers, RotateCcw, Heart, Lightbulb, Shield, Rocket, User, Github, Linkedin, Mail, Menu, X } from 'lucide-react';

const AboutPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const storyItems = [
    {
      letter: 'C',
      english: 'Creation',
      chinese: '创造',
      description: '以代码和数据为画笔，将想象力赋予生命，为最纯粹的创造而生。',
      icon: Sparkles,
      gradient: 'from-blue-600 to-indigo-600'
    },
    {
      letter: 'L',
      english: 'Language',
      chinese: '语言',
      description: '致力于打破一切沟通壁垒，让AI真正掌握语言的力量以连接世界。',
      icon: Globe,
      gradient: 'from-indigo-600 to-purple-600'
    },
    {
      letter: 'A',
      english: 'Agent',
      chinese: '智能体',
      description: '构建的不仅是工具，更是一个个聪明的智能体，能自主感知、决策并执行任务。',
      icon: Users,
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      letter: 'Y',
      english: 'YOUNG',
      chinese: '年轻',
      description: '拥抱并汇聚年轻的力量，以全新的视角挑战传统，为下一代开发者和创造者打造未来。',
      icon: Zap,
      gradient: 'from-pink-600 to-rose-600'
    },
    {
      letter: 'M',
      english: 'Module',
      chinese: '模块',
      description: '将复杂的AI能力，精心打磨成稳定、可靠且易于集成的坚实模块。',
      icon: Layers,
      gradient: 'from-rose-600 to-orange-600'
    },
    {
      letter: 'O',
      english: 'Orchestrate',
      chinese: '协同',
      description: '在智能生态中，独立的模块互相赋能，谱写高效和谐的智能交响乐。',
      icon: Target,
      gradient: 'from-orange-600 to-yellow-600'
    },
    {
      letter: 'R',
      english: 'Reality',
      chinese: '现实',
      description: '致力于将虚拟智能无缝融入物理现实，创造更智能、有趣的交互体验。',
      icon: Code,
      gradient: 'from-yellow-600 to-green-600'
    },
    {
      letter: 'E',
      english: 'Evolve',
      chinese: '进化',
      description: '在AI的世界里，随技术、需求和时代一同进化，永不止步。',
      icon: RotateCcw,
      gradient: 'from-green-600 to-blue-600'
    }
  ];

  const cultureValues = [
    {
      icon: Heart,
      title: '创新驱动',
      subtitle: 'People First',
      description: '我们鼓励大胆想象和颠覆性思维，最好的想法往往来自于对现状的不断质疑。',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    },
    {
      icon: Lightbulb,
      title: '开放协作',
      subtitle: 'Continuous Innovation',
      description: '我们相信团队的力量大于个人之和。透明的沟通和无私的知识共享是我们工作的基石。',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    },
    {
      icon: Shield,
      title: '务实高效',
      subtitle: 'Integrity & Transparency',
      description: '技术最终要创造价值。我们崇尚务实，快速迭代，以最高效的方式解决最真实的问题。',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-25',
      borderColor: 'border-emerald-100'
    },
    {
      icon: Rocket,
      title: '追求卓越',
      subtitle: 'Pursuit of Excellence',
      description: '我们对质量有着极致的追求，不满足于"够用"，而是要做到最好。每一行代码，每一个设计，都体现我们对卓越的承诺。',
      color: 'text-violet-500',
      bgColor: 'bg-violet-25',
      borderColor: 'border-violet-100'
    }
  ];

  const teamMembers = [
    {
      name: '龚政',
      nameEn: 'Gong Zheng',
      position: '联合创始人',
      positionEn: 'Co-Founder',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      bio: '互联网互动娱乐行业18年工作经验，2007年就职于盛大网络，参与《迪士尼魔幻飞板》、《超级跑跑》、《格子客》、《永恒之塔》、《风云》等多款IP产品的运营与数据分析工作。',
      skills: ['产品运营', '数据分析', 'IP运营'],
      social: {
        github: '#',
        linkedin: '#',
        email: 'gongzheng@claymore.ai'
      }
    },
    {
      name: '刘洋',
      nameEn: 'Liu Yang',
      position: '技术总监',
      positionEn: 'CTO',
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      bio: '主导文旅行业 AI 解决方案研发，在人工智能、系统架构、数据库等领域具备深厚技术积累。专注于将AI技术与实际业务场景深度融合。',
      skills: ['人工智能', '系统架构', '数据库'],
      social: {
        github: '#',
        linkedin: '#',
        email: 'liuyang@claymore.ai'
      }
    },
    {
      name: '任俊坤',
      nameEn: 'Ren Junkun',
      position: '首席AI专家',
      positionEn: 'Chief AI Expert',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      bio: '17年互联网开发经验，人工智能专家，曾就职于盛大网络、完美时空、育碧，在机器学习、数据安全、AI分析、算法领域拥有多年的研究和实践经验，拥有整套垂直化私有AI模型训练和部署方案。',
      skills: ['机器学习', '数据安全', 'AI算法'],
      social: {
        github: '#',
        linkedin: '#',
        email: 'renjunkun@claymore.ai'
      }
    },
    {
      name: '邹玎杰',
      nameEn: 'Zou Dingjie',
      position: '技术架构师',
      positionEn: 'Technical Architect',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      bio: '深度参与公司技术体系搭建与运维优化工作，先后主导核心业务系统上云迁移、私有云平台搭建及 DevOps 体系落地等关键项目，在云计算和系统运维领域经验丰富。',
      skills: ['云计算', 'DevOps', '系统运维'],
      social: {
        github: '#',
        linkedin: '#',
        email: 'zoudingjie@claymore.ai'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 scroll-smooth snap-y snap-mandatory overflow-y-scroll h-screen">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50">
        <div className="max-w-[224rem] mx-auto px-8">
          <div className="flex items-center justify-between h-28">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-4xl font-bold group cursor-pointer">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_ease_infinite] group-hover:animate-[gradient_1s_ease_infinite]">
                  Claymore
                </span>
                <span className="text-gray-800 ml-1 group-hover:text-blue-600 transition-colors duration-300">AI Lab</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-lg text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                关于我们
              </a>
              <a href="#products" className="text-lg text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                AI产品
              </a>
              <a href="#contact" className="text-lg text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                联系我们
              </a>
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
                <a
                  href="#about"
                  className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  关于我们
                </a>
                <a
                  href="#products"
                  className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  AI产品
                </a>
                <a
                  href="#contact"
                  className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  联系我们
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 snap-start min-h-screen flex items-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url('/lovable-uploads/027c626f-edc7-462e-a517-7044c2e77619.png')`}}></div>
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="animate-fade-in">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-gray-900 mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Claymore
              </span>
              <span className="text-gray-800"> AI Lab</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              以自主智能体(Agent)为目标，用推理(INFERENCE)的力量共赢未来。
            </p>
          </div>
          <div className="mt-12 animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* Story Grid */}
      <section id="about" className="snap-start min-h-screen flex items-center py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {storyItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.letter}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`}>
                  </div>

                  <div className="relative">
                    <div className="flex items-start mb-4">
                      <div className="relative flex-shrink-0">
                        <span className={`text-5xl font-black bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent opacity-25 group-hover:opacity-35 transition-opacity duration-300`}>
                          {item.letter}
                        </span>
                        <div className="absolute top-2 left-2">
                          <IconComponent className={`w-5 h-5 text-white bg-gradient-to-br ${item.gradient} p-1 rounded-md shadow-md`} />
                        </div>
                      </div>
                      <div className="ml-4 flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-900 transition-colors duration-300 line-clamp-1">
                          {item.english}
                        </h3>
                        <p className="text-sm font-medium text-gray-500 mb-2">
                          {item.chinese}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed text-sm group-hover:text-gray-800 transition-colors duration-300 line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Corporate Culture Section */}
      <section className="bg-white py-20 snap-start min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              企业文化
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              我们的价值观不仅指导着我们的工作方式，更塑造着我们的企业灵魂
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cultureValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className={`group relative ${value.bgColor} rounded-2xl p-8 border-2 ${value.borderColor} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="flex items-start mb-6">
                    <div className={`${value.color} bg-white rounded-xl p-3 shadow-sm group-hover:shadow-md transition-shadow duration-300`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {value.title}
                      </h3>
                      <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                        {value.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 pt-40 pb-20 snap-start min-h-screen">
        <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              核心团队
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              汇聚顶尖人才，用专业和热情驱动AI技术的边界拓展
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-3 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-start mb-4">
                  <div className="relative">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-16 h-16 rounded-xl object-cover shadow-md group-hover:shadow-lg transition-shadow duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1.5 shadow-lg">
                      <User className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-900 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-xs font-medium text-gray-500 mb-1">
                      {member.nameEn}
                    </p>
                    <p className="text-sm font-semibold text-blue-600">
                      {member.position}
                    </p>
                    <p className="text-xs text-gray-500">
                      {member.positionEn}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  {member.bio}
                </p>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-900 mb-2">专业技能</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-0.5 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3 pt-3 border-t border-gray-100">
                  <a
                    href={member.social.github}
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="text-gray-400 hover:text-red-600 transition-colors duration-200"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative py-12 snap-start bg-cover bg-center bg-no-repeat text-gray-300" style={{backgroundImage: `url('/lovable-uploads/dac9da36-69d5-4637-b181-e36b6aaf5d71.png')`, backgroundPosition: 'center 53%'}}>
        <div className="relative mx-auto px-6 text-center" style={{maxWidth: '108rem'}}>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 mb-4">塑造智能未来，从今天开始</p>
            <p className="text-gray-500">
              &copy; 2025 Claymore AI Lab. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default AboutPage;
