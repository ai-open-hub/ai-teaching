// components/math/visualizations/MultiplicationStory.tsx
"use client"

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';

interface StoryScene {
  text: string;
  emoji: string[];
  calculation?: string;
}

export function MultiplicationStory() {
  const [currentScene, setCurrentScene] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const scenes: StoryScene[] = [
    {
      text: "小兔子想要给森林里的朋友们送胡萝卜",
      emoji: ["🐰"],
    },
    {
      text: "它要准备给3个朋友",
      emoji: ["🦊", "🐻", "🐯"],
    },
    {
      text: "每个朋友要送4根胡萝卜",
      emoji: ["🥕", "🥕", "🥕", "🥕"],
    },
    {
      text: "小兔子需要准备多少根胡萝卜呢？",
      emoji: ["🤔"],
      calculation: "3 × 4 = 12",
    },
    {
      text: "原来总共需要12根胡萝卜！",
      emoji: ["🥕", "🥕", "🥕", "🥕", "🥕", "🥕", "🥕", "🥕", "🥕", "🥕", "🥕", "🥕"],
    }
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isAutoPlaying) {
      timer = setInterval(() => {
        setCurrentScene(s => {
          if (s === scenes.length - 1) {
            setIsAutoPlaying(false);
            return s;
          }
          return s + 1;
        });
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [isAutoPlaying, scenes.length]);

  const goToScene = (delta: number) => {
    setCurrentScene(s => {
      const newScene = s + delta;
      return Math.max(0, Math.min(newScene, scenes.length - 1));
    });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center p-8">
      {/* 场景显示 */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScene}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center space-y-8"
          >
            {/* 故事文本 */}
            <div className="text-xl">{scenes[currentScene].text}</div>
            
            {/* 表情动画 */}
            <div className="flex flex-wrap gap-2 justify-center">
              {scenes[currentScene].emoji.map((emoji, i) => (
                <motion.span
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-2xl"
                >
                  {emoji}
                </motion.span>
              ))}
            </div>

            {/* 计算过程 */}
            {scenes[currentScene].calculation && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold text-primary"
              >
                {scenes[currentScene].calculation}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 控制按钮 */}
      <div className="flex items-center gap-4 mt-8">
        <Button
          variant="outline"
          onClick={() => goToScene(-1)}
          disabled={currentScene === 0}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        
        <Button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          variant="outline"
        >
          {isAutoPlaying ? "暂停" : "自动播放"}
        </Button>
        
        <Button
          variant="outline"
          onClick={() => goToScene(1)}
          disabled={currentScene === scenes.length - 1}
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* 进度指示器 */}
      <div className="flex gap-1 mt-4">
        {scenes.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === currentScene ? 'bg-primary' : 'bg-muted'
            }`}
          />
        ))}
      </div>
    </div>
  );
}