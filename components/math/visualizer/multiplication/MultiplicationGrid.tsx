// components/math/visualizations/MultiplicationGrid.tsx
"use client"

import { motion } from 'framer-motion';
import { ChevronDown, ChevronRight, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';

export function MultiplicationGrid() {
  const [rows, setRows] = useState(2);
  const [cols, setCols] = useState(3);
  const [showFormula, setShowFormula] = useState(false);
  
  const handleRowChange = (delta: number) => {
    setRows(r => Math.min(Math.max(1, r + delta), 5));
  };
  
  const handleColChange = (delta: number) => {
    setCols(c => Math.min(Math.max(1, c + delta), 6));
  };

  return (
    <div className="h-full flex flex-col items-center justify-center p-8 gap-8">
      {/* 控制区域 */}
      <div className="flex gap-8">
        <div className="flex items-center gap-2">
          <span className="text-sm">行数:</span>
          <Button size="icon" variant="outline" onClick={() => handleRowChange(-1)}>
            <Minus className="w-4 h-4" />
          </Button>
          <span className="w-8 text-center">{rows}</span>
          <Button size="icon" variant="outline" onClick={() => handleRowChange(1)}>
            <Plus className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">列数:</span>
          <Button size="icon" variant="outline" onClick={() => handleColChange(-1)}>
            <Minus className="w-4 h-4" />
          </Button>
          <span className="w-8 text-center">{cols}</span>
          <Button size="icon" variant="outline" onClick={() => handleColChange(1)}>
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* 网格区域 */}
      <div 
        className="grid gap-2 bg-background p-6 rounded-lg border border-border"
        style={{ 
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          maxWidth: `${cols * 60}px` 
        }}
      >
        {Array.from({ length: rows * cols }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="w-12 h-12 flex items-center justify-center"
          >
            🍎
          </motion.div>
        ))}
      </div>

      {/* 结果显示 */}
      <div className="flex flex-col items-center gap-2">
        <Button 
          variant="ghost" 
          onClick={() => setShowFormula(!showFormula)}
          className="text-sm"
        >
          {showFormula ? <ChevronDown className="w-4 h-4 mr-1" /> : <ChevronRight className="w-4 h-4 mr-1" />}
          看看计算过程
        </Button>
        
        <motion.div
          initial={false}
          animate={{ height: showFormula ? 'auto' : 0 }}
          className="overflow-hidden"
        >
          <div className="text-muted-foreground">
            {Array.from({ length: rows }).map((_, i) => (
              <div key={i}>
                {i === 0 ? '' : '+ '}
                {Array.from({ length: cols }).map((_, j) => (
                  <span key={j}>
                    1{j < cols - 1 ? ' + ' : ''}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
        
        <div className="text-2xl font-semibold mt-2">
          {rows} × {cols} = {rows * cols}
        </div>
      </div>
    </div>
  );
}