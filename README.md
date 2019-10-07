# 尚书中台

## api
- event api 平台事件API，第三方应用向平台注册地址，平台将会主动通知第三方应用。第三方应用订阅自己需要的事件
- message api 第三方应用向用户发送信息
-

## event api
- 用户登录事件，第三方应用可监听所有用户或指定用户

## message api
- chat.message <br/>
##### url: /api/chat.message
##### method: post


## 实体
- Application
- Message
- User
- 

## 授权
通过认证中台，第三方应用向平台进行认证授权，其中会有平台调用第三方应用的场景，此时发起一个challenge请求，由
第三方应用确认是合法的，再做出响应。

### 平台事件发生时，会先向第三方应用发送一个post请求，验证接口是可用的
{
    "token": "Jhj5dZrVaK7ZwHHjRyZWjbDl", // 用于验证
    "challenge": "3eZbrw1aBm2rZgRNFdxV2595E9CY3gmdALWMmHkvFXO7tYXAYM8P", // 需要返回
    "type": "url_verification"
}
