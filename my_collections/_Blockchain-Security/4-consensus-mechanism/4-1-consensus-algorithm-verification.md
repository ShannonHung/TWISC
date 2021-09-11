---
layout: single
title:   "存取控制4-1: 共識機制之證明"
excerpt: "控制：本檢查項目主要是要確定私有鏈所採用區塊鏈技術演算法在共識產生上的正確性。又分成以共識與正確性。
<br><br>
是否為區塊鏈特有安全控制：是
" 
date: 2021-09-11 12:56 +0800 # update-time
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
---


# 控制措施

- [ ] 共識 (Agreement) 之證明：應證明區塊鏈演算法能夠確保在一定的容錯能力下，所有正確的節點最終會對於某交易的正確性有共識。
- [ ] 正確性 (Validation) 之證明：應證明區塊鏈演算法能夠確保在一定的容錯能力下，所有正確的節點若都對某交易的正確性有一樣的決策 (都確認了某筆交易)，則最終會達成的共識就是該交易被確認。

> 另外有所謂強一致性，即若正確的節點送出了應該可以被確認的交易，則該交易應該最終可被確認。

# 適用範圍：
- 聯合決策組織

