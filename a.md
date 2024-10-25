app/
├── layout.tsx              # 根布局
├── page.tsx               # 首页
├── (auth)/                # 认证相关路由
│   ├── login/            # 登录
│   └── register/         # 注册
├── (dashboard)/          # 主控制台
│   ├── layout.tsx        # 仪表盘布局(带侧边栏)
│   ├── page.tsx          # 总览页面
│   ├── math/            # 数学学习模块
│   │   ├── page.tsx     # 数学首页
│   │   ├── geometry/    # 几何专题
│   │   └── games/       # 数学游戏
│   ├── reading/         # 阅读模块
│   │   ├── page.tsx     # 阅读首页
│   │   └── [level]/     # 分级阅读
│   ├── thinking/        # 思维训练
│   │   ├── page.tsx     # 思维训练首页
│   │   └── games/       # 思维游戏
│   └── labs/            # 实验室
│       ├── page.tsx     # 实验室首页
│       └── [exp]/       # 具体实验
└── (chat)/              # AI对话模块
    └── chat/[id]/       # 具体对话