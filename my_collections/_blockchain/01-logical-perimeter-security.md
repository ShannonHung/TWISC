---
layout: single
title:   "存取控制1: 定防火牆限制未經授權存取"
excerpt: "需求目標：確認私有區塊鏈應用提供者是否已經建立好安全邊界，以限制未經授權的實體或邏輯存取，並進一步透過安全邊界的設定而釐清檢查範圍。" 
date: 2021-06-06 # update-time
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
<script src="{{ base.url | prepend: site.url }}/assets/checkbox.js"></script>
主要可以透過以下的方式，去控管網路存取：

# 網路的入/出口設立防火牆，並妥善管理：
- [X] 是否採用原則拒絕，例外許可的方式建立防火牆政策。
- [ ] 是否定期檢查防火牆設定。
- [ ] 是否妥善管理防火牆設定。
- [ ] 是否確定防火牆的變更皆有經過審查，並且有做紀錄。
- [ ] 是否已變更裝置之預設密碼。
- [ ] 是否限制未經授權的無線連線裝置，以避免能夠透過無線網路進行存取。


# 適用範圍：
- 私有鏈核心元件區域 (Zone 1)
- 私有鏈讀取元件區域 (Zone 2)
- 應用服務區域 (Zone 3)

# 相關標準之控制措施：

|        標準        |  相關控制措施   |
| ---------------- | ------------- |
|      PCI-DSS       |   3.2.1	要求1   |
|   CIS 控制 v7.1    | 2.10、9、12、15 |
| ISO/IEC 27002:2013 | 13.1.2、13.1.3  |
