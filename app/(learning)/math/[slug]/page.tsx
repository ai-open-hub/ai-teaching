"use client"
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ChevronRight } from 'lucide-react';
import { useState } from 'react';

import { Visualizer } from '@/components/math/visualizer';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { mathConcepts } from '@/data/math-concepts';
import { cn } from "@/lib/utils";

export default function ConceptPage({ params }: { params: { slug: string } }) {
  const [showChat, setShowChat] = useState(false);
  const concept = mathConcepts.find(c => c.slug === params.slug);
  
  if (!concept) return null;

  return (
    <div className="h-[calc(100vh-1rem)]"> {/* 4rem is Navbar height */}
      <ResizablePanelGroup direction="horizontal">
        {/* 主内容区域 */}
        <ResizablePanel 
          defaultSize={showChat ? 65 : 100}
          className="h-full bg-background"
        >
          <div className="h-full overflow-auto">
            <main className="max-w-4xl mx-auto px-8 py-12">
              {/* 概念标题 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
              >
                <h1 className="text-5xl font-bold mb-4">{concept.title}</h1>
                <p className="text-xl text-muted-foreground">{concept.subtitle}</p>
              </motion.div>

              {/* 可视化区域 */}
              {concept.visualizations && concept.visualizations.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mb-12"
                >
                  <Visualizer visualizations={concept.visualizations} />
                </motion.div>
              )}

              {/* 核心内容 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="prose dark:prose-invert max-w-none"
              >
                <p className="text-xl leading-relaxed">
                  {concept.content.introduction}
                </p>

                {/* 关键要点 */}
                <div className="my-12 space-y-4">
                  {concept.content.keyPoints.map((point, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-card rounded-lg"
                    >
                      <ChevronRight className="text-primary" />
                      <div className="text-lg">{point}</div>
                    </motion.div>
                  ))}
                </div>

                {/* 时间线 */}
                <section className="my-16">
                  <h2 className="text-3xl font-bold mb-8">历史发展</h2>
                  <div className="space-y-8">
                    {concept.history.timeline.map((event, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + i * 0.1 }}
                        className={cn(
                          "relative pl-8 pb-8",
                          i !== concept.history.timeline.length - 1 && "border-l-2 border-primary"
                        )}
                      >
                        {/* 时间点标记 */}
                        <div className="absolute left-[-8px] w-4 h-4 rounded-full bg-primary" />
                        
                        <div className="font-mono text-sm text-muted-foreground mb-2">
                          {event.year}
                        </div>
                        <div className="font-medium text-xl mb-2">
                          {event.event}
                        </div>
                        <div className="text-muted-foreground">
                          {event.significance}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </section>
              </motion.div>
            </main>
          </div>
        </ResizablePanel>

        {/* 聊天区域 */}
        {showChat ? (
          <>
            <ResizableHandle />
            <ResizablePanel defaultSize={35} className="bg-card">
              <div className="h-full flex flex-col">
                <header className="p-4 border-b">
                  <h2 className="text-lg font-semibold">AI 助手</h2>
                </header>
                <div className="flex-1 overflow-auto p-4">
                  {/* Chat content */}
                </div>
              </div>
            </ResizablePanel>
          </>
        ) : (
          <button
            onClick={() => setShowChat(true)}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
          >
            <MessageCircle />
          </button>
        )}
      </ResizablePanelGroup>
    </div>
  );
}