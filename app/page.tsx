import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 背景粒子效果 */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* 主内容 */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* 英雄区域 */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto">
            {/* 头像 */}
            <div className="fade-in-up mb-8">
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full glass-card flex items-center justify-center pulse-animation overflow-hidden">
                <Image
                  src="/wu.jpg"
                  alt="吴泓锐头像"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover rounded-full"
                  priority
                />
              </div>
            </div>

            {/* 主标题 */}
            <div className="fade-in-up mb-8" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
                吴泓锐
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-foreground-secondary mb-6">
                SEO专家 · 数字营销顾问 · AI工具达人
              </h2>
              <p className="text-base md:text-lg text-foreground-muted max-w-2xl mx-auto leading-relaxed">
                10年+百度SEO推广经验，专注网站优化与网络运营，AI工具自媒体运营达人，全网粉丝近15万
              </p>
            </div>

            {/* CTA按钮 */}
            <div className="fade-in-up flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '0.4s' }}>
              <button className="modern-button">
                <span>联系合作</span>
              </button>
              <button className="glass-card px-8 py-3 rounded-full hover:bg-glass-bg transition-all duration-300">
                <span>查看作品</span>
              </button>
            </div>
          </div>
        </section>

        {/* 专业技能区域 */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-in-left">
                专业技能
              </h2>
              <p className="text-lg text-foreground-secondary slide-in-right">
                深耕数字营销领域，助力企业数字化转型
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* 技能卡片1 */}
              <div className="glass-card p-8 text-center fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center text-white text-2xl font-bold">
                  SEO
                </div>
                <h3 className="text-xl font-semibold mb-4">SEO推广优化</h3>
                <p className="text-foreground-secondary text-sm leading-relaxed">
                  深度理解搜索引擎算法，擅长关键词策略、内容优化、技术SEO等全方位优化手段
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  <span className="skill-tag">关键词策略</span>
                  <span className="skill-tag">内容优化</span>
                  <span className="skill-tag">技术SEO</span>
                </div>
              </div>

              {/* 技能卡片2 */}
              <div className="glass-card p-8 text-center fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent-secondary to-accent flex items-center justify-center text-white text-2xl font-bold">
                  运营
                </div>
                <h3 className="text-xl font-semibold mb-4">网络运营</h3>
                <p className="text-foreground-secondary text-sm leading-relaxed">
                  具备完整的网络运营体系思维，从用户获取到转化的全链路运营经验
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  <span className="skill-tag">用户增长</span>
                  <span className="skill-tag">数据分析</span>
                  <span className="skill-tag">转化优化</span>
                </div>
              </div>

              {/* 技能卡片3 */}
              <div className="glass-card p-8 text-center fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center text-white text-2xl font-bold">
                  设计
                </div>
                <h3 className="text-xl font-semibold mb-4">视觉设计</h3>
                <p className="text-foreground-secondary text-sm leading-relaxed">
                  熟练掌握视觉设计与多媒体制作，为品牌传播提供优质的视觉内容支持
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  <span className="skill-tag">图片美工</span>
                  <span className="skill-tag">视频剪辑</span>
                  <span className="skill-tag">品牌设计</span>
                </div>
              </div>

              {/* 技能卡片4 */}
              <div className="glass-card p-8 text-center fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent-secondary to-accent flex items-center justify-center text-white text-2xl font-bold">
                  AI
                </div>
                <h3 className="text-xl font-semibold mb-4">AI工具运营</h3>
                <p className="text-foreground-secondary text-sm leading-relaxed">
                  前沿AI技术应用专家，全网粉丝近15万，深谙新媒体运营之道
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  <span className="skill-tag">AI工具应用</span>
                  <span className="skill-tag">自媒体运营</span>
                  <span className="skill-tag">内容创作</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 联系方式 */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="fade-in-up mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">联系合作</h2>
              <p className="text-lg text-foreground-secondary">
                期待与您的合作交流，携手共创数字化未来
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {/* 微信联系 */}
              <div className="glass-card p-8 text-center hover:scale-105 transition-transform duration-300 fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center text-white text-2xl font-bold">
                  微信
                </div>
                <h3 className="text-xl font-semibold mb-2">微信联系</h3>
                <p className="text-2xl font-mono text-accent mb-2">wu1371236</p>
                <p className="text-sm text-foreground-muted">扫码或搜索添加微信</p>
              </div>

              {/* 微信二维码 */}
              <div className="glass-card p-8 text-center hover:scale-105 transition-transform duration-300 fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-32 h-32 mx-auto mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="/weixing.png"
                    alt="微信二维码"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">扫码添加</h3>
                <p className="text-sm text-foreground-muted">扫描二维码快速添加微信</p>
              </div>
            </div>
          </div>
        </section>

        {/* 页脚 */}
        <footer className="py-12 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-glass-border to-transparent mb-8"></div>
            <p className="text-foreground-muted">
              © 2025 吴泓锐 · 专业为先 · 匠心独运
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
