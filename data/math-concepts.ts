// data/math-concepts.ts

import { MathConcept } from '@/types/math';

export const mathConcepts: MathConcept[] = [
  {
    id: 'pythagorean-theorem',
    slug: 'pythagorean-theorem',
    title: '勾股定理',
    subtitle: '直角三角形边长关系的基本定理',
    difficulty: 'elementary',
    subjects: ['geometry'],
    description: '在直角三角形中，两条直角边的平方和等于斜边的平方。',
    content: {
      introduction: '勾股定理是几何学中最基本也是最重要的定理之一...',
      keyPoints: [
        'a² + b² = c²，其中c是斜边',
        '适用于所有直角三角形',
        '可用于计算未知边长',
      ],
      explanation: '对于任意直角三角形，其斜边的平方等于两个直角边的平方和...'
    },
    visualizations: [
      {
        type: 'interactive',
        component: '/math/visualizations/pythagorean-theorem',
        description: '通过拖动直角三角形的顶点来观察边长关系的变化'
      }
    ],
    history: {
      timeline: [
        {
          year: '公元前2000年',
          event: '古巴比伦人已经知道并使用勾股定理',
          significance: '最早的数学记载之一'
        },
        {
          year: '公元前569年',
          event: '毕达哥拉斯系统地证明了这个定理',
          significance: '首次严格证明'
        }
      ],
      keyFigures: [
        {
          name: '毕达哥拉斯',
          contribution: '首次系统证明该定理并探索其普遍性'
        }
      ]
    },
    connections: [
      {
        discipline: '建筑学',
        topic: '建筑测量',
        description: '用于确保墙角的垂直度',
        example: '古埃及人使用3-4-5三角形来建造金字塔'
      },
      {
        discipline: '物理学',
        topic: '矢量分解',
        description: '在力的分解中的应用',
        example: '分析斜坡上物体的受力'
      }
    ],
    relations: [
      {
        id: 'triangle-similarity',
        relationship: 'prerequisite'
      },
      {
        id: 'trigonometry',
        relationship: 'nextStep'
      }
    ],
    applications: [
      {
        title: '工程测量',
        description: '在建筑和测量中的实际应用',
        example: '使用3-4-5三角形检查墙角是否垂直'
      }
    ],
    resources: [
      {
        type: 'interactive',
        title: '勾股定理探索器',
        url: '/math/interactive/pythagorean-explorer'
      },
      {
        type: 'video',
        title: '勾股定理的证明和应用',
        url: '/resources/pythagorean-theorem-video'
      },
      {
        type: 'interactive',
        title: '在线练习',
        url: '/exercises/pythagorean-theorem'
      }
    ]
  },
  {
    id: 'quadratic-equation',
    slug: 'quadratic-equation',
    title: '二次方程',
    subtitle: '探索二次函数与方程的解',
    difficulty: 'intermediate',
    subjects: ['algebra'],
    description: '研究形如 ax² + bx + c = 0 的方程，其中 a ≠ 0',
    content: {
      introduction: '二次方程是代数中的重要概念，它描述了许多自然现象...',
      keyPoints: [
        '标准形式：ax² + bx + c = 0',
        '求根公式：x = (-b ± √(b² - 4ac)) / (2a)',
        '判别式：b² - 4ac 决定解的性质'
      ],
      explanation: '二次方程可以通过配方法、因式分解或求根公式来解决...'
    },
    visualizations: [
      {
        type: 'interactive',
        component: 'QuadraticEquation',
        description: '通过图形理解二次方程的解'
      }
    ],
    history: {
      timeline: [
        {
          year: '公元前2000年',
          event: '古巴比伦人已经知道并使用勾股定理',
          significance: '最早的数学记载之一'
        },
        {
          year: '公元前569年',
          event: '毕达哥拉斯系统地证明了这个定理',
          significance: '首次严格证明'
        }
      ],
      keyFigures: [
        {
          name: '毕达哥拉斯',
          contribution: '首次系统证明该定理并探索其普遍性'
        }
      ]
    },
    connections: [
      {
        discipline: '建筑学',
        topic: '建筑测量',
        description: '用于确保墙角的垂直度',
        example: '古埃及人使用3-4-5三角形来建造金字塔'
      },
      {
        discipline: '物理学',
        topic: '矢量分解',
        description: '在力的分解中的应用',
        example: '分析斜坡上物体的受力'
      }
    ],
    relations: [
      {
        id: 'functions',
        relationship: 'prerequisite'
      },
      {
        id: 'parabola',
        relationship: 'related'
      }
    ],
    applications: [
      {
        title: '物理运动',
        description: '描述抛物运动',
        example: '计算物体抛出后的运动轨迹'
      }
    ],
    resources: [
      {
        type: 'interactive',
        title: '二次方程解析器',
        url: '/exercises/quadratic-equation'
      }
    ]
  },
  {
    id: 'multiplication',
    slug: 'multiplication',
    title: '乘法',
    subtitle: '通过分组和重复加法理解乘法',
    difficulty: 'elementary',
    subjects: ['algebra'],
    description: '乘法是将相同的数多次相加的快捷方式，也可以理解为分组计数。',
    
    content: {
      introduction: '在日常生活中，我们经常需要计算重复的数量。比如买3袋苹果，每袋有4个，一共有多少个？这就是乘法帮我们快速解决的问题。',
      keyPoints: [
        '乘法是重复加法的简便运算',
        '乘号 × 表示"有多少组"',
        '乘法交换律：3×4 等于 4×3',
        '0乘以任何数都等于0'
      ],
      explanation: '乘法可以帮助我们快速计算重复的数量。比如3×4，可以理解为3个4相加，也可以理解为4个3相加。这就是乘法交换律的直观解释。'
    },

    visualizations: [
      {
        type: 'game',
        component: 'multiplication/MultiplicationShop',
        description: '在水果店里帮助老板计算水果的总数，锻炼乘法速算能力。'
      },
      {
        type: 'animation',
        component: 'multiplication/MultiplicationStory',
        description: '跟随小兔子的购物之旅，看看它是如何用乘法解决实际问题的。'
      },
      {
        type: 'interactive',
        component: 'multiplication/MultiplicationGrid',
        description: '通过排列水果来理解乘法，拖动改变行数和列数，看看结果如何变化。'
      }
    ],

    history: {
      timeline: [
        {
          year: '公元前2000年',
          event: '古巴比伦人使用乘法表',
          significance: '最早的乘法记录之一'
        },
        {
          year: '公元前1650年',
          event: '埃及人发明了倍数计算法',
          significance: '通过加倍来进行乘法运算'
        },
        {
          year: '公元600年',
          event: '印度数学家发明了格子乘法',
          significance: '一种直观的乘法计算方法'
        }
      ],
      keyFigures: [
        {
          name: '毕达哥拉斯',
          contribution: '系统整理了乘法表'
        }
      ]
    },

    connections: [
      {
        discipline: '商业',
        topic: '商品定价',
        description: '计算商品总价',
        example: '买3件衣服每件80元，需要支付多少钱'
      },
      {
        discipline: '音乐',
        topic: '节拍',
        description: '理解音乐节奏',
        example: '4/4拍子中有4个四分音符'
      },
      {
        discipline: '生活技能',
        topic: '购物',
        description: '日常采购计算',
        example: '买6个面包，每个3元'
      }
    ],

    relations: [
      {
        id: 'addition',
        relationship: 'prerequisite'
      },
      {
        id: 'division',
        relationship: 'nextStep'
      }
    ],

    applications: [
      {
        title: '购物计算',
        description: '计算商品总价',
        example: '买3包零食，每包12元，共需36元'
      },
      {
        title: '时间管理',
        description: '计算总时间',
        example: '每天学习2小时，一周是14小时'
      }
    ],

    resources: [
      {
        type: 'interactive',
        title: '乘法表练习器',
        url: '/math/multiplication/table'
      },
      {
        type: 'game',
        title: '欢乐水果店',
        url: '/math/multiplication/fruit-shop'
      }
    ]
  },
  {
    id: 'division',
    slug: 'division',
    title: '除法',
    subtitle: '通过平均分配理解除法',
    difficulty: 'elementary',
    subjects: ['algebra'],
    description: '除法是将一个数平均分成若干份，或者查看一个数里包含另一个数多少次。',
    
    content: {
      introduction: '当我们需要公平分配物品，或者想知道一个大数里包含多少个小数时，就需要用到除法。比如12个饼干要分给3个人，每人能得到多少个？',
      keyPoints: [
        '除法是分配运算',
        '被除数 ÷ 除数 = 商',
        '除数不能为0',
        '整除和余数的概念'
      ],
      explanation: '除法可以理解为分配或者包含。分配是将物品平均分给若干人，包含是看看一个数里面包含另一个数多少次。比如12÷3，既可以理解为把12个物品分给3个人，也可以理解为12里面有几个3。'
    },

    visualizations: [
      {
        type: 'interactive',
        component: 'division-sharing',
        description: '通过分享披萨来理解除法，尝试不同的分配方式。'
      },
      {
        type: 'game',
        component: 'division-restaurant',
        description: '在餐厅里当服务员，练习平均分配食物。'
      },
      {
        type: 'animation',
        component: 'division-story',
        description: '看看小厨师是如何准备派对餐点的，理解除法在生活中的应用。'
      }
    ],

    history: {
      timeline: [
        {
          year: '公元前2000年',
          event: '古埃及人使用分数',
          significance: '除法运算的早期形式'
        },
        {
          year: '公元600年',
          event: '印度数学家发明长除法',
          significance: '系统的除法算法'
        },
        {
          year: '中世纪',
          event: '阿拉伯数学家改进除法算法',
          significance: '使除法计算更加便捷'
        }
      ],
      keyFigures: [
        {
          name: '阿尔·花拉子米',
          contribution: '系统化除法算法'
        }
      ]
    },

    connections: [
      {
        discipline: '家政',
        topic: '食物分配',
        description: '平均分配食物',
        example: '一盘饺子分给家人'
      },
      {
        discipline: '经济',
        topic: '平均成本',
        description: '计算单价',
        example: '计算每个苹果的价格'
      },
      {
        discipline: '体育',
        topic: '团队分组',
        description: '将学生分成小组',
        example: '30个学生分成6组'
      }
    ],

    relations: [
      {
        id: 'multiplication',
        relationship: 'prerequisite'
      },
      {
        id: 'fractions',
        relationship: 'nextStep'
      }
    ],

    applications: [
      {
        title: '生活分配',
        description: '平均分配物品',
        example: '15个橙子分给5个人'
      },
      {
        title: '价格计算',
        description: '计算单价',
        example: '60元买了12个鸡蛋，每个多少钱'
      }
    ],

    resources: [
      {
        type: 'interactive',
        title: '除法练习器',
        url: '/math/division/practice'
      },
      {
        type: 'game',
        title: '欢乐餐厅',
        url: '/math/division/restaurant'
      }
    ]
  }
];