---
layout: single
title:   "存取控制6-1: 資訊安全政策"
excerpt: "控制：本檢查項目主要是要求組成私有區塊鏈應用之應用服務提供者，應該建立與維護安全政策，以要求相關人員能夠遵守規定。<br><br>
是否為區塊鏈特有安全控制：否
" 
date: 2021-09-11 13:34 +0800 # update-time
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
lang-ref: blockchain-6-1
---


# 控制措施
私有區塊鏈的聯合決策組織，應該要對於各參與者所應遵守的資訊安全政策達成共識，並要求各參與者按照資訊安全政策推動相關之資訊安全措施。 

但這邊要說明的是，雖然各區域都應該有這樣的要求，但是私有鏈應用應該可以針對實際上的佈署情況，去對提供不同區域服務的服務提供者有不同的安全政策要求。

**資訊安全政策應該包括以下項目**：
- [ ] 資訊安全目標
- [ ] 參與單位所應盡的安全責任
- [ ] 違反安全責任的處理方式

**參與單位應該考量的安全需求，包括但不限於**：
- [ ] 建立安全邊界需求
- [ ] 主機安全與監控需求
- [ ] 私有鏈參與節點管理與網路安全需求
- [ ] 應用系統安全需求
- [ ] 其他制度面安全控制需求

# 適用範圍：
- 私有鏈核心元件區域 (Zone 1)
- 私有鏈讀取元件區域 (Zone 2)
- 應用服務區域 (Zone 3)
- 應用服務的開發與維護單位
- 聯合決策組織



# 相關標準之控制措施：

|        標準        |  相關控制措施   |
| ---------------- | ------------- |
|      PCI-DSS 3.2.1      |12.1、12.8|
|   CIS 控制 v7.1    | 5.1、5.2、6.2 |
| ISO/IEC 27002:2013 | 5.1.1、15.1.1|


