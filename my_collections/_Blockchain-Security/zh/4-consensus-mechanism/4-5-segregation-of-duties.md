---
layout: single
title:   "存取控制4-5: 節點營運者的分工要求"
excerpt: "控制：應該讓要將私有鏈元件交由相互獨立的多方管理，以便能夠發揮交互勾稽的效果。<br><br>
是否為區塊鏈特有安全控制：是
" 
date: 2021-09-11 13:01 +0800 # update-time
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

# add mathjax support
usemathjax: true
sidebar:
  nav: "blockchain"

lang: zh
lang-ref: blockchain-4-5
---


# 控制措施
就這部分來說，應該要將私有區塊鏈的核心元件按照管轄權分成 k 個群體，例如這個私有鏈是由三個服務提供者共同維護的，則 k 就是 3。然後說明每個服務提供者：
- [ ] 約略有多少運算單元，例如以乙太坊為例，有多少運算節點，在判斷上應該以是否會影響到服務提供獲共識達成為判斷的依據。
- [ ] 是否有滿足安全邊界、主機安全與監控、安全政策等相關要求。

將這些服務提供者按照擁有的運算單元來排序，例如使用 ai 去識別每一個服務提供者，而用 ni 去表示該服務提供者的運算單元，而 pi 表示是否有滿足安全要求。最多運算單元的為 a1，則一個私有鏈應用服務可以包括 (a1,n1,p1) 到 (ak,nk,pk) 等 k 個服務提供者的運算能力資訊。倘若：

- 總運算力 $$C_N=\sum n_i$$
- 有通過安全要求之運算力  $$C_S=\sum_{p_i=true} n_i $$
- 最小區塊鏈運作運算單位要求  $$C_m $$
- 提供區塊鏈最小容量之最多服務提供者數目  $$ms $$，其中  $$ms $$ 為滿足 $$\sum_{i=k}^{m-M_s}n_i>C_m $$的最小正整數。若無法找到，則  $$ms$$為 nil
- 提供區塊鏈最小容量之最少服務提供者數目  $$Ms $$，其中  $$Ms $$ 為滿足 $$\sum_{i=1}^{M_s}n_i>C_m $$ 的最小正整數。邏輯上一定可以找到。
- 區塊鏈最大容錯運算單位  $$C_T $$
- 最少服務提供者勾結可超過最大容錯提供者數  $$mT $$，其中， $$mT$$為滿足 $$\sum_{i=1}^{M_T}n_i>C_T$$ 的最小正整數。邏輯上一定可以找到。

如此，可以計算出以下數值：
- 核心運算單元安全防護比率： $$C_S/C_N $$。表示在所有運算單位中，已經通過安全檢驗的運算單位比率。
- 服務維持提供者數： $$(Ms, ms, Cm) $$
- 最小容錯能力： $$(mT, CT)$$

私有鏈區塊鏈應用應該要與利害關係人討論後，確認本身的資訊安全需求，並由聯合決策組織做確認。應該要按照前述的基礎說明以下安全目標：

- [ ] 覆蓋度目標：定義至少要有多少比率以上參與節點有滿足相關認證要求的目標。
- [ ] 完整性目標：定義本身的容錯能力目標，以讓使用者知道可容忍有多少個參與者出錯。
- [ ] 可用性目標：定義本身服務的可用性目標，可以容忍多少個參與者停機。



# 適用範圍：
- 聯合決策組織

