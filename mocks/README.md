# API 接口文档总览

## 项目概述

本项目是一个基于 Vite Mock 的前端 Mock 服务，为 Web 前端开发提供完整的后端 API 模拟服务。项目采用模块化架构，按功能划分为不同的接口模块。

## 技术栈

- **Mock 框架**: Vite Plugin Mock
- **开发语言**: TypeScript
- **数据存储**: JSON 文件
- **认证方式**: JWT Token
- **API 风格**: RESTful

## 项目结构

```
mocks/
├── modules/system/           # 系统模块
│   ├── auth/                # 认证模块
│   │   ├── types/           # 类型定义
│   │   ├── controller.ts    # 控制器
│   │   ├── module.ts        # 路由配置
│   │   ├── repository.ts    # 数据访问层
│   │   └── API.md          # 接口文档
│   ├── menu/               # 菜单模块
│   │   ├── controller.ts
│   │   ├── module.ts
│   │   └── API.md
│   └── user/               # 用户管理模块
│       ├── types/
│       ├── controller.ts
│       ├── module.ts
│       ├── repository.ts
│       └── API.md
├── database/               # 数据文件
├── utils/                  # 工具函数
├── common/                 # 公共模块
├── index.ts               # 入口文件
└── vite.mock.config.ts    # Mock 配置
```

## 接口模块列表

### 1. 认证模块 (Auth)

**模块路径**: `modules/system/auth`  
**文档链接**: [认证模块 API 文档](./modules/system/auth/API.md)

| 接口名称 | 请求方法 | 接口路径 | 描述 |
|---------|---------|----------|------|
| 用户登录 | POST | `/mock-api/account-login` | 用户账号密码登录认证 |

**主要功能**:
- 用户登录认证
- JWT Token 生成
- 用户状态验证
- 错误处理和响应

### 2. 菜单模块 (Menu)

**模块路径**: `modules/system/menu`  
**文档链接**: [菜单模块 API 文档](./modules/system/menu/API.md)

| 接口名称 | 请求方法 | 接口路径 | 描述 |
|---------|---------|----------|------|
| 获取菜单树列表 | GET | `/mock-api/menu` | 获取系统菜单树形结构 |

**主要功能**:
- 菜单树结构获取
- 动态菜单渲染支持
- 权限控制基础

### 3. 用户管理模块 (User)

**模块路径**: `modules/system/user`  
**文档链接**: [用户管理模块 API 文档](./modules/system/user/API.md)

| 接口名称 | 请求方法 | 接口路径 | 描述 |
|---------|---------|----------|------|
| 获取用户列表 | GET | `/mock-api/user/list` | 分页获取用户列表，支持搜索筛选 |
| 添加用户 | POST | `/mock-api/user/add` | 创建新用户账号 |
| 编辑用户 | PUT | `/mock-api/user/edit` | 更新用户信息 |
| 删除用户 | DELETE | `/mock-api/user/delete` | 删除指定用户 |
| 获取当前用户 | GET | `/mock-api/user/current` | 获取当前登录用户信息 |
| 获取用户详情 | GET | `/mock-api/user/detail` | 获取指定用户详细信息 |
| 用户统计信息 | GET | `/mock-api/user/stats` | 获取用户相关统计数据 |

**主要功能**:
- 完整的用户 CRUD 操作
- 用户列表分页查询
- 用户搜索和筛选
- 用户状态管理
- 统计信息展示

## 通用规范

### 请求头规范

```
Content-Type: application/json
Authorization: Bearer <JWT_TOKEN>
```

### 响应格式规范

```typescript
interface ApiResponse<T = any> {
  code: number;      // 状态码
  message: string;   // 响应消息
  data?: T;          // 响应数据（可选）
}
```

### 状态码规范

| 状态码 | 说明 |
|--------|------|
| 200 | 请求成功 |
| 400 | 请求参数错误 |
| 401 | 未授权或Token无效 |
| 403 | 权限不足 |
| 404 | 资源不存在 |
| 409 | 资源冲突 |
| 500 | 服务器内部错误 |

### 分页参数规范

| 参数名 | 类型 | 默认值 | 描述 |
|--------|------|--------|------|
| page | number | 1 | 页码 |
| pageSize | number | 10 | 每页数量 |

### 分页响应规范

```typescript
interface PaginationResponse<T> {
  list: T[];           // 数据列表
  total: number;       // 总数量
  page: number;        // 当前页码
  pageSize: number;    // 每页数量
  totalPages: number;  // 总页数
}
```

## 数据模型

### 用户状态枚举

```typescript
enum UserStatus {
  BANNED = -1,    // 封号
  FROZEN = 0,     // 冻结
  NORMAL = 1      // 正常
}
```

### 用户信息模型

```typescript
interface UserInfo {
  id: string;          // 用户ID
  username: string;    // 用户名
  nickname: string;    // 昵称
  avatar: string;      // 头像URL
  roles: string[];     // 角色列表
  status: UserStatus;  // 用户状态
  createTime: string;  // 创建时间
  updateTime: string;  // 更新时间
}
```

### 菜单模型

```typescript
interface MenuTreeNode {
  path: string;                 // 菜单路径
  name: string;                 // 菜单名称
  code: string;                 // 菜单编码
  icon: string;                 // 菜单图标
  children?: MenuTreeNode[];    // 子菜单
}
```

## 快速开始

### 1. 环境要求

- Node.js >= 16.0.0
- npm >= 7.0.0

### 2. 安装依赖

```bash
npm install
```

### 3. 启动 Mock 服务

```bash
npm run dev
```

### 4. 测试接口

Mock 服务启动后，可以通过以下方式测试接口：

```bash
# 测试登录接口
curl -X POST http://localhost:3000/mock-api/account-login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"123456"}'

# 测试菜单接口
curl -X GET http://localhost:3000/mock-api/menu

# 测试用户列表接口
curl -X GET "http://localhost:3000/mock-api/user/list?page=1&pageSize=10"
```

## 开发指南

### 添加新接口

1. 在对应模块的 `controller.ts` 中添加控制器函数
2. 在 `module.ts` 中配置路由
3. 在 `types` 目录下定义相关类型
4. 更新 `API.md` 文档

### 数据持久化

- Mock 数据存储在 `database/` 目录的 JSON 文件中
- 通过 Repository 层访问和操作数据
- 支持内存模拟和文件持久化

### 错误处理

- 统一的错误响应格式
- 详细的错误信息和错误码
- 支持多种错误场景模拟

## 最佳实践

### 1. 接口设计

- 遵循 RESTful API 设计规范
- 使用语义化的 URL 和 HTTP 方法
- 统一的请求和响应格式

### 2. 错误处理

- 提供清晰的错误信息
- 使用标准的 HTTP 状态码
- 支持错误场景的模拟测试

### 3. 数据验证

- 严格的参数验证
- 类型安全的数据处理
- 边界条件的处理

### 4. 文档维护

- 及时更新接口文档
- 提供详细的示例代码
- 保持文档与实现的一致性

## 常见问题

### Q: 如何修改 Mock 数据？

A: 直接编辑 `database/` 目录下的 JSON 文件，重启服务后生效。

### Q: 如何添加新的接口？

A: 参考现有模块的结构，在对应目录下添加控制器、路由配置和类型定义。

### Q: 如何自定义错误场景？

A: 在控制器函数中根据不同条件返回相应的错误响应。

### Q: 如何集成到前端项目？

A: 配置前端项目的代理设置，将 API 请求代理到 Mock 服务地址。

## 版本历史

| 版本 | 日期 | 更新内容 |
|------|------|----------|
| v1.0.0 | 2024-01-01 | 初始版本，包含认证、菜单、用户管理三个模块 |

## 联系方式

如有问题或建议，请联系项目维护者。

---

*最后更新时间: 2024-01-01*
