import { Sparkles, Book, Calculator, Globe, Palette, Robot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function LearningDashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* 顶部进度概览 */}
      <section className="pt-24 pb-8 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">你好，小探索家 👋</h1>
              <p className="text-muted-foreground">继续你的学习旅程 - 已完成 31%</p>
            </div>
            <Progress value={31} className="w-32" />
          </div>
          
          {/* 最近进度卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatusCard 
              title="今日课程"
              value="2.3 AI + 批判性思维培养"
              status="进行中"
              icon={<Sparkles className="h-5 w-5" />}
            />
            <StatusCard 
              title="已完成课程"
              value="13"
              status="共42节"
              icon={<Book className="h-5 w-5" />}
            />
            <StatusCard 
              title="学习时长"
              value="3.5小时"
              status="本周累计"
              icon={<Calculator className="h-5 w-5" />}
            />
          </div>
        </div>
      </section>

      {/* 主要学习模块 */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 语文模块 */}
            <LearningModule
              title="趣味阅读"
              description="AI互动阅读，让阅读更有趣"
              items={[
                "阅读启蒙",
                "个性化阅读材料",
                "精读课文",
                "写作指导"
              ]}
              progress={45}
              icon={<Book className="h-6 w-6" />}
              color="bg-blue-500/10"
              href="/learn/reading"
            />

            {/* 数学模块 */}
            <LearningModule
              title="数学思维"
              description="可视化学习，培养数学直觉"
              items={[
                "概念可视化",
                "解题思路分析",
                "数学思维培养",
                "跨学科应用"
              ]}
              progress={35}
              icon={<Calculator className="h-6 w-6" />}
              color="bg-purple-500/10"
              href="/learn/math"
            />

            {/* 英语模块 */}
            <LearningModule
              title="英语探索"
              description="沉浸式英语学习体验"
              items={[
                "启蒙儿歌",
                "个性化词汇学习",
                "写作训练",
                "口语环境"
              ]}
              progress={25}
              icon={<Globe className="h-6 w-6" />}
              color="bg-green-500/10"
              href="/learn/english"
            />

            {/* 艺术创作 */}
            <LearningModule
              title="艺术创作"
              description="AI辅助创作，激发艺术潜能"
              items={[
                "AI创作音乐",
                "AI绘画创作",
                "故事插画",
                "创意表达"
              ]}
              progress={15}
              icon={<Palette className="h-6 w-6" />}
              color="bg-orange-500/10"
              href="/learn/art"
            />

            {/* 科学探索 */}
            <LearningModule
              title="科学探索"
              description="虚拟实验室，探索科学奥秘"
              items={[
                "智能植物养成",
                "趣味实验",
                "科学原理",
                "探究性学习"
              ]}
              progress={20}
              icon={<Robot className="h-6 w-6" />}
              color="bg-cyan-500/10"
              href="/learn/science"
            />
          </div>
        </div>
      </section>

      {/* 学习建议 */}
      <section className="py-12 px-4 bg-primary/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">为你推荐</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RecommendCard 
              title="批判性思维训练"
              description="根据你的学习进度，建议继续完成《批判性思维培养》单元"
              progress={60}
              time="25分钟"
            />
            <RecommendCard 
              title="项目式学习"
              description="尝试制作一个知识卡片网站，运用已学知识"
              progress={0}
              time="45分钟"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function StatusCard({ title, value, status, icon }) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-full bg-primary/10">{icon}</div>
        <div>
          <div className="text-sm text-muted-foreground">{title}</div>
          <div className="text-2xl font-semibold">{value}</div>
          <div className="text-sm text-muted-foreground">{status}</div>
        </div>
      </div>
    </Card>
  );
}

function LearningModule({ title, description, items, progress, icon, color, href }) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className={`p-3 rounded-full w-fit ${color}`}>{icon}</div>
      <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <ul className="space-y-2 mb-4">
        {items.map((item, index) => (
          <li key={index} className="text-sm text-muted-foreground">
            • {item}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between">
        <Progress value={progress} className="w-32" />
        <Button variant="outline" asChild>
          <a href={href}>继续学习</a>
        </Button>
      </div>
    </Card>
  );
}

function RecommendCard({ title, description, progress, time }) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{time}</span>
        </div>
        <Button>开始学习</Button>
      </div>
    </Card>
  );
}