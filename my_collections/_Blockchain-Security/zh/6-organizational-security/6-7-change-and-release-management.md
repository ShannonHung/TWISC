---
layout: single
title:   "存取控制6-7: 建立變更管理與發佈管理程序"
excerpt: "控制：確保元件的變更與發佈有一定的管理程序，以減少可能的安全風險。<br><br>
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

lang: zh
lang-ref: blockchain-6-7
---


# 控制措施
應用服務的各參與者應該建立變更及發佈管理程序，並針對變更進行審查：

- [ ] 系統或設備的設定
- [ ] 軟體或硬體設備
- [ ] 系統或應用程式
- [ ] 作業程序
- [ ] 所使用或提供的服務

在變更與發佈管理程序中，應該要求除了在允許範圍內的變更外，其他的變更都需要備妥發佈及還原計畫，並且經過審查，以確保變更所帶來的資訊安全風險都是在可以接受的範圍之內。

在變更經過審查後，方可經由發佈計畫進行變更的發佈。如果發佈遇到問題，在許可的情況下，可得到各單位管理者的同意，而透過還原計畫將變更還原。

所有的變更、發佈，與還原的過程應該留下紀錄，以便日後審查。


# 適用範圍：
- 私有鏈核心元件區域 (Zone 1)
- 私有鏈讀取元件區域 (Zone 2)
- 應用服務區域 (Zone 3)
- 應用服務的開發與維護單位
- 聯合決策組織


# 相關標準之控制措施：

| 標準               | 相關控制措施                    |
| ------------------ | ------------------------------- |
| PCI-DSS 3.2.1      | 1.1.1、6.3.2、6.4、6.6、12.11 |
| ISO/IEC 27001:2013 | 8.1 |
| ISO/IEC 27002:2013 | 12.1.2、14.2.2、14.2.3、14.2.4、15.2.2 |



