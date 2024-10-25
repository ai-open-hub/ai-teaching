import dynamic from 'next/dynamic';

import type { ComponentType } from 'react';

/**
 * 组件加载器配置类型
 */
interface VisualizationLoaderConfig {
  [key: string]: {
    import: () => Promise<{ default: ComponentType<any> }>;
    type: 'static' | 'interactive' | 'animation' | 'game';
  };
}

/**
 * 组件加载器配置
 * 所有可视化组件在这里注册
 */
const loaderConfig: VisualizationLoaderConfig = {

  // 乘法相关组件
  'multiplication/MultiplicationGrid': {
    import: () => import('@/components/math/visualizer/multiplication/MultiplicationGrid').then((mod) => mod.MultiplicationGrid),
    type: 'interactive'
  },
  'multiplication/MultiplicationShop': {
    import: () => import('@/components/math/visualizer/multiplication/MultiplicationShop').then((mod) => mod.MultiplicationShop),
    type: 'game'
  },
  'multiplication/MultiplicationStory': {
    import: () => import('@/components/math/visualizer/multiplication/MultiplicationStory').then((mod) => mod.MultiplicationStory),
    type: 'animation'
  },
  // ... 可以继续添加更多组件
};

/**
 * 动态加载组件工厂
 */
export function createDynamicComponent(componentName: string) {
  const config = loaderConfig[componentName];
  
  if (!config) {
    console.warn(`Visualization component "${componentName}" not found in registry`);
    return null;
  }

  return dynamic(config.import, {
    ssr: false
  });
}

/**
 * 获取所有已注册的组件名称
 */
export function getRegisteredComponents() {
  return Object.keys(loaderConfig);
}

/**
 * 检查组件是否已注册
 */
export function isComponentRegistered(componentName: string) {
  return componentName in loaderConfig;
}

/**
 * 获取组件类型
 */
export function getComponentType(componentName: string) {
  return loaderConfig[componentName]?.type;
}