---
layout: single
title:   "存取控制6-4: 風險管理程序"
excerpt: "控制：除了套用一般的控制措施外，也應採用系統化的方法是識別潛在的威脅，從而評估相關之風險。並進而對風險進行因應。<br><br>
是否為區塊鏈特有安全控制：否
" 
date: 2021-09-11 13:39 +0800 # update-time
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
lang-ref: blockchain-6-4
---


# 控制措施
對於私有區塊鏈應用來說，聯合決策組織應該要建立風險管理程序，對於整體應用進行風險評估，並建立對於各參與單位資訊安全程序之建議或要求。而各參與單位也應可對本身的風險狀況進行安全措施的調整。

**風險管理程序通常包括以下主要內容**：
- [ ] 定義風險評鑑的方法，以便能夠按照所定義的方法，有效的識別風險，並能對風險按照其嚴重性進行分類。
- [ ] 對可接受風險值或類別作定義。
- [ ] 對於風險識別的要求。傳統一般會採用資產導向的做法，也就是針對關鍵資訊資產，分析其弱點，以及識別外部可能的威脅，然後去找出威脅可能利用弱點而發生資安事件的情況。或是經由流程圖去辨識作業或資料流的風險。

**對於風險值評估的要求。一般有所謂定性或定量風險評估的做法，無論用哪一種，最好能夠達到以下目的**：
- [ ] 能夠將風險排序，以便決定處理的先後順序
- [ ] 能夠評判嚴重程度，以便能夠決定因應策略

**針對風險進行因應，包括**：
- [ ] 採取適當的控制措施去控制風險。乃至於能夠依照風險程度選擇對於安全控制的強度。
- [ ] 接受殘存風險。
- [ ] 如風險無法控制或殘存風險不可接受，則可規避相關業務的執行。
- [ ] 採用保險等機制，以便在事件發生時能夠有足夠的資源進行因應。


# 適用範圍：
- 私有鏈核心元件區域 (Zone 1)
- 私有鏈讀取元件區域 (Zone 2)
- 應用服務區域 (Zone 3)
- 聯合決策組織



# 相關標準之控制措施：

| 標準               | 相關控制措施                    |
| ------------------ | ------------------------------- |
| PCI-DSS 3.2.1      |12.2|
| ISO/IEC 27001:2013 | 6.1 |


