"use client"

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {Visualization} from '@/types/math';

import { createDynamicComponent, isComponentRegistered } from './loader';

interface VisualizationProps {
  visualizations: Visualization[];
}

// 视觉类型映射
const visualTypeInfo = {
  static: { icon: '📊', label: '图解' },
  interactive: { icon: '🔄', label: '互动' },
  animation: { icon: '▶️', label: '动画' },
  game: { icon: '🎮', label: '游戏' }
} as const;

export function Visualizer({ visualizations }: VisualizationProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeViz = visualizations[activeIndex];

  // 动态创建组件
  const DynamicComponent = activeViz.component && isComponentRegistered(activeViz.component)
    ? createDynamicComponent(activeViz.component)
    : null;

  if (!visualizations.length) return null;

  return (
    <div className="space-y-4">
      {/* 可视化类型选择器 */}
      {visualizations.length > 1 && (
        <div className="flex gap-2 pb-4 overflow-x-auto">
          {visualizations.map((viz, index) => (
            <Button
              key={index}
              variant={index === activeIndex ? "default" : "outline"}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "rounded-full",
                index === activeIndex && "shadow-md"
              )}
            >
              {visualTypeInfo[viz.type].icon}
              <span className="ml-2">{visualTypeInfo[viz.type].label}</span>
            </Button>
          ))}
        </div>
      )}

      {/* 可视化展示区域 */}
      <div className="relative aspect-video bg-card rounded-lg overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute inset-0"
          >
            {DynamicComponent ? (
              <DynamicComponent />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                组件 {activeViz.component} 未注册
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 描述文本 */}
      <p className="text-sm text-muted-foreground">
        {activeViz.description}
      </p>
    </div>
  );
}