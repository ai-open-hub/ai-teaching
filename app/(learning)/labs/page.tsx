import dynamic from "next/dynamic";
import { Suspense } from "react";

const MultiplicationGrid = dynamic(() => import("@/components/math/visualizer/multiplication/MultiplicationGrid").then((mod) => mod.MultiplicationGrid));

const MultiplicationShop = dynamic(() => import("@/components/math/visualizer/multiplication/MultiplicationShop").then((mod) => mod.MultiplicationShop),{
  ssr: false
  });

const MultiplicationStory = dynamic(() => import("@/components/math/visualizer/multiplication/MultiplicationStory").then((mod) => mod.MultiplicationStory),{
  ssr: false
  });

const visualiz = [
  {
    type: 'interactive',
    component: 'MultiplicationGrid',
    description: '通过排列水果来理解乘法，拖动改变行数和列数，看看结果如何变化。'
  },
  {
    type: 'game',
    component: 'MultiplicationShop',
    description: '在水果店里帮助老板计算水果的总数，锻炼乘法速算能力。'
  },
  {
    type: 'animation',
    component: 'MultiplicationStory',
    description: '跟随小兔子的购物之旅，看看它是如何用乘法解决实际问题的。'
  }
]

export default function LabsPage() {

    return (
      <div className="container mx-auto pt-20 px-4">
        <h1 className="text-4xl font-bold">实验室</h1>
        {/* 后续添加数学课程内容 */}
        <MultiplicationGrid />
      </div>
    );
  }