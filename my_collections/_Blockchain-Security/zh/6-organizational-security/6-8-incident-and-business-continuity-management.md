---
layout: single
title:   "存取控制6-8: 意外事件管理與業務永續"
excerpt: "控制：建立意外事件管理與業務永續運作程序，在意外事件發生時，能夠進行妥善的控制，使得其衝擊降到最低。並能夠在災難發生時，有一定的程序，使得應用服務可以永續運作。<br><br>
是否為區塊鏈特有安全控制：否
" 
date: 2021-09-11 13:46 +0800 # update-time
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
lang-ref: blockchain-6-8
---


# 控制措施
**應該確定應用服務的各參與者皆建立有意外事件管理與業務永續運作程序。該程序包括**：

- [ ] 指派意外事件通報與處理的責任，並透過教育、訓練，或宣導，以確保相關人員知悉自身的責任，並有能力執行所被指派的工作。
- [ ] 依照不同種類的意外事件，建立處理的標準程序，使得意外事件會造成的影響為最小。
- [ ] 各參與單位對於本身提供的服務可能造成中斷的情況，建立備援機制，以便能夠回復服務。
- [ ] 妥善保護備援資料的安全性。
- [ ] 對備援機制進行測試。
- [ ] 應該依照聯合決策單位所定義的安全等級，將事件通報聯合決策單位。
- [ ] 若本身無法將服務回復，可尋求聯合決策單位的協助，由其他參與單位協助回復。
- [ ] 檢視本身意外事件處理的情況，並作為流程改善的依據。

**對於聯合決策單位來說，應該要建立以下的程序**：

- [ ] 確保各參與單位意外事件處理與業務永續運作程序的正常運作
- [ ] 定義意外事件的層級與處理方式樣板
- [ ] 要求參與單位通報資訊安全意外事件
- [ ] 針對意外事件的情況，在必要時中斷特定參與單位的連線。
- [ ] 協助參與單位，藉由其他參與單位的資料還原本身服務。
- [ ] 協調各參與單位，以解決各參與單位需要採取一致性動作以排除意外事件的情況。
- [ ] 對於需要跨單位處理的意外事件進行測試，並定期檢視測試結果，以找出改善的機會。
- [ ] 檢視本身與各單位意外事件處理的情況，並作為流程改善的依據。


# 適用範圍：
- 私有鏈核心元件區域 (Zone 1)
- 私有鏈讀取元件區域 (Zone 2)
- 應用服務區域 (Zone 3)
- 應用服務的開發與維護單位
- 聯合決策組織


# 相關標準之控制措施：

| 標準               | 相關控制措施                 |
| ------------------ | ---------------------------- |
| PCI-DSS 3.2.1      | 9.5.1、11.1.2、12.5.3、12.10 |
| CIS 控制 v7.1      | 17.9、19                     |
| ISO/IEC 27002:2013 | 16、17                       |


