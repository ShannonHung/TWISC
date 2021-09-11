---
layout: single
title:   "存取控制5-6: 區隔開發、測試，與營運環境"
excerpt: "控制：落實系統開發時的分工，以減少人為疏失造成的意外事件。
<br><br>是否為區塊鏈特有安全控制：否
" 
date: 2021-09-11 13:31 +0800 # update-time
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
在開發應用服務與智慧合約等元件時，應該要區隔開發、測試，與營運環境。首先，在開發與測試環境當中可能會使用特定的測試帳號或程式，這如果直接在營運環境使用，可能會成為駭客攻擊的標的。因此，要隔離開發、測試，與營運環境，以便確保營運環境中不會有這些測試帳號或程式，以避免被利用。

此外，為了避免程式開發者在沒有經過安全檢查或測試就將程式發佈到營運環境的情況，需要將這些環境做區隔，而不給程式開發人員存取營運環境的權限，只能由其他審查人員，確定相關的安全檢查都通過後，方可將應用程式或智慧合約佈署於營運環境。

# 適用範圍：
- 應用服務的開發與維護單位



# 相關標準之控制措施：

|        標準        |  相關控制措施   |
| ---------------- | ------------- |
|      PCI-DSS 3.2.1      | 6.4.1、6.4.2、6.4.4 |
|   CIS 控制 v7.1    | 18.9 |
| ISO/IEC 27002:2013 | 12.1.4 |


