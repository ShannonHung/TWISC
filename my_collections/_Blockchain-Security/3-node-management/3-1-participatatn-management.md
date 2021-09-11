---
layout: single
title:   "存取控制3-1: 限制參與節點與權限管理"
excerpt: "控制：控制私有鏈應用內的節點，並避免其從事未經授權的行為。
<br><br>是否為區塊鏈特有安全控制：是
" 
date: 2021-09-11 12:50 +0800 # update-time
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
此控制措施主要是要能夠控制私有區塊鏈應用的參與者，這主要可以分成幾個區塊鏈本身，以及可以對區塊鏈節點送出要求的應用服務或使用者。

就區塊鏈本身來說，應該要透過以下的方式管控參與的節點：

- [ ] 建立對於參與節點或元件的識別方式，例如 IP 位置，或是主機錢包等。
- [ ] 定義區塊鏈節點的角色以及可以進行的操作。
- [ ] 依照區塊鏈節點的角色限制其可以送出的要求。
- [ ] 限制未受權節點或裝置的連線。


而區塊鏈節點，也可以限定管理者或應用服務的連線方式或裝置，以降低未經授權存取的情形。

私有區塊鏈應用的聯合決策組織 (參見 6.5 節)，應該有權限可以移除行為不符合決議的參與節點。


# 適用範圍：
- 私有鏈核心元件區域 (Zone 1)
- 私有鏈讀取元件區域 (Zone 2)

# 相關標準之控制措施：

| 標準           | 相關控制措施         |
| -------------- | -------------------- |
| PCI-DSS  3.2.1 | 1.3.2、1.3.3、12.3.6 |
| CIS 控制 v7.1  | 13.3                 |