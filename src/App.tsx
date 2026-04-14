import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  TrendingUp, 
  Users, 
  Zap, 
  Shield, 
  Globe, 
  CreditCard, 
  Cpu, 
  BarChart3,
  PieChart as PieChartIcon,
  Activity,
  Heart,
  ExternalLink
} from "lucide-react";

const SectionHeader = ({ num, title }: { num: string; title: string }) => (
  <h2 className="text-2xl font-mono font-bold text-white uppercase tracking-[2px] mb-10 flex items-center gap-4">
    <span className="text-gray-600">{num}.</span> {title}
  </h2>
);

const CoreTag = ({ children }: { children: React.ReactNode; key?: React.Key }) => (
  <span className="px-2 py-1 bg-neon/10 text-neon border border-neon/20 rounded text-[10px] font-mono uppercase tracking-wider">
    {children}
  </span>
);

const MetricItem = ({ label, value, icon: Icon, subValue }: { label: string; value: string; icon: any; subValue?: string; key?: React.Key }) => (
  <div className="bg-neon/5 border border-neon/10 p-4 rounded-lg flex items-start gap-4">
    <div className="p-2 bg-neon/10 rounded text-neon">
      <Icon size={18} />
    </div>
    <div>
      <div className="text-xs font-mono text-gray-500 uppercase mb-1">{label}</div>
      <div className="text-xl font-bold text-white font-mono">{value}</div>
      {subValue && <div className="text-[10px] text-neon/60 mt-1 font-mono">{subValue}</div>}
    </div>
  </div>
);

const ContentBlock = ({ children, title, date, role }: { children: React.ReactNode; title: string; date?: string; role?: string }) => (
  <div className="content-block">
    <div className="flex flex-col md:flex-row justify-between items-start mb-2 gap-2">
      <div className="text-xl font-bold text-white">{title}</div>
      {date && <div className="font-mono text-sm text-gray-500">{date}</div>}
    </div>
    {role && <div className="tag mb-4 inline-block">{role}</div>}
    <div className="text-slate-400">{children}</div>
  </div>
);

const ProjectLog = ({ 
  title, 
  background, 
  design, 
  metrics,
  url
}: { 
  title: string; 
  background: string; 
  design: string[]; 
  metrics?: { label: string; value: string; icon: any; subValue?: string }[];
  url?: string;
}) => (
  <div className="content-block mb-24">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
      <h3 className="text-2xl font-bold text-white tracking-tight leading-tight">{title}</h3>
      {url && (
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-neon hover:text-white transition-colors flex items-center gap-2 text-xs font-mono shrink-0 self-start sm:self-auto border border-neon/20 px-3 py-1 rounded-sm sm:border-none sm:p-0"
        >
          官网 <ExternalLink size={14} />
        </a>
      )}
    </div>
    <div className="grid lg:grid-cols-[1fr_320px] gap-10">
      <div className="space-y-8">
        <div>
          <div className="font-mono text-neon text-sm mb-3 tracking-wider flex items-center gap-2">
            <span className="w-4 h-px bg-neon/30"></span> // 项目背景与目标
          </div>
          <p className="text-slate-400 leading-relaxed">{background}</p>
        </div>
        <div>
          <div className="font-mono text-neon text-sm mb-3 tracking-wider flex items-center gap-2">
            <span className="w-4 h-px bg-neon/30"></span> // 设计方案
          </div>
          <ul className="list-none space-y-2">
            {design.map((item, i) => (
              <li key={i} className="terminal-li text-slate-400 text-sm leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        <div className="font-mono text-neon text-sm mb-4 tracking-wider uppercase">// 成果指标</div>
        {metrics && metrics.map((m, i) => (
          <MetricItem key={i} {...m} />
        ))}
      </div>
    </div>
  </div>
);

const Background = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,157,0.03),transparent_70%)]" />
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #00ff9d 1px, transparent 1px), linear-gradient(to bottom, #00ff9d 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-px h-20 bg-gradient-to-b from-transparent via-neon/20 to-transparent"
        initial={{ 
          x: Math.random() * 100 + "%", 
          y: -100,
          opacity: 0
        }}
        animate={{ 
          y: ["0%", "120%"],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: Math.random() * 5 + 5, 
          repeat: Infinity, 
          delay: Math.random() * 5,
          ease: "linear" 
        }}
      />
    ))}
  </div>
);

export default function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    });
  };

  const coreTags = [
    "8年区块链经验",
    "Web3 支付专家",
    "0-1 落地能力",
    "交易所充提币",
    "矿机监控 SaaS",
    "元宇宙社交",
    "团队管理"
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] selection:bg-neon/30 selection:text-neon pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
      <Background />
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-white/10 overflow-hidden">
          {/* Scanning Line Effect */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <motion.div 
              animate={{ y: ["0%", "100%", "0%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-full h-[1px] bg-neon shadow-[0_0_10px_#00FF00]"
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-neon rounded-sm flex items-center justify-center shadow-[0_0_15px_rgba(0,255,0,0.3)]">
                <Shield className="text-black" size={20} />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-white font-black tracking-tighter text-lg leading-none">PEIJIA_YU.OS</span>
                <span className="font-mono text-[8px] text-neon/60 tracking-[0.2em] mt-1 uppercase">Blockchain_Architect_v3</span>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center gap-10 font-mono text-[10px] tracking-widest">
              <div className="flex flex-col items-end">
                <span className="text-gray-600 uppercase text-[8px] mb-0.5">System_Clock</span>
                <span className="text-neon tabular-nums">{formatTime(time)}</span>
              </div>
              
              <div className="h-8 w-[1px] bg-white/10" />

              <div className="flex flex-col items-end">
                <span className="text-gray-600 uppercase text-[8px] mb-0.5">Network_Status</span>
                <div className="flex items-center gap-2 text-neon">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse shadow-[0_0_8px_#00FF00]" />
                  <span className="uppercase">Encrypted_Link</span>
                </div>
              </div>

              <div className="h-8 w-[1px] bg-white/10" />

              <div className="flex flex-col items-end">
                <span className="text-gray-600 uppercase text-[8px] mb-0.5">Protocol</span>
                <span className="text-white">SECURE_V3.0.4</span>
              </div>
            </div>
          </div>
        </header>

        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono text-neon mb-2 flex items-center gap-2"
          >
            <span className="text-[10px]">●</span> CRYPTO 高级产品经理/PRODUCT MANAGER
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            余培嘉 / PEIJIA YU
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-sm text-gray-500 mb-12">
            <div>[ AGE: 1994 ]</div>
            <div>[ LOC: 深圳 ]</div>
            <div>[ EDU: 深圳大学本科（2012-2016全日制统招 轨道交通） ]</div>
            <div className="text-neon underline decoration-neon/30">[ EMAIL: 0x251522042@gmail.com ]</div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 border border-gray-800 rounded-xl bg-white/[0.02] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Activity size={120} className="text-neon" />
            </div>
            <div className="relative z-10">
              <div className="flex flex-wrap gap-2 mb-6">
                {coreTags.map(tag => <CoreTag key={tag}>{tag}</CoreTag>)}
              </div>
              <h3 className="font-mono text-neon mb-3 underline decoration-neon/30 tracking-wider text-sm">自我介绍 / ABOUT_ME</h3>
              <p className="text-xl text-slate-300 leading-relaxed font-light">
                8年区块链产品工作经验（包含：加密货币支付/充提币、买卖/兑换、信用卡消费、专业矿机监控、DAPP），具备优秀的产品规划设计能力和团队管理协作能力的高级产品经理，擅长从 0-1 的产品落地。
              </p>
            </div>
          </motion.div>
        </div>

        {/* Work History */}
        <section className="mb-32">
          <SectionHeader num="01" title="工作经历 / WORK_HISTORY" />
          <div className="space-y-4">
            <ContentBlock title="Gate Technology Inc." date="2025/12 - 2026/03" role="高级产品经理">
              负责加密货币交易所的链上充提币功能模块和审核后台的产品体验和效率优化、以及链上充提币功能标准化设计为分站快速搭建提供支持。
            </ContentBlock>

            <ContentBlock title="深圳市威尔计算机系统有限公司" date="2023/05 - 2025/10" role="高级产品经理">
              负责加密货币以及法币的产品矩阵设计规划与商业落地（包含：加密货币WEB3支付、加密货币买卖、加密货币信用卡、法币聚合支付、法币兑换） 。
            </ContentBlock>

            <ContentBlock title="深圳市精一信息科技有限公司" date="2019/03 - 2023/05" role="高级产品经理">
              从0-1落地Saas产品，为比特币矿场提供高效的监控和管理能力，解决矿机故障多、运维成本高、管理难、数据不透明等问题。
            </ContentBlock>

            <ContentBlock title="深圳市享家乐科技有限公司" date="2018/01 - 2019/02" role="产品经理">
              <p className="mb-4">负责不同形态的游戏社交产品的产品设计、项目路演、项目融资等工作（包含：元宇宙+人工智能游戏社交、趣味游戏匹配社交、区块链真实行为记录社交） 。</p>
              <ul className="list-none space-y-2 text-sm opacity-80">
                <li className="terminal-li">NAVI平行世界：一款面向Z世代用户的元宇宙+人工智能情感陪护的3D虚拟场景游戏社交平台。</li>
                <li className="terminal-li">ZAO星球： 一款通过趣味游戏进行匹配社交的社交平台。</li>
                <li className="terminal-li">婚链DAPP：一款通过区块链技术记录用户真实约会活动，评价，身份信息的婚恋社交平台。</li>
              </ul>
            </ContentBlock>
          </div>
        </section>

        {/* Project Logs */}
        <section className="mb-32">
          <SectionHeader num="02" title="项目详情 / PROJECT_LOGS" />
          
          <ProjectLog 
            title="交易所链上充提币模块"
            background="Gate交易所基础功能已具备的前提下为了获取更多的用户开始打造有竞争力的交互体验,特别是链上充提币模块是资金的出入口,需要让用户有良好的体验让用户觉得平台安全靠谱。目标:优化WEB、H5、APP端的交互体验、缩短操作时间、提高效率并保证安全合规。"
            design={[
              "统一优化文案:准确且统一的表达功能定义和介绍,让用户容易理解。",
              "细节交互优化:升级智能输入、错误及时提示、数据准确传达。",
              "安全功能自定义:补全安全功能(新地址提现限制、小额免密提现等),启用权交给用户。",
              "消息触达优化:完善提币申请、风控、成功、充值风控等通知。",
              "优化审核后台:按审核事件类型及SOP优化信息架构、权限体系、工作流程、消息通知。"
            ]}
            metrics={[
              { label: "审核效率", value: "+100%", icon: Zap },
              { label: "操作耗时", value: "-40%", icon: TrendingUp }
            ]}
          />

          <ProjectLog 
            title="BLOCKATM（WEB3去中心化加密货币支付解决方案）"
            url="https://www.blockatm.net/en-US"
            background="传统法币支付体系受币种限制、监管要求、KYC&KYB流程、高额手续费、延迟结算及资金冻结风险等问题制约。目标：颠覆传统支付体系，打造WEB3时代的去中心化支付系统，实现全球无地域限制、商户资产自主托管、低手续费与高流转效率。"
            design={[
              "智能合约收款：部署权限固定的收款智能合约，资产储存在合约地址，摆脱中心化机构控制，资产由商户自行管理。",
              "智能合约付款：部署权限固定的付款智能合约，实现安全且便捷的批量付币功能。",
              "收银台收款页：构建关联收款智能合约的收银台，为用户提供支付加密货币的操作页面。",
              "消息通知提醒：提供邮件、Telegram消息通知服务，便于商户掌握加密货币资产动向。",
              "服务费用固定：按订单数量收费，每笔收取固定费用。",
              "去中心化账户：通过钱包连接登录以及管理链上的智能合约及资产。"
            ]}
            metrics={[
              { label: "月均收款流水", value: "$15.0M", icon: BarChart3, subValue: "USD/Month" },
              { label: "月均付款流水", value: "$20.0M", icon: TrendingUp, subValue: "USD/Month" },
              { label: "开通智能合约", value: "50张", icon: Shield }
            ]}
          />

          <ProjectLog 
            title="PASSTO SWAP（加密货币买卖/兑换）"
            background="解决加密货币持有者兑换法币时的资金安全风险与高手续费问题。目标：为加密货币持有者、投资者提供安全、优惠的购买和出售加密货币服务。"
            design={[
              "去中心化账户：通过钱包连接登录以及进行加密货币兑换交易。",
              "经济实惠报价：通过智能报价算法实现低手续费交易。",
              "多种支付方式：支持银行卡、信用卡、支付宝等多种主流支付方式，覆盖全球用户群体。",
              "智能合约交易：借助 BLOCKATM 的收款和付款智能合约实现加密货币的收币和付币。",
              "后台管理系统：资金池管理、币种与汇率管理、订单管理、支付通道管理、客户管理、风控管理等。"
            ]}
            metrics={[
              { label: "业务转型", value: "线下转线上", icon: Zap },
              { label: "流程管理", value: "规范化/透明化", icon: Shield }
            ]}
          />

          <ProjectLog 
            title="PASSTO CREDIT（加密货币抵押信用卡）"
            url="https://passtocredit.io/en-US/index.html"
            background="加密货币无法直接消费且面临资金冻结风险。目标：构建基于加密资产抵押的信用卡系统，让投资者无需出售加密货币即可获得可消费的法币额度，支持全球使用并实现平台化运营。"
            design={[
              "资产抵押信用模型：支持抵押主流区块链（Ethereum、Arbitrum、Tron等）的稳定币资产（USDT、USDC、DAI 等）以获得Mastercard信用额度。",
              "信用卡产品体系：提供完善的卡功能（开卡、绑卡、报失、换卡、注销、冻结等）及多种级别卡片（Platinum/BLACK），单笔额度可达500万港币。",
              "白标发行机制：构建平台化发行能力，让合作伙伴发行自己的品牌卡片，配置汇率、费率、设计及分润机制。",
              "代理与返利体系：任何用户均可申请成为代理（Agent），通过推荐用户完成开卡、抵押及消费行为获取多级返利。",
              "后台管理系统：包含白标管理、抵押资产管理、授信管理、信用卡管理、客户管理、代理管理、支付结算、风控合规、内容通知、数据报表等10大模块。"
            ]}
            metrics={[
              { label: "月均抵押资产", value: "80.0M", icon: Shield, subValue: "HKD/Month" },
              { label: "总发卡量", value: "10,000+", icon: CreditCard },
              { label: "月均利润", value: "100W+", icon: Zap, subValue: "HKD" }
            ]}
          />

          <ProjectLog 
            title="PASSTO PAY（法币收付网关）"
            url="https://passtopay.io/"
            background="解决中小商户接入支付机构难、资金不安全、费率高等痛点。目标：为商户提供稳定安全并且支持多种支付方式的收付款解决方案。"
            design={[
              "原生支付体验：深度对接支付宝官方通道，实现原生支付流程，提升用户支付体验与交易成功率。",
              "聚合支付方式：支持支付宝、微信、快捷支付、加密货币等多种支付方式。",
              "智能风控体系：根据用户身份信息、历史交易行为搭建风控模型，自动识别并拦截恶意客户。",
              "智能通道路由：根据商户经营性质、通道能力及稳定性智能分配收付款通道，提高成功率。",
              "管理后台系统：实现商户管理、客户管理、订单管理、通道管理、风控管理、费率配置、数据统计等。",
              "稳定与安全：支持多通道容灾切换、支付数据加密与签名校验机制。"
            ]}
            metrics={[
              { label: "收款成功率", value: "90%+", icon: Zap },
              { label: "风控事件率", value: "<5%", icon: Shield }
            ]}
          />

          <ProjectLog 
            title="PASSTO.io（香港法币兑换门户网站）"
            url="https://www.passto.io/zh-tc/"
            background="香港作为国际金融中心，法币兑换需求旺盛，但各找换店报价差异大且缺乏集中展示平台。目标：构建覆盖全港的找换店信息门户，帮助用户快速筛选最优兑换点，提升找换体验与透明度。"
            design={[
              "用户端：找换店列表、地图定位、店铺详情、预约下单、历史订单、服务评价等核心功能。",
              "商户端：商户入驻与认证、店铺信息管理、实时报价管理、数据统计分析、用户评价回复。",
              "平台端：商户管理、客户管理、用户管理、权限管理、内容管理、数据报表。",
              "盈利模式：通过找换店竞价排名、自营找换店推荐、预约订单服务费及联盟广告实现多元变现。"
            ]}
            metrics={[
              { label: "入驻找换店", value: "800+", icon: Globe },
              { label: "平台 DAU", value: "8,000+", icon: Users },
              { label: "实时报价/日", value: "5,000+", icon: Activity }
            ]}
          />

          <ProjectLog 
            title="矿管管 Saas平台（加密货币挖矿监控）"
            url="https://www.itsminer.com/"
            background="加密货币挖矿的矿场需要运维人员维护几千到数十万台矿机，传统工具仅能同时监控少量矿机，导致管理难、效率低、成本高。目标：为矿场提供高效的监控和管理SaaS能力，实现实时监控、故障报警、故障自动处理等核心诉求。"
            design={[
              "监控能力：包含矿机监控（算力、温度等）、矿池监控（算力达标率等）及负荷监控（三相电平衡预警）。",
              "维护能力：批量操作（重启、升级、切矿池等）及维修管理（故障单和维修单跟踪）。",
              "管理能力：客户管理、班组管理、电量管理、收支管理、资产管理、权限管理等。",
              "通知能力：自定义故障告警规则、告警渠道（邮件/TG/手机）及通知推送规则。",
              "数据统计和分析：可视化展示不同机型的故障率、稳定性、收益率及电量消耗。",
              "模块化设计：设计高内聚低耦合的功能模块，实现产品模块的灵活插拔组合，降低付费门槛。"
            ]}
            metrics={[
              { label: "维护效率", value: "10x", icon: Zap, subValue: "人均维护量提升" },
              { label: "故障响应", value: "30min", icon: Activity, subValue: "缩短 83%" },
              { label: "故障率", value: "-50%", icon: Shield, subValue: "从 10% 降至 5%" },
              { label: "矿场数", value: "30+", icon: Globe },
              { label: "矿机数", value: "50W+", icon: Cpu },
              { label: "年营收", value: "500W+", icon: TrendingUp, subValue: "CNY" }
            ]}
          />

          <ProjectLog 
            title="NAVI平行世界（3D游戏/人工智能/社交/元宇宙）"
            background="传统社交软件存在破冰难、趣味性不足等问题。目标：为Z世代用户打造一个可以个性化展示和虚拟化社交的虚拟人物社交平台，结合AI技术实现灵魂匹配和趣味社交体验。"
            design={[
              "虚拟角色定制：根据用户照片生成或自定义虚拟角色。",
              "虚拟现实场景：提供多样化、丰富的虚拟现实场景供用户自由探索。",
              "虚拟社交玩法：包含游戏、看漫画、虚拟派对、虚拟演出、虚拟展览等。",
              "社交互动功能：好友关系、聊天、语音、动态、个人主页、群组等。",
              "人工智能养成：通过 NLP 和情感识别技术让虚拟角色更真实，并智能匹配交友对象。"
            ]}
            metrics={[
              { label: "注册用户", value: "5000+", icon: Users },
              { label: "留存率", value: "60%", icon: TrendingUp },
              { label: "周活用户", value: "500+", icon: Activity }
            ]}
          />

          <ProjectLog 
            title="ZAO星球 DAPP（2D游戏社交）"
            background="Z世代用户社交目的多样化且注重隐私安全。目标：提供游戏兴趣社交平台，用户通过一起玩游戏结交朋友，并基于以太坊去中心化储存用户数据。"
            design={[
              "游戏平台：提供益智、对战、卡牌等多种类型的小游戏。",
              "匹配系统：采用智能匹配算法，根据玩家喜好和游戏能力进行匹配。",
              "社交互动：提供好友、聊天、动态等功能，增加社交联系。",
              "积分系统：通过游戏和社交获得积分，换取道具和高级权限。",
              "授权访问：基于以太坊和智能合约技术，去中心化储存用户数据，保障隐私安全。"
            ]}
            metrics={[
              { label: "注册用户", value: "1万+", icon: Users },
              { label: "月活用户", value: "3000+", icon: Activity },
              { label: "用户反馈", value: "80%", icon: Zap, subValue: "满意度极高" }
            ]}
          />

          <ProjectLog 
            title="婚链 DAPP（相亲交友）"
            background="传统社交平台信息不真实、婚介费用高。目标：使用以太坊开发一款安全、可信、低成本、以结婚为目的的社交平台。"
            design={[
              "身份认证：通过认证资料上链（学历、收入证明），确保信息真实可靠。",
              "匹配系统：根据个人信息和择偶要求，通过智能合约算法匹配对象。",
              "代币系统：发行代币 MAC，激励用户积极参与社交活动。",
              "约会发布与交易：提供发布约会信息功能，并通过智能合约进行约会担保。",
              "评价系统：用户为约会对象打分评价，信息记录在链上，增加可信度。"
            ]}
            metrics={[
              { label: "注册用户", value: "10万+", icon: Users },
              { label: "促成约会", value: "1万+次", icon: Heart },
              { label: "月活用户", value: "3万+", icon: Activity }
            ]}
          />
        </section>

        {/* Others */}
        <section className="mb-32">
          <SectionHeader num="03" title="其他经历 / OTHERS" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="content-block">
              <div className="font-mono text-white mb-2">2017/09 - 2017/12</div>
              <div className="tag mb-2">UI学习</div>
              <p className="text-sm text-slate-400 leading-relaxed">在火星培训机构系统学习3个月UI设计能力，为日后产品原型绘制能力、UI界面把控能力奠定了基础。</p>
            </div>
            <div className="content-block">
              <div className="font-mono text-white mb-2">2016/09 - 2017/09</div>
              <div className="tag mb-2">服装电商</div>
              <p className="text-sm text-slate-400 leading-relaxed">毕业后尝试以校园生活日常穿搭为核心理念创办个人服装品牌，自主落实品牌设计、服装选品、网店设计、模特摄影等相关工作。</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-40 pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center opacity-40 text-xs font-mono">
          <div>© 2026 PEIJIA_YU. ALL_SYSTEMS_GO</div>
          <div className="mt-4 md:mt-0">SECURE_BLOCKCHAIN_PROTOCOL_V3</div>
        </footer>
      </div>
    </div>
  );
}
