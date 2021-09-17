---
layout: single
title:   "存取控制2-4: 實體安全防禦機制"
excerpt: "控制：透過實體安全防禦機制，以減少裝置所面臨的實體安全威脅。
<br><br>是否為區塊鏈特有安全控制：否
" 
date: 2021-09-11 12:15 +0800 # update-time
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
lang-ref: blockchain-2-4
---

# 控制措施
對於設備本身的網路安全機制與設定是透過 3-1的控制措施，在保護主機或裝置工作的一部分，而在控制措施 3.2，會在網路中建立外部的控制措施。然而，對於裝置的實體防禦機制，則統一列入本控制：

## 裝置
對裝置本身：
- [ ] 如有需要，建立裝置硬體識別，以便能夠進行裝置綁定
- [ ] 如有需要，限制使用 USB 隨身碟等對於裝置的實體存取
- [ ] 如有需要，檢查所安裝硬體的正確性

## 裝置所處環境
- [ ] 地點的設置能能夠考量水災等環境災害，並建立妥適的因應機制。
- [ ] 建立在區域內的工作準則，避免人員在有意或無意的情況下對設備造成資安事件，例如吃泡麵打翻在電腦上、奔跑時把設備撞到地上等。
- [ ] 建立防火及溫濕度監控設備，並定期維護。
- [ ] 建立實體環境監控機制，並妥善保管紀錄，以發現實體安全事件。


# 適用範圍：
- 私有鏈核心元件區域 (Zone 1)
- 私有鏈讀取元件區域 (Zone 2)
- 應用服務區域 (Zone 3)

# 相關標準之控制措施：

| 標準               | 相關控制措施                                                                       |
| ------------------ | ---------------------------------------------------------------------------------- |
| PCI-DSS  3.2.1     | 9.2、9.3、9.4、9.5、9.6、9.7、9.8、9.108                                           |
| CIS 控制 v7.1      | 10.4                                                                               |
| ISO/IEC 27002:2013 | 6.2.1、8.3、11.1.3、11.1.4、11.1.5、11.2.1、11.2.2、11.2.3、11.2.4、11.2.5、11.2.7 |
