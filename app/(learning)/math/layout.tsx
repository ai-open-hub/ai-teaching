"use client"

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function MathLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isRootPath = pathname === "/math";
  
  return (
    <div className={`min-h-screen bg-background ${!isRootPath ? 'pt-16' : ''}`}>
      {/* 如果不是根路径，添加一个内容容器 */}
      {isRootPath ? (
        // 根路径使用全宽布局
        children
      ) : (
        // 子页面使用固定宽度布局
        <div className="max-w-7xl mx-auto px-4 py-8">
          {children}
        </div>
      )}
    </div>
  );
}