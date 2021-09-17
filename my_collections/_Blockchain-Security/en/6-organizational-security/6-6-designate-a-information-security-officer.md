---
layout: single
title:   "存取控制6-6: 資訊安全負責人"
excerpt: "控制：確保應用服務的各服務提供者皆有專人負責資訊安全相關事宜。<br><br>
是否為區塊鏈特有安全控制：否
" 
date: 2021-09-11 13:44 +0800 # update-time
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
lang-ref: blockchain-6-6
---


# 控制措施
各參與私有區塊鏈的服務提供者，與應用服務的維護單位，應該設立資訊安全專責人員，以便負責以下的資通安全事項：

- [ ] 指派單位內與相關單位人員的安全責任
- [ ] 確保相關資訊安全政策與程序的落實。
- [ ] 確保相關法規的符合。
- [ ] 協調風險管理工作的執行與依照風險管理結果調整安全控制措施。
- [ ] 確保內部稽核、滲透測試與弱點掃描等檢查工作的執行，並進行改善。
- [ ] 對於範圍內變更與發佈管理的核准。
- [ ] 對於範圍內意外事件處理的決策。
- [ ] 協調單位內人員，準備呈現資訊安全達成情形的資料，以提供聯合決策組織需要時參考。
- [ ] 與聯合決策組織進行協調，並配合相關的檢查作業。

這邊要注意的是，即便最終參與單位的資訊安全事項是由一個團隊來負責，也都應該有一個專門負責資訊安全的人員。

# 適用範圍：
- 私有鏈核心元件區域 (Zone 1)
- 私有鏈讀取元件區域 (Zone 2)
- 應用服務區域 (Zone 3)
- 應用服務的開發與維護單位


# 相關標準之控制措施：

| 標準               | 相關控制措施                    |
| ------------------ | ------------------------------- |
| PCI-DSS 3.2.1      | 12.4.1、12.5 |
| ISO/IEC 27001:2013 | 5.3 |
| ISO/IEC 27002:2013 | 6.1.1、7.2.1 |



