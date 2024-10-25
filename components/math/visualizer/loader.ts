// components/math/visualizer/loader.ts
import dynamic from 'next/dynamic';

import type { ComponentType } from 'react';

type DynamicImport = () => Promise<{ default: ComponentType<any> }>;

interface VisualizationLoaderConfig {
  [key: string]: {
    import: DynamicImport;
    type: 'static' | 'interactive' | 'animation' | 'game';
  };
}

const loaderConfig: VisualizationLoaderConfig = {
  // 乘法相关组件
  'multiplication/MultiplicationGrid': {
    import: () => import('@/components/math/visualizer/multiplication/MultiplicationGrid').then(
      // 将命名导出转换为默认导出
      mod => ({ default: mod.MultiplicationGrid })
    ),
    type: 'interactive'
  },
  'multiplication/MultiplicationShop': {
    import: () => import('@/components/math/visualizer/multiplication/MultiplicationShop').then(
      mod => ({ default: mod.MultiplicationShop })
    ),
    type: 'game'
  },
  'multiplication/MultiplicationStory': {
    import: () => import('@/components/math/visualizer/multiplication/MultiplicationStory').then(
      mod => ({ default: mod.MultiplicationStory })
    ),
    type: 'animation'
  },
};

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

export function getRegisteredComponents() {
  return Object.keys(loaderConfig);
}

export function isComponentRegistered(componentName: string) {
  return componentName in loaderConfig;
}

export function getComponentType(componentName: string) {
  return loaderConfig[componentName]?.type;
}