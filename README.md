# express-sqlite-api
region-info api

项目结构
│
├── app.js                     // 主应用程序文件，设置Express服务器
│
├── db                         // 数据库文件夹，包含各个地区的JSON数据
│   ├── 安徽.json
│   ├── 北京.json
│   ├── 福建.json
│   ├── 广东.json
│   ├── 广西.json
│   ├── 海南.json
│   ├── 河北.json
│   ├── 黑龙江.json
│   ├── 江西.json
│   ├── 江苏.json
│   ├── 辽宁.json
│   ├── 内蒙古.json
│   ├── 宁夏.json
│   ├── 青海.json
│   ├── 山东.json
│   ├── 上海.json
│   ├── 天津.json
│   ├── 新疆.json
│   ├── 西藏.json
│   ├── 香港.json
│   ├── 澳门.json
│   ├── 重庆.json
│   └── 浙江.json
│
├── routes                     // 路由文件夹，定义API路由
│   ├── city.js                // 城市相关的路由
│   └── provice.js             // 省份相关的路由
│
└── prisma                     // Prisma配置文件
    └── schema.prisma          // 数据模型定义
