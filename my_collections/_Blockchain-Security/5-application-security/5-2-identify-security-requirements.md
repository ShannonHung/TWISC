---
layout: single
title:   "存取控制5-2: 定義安全需求"
excerpt: "控制：針對應用層的應用服務或智慧合約，定義安全需求。
<br><br>是否為區塊鏈特有安全控制：否
" 
date: 2021-09-11 13:23 +0800 # update-time
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
本章節主要針對私有區塊鏈應用層所開發的應用服務或智慧合約，要求在應用服務的開發、取得，與變更時，應該要定義其安全需求。包括但不限於：
- [ ] 應用服務的身分鑑別機制與強度
- [ ] 應用服務或智慧合約的權限檢查要求
- [ ] 對於應用服務或智慧合約經手機敏資訊的傳輸與儲存安全需求
- [ ] 對於應用服務或智慧合約操作的紀錄考量
- [ ] 應用程式提供的資料備份與還原機制
- [ ] 保留版本資訊與提供更新功能
- [ ] 對於輸入與輸出訊息格式的檢查
- [ ] 與其他安全控制整合的做法
- [ ] 確保所使用第三方函式庫或元件的安全
- [ ] 對於常見安全弱點的避免
- [ ] 應用層的安全監控
- [ ] 系統開發文件的建立與保存




# 適用範圍：
- 應用服務的開發與維護單位
- 聯合決策組織



# 相關標準之控制措施：

| 標準           | 相關控制措施   |
| -------------- | -------------- |
| PCI-DSS  3.2.1 | 6.5    |
| CIS 控制 v7.1  | 18.1、18.2、18.3、18.4、18.5、18.10、18.11 |
| ISO/IEC 27002:2013| 14.1、14.2.2|