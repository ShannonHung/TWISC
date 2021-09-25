---
layout: single
title:   "存取控制1-2: 設定實體安全防護"
excerpt:  |
    控制：確認是否有設立門禁等實體環境防禦措施，以限制未經授權的使用者進入系統運作環境。
    <br><br>
    是否為區塊鏈特有安全控制：否
    
date: 2021-09-11 11:37 +0800 # update-time
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
lang-ref: blockchain-1-2
---

# 控制措施
此控制主要可從以下幾點來進行：
- [ ] 建立門禁機制，並留存紀錄
- [ ] 設置緩衝區，並於緩衝區內檢查攜入的裝置
- [ ] 如有機密性考量，可檢查訪客離開時所攜出的設備，或禁止攜入與攜出設備。

# 適用範圍
- 私有鏈核心元件區域 (Zone 1)
- 私有鏈讀取元件區域 (Zone 2)
- 應用服務區域 (Zone 3)

# 相關標準之控制措施

| 標準               | 相關控制措施                 |
| ------------------ | ---------------------------- |
| PCI-DSS   3.2.1    | 9.1、9.2、9.3、9.4、9.6、9.8 |
| CIS 控制 v7.1      | 2.10                         |
| ISO/IEC 27002:2013 | 8.3、11.1、11.2.5、11.2.7    |
