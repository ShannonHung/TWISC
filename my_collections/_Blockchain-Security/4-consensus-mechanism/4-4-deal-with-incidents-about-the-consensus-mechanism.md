---
layout: single
title:   "存取控制4-4: 錯誤處理能力"
excerpt: "控制：私有區塊鏈應用應該建立發生錯誤時的因應機制
<br><br>是否為區塊鏈特有安全控制：是
" 
date: 2021-09-11 13:00 +0800 # update-time
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
lang-ref: blockchain-4-4
---


# 控制措施
**私有區塊鏈應用常需要處理以下的錯誤情況，包括**：

- [ ] 被塞入一堆無用交易時儲存空間無法負荷的處理機制
- [ ] 發現鏈上有必須要移除的錯誤資料時 (例如會造成重大財物損失的錯誤智慧合約，或是與實際狀況不同的錯誤資料) 的處理機制。
- [ ] 錯誤處理機制應該有一定的控制，並且留下充分的紀錄。



應該要掌握私有區塊鏈的最小資源需求，以便能夠採取適當的控制措施以確保服務的可用性與永續運作。

# 適用範圍：
- 聯合決策組織

