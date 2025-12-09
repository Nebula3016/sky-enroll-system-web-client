# 用户管理模块 API 文档

## 概述

用户管理模块提供完整的用户CRUD操作接口，包括用户列表查询、添加、编辑、删除、详情查看等功能。

## 基础信息

- **模块路径**: `/modules/system/user`
- **基础URL**: `/mock-api`
- **负责人**: 系统管理员
- **版本**: v1.0.0

## 接口列表

### 1. 获取用户列表

#### 基本信息

- **接口名称**: 获取用户列表
- **接口路径**: `/mock-api/user/list`
- **请求方法**: `GET`
- **接口描述**: 获取用户列表，支持分页、搜索、状态筛选功能

#### 请求参数

##### 请求头 (Headers)

```
Authorization: Bearer <token>
```

##### 查询参数 (Query Parameters)

| 参数名 | 类型 | 必填 | 描述 | 默认值 | 示例 |
|--------|------|------|------|--------|------|
| page | number | - | 页码 | 1 | 1 |
| pageSize | number | - | 每页数量 | 10 | 10 |
| keyword | string | - | 搜索关键字（用户名、昵称） | - | "admin" |
| status | number | - | 用户状态筛选 | - | 1 |

#### 响应参数

##### 成功响应 (200)

```json
{
  "code": 200,
  "message": "获取用户列表成功",
  "data": {
    "list": [
      {
        "id": "1",
        "username": "admin",
        "nickname": "管理员",
        "avatar": "https://example.com/avatar.png",
        "roles": ["admin"],
        "status": 1,
        "createTime": "2024-01-01 10:00:00",
        "updateTime": "2024-01-01 10:00:00"
      }
    ],
    "total": 100,
    "page": 1,
    "pageSize": 10,
    "totalPages": 10
  }
}
```

### 2. 添加用户

#### 基本信息

- **接口名称**: 添加用户
- **接口路径**: `/mock-api/user/add`
- **请求方法**: `POST`
- **接口描述**: 创建新用户账号

#### 请求参数

##### 请求头 (Headers)

```
Content-Type: application/json
Authorization: Bearer <token>
```

##### 请求体 (Body)

| 参数名 | 类型 | 必填 | 描述 | 示例 |
|--------|------|------|------|------|
| username | string | ✓ | 用户名 | "newuser" |
| password | string | ✓ | 密码 | "123456" |
| nickname | string | ✓ | 昵称 | "新用户" |
| avatar | string | - | 头像URL | "https://example.com/avatar.png" |
| roles | string[] | ✓ | 角色列表 | ["user"] |
| status | number | - | 用户状态 | 1 |

#### 响应参数

##### 成功响应 (200)

```json
{
  "code": 200,
  "message": "添加用户成功",
  "data": {
    "id": "2",
    "username": "newuser",
    "nickname": "新用户",
    "avatar": "https://example.com/avatar.png",
    "roles": ["user"],
    "status": 1,
    "createTime": "2024-01-01 10:00:00",
    "updateTime": "2024-01-01 10:00:00"
  }
}
```

### 3. 编辑用户

#### 基本信息

- **接口名称**: 编辑用户
- **接口路径**: `/mock-api/user/edit`
- **请求方法**: `PUT`
- **接口描述**: 更新用户信息

#### 请求参数

##### 请求头 (Headers)

```
Content-Type: application/json
Authorization: Bearer <token>
```

##### 请求体 (Body)

| 参数名 | 类型 | 必填 | 描述 | 示例 |
|--------|------|------|------|------|
| id | string | ✓ | 用户ID | "1" |
| username | string | - | 用户名 | "newusername" |
| password | string | - | 新密码 | "newpassword" |
| nickname | string | - | 昵称 | "新昵称" |
| avatar | string | - | 头像URL | "https://example.com/new-avatar.png" |
| roles | string[] | - | 角色列表 | ["user", "editor"] |
| status | number | - | 用户状态 | 1 |

#### 响应参数

##### 成功响应 (200)

```json
{
  "code": 200,
  "message": "编辑用户成功",
  "data": {
    "id": "1",
    "username": "newusername",
    "nickname": "新昵称",
    "avatar": "https://example.com/new-avatar.png",
    "roles": ["user", "editor"],
    "status": 1,
    "createTime": "2024-01-01 10:00:00",
    "updateTime": "2024-01-02 15:30:00"
  }
}
```

### 4. 删除用户

#### 基本信息

- **接口名称**: 删除用户
- **接口路径**: `/mock-api/user/delete`
- **请求方法**: `DELETE`
- **接口描述**: 删除指定用户

#### 请求参数

##### 请求头 (Headers)

```
Content-Type: application/json
Authorization: Bearer <token>
```

##### 请求体 (Body)

| 参数名 | 类型 | 必填 | 描述 | 示例 |
|--------|------|------|------|------|
| id | string | ✓ | 用户ID | "1" |

#### 响应参数

##### 成功响应 (200)

```json
{
  "code": 200,
  "message": "删除用户成功"
}
```

### 5. 获取当前登录用户详情

#### 基本信息

- **接口名称**: 获取当前登录用户详情
- **接口路径**: `/mock-api/user/current`
- **请求方法**: `GET`
- **接口描述**: 根据Token获取当前登录用户的详细信息

#### 请求参数

##### 请求头 (Headers)

```
Authorization: Bearer <token>
```

#### 响应参数

##### 成功响应 (200)

```json
{
  "code": 200,
  "message": "获取当前用户信息成功",
  "data": {
    "id": "1",
    "username": "admin",
    "nickname": "管理员",
    "avatar": "https://example.com/avatar.png",
    "roles": ["admin"],
    "status": 1,
    "createTime": "2024-01-01 10:00:00",
    "updateTime": "2024-01-01 10:00:00"
  }
}
```

### 5.1. 获取当前用户信息

#### 基本信息

- **接口名称**: 获取当前用户信息
- **接口路径**: `/mock-api/user/current-info`
- **请求方法**: `GET`
- **接口描述**: 通过请求头中的token解析用户账号进行用户匹配，获取当前用户信息

#### 请求参数

##### 请求头 (Headers)

```
Authorization: Bearer <token>
```

#### 响应参数

##### 成功响应 (200)

```json
{
  "code": 1,
  "message": "获取用户信息成功",
  "data": {
    "id": "1",
    "username": "admin",
    "nickname": "管理员",
    "avatar": "https://example.com/avatar.png",
    "roles": ["admin"],
    "status": 1,
    "createTime": "2024-01-01 10:00:00",
    "updateTime": "2024-01-01 10:00:00"
  }
}
```

##### 失败响应

**Token无效或已过期 (401)**

```json
{
  "code": 0,
  "message": "Token无效或已过期",
  "data": null
}
```

**未提供认证令牌 (401)**

```json
{
  "code": 0,
  "message": "未提供认证令牌",
  "data": null
}
```

**用户不存在 (404)**

```json
{
  "code": 0,
  "message": "用户不存在",
  "data": null
}
```

**无法解析用户信息 (400)**

```json
{
  "code": 0,
  "message": "无法解析用户信息",
  "data": null
}
```

#### 接口特点

1. **Token解析**: 自动从JWT Token中解析用户账号信息
2. **账号匹配**: 支持通过用户名进行用户查找
3. **安全性**: 返回的用户信息不包含密码等敏感数据
4. **错误处理**: 完善的错误处理机制，提供详细的错误信息

### 6. 获取用户详情

#### 基本信息

- **接口名称**: 获取用户详情
- **接口路径**: `/mock-api/user/detail`
- **请求方法**: `GET`
- **接口描述**: 根据用户ID获取指定用户的详细信息

#### 请求参数

##### 请求头 (Headers)

```
Authorization: Bearer <token>
```

##### 查询参数 (Query Parameters)

| 参数名 | 类型 | 必填 | 描述 | 示例 |
|--------|------|------|------|------|
| id | string | ✓ | 用户ID | "1" |

#### 响应参数

##### 成功响应 (200)

```json
{
  "code": 200,
  "message": "获取用户详情成功",
  "data": {
    "id": "1",
    "username": "admin",
    "nickname": "管理员",
    "avatar": "https://example.com/avatar.png",
    "roles": ["admin"],
    "status": 1,
    "createTime": "2024-01-01 10:00:00",
    "updateTime": "2024-01-01 10:00:00"
  }
}
```

### 7. 获取用户统计信息

#### 基本信息

- **接口名称**: 获取用户统计信息
- **接口路径**: `/mock-api/user/stats`
- **请求方法**: `GET`
- **接口描述**: 获取用户相关的统计数据

#### 请求参数

##### 请求头 (Headers)

```
Authorization: Bearer <token>
```

#### 响应参数

##### 成功响应 (200)

```json
{
  "code": 200,
  "message": "获取用户统计成功",
  "data": {
    "totalUsers": 150,
    "activeUsers": 120,
    "frozenUsers": 20,
    "bannedUsers": 10,
    "todayNewUsers": 5,
    "monthlyNewUsers": 45
  }
}
```

## 通用错误响应

### 参数验证失败 (400)

```json
{
  "code": 400,
  "message": "参数验证失败的具体原因"
}
```

### 未授权访问 (401)

```json
{
  "code": 401,
  "message": "未提供认证令牌" // 或 "认证令牌无效或已过期"
}
```

### 权限不足 (403)

```json
{
  "code": 403,
  "message": "权限不足，无法执行此操作"
}
```

### 资源不存在 (404)

```json
{
  "code": 404,
  "message": "用户不存在"
}
```

### 资源冲突 (409)

```json
{
  "code": 409,
  "message": "用户名已存在"
}
```

### 服务器错误 (500)

```json
{
  "code": 500,
  "message": "服务器内部错误"
}
```

## 数据模型

### UserInfo

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

### UserListQueryParams

```typescript
interface UserListQueryParams {
  page?: number;       // 页码，默认1
  pageSize?: number;   // 每页数量，默认10
  keyword?: string;    // 搜索关键字
  status?: UserStatus; // 用户状态筛选
}
```

### UserListResponse

```typescript
interface UserListResponse {
  list: UserInfo[];    // 用户列表
  total: number;       // 总数量
  page: number;        // 当前页码
  pageSize: number;    // 每页数量
  totalPages: number;  // 总页数
}
```

### AddUserRequest

```typescript
interface AddUserRequest {
  username: string;    // 用户名
  password: string;    // 密码
  nickname: string;    // 昵称
  avatar?: string;     // 头像URL（可选）
  roles: string[];     // 角色列表
  status?: UserStatus; // 用户状态（可选）
}
```

### EditUserRequest

```typescript
interface EditUserRequest {
  id: string;          // 用户ID
  username?: string;   // 用户名（可选）
  password?: string;   // 密码（可选）
  nickname?: string;   // 昵称（可选）
  avatar?: string;     // 头像URL（可选）
  roles?: string[];    // 角色列表（可选）
  status?: UserStatus; // 用户状态（可选）
}
```

## 用户状态枚举

| 值 | 状态 | 描述 |
|----|----- |------|
| -1 | BANNED | 封号 |
| 0 | FROZEN | 冻结 |
| 1 | NORMAL | 正常 |

## 调用示例

### 获取用户列表

```javascript
// 获取第一页用户列表，每页10条
const getUserList = async (page = 1, pageSize = 10) => {
  try {
    const response = await axios.get('/mock-api/user/list', {
      params: { page, pageSize },
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    });
    return response.data;
  } catch (error) {
    console.error('获取用户列表失败:', error);
  }
};
```

### 添加用户

```javascript
const addUser = async (userData) => {
  try {
    const response = await axios.post('/mock-api/user/add', userData, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('添加用户失败:', error);
  }
};

// 使用示例
addUser({
  username: 'newuser',
  password: '123456',
  nickname: '新用户',
  roles: ['user']
});
```

### 编辑用户

```javascript
const editUser = async (userId, updateData) => {
  try {
    const response = await axios.put('/mock-api/user/edit', {
      id: userId,
      ...updateData
    }, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('编辑用户失败:', error);
  }
};
```

### 删除用户

```javascript
const deleteUser = async (userId) => {
  try {
    const response = await axios.delete('/mock-api/user/delete', {
      data: { id: userId },
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('删除用户失败:', error);
  }
};
```

## 业务规则

### 用户名规则

- 长度：3-20个字符
- 格式：字母、数字、下划线
- 唯一性：系统内唯一，不可重复

### 密码规则

- 长度：6-20个字符
- 复杂度：建议包含字母、数字、特殊字符
- 加密：服务端存储时进行加密处理

### 角色权限

- **admin**: 管理员，拥有所有权限
- **user**: 普通用户，基础权限
- **editor**: 编辑者，内容管理权限
- **viewer**: 查看者，只读权限

### 操作限制

1. **删除限制**: 不能删除管理员账户
2. **状态限制**: 被冻结或封号的用户无法登录
3. **权限限制**: 只有管理员可以修改其他用户的角色

## 注意事项

1. **权限验证**: 所有接口都需要有效的JWT Token
2. **参数验证**: 严格验证输入参数，防止恶意请求
3. **数据安全**: 返回的用户信息不包含密码等敏感数据
4. **并发控制**: 编辑用户时考虑并发修改的情况
5. **审计日志**: 重要操作应记录操作日志
6. **软删除**: 建议使用软删除而不是物理删除

## 更新日志

| 版本 | 日期 | 更新内容 |
|------|------|----------|
| v1.0.0 | 2024-01-01 | 初始版本，实现完整的用户管理功能 |
