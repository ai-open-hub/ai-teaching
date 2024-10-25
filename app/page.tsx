import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { Footer } from "@/components/custom/layout/footer";
import { Button } from "@/components/ui/button";

// 类型定义
type VisionCard = {
  number: string;
  title: string;
  description: string;
  imageUrl: string;
};

type ExperienceCard = {
  title: string;
  description: string;
  imageUrl: string;
  align: 'left' | 'right';
};

// 数据配置
const visionCards: VisionCard[] = [
  {
    number: "01",
    title: "个性化学习",
    description: "AI因材施教，像最懂你的老师",
    imageUrl: "/vision/personalized.svg"
  },
  {
    number: "02",
    title: "思维培养",
    description: "激发创造力，培养解决问题的能力",
    imageUrl: "/vision/thinking.svg"
  },
  {
    number: "03",
    title: "自主学习",
    description: "培养终身学习的能力和兴趣",
    imageUrl: "/vision/self-learning.svg"
  }
];

const experienceCards: ExperienceCard[] = [
  {
    title: "数学思维",
    description: "通过可视化和互动，让抽象概念具象化",
    imageUrl: "/experience/math.png",
    align: "right"
  },
  {
    title: "阅读理解",
    description: "AI导读，培养深度阅读能力",
    imageUrl: "/experience/reading.png",
    align: "left"
  },
  {
    title: "科学探索",
    description: "virtual lab，激发探索精神",
    imageUrl: "/experience/science.png",
    align: "right"
  }
];

// 内部组件
function VisionCard({ number, title, description, imageUrl }: VisionCard) {
  return (
    <div className="group relative bg-zinc-900 rounded-2xl p-6 transition-all hover:bg-zinc-800">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

      <div className="relative">
        <Image
          src={imageUrl}
          alt={title}
          width={64}
          height={64}
          className="mb-6 group-hover:scale-110 transition-transform"
        />

        <div className="text-primary text-sm font-medium mb-2">{number}</div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-zinc-400">{description}</p>
      </div>
    </div>
  );
}

function ExperienceCard({ title, description, imageUrl, align }: ExperienceCard) {
  return (
    <div className={`flex flex-col ${align === "right" ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12`}>
      <div className="flex-1 relative h-[300px] md:h-[400px] w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="rounded-2xl object-cover shadow-2xl"
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

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-background to-background/95">
        {/* 背景效果 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        </div>

        <div className="text-center space-y-6 px-4 relative z-10">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 space-y-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter">
              Think Different.
              <br />
              <span className="text-primary">Learn Different.</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto">
              重新想象学习的方式
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
              <Button 
                size="lg" 
                className="h-12 px-8 text-lg rounded-full"
                asChild
              >
                <a href="/chat">开启新的学习方式</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8 text-lg rounded-full"
                asChild
              >
                <a href="#vision">了解更多</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

        <div className="max-w-5xl mx-auto px-4 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            改变100万孩子的学习方式
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {visionCards.map((card) => (
              <VisionCard key={card.number} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            极致学习体验
          </h2>
          <div className="space-y-32">
            {experienceCards.map((card) => (
              <ExperienceCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

      <Footer />
    </main>
  );
}