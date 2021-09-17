---
layout: single
title:   "存取控制4-7: 揭露隱私保護機制"
excerpt: "控制：確保所建置的區塊鏈，可以避免有心認識透過分析區塊鏈所儲存的交易  內容而侵害使用者隱私。<br><br>
是否為區塊鏈特有安全控制：是
" 
date: 2021-09-11 13:20 +0800 # update-time
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
lang-ref: blockchain-4-7
---


# 控制措施
如果私有區塊鏈應用會將使用者的個人資料存入區塊鏈，應該要採用 7.6 節的方式避免個資外洩。此處主要是要探討更進一步的個人資料保護議題。首先，可能透過追蹤帳號的方式，而知道特定帳號有從事過甚麼樣的行為，或是將特定帳號有執行過的交易進行連結。此外，也有可能針對交易的來源和目的，去分析資金的流向。

**目前已有以下的方式被提出來解決這樣的議題**：
- [ ] 使用一次性的帳號 (Stealth Address)
- [ ] 由多人互相掩護，使用環簽章等方式，讓他人無法得知真實交易的來源與目的。
- [ ] 使用側鏈或是在區塊鏈外進行交易後將結果由第三方寫回。
- [ ] 使用盲簽章的方法，使得使用者可以在不揭露認證資訊的情況下進行交易。
- [ ] 如果區塊鏈應用有避免資料被分析而侵害隱私的需求，則應揭露其作法，以便使用者判斷。


# 適用範圍：
- 聯合決策組織

