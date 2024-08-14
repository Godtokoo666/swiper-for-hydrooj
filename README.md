# Swiper for Hydrooj

## 快速开始
```bash
cd /root/.hydro/
git clone https://github.com/Godtokoo666/swiper-for-hydrooj
hydrooj addon add /root/.hydro/swiper-for-hydrooj
```
## 使用

本插件针对域进行区分，每个域在使用前须初始化

### 1.全局启用Swiper

控制面板->系统设置->hydrooj->首页

在适当位置加入
```config
swiper: true
```

### 2.配置
URL：/domain/swiper 或 从管理域进入

### 3.config块格式:
config无有效内容时，swiper不显示
```json
[
    {
      "title": "Slide 2",
      "img": "image1.jpg",
      "url": "http://example.com/1"
    },
    {
      "title": "Slide 2",
      "img": "image2.jpg",
      "url": "http://example.com/2"
    }
]
```
