---
layout: single
title:   "存取控制2-1: 主機與設備安全"
excerpt: "控制：針對主機與重要資訊設施，採用一般常見的安全防護機制，以做到基本的安全防護。<br><br>是否為區塊鏈特有安全控制：否" 
date: 2021-09-11 12:12 +0800 # update-time
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

lang: en
lang-ref: blockchain-2-1
---

主要可以透過以下的方式，去控管網路存取：

# 控制措施
本控制措施是要確保主機有採取常見的安全機制，包括但不限於：
- [ ] 建立使用者帳號，並識別要求存取的使用者
- [ ] 盤點與停用不需要的使用者帳號
- [ ] 管理特權帳號
- [ ] 對預設的密碼進行變更
- [ ] 紀錄與監控系統事件
- [ ] 安裝防毒軟體並維持更新
- [ ] 限制所安裝的軟體
- [ ] 採用安全設定並做好變更管理
- [ ] 限制能夠啟動的服務
- [ ] 網路安全設定，如透過網路防火牆限制對外連線


# 適用範圍：
- 私有鏈核心元件區域 (Zone 1)
- 私有鏈讀取元件區域 (Zone 2)
- 應用服務區域 (Zone 3)

# 相關標準之控制措施：

| 標準               | 相關控制措施                                         |
| ------------------ | ---------------------------------------------------- |
| PCI-DSS  3.2.1     | 要求 2、要求 5、要求 8                               |
| CIS 控制 v7.1      | 1、2、3、4、5、8、9、14                              |
| ISO/IEC 27002:2013 | 9.2.1、9.2.3、9.2.4、9.4.4、12.2、12.4、12.5.1、12.6 |
