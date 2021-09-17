---
layout: single
title:   "存取控制5-1: 威脅模型"
excerpt: "控制：掌握應用服務之主要流程，並且識別相關威脅。<br><br>
是否為區塊鏈特有安全控制：否
" 
date: 2021-09-11 13:21 +0800 # update-time
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
lang-ref: blockchain-5-1
---


# 控制措施
應用系統的開發單位在開發系統前，應該要建立系統的威脅模型。而這主要的用途包括：

- [ ] 識別應用系統的主要流程與關鍵資源或主要元件
- [ ] 基於對於系統運作方式的了解，識別出主要的威脅以及可能造成的影響

  舉例來說，像Howard 與 LeBlanc 就提出使用資料流程圖的方式去識別系統運作方式，並且去識別主要威脅而評估風險。這樣的方法也被應用在微軟的安全開發生命週期方法中 (Security Development Lifecycle, SDL)。而這也可以做為後續分析風險的依據之一。像是 ISO/IEC 29134:2017 就有要求要識別應用系統的應用情境，以便釐清相關的威脅，並且能夠更進一步去進行隱私風險分析。



# 適用範圍：
- 應用服務的開發與維護單位
- 聯合決策組織


# 相關標準之控制措施：

| 標準           | 相關控制措施   |
| -------------- | -------------- |
| PCI-DSS  3.2.1 | 6.1、12.2      |
| CIS 控制 v7.1  | 14.1.1、14.2.5 |

