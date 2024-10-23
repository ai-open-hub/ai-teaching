import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

// 定义类型接口
interface VisionCardProps {
    number: string;
    title: string;
    description: string;
    image: string;
  }
  
  interface ExperienceCardProps {
    title: string;
    description: string;
    image: string;
    align: 'left' | 'right';
  }
  
  interface FooterSectionProps {
    title: string;
    items: string[];
  }

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - 大气磅礴而简约 */}
      <section
        id="hero"
        className="h-screen flex items-center justify-center bg-gradient-to-b from-background to-background/95"
      >
        <div className="text-center space-y-6 px-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter">
            Think Different.
            <br />
            <span className="text-primary">Learn Different.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            重新想象学习的方式
          </p>
          <div className="flex justify-center gap-4 pt-8">
            <Button className="h-12 px-8 text-lg rounded-full" asChild>
              <a href="/chat">开启新的学习方式</a>
            </Button>
            <Button
              variant="outline"
              className="h-12 px-8 text-lg rounded-full"
              asChild
            >
              <a href="#vision">了解更多</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Vision Section - 展现我们的愿景 */}
      <section
        id="vision"
        className="py-32 bg-black text-white relative overflow-hidden"
      >
        {/* 背景光效 */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

        <div className="max-w-5xl mx-auto px-4 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            改变100万孩子的学习方式
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <VisionCard
              number="01"
              title="个性化学习"
              description="AI因材施教，像最懂你的老师"
              image="/vision/personalized.svg"
            />
            <VisionCard
              number="02"
              title="思维培养"
              description="激发创造力，培养解决问题的能力"
              image="/vision/thinking.svg"
            />
            <VisionCard
              number="03"
              title="自主学习"
              description="培养终身学习的能力和兴趣"
              image="/vision/self-learning.svg"
            />
          </div>
        </div>
      </section>

      {/* Experience Section - 明亮背景配合大图 */}
      <section id="experience" className="py-32 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            极致学习体验
          </h2>
          <div className="space-y-32">
            <ExperienceCard
              title="数学思维"
              description="通过可视化和互动，让抽象概念具象化"
              image="/experience/math.png"
              align="right"
            />
            <ExperienceCard
              title="阅读理解"
              description="AI导读，培养深度阅读能力"
              image="/experience/reading.png"
              align="left"
            />
            <ExperienceCard
              title="科学探索"
              description="virtual lab，激发探索精神"
              image="/experience/science.png"
              align="right"
            />
          </div>
        </div>
      </section>

      {/* CTA Section - 优雅的召唤 */}
      <section className="py-32 bg-primary/5">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            准备好开启新的学习方式了吗？
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            加入数千名正在使用 AI Teaching 的学习者
          </p>
          <Button size="lg" className="h-12 px-8 rounded-full" asChild>
            <a href="/register">
              立即开始 <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* Footer - 简约而不简单 */}
      <footer className="border-t border-border/40 bg-background/95 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <FooterSection
              title="愿景"
              items={["我们的使命", "教育理念", "发展历程"]}
            />
            <FooterSection
              title="体验"
              items={["数学思维", "阅读理解", "科学探索"]}
            />
            <FooterSection
              title="支持"
              items={["使用指南", "常见问题", "联系我们"]}
            />
            <FooterSection
              title="关于"
              items={["加入我们", "新闻资讯", "合作伙伴"]}
            />
          </div>
          <div className="mt-12 pt-8 border-t border-border/40 text-sm text-muted-foreground">
            <p>© 2024 AI Teaching. Think Different. Learn Different.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

// Vision Card Component
function VisionCard({ number, title, description, image }: VisionCardProps) {
  return (
    <div className="group relative bg-zinc-900 rounded-2xl p-6 transition-all hover:bg-zinc-800">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

      <img
        src={image}
        alt={title}
        className="w-16 h-16 mb-6 group-hover:scale-110 transition-transform"
      />

      <div className="text-primary text-sm font-medium mb-2">{number}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </div>
  );
}

function ExperienceCard({ title, description, image, align }: ExperienceCardProps) {
  return (
    <div
      className={`flex flex-col ${align === "right" ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12`}
    >
      <div className="flex-1">
        <img
          src={image}
          alt={title}
          className="rounded-2xl shadow-2xl"
          width={600}
          height={400}
        />
      </div>

      <div className="flex-1 space-y-4">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-muted-foreground text-lg">{description}</p>
        <Button variant="outline" className="mt-4">
          了解更多
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

// Footer Section Component
function FooterSection({ title, items }: FooterSectionProps) {
  return (
    <div>
      <h4 className="font-medium mb-4">{title}</h4>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
