---
layout: single
title:   "存取控制5-5: 系統安全測試"
excerpt: "控制：對程式進行測試，以檢查應用系統是否符合安全需求。
<br><br>是否為區塊鏈特有安全控制：否
" 
date: 2021-09-11 13:30 +0800 # update-time
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
該在系統開發的生命週期中，對於應用系統的安全進行測試，以確保其符合安全需求：

- [ ] 在系統開發階段：程式設計師應該對於本身所開發的程式進行單元測試。並針對不同元件的整合後的結果進行整合測試。甚至可與DevOps 工具整合，在程式設計師要將程式回傳至原始碼控制工具儲存前，測試沒有安全漏洞後才能完成上傳。
- [ ] 在系統測試或是驗收階段：在測試環境進行完整的系統測試。乃至於進行弱點掃描與滲透測試 (參見 9.11)。
- [ ] 在系統上線以後：應針對營運環境進行弱點掃描與滲透測試。對於系統有變更要發佈前，也應做好測試再進行發佈。

此外，除了確保測試資料反映實際資料的狀態外，也應該對於測試資料當中含有個資等機敏資料的情況進行控制。例如:
- [ ] 將資料去識別化
- [ ] 限制測試資料的存取。


# 適用範圍：
- 應用服務的開發與維護單位



# 相關標準之控制措施：

|        標準        |  相關控制措施   |
| ---------------- | ------------- |
|      PCI-DSS 3.2.1      |   6.4|
|   CIS 控制 v7.1    | 20.5 |
| ISO/IEC 27002:2013 | 14.2.1、14.2.2、14.2.3、14.2.4、14.2.7、14.2.8、14.2.9、14.3.1 |
