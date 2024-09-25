# Swiper for Hydrooj

## 快速启用
```bash
cd /root/.hydro/
git clone https://github.com/Godtokoo666/swiper-for-hydrooj
hydrooj addon add /root/.hydro/swiper-for-hydrooj
pm2 restart hydrooj 
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

使用时先初始化，即先点击配置页初始化，将自动插入数据库

### 3.config块格式:
config无有效内容时，swiper不显示
```json
[
    {
      "title": "Slide 2", //鼠标悬停图片的显示名
      "img": "image1.jpg", //图片的链接
      "url": "http://example.com/1" //点击图片跳转的链接
    },
    {
      "title": "Slide 2",
      "img": "image2.jpg",
      "url": "http://example.com/2"
    }
]
```
