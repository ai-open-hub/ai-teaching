// types/math.ts

// 难度等级
export type DifficultyLevel = 'elementary' | 'intermediate' | 'advanced';

export type VisualizationType = 'static' | 'interactive' | 'animation' | 'game';

// 学科分类
export type Subject = 
  | 'algebra'      // 代数
  | 'geometry'     // 几何
  | 'calculus'     // 微积分
  | 'statistics'   // 统计
  | 'numberTheory' // 数论
  | 'logic';       // 逻辑

// 跨学科连接
export interface CrossDisciplinaryConnection {
  discipline: string;     // 学科名称
  topic: string;         // 具体主题
  description: string;   // 连接说明
  example: string;      // 实际应用例子
}

// 可视化相关
export interface Visualization {
  type: VisualizationType;
  component: string;  // 直接使用路径，如 'visualizations/multiplication-grid'
  description: string;
}

// 数学概念
export interface MathConcept {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  difficulty: DifficultyLevel;
  subjects: Subject[];
  description: string;
  
  // 核心内容
  content: {
    introduction: string;
    keyPoints: string[];
    explanation: string;
  };

  // 可视化相关
  visualizations: Visualization[];
  
  // 历史发展
  history: {
    timeline: Array<{
      year: string;
      event: string;
      significance: string;
    }>;
    keyFigures: Array<{
      name: string;
      contribution: string;
    }>;
  };
  
  // 跨学科连接
  connections: CrossDisciplinaryConnection[];
  
  // 相关概念
  relations: Array<{
    id: string;
    relationship: 'prerequisite' | 'related' | 'nextStep';
  }>;
  
  // 应用案例
  applications: Array<{
    title: string;
    description: string;
    example: string;
  }>;
  
  // 学习资源
  resources: Array<{
    type: 'video' | 'article' | 'interactive' | 'exercise' | 'game';
    title: string;
    url: string;
  }>;
}