# 菜单模块 API 文档

## 概述

菜单模块提供系统菜单树形结构数据的接口服务，支持基于用户角色的动态菜单权限过滤。

## 基础信息

- **模块路径**: `/modules/system/menu`
- **基础URL**: `/mock-api`
- **负责人**: 系统管理员
- **版本**: v1.0.0

## 接口列表

### 1. 获取菜单树列表

#### 基本信息

- **接口名称**: 获取菜单树列表
- **接口路径**: `/mock-api/menu/menu-tree-list`
- **请求方法**: `GET`
- **接口描述**: 获取系统菜单的树形结构数据，支持基于用户角色的权限过滤

#### 请求参数

##### 请求头 (Headers)

```
Authorization: Bearer <token>  // 可选，提供时会根据用户角色过滤菜单
```

##### 查询参数 (Query Parameters)

该接口不需要查询参数。

#### 响应参数

##### 响应格式

| 字段名 | 类型 | 描述 |
|--------|------|------|
| code | number | 响应状态码 |
| message | string | 响应消息 |
| data | MenuTreeNode[] | 菜单树数据数组 |

##### MenuTreeNode 数据结构

| 字段名 | 类型 | 描述 | 示例 |
|--------|------|------|------|
| id | string | 菜单ID | "1873998925726031001" |
| parentId | string | 父级菜单ID | "" |
| path | string | 菜单路径 | "/system" |
| code | string | 菜单编码 | "System" |
| name | string | 菜单名称 | "系统管理" |
| type | string | 菜单类型 | "ROOT" / "ROUTE" / "BUTTON" |
| icon | string | 菜单图标 | "system-icon" |
| redirect | string | 重定向路径 | "" |
| children | MenuTreeNode[] | 子菜单列表 | [] |
| order | number | 排序 | 1 |
| roles | string[] | 角色权限 | ["admin", "manager"] |
| meta | MenuMeta | 元数据 | {} |
| target | string | 目标窗口 | "_self" |

##### MenuMeta 数据结构

| 字段名 | 类型 | 描述 | 示例 |
|--------|------|------|------|
| requireAuth | boolean | 是否需要认证 | true |
| hidden | boolean | 是否隐藏 | false |
| keepAlive | boolean | 是否保持活跃状态 | true |

##### 成功响应 (200)

```json
{
  "code": 1,
  "message": "获取菜单树列表成功",
  "data": [
    {
      "id": "1873998925726031001",
      "parentId": "",
      "path": "/system",
      "code": "System",
      "name": "系统管理",
      "type": "ROOT",
      "icon": "system-icon",
      "redirect": "",
      "children": [
        {
          "id": "1873998925726031011",
          "parentId": "1873998925726031001",
          "path": "/system/user",
          "code": "User",
          "name": "用户管理",
          "type": "ROUTE",
          "icon": "user-icon",
          "redirect": "",
          "children": [],
          "order": 1,
          "roles": ["admin", "manager"],
          "meta": {
            "requireAuth": true,
            "hidden": false,
            "keepAlive": true
          },
          "target": "_self"
        },
        {
          "id": "1873998925726031012",
          "parentId": "1873998925726031001",
          "path": "/system/role",
          "name": "角色管理",
          "code": "Route",
          "type": "ROUTE",
          "icon": "role-icon",
          "redirect": "",
          "children": [],
          "order": 2,
          "roles": ["admin"],
          "meta": {
            "requireAuth": true,
            "hidden": false,
            "keepAlive": true
          },
          "target": "_self"
        }
      ],
      "order": 1,
      "roles": ["admin", "manager"],
      "meta": {
        "requireAuth": true,
        "hidden": false,
        "keepAlive": true
      },
      "target": "_self"
    }
  ]
}
```

##### 错误响应

###### 获取失败 (0)

```json
{
  "code": 0,
  "message": "获取菜单树列表失败",
  "data": []
}
```

#### 状态码说明

| 状态码 | 说明 |
|--------|------|
| 1 | 获取成功 |
| 0 | 获取失败 |

#### 权限说明

- **无Token**: 返回所有菜单数据（无权限过滤）
- **有Token**: 根据用户角色过滤菜单，只返回用户有权限访问的菜单项
- **角色权限**: 菜单项的 `roles` 字段定义了可访问的角色列表

#### 调用示例

##### cURL (无Token)

```bash
curl -X GET \
  http://localhost:3011/mock-api/menu/menu-tree-list
```

##### cURL (带Token)

```bash
curl -X GET \
  http://localhost:3011/mock-api/menu/menu-tree-list \
  -H 'Authorization: Bearer your-jwt-token'
```

##### JavaScript (Fetch)

```javascript
const response = await fetch('/mock-api/menu/menu-tree-list', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  }
});

const result = await response.json();
console.log(result);
```

##### Axios

```javascript
const response = await axios.get('/mock-api/menu/menu-tree-list', {
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  }
});

console.log(response.data);

const result = await response.json();
console.log(result);
```

##### Axios

```javascript
const response = await axios.get('/mock-api/menu', {
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  }
});

console.log(response.data);
```

##### Vue 3 Composition API 示例

```javascript
import { ref, onMounted } from 'vue'
import axios from 'axios'

export default {
  setup() {
    const menuTree = ref([])
    const loading = ref(false)

    const fetchMenuTree = async () => {
      try {
        loading.value = true
        const response = await axios.get('/mock-api/menu')
        if (response.data.code === 1) {
          menuTree.value = response.data.data
        }
      } catch (error) {
        console.error('获取菜单失败:', error)
      } finally {
        loading.value = false
      }
    }

    onMounted(() => {
      fetchMenuTree()
    })

    return {
      menuTree,
      loading,
      fetchMenuTree
    }
  }
}
```

## 数据模型

### MenuTreeNode

```typescript
interface MenuTreeNode {
  path: string;           // 菜单路径/路由地址
  name: string;           // 菜单显示名称
  code: string;           // 菜单编码（唯一标识）
  icon: string;           // 菜单图标
  children?: MenuTreeNode[]; // 子菜单列表（可选）
}
```

### ApiResponse

```typescript
interface ApiResponse<T = any> {
  code: number;      // 状态码
  message: string;   // 消息
  data?: T;          // 数据（可选）
}
```

## 菜单数据结构说明

### 字段详解

| 字段 | 类型 | 必填 | 描述 | 示例 |
|------|------|------|------|------|
| path | string | ✓ | 前端路由路径 | "/TST-test" |
| name | string | ✓ | 菜单显示名称 | "测试管理" |
| code | string | ✓ | 菜单权限编码 | "TSTtest" |
| icon | string | - | 图标类名或URL | "el-icon-menu" |
| children | array | - | 子菜单数组 | [...] |

### 菜单层级

- **一级菜单**: 顶级导航菜单
- **二级菜单**: 一级菜单下的子菜单
- **多级菜单**: 支持无限层级嵌套（根据实际需求）

### 权限控制

菜单的 `code` 字段用于权限控制：
- 前端根据用户角色和权限过滤显示的菜单
- 后端根据权限码控制接口访问权限

## 使用场景

### 1. 导航菜单渲染

```javascript
// 递归渲染菜单组件
const renderMenu = (menuList) => {
  return menuList.map(menu => {
    if (menu.children && menu.children.length > 0) {
      return (
        <SubMenu key={menu.code} title={menu.name} icon={menu.icon}>
          {renderMenu(menu.children)}
        </SubMenu>
      )
    }
    return (
      <MenuItem key={menu.code} path={menu.path}>
        {menu.name}
      </MenuItem>
    )
  })
}
```

### 2. 面包屑导航

```javascript
// 根据当前路径生成面包屑
const getBreadcrumb = (menuTree, currentPath) => {
  const breadcrumb = []
  
  const findPath = (menus, path, parents = []) => {
    for (const menu of menus) {
      const newParents = [...parents, menu]
      if (menu.path === path) {
        return newParents
      }
      if (menu.children) {
        const result = findPath(menu.children, path, newParents)
        if (result) return result
      }
    }
    return null
  }
  
  return findPath(menuTree, currentPath) || []
}
```

### 3. 权限验证

```javascript
// 检查用户是否有菜单访问权限
const hasMenuPermission = (userRoles, menuCode) => {
  // 根据用户角色和菜单编码检查权限
  return userRoles.some(role => 
    role.permissions.includes(menuCode)
  )
}
```

## 扩展功能

### 1. 菜单搜索

```javascript
// 菜单搜索功能
const searchMenu = (menuTree, keyword) => {
  const result = []
  
  const search = (menus) => {
    menus.forEach(menu => {
      if (menu.name.includes(keyword)) {
        result.push(menu)
      }
      if (menu.children) {
        search(menu.children)
      }
    })
  }
  
  search(menuTree)
  return result
}
```

### 2. 菜单排序

```javascript
// 按权重或字母顺序排序
const sortMenu = (menuTree, sortBy = 'name') => {
  return menuTree.sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name)
    }
    // 其他排序逻辑
  }).map(menu => ({
    ...menu,
    children: menu.children ? sortMenu(menu.children, sortBy) : undefined
  }))
}
```

## 注意事项

1. **缓存策略**: 菜单数据变化不频繁，建议在前端进行适当缓存
2. **权限控制**: 前端菜单过滤只是用户体验优化，真正的权限控制应在后端实现
3. **图标处理**: 图标字段支持图标类名和URL两种格式
4. **路由匹配**: path 字段应与前端路由配置保持一致
5. **国际化**: 如需支持多语言，name 字段可考虑使用国际化key

## 更新日志

| 版本 | 日期 | 更新内容 |
|------|------|----------|
| v1.0.0 | 2024-01-01 | 初始版本，实现基础菜单树获取功能 |
