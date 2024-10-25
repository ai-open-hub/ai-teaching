"use client"

import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import Link from 'next/link';
import { useState, useEffect } from 'react';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { mathConcepts } from '@/data/math-concepts';
import { MathConcept } from '@/types/math';

export default function MathPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedLevel, setSelectedLevel] = useState<string>('all');
    const [filteredConcepts, setFilteredConcepts] = useState(mathConcepts);
  
    // 简化的过滤逻辑
    useEffect(() => {
      const filtered = mathConcepts.filter(concept => {
        const matchesSearch = concept.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesLevel = selectedLevel === 'all' || concept.difficulty === selectedLevel;
        return matchesSearch && matchesLevel;
      });
      setFilteredConcepts(filtered);
    }, [searchQuery, selectedLevel]);

    return (
      <>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold tracking-tight mb-6"
          >
            重新想象数学学习
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            让抽象变得具象，让复杂变得简单
          </motion.p>
        </section>
  
        {/* 搜索区域 - 使用固定宽度容器 */}
        <div className="max-w-2xl mx-auto px-4 mb-20">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="探索数学概念"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-14 pl-12 pr-4 rounded-full bg-secondary border-border 
                       text-foreground placeholder:text-muted-foreground 
                       focus-visible:ring-primary"
            />
          </div>
        </div>
  
        {/* 难度选择 */}
        <div className="max-w-7xl mx-auto px-4 mb-20">
          <div className="flex justify-center gap-4">
            {['all', 'elementary', 'intermediate', 'advanced'].map((level) => (
              <Button
                key={level}
                onClick={() => setSelectedLevel(level)}
                variant={selectedLevel === level ? "default" : "secondary"}
                className="px-6 py-2 rounded-full transition-all"
              >
                {level === 'all' ? '全部' : 
                 level === 'elementary' ? '基础' :
                 level === 'intermediate' ? '进阶' : '高级'}
              </Button>
            ))}
          </div>
        </div>
  
        {/* 概念展示 */}
        <div className="max-w-7xl mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredConcepts.map((concept, index) => (
              <motion.div
                key={concept.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ConceptCard concept={concept} />
              </motion.div>
            ))}
          </div>
  
          {filteredConcepts.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-muted-foreground text-lg">暂无相关概念</p>
            </motion.div>
          )}
        </div>
  
        {/* 愿景陈述 */}
        <section className="bg-card py-32">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-medium mb-6 text-card-foreground">
              我们相信，每个数学概念都应该被优雅地呈现
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              将数学之美与科技创新完美融合，创造前所未有的学习体验
            </p>
            <Button 
              variant="ghost" 
              className="group text-foreground hover:text-primary"
            >
              了解我们的理念
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>
      </>
    );
  }

function ConceptCard({ concept }: { concept: MathConcept }) {
  return (
    <Link href={`/math/${concept.slug}`}>
      <Card className="group bg-card hover:bg-card/90 transition-all duration-300">
        <div className="p-8 space-y-4">
          <Badge 
            variant="outline" 
            className="mb-4 bg-transparent border-border"
          >
            {concept.difficulty}
          </Badge>
          
          <h3 className="text-2xl font-medium text-card-foreground group-hover:text-primary transition-colors">
            {concept.title}
          </h3>
          
          <p className="text-muted-foreground line-clamp-2">
            {concept.description}
          </p>

          <div className="pt-4 flex items-center text-sm text-muted-foreground group-hover:text-primary transition-colors">
            探索概念
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Card>
    </Link>
  );
}