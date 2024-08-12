# Swiper for Hydrooj

## 快速开始
```bash
cd /root/.hydro/
git clone https://github.com/Godtokoo666/swiper-for-hydrooj
hydrooj addon add /root/.hydro/swiper-for-hydrooj
```
## 使用
1.以域为单位区分

2.每个域在使用前须初始化

3.config块格式:
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
4.配置

URL：/domain/swiper 或 从管理域进入