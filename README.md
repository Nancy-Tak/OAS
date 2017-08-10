# oa-saccount-react

E+大账户

# Quick Start

## 下载项目
```
切换到cnpm速度更快一些

npm config set registry https://registry.npm.taobao.org
```

```
git clone  http://git-frontpay.cn/oa-saccount-react.git
```


## 启动项目

```
npm start
```

## 打包项目

```
npm run bundle
```

打包后代码在dist目录


# 目录结构

```javascript
#config
####|-- ie8-polyfills.js                # IE8兼容包配置
####|-- info.js                         # 网站信息
####|-- utils.js                        # 配置工具库
####|-- webpack.common.js               # 公共配置
####|-- webpack.dev.js                  # 开发配置
####|-- webpack.dll.js                  # 公用NPM包
####|-- webpack.prod.js                 # 生产配置
#dist                                # 打包目录
#docs                                # 项目文档
#node_modules                        
#polyfill                            # polyfill打包文件（IE8兼容包）
#src                                 # 项目源码
####|-- assets                          # 静态资源，包括公用的 css/less/html/images 等
####|-- components                      # 公用组件，主要是react组件
####|   |-- loading
####|   |   |-- index.js
####|   |   |-- index.less
####|   |   |-- __tests__               # 测试文件
####|   |   |   |-- xx.js
####|-- entries                         # 入口目录
####|   |-- app.html                    # 入口页
####|   |-- app.js                      # 入口JS
####|-- pages                           # 页面目录
####|   |-- page1                       
####|   |   |-- index.js                # 页面逻辑
####|   |   |-- index.less              # 页面样式
####|   |   |-- img                     # 页面图片
####|   |   |   |-- xx.png          
####|   |   |-- __tests__               # 测试文件
####|   |   |   |-- xx.js
####|-- routes                          # 页面路由
####|-- utils                           # 工具库
#tests                               # 其他测试文件
#package.json                        
README.MD
```




#### accountFunction 账户功能管理
#### systemManage 服务管理
#### channelManage 渠道管理
#### accountQuery 账户查询
#### system-manage 系统管理












李聪:
antd 2.0->1.x 的降级操作，删除项目的node_modules，然后重新cnpm安装，这样才不会报错
推荐用CMD删除，执行命令：rd /s/q node_modules
