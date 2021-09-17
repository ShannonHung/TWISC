---
layout: single
title:   "存取控制3-2: 監控異常行為"
excerpt: "控制：監控網路當中的異常行為，因而進行通報或限制。
<br><br>是否為區塊鏈特有安全控制：部份
" 
date: 2021-09-11 12:53 +0800 # update-time
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
lang-ref: blockchain-3-2
---

# 控制措施

私有區塊鏈的各服務提供者，應該要各自建立網路監控機制，以監控網路中的異常狀態。對於監控機制來說，可以分成特別針對區塊鏈與一般性的網路監控機制：

首先，就區塊鏈網路來說，一般可以針對其他服務提供者或應用服務所傳來的訊息，去進行檢查，如果發現傳來的訊息異常，如送來錯誤的交易訊息 (例如簽章錯誤，或大量正確但是無意義的交易)，或是送來超過權限的操作，則應將之過濾，並進行通報。

此外，各服務提供者應該採用以下措施，網路進行監控：
- [ ] 採用入侵偵測系統 (IDS) 或入侵防禦系統 (IPS)，以發現異常並進行阻擋。
- [ ] 紀錄異常的連線行為，並妥善保管紀錄。
- [ ] 監控網路流量，以發現並減緩阻斷式服務攻擊。
- [ ] 如有需要，採用白名單的方式，限制連線的來源與可使用的網路服務。


在異常發生時送交內部管理人員進行處理，如果發現異常是來自於其他服務提供者，則通知該服務提供者或交由聯合決策組織進行處理。

# 適用範圍：
- 私有鏈核心元件區域 (Zone 1)
- 私有鏈讀取元件區域 (Zone 2)
- 應用服務區域 (Zone 3)

# 相關標準之控制措施：


| 標準               | 相關控制措施                                               |
| ------------------ | ---------------------------------------------------------- |
| PCI-DSS  3.2.1     | 10.1、10.2、10.3、10.4、10.5、10.6、10.7、10.8、10.9、11.4 |
| CIS 控制 v7.1      | 12                                                         |
| ISO/IEC 27002:2013 | 12.4、13.1.2                                               |