---
layout: single
title:   "存取控制2-2: 區塊資料保護"
excerpt: "控制：識別會參與決策之區塊資料儲存位置，並且採取控制措施以保護資料。<br><br>是否為區塊鏈特有安全控制：是" 
date: 2021-09-11 12:13 +0800 # update-time
header:
  overlay_image: /assets/images/header/background.png # 圖片
#   caption: "Photo credit: [**Unsplash**](https://www.pexels.com/zh-tw/search/earth/)" # 可以表示圖片來源
#   overlay_filter: rgba(255,255,255,0.1)
  overlay_color: "#333" # 在純黑背景
  actions:
    - label: "Download PDF"
      url: "/assets/files/SmartIoT2021final.pdf" # 可以讓別人下載檔案

toc: true
toc_sticky: true
toc_icon: "ellipsis-h" # fontawesome
toc_label: "Table of Contents"

sidebar:
  nav: "blockchain"

lang: zh
lang-ref: blockchain-2-2
---

# 控制措施
本控制措施主要在減少因為區塊資料被攻擊，而造成資料被竄改的可能。要求對於持有區塊資料的主機進行安全性的要求。

此控制措施包括以下重點：
- [ ] 識別參與決策的區塊鏈節點
- [ ] 識別參與決策區塊鏈節點之資料儲存
- [ ] 對節點資料進行存取控制，只能由經由允許的程序進行許可的操作
- [ ] 另外儲存資料的特徵值，以便進行比對而驗證資料的正確性。


# 適用範圍：
- 私有鏈核心元件區域 (Zone 1)

# 相關標準之控制措施：

| 標準               | 相關控制措施 |
| ------------------ | ------------ |
| PCI-DSS  3.2.1     | 3.7          |
| CIS 控制 v7.1      | 13、14       |
| ISO/IEC 27002:2013 | 9.1.1        |
