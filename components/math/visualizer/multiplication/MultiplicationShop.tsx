// components/math/visualizations/MultiplicationShop.tsx
"use client"

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ShopItem {
  name: string;
  emoji: string;
  quantity: number;
  price: number;
}

export function MultiplicationShop() {
  const [score, setScore] = useState(0);
  const [currentProblem, setCurrentProblem] = useState<ShopItem | null>(null);
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);

  const items: ShopItem[] = [
    { name: '苹果', emoji: '🍎', quantity: 3, price: 2 },
    { name: '香蕉', emoji: '🍌', quantity: 4, price: 3 },
    { name: '橙子', emoji: '🍊', quantity: 5, price: 2 },
    { name: '草莓', emoji: '🍓', quantity: 6, price: 4 },
  ];

  useEffect(() => {
    generateNewProblem();
  }, []);

  const generateNewProblem = () => {
    const newItem = items[Math.floor(Math.random() * items.length)];
    setCurrentProblem(newItem);
    setAnswer('');
    setFeedback(null);
  };

  const checkAnswer = () => {
    if (!currentProblem) return;
    
    const correctAnswer = currentProblem.quantity * currentProblem.price;
    const isCorrect = parseInt(answer) === correctAnswer;
    
    setFeedback(isCorrect ? 'correct' : 'wrong');
    if (isCorrect) {
      setScore(s => s + 1);
      setTimeout(generateNewProblem, 1500);
    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-center p-8">
      {/* 得分显示 */}
      <div className="absolute top-4 right-4 bg-primary/10 px-4 py-2 rounded-full">
        得分: {score}
      </div>

      {currentProblem && (
        <div className="space-y-8 text-center">
          {/* 问题展示 */}
          <div className="space-y-4">
            <div className="text-xl">
              买 {currentProblem.quantity} 个{currentProblem.name}
              {Array.from({ length: currentProblem.quantity }).map((_, i) => (
                <span key={i} className="ml-1">{currentProblem.emoji}</span>
              ))}
            </div>
            <div className="text-muted-foreground">
              每个 {currentProblem.price} 元
            </div>
          </div>

          {/* 答题区域 */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <Input
                type="number"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="w-24 text-center"
                placeholder="?"
              />
              <span>元</span>
            </div>
            
            <Button onClick={checkAnswer} disabled={!answer}>
              确认
            </Button>
          </div>

          {/* 反馈显示 */}
          <AnimatePresence mode="wait">
            {feedback && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`text-lg ${
                  feedback === 'correct' ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {feedback === 'correct' ? '答对啦！👏' : '再想想看~ 🤔'}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}