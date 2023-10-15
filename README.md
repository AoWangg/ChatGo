# ****ChatGo是一款基于BigDl-LLM和LangChain的Web服务。结合区块链技术，其可以实现针对知识图谱的问答，实现让个人拥有自己的“专用大模型”****

### **ChatGo分为后端（Python）、链端（Hardhat）、图谱端（neo4j）、前端（React），此文档将按照【后端—链端—图谱端—前端】的顺序介绍如何部署ChatGo**

# 一、后端部分

1. 后端在项目的/backend文件夹中，首先安装项目的依赖库

```jsx
pip install langchain==0.0.2
pip install openai==0.27.4
pip install neo4j-driver==1.7.6
pip install neo4j
pip install fastapi
pip install uvicorn
```

1. 其次完成环境配置，设置node4j数据库等信息，我们提供.env的实例，可以照此填写

```jsx
cp .env.example .env
```

1. 环境变量设置完后，即可开启后端，进入backend/src/中运行

```jsx
python3 main.py
```

# 二、链端部分

1. 链端部分我们使用Hardhat框架进行智能合约开发，首先进入/ChatGo文件夹中，安装项目依赖

```
npm install
```

1. 依赖安装后，项目启动本地Hardhat节点

```
npx hardhat node
```

1. 在本地网络运行时，在单独的终端窗口中将合约部署到本地网络

```
npx hardhat run scripts/deploy.js --network localhost
```

# 三、图谱端

### 图谱下载与启动

1. 可以选择本地部署neo4j数据库，或使用官方的云端数据库。本项目使用本地部署的neo4j 4.2.26版本
2. 首先在本机安装openjdk11版本

```jsx
sudo apt install openjdk-11-jre-headless
```

1. 下载neo4j 4.2.26版本
2. 解压下载的安装包：

```jsx
tar -axvf neo4j-community-4.4.26-unix.tar.gz
```

1. 进入neo4j的根目录，启动neo4j

```jsx
./bin/neo4j start
```

### 导入图谱dump数据

1. 首先停止正在运行的neo4j，在根目录中运行

```jsx
./bin/neo4j stop
```

1. 修改配置文件，进入 gedit conf\neo4j.conf，第9行下面填加：

```jsx
# The name of the default database
#dbms.default_database=neo4j
dbms.active_database=ming.db    \\<数据库名字>.db
```

1. 进入bin文件夹中，运行

```jsx
neo4j-admin load --from=<需要导入文件的地址> --database=<导入的数据库> --force

neo4j-admin load --from=/home/aowang/history-knowledge-graph-neo4j.dump --database=mingchao.db --force //例子
```

1. 导入时版本升级报错，解决方法：在配置为文件中将 dbms.allow_upgrade=true 打开

# 四、前端部分（项目启动）

1. 进入ChatGo的根目录中，运行

```jsx
npm run dev
```

1. 进入[http://localhost:3000](http://localhost:3000/)查看ChatGo
2. 进入[http://0.0.0.0:7860/](http://0.0.0.0:7860/)查看后端响应情况
3. 进入[http://localhost:7474](http://localhost:7474/)查看neo4j数据库情况
