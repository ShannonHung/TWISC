---
title: 一、私有區塊鏈應用安全需求
authors: Shi-Cho Cha
date: 2021-09-10 10:35 +0800 # update-time
company: NTUST-PRLAB
layout: single
toc: true # Auto-generated table of contents list for your posts and pages
toc_label: "Table of Contents"
toc_sticky: true
toc_icon: "ellipsis-h" # fontawesome
excerpt: "As permissioned blockchain becomes a common foundation of blockchainbased applications for current organizations, related stakeholders of the applications need  the means to assess the security risks of the applications." # 摘要 
header:
  overlay_image: /assets/images/header/background.png # 圖片
#   caption: "Photo credit: [**Unsplash**](https://www.pexels.com/zh-tw/search/earth/)" # 可以表示圖片來源
#   overlay_filter: rgba(255,255,255,0.1)
  overlay_color: "#333" # 在純黑背景
  actions:
    - label: "Download Document"
      url: "/assets/files/barebear.jpg" # 可以讓別人下載檔案
sidebar:
  nav: "blockchain"

lang: zh
lang-ref: blockchain-01
---

# 需求
為了讓區塊鏈應用的使用者了解該應用的安全風險，國立臺灣科技大學資通安全研究與教學中心提出了「私有區塊鏈應用安全評估基準」，該基準主要提供：
- 私有鏈應用的提供者有一個基準依循，建立一個安全的私有鏈應用。
- 讓私有鏈應用的使用者，可以要求私有鏈應用的提供者或第三方，去評估私有鏈應用是否符合此基準中的安全要求，因而可以了解到該私有鏈應用的安全風險。
- 可以基於此基準，而更進一步發展出認證制度。以便作為使用者選擇是否要使用私有區塊鏈應用的依據。

目前該安全基準分成以下四部分：
1.	私有區塊鏈應用安全威脅：提供私有鏈應用的一般性威脅模型，以便讓人了解私有鏈應用所可能的安全威脅。
2.	私有區塊鏈應用安全模式：提供確保私有鏈應用因應可能威脅的做法。
3.	私有區塊鏈應用安全需求：提供要落實私有鏈應用安全所建議採取的安全控制。
4.	私有區塊鏈應用安全檢查表：基於安全需求所產生之檢查表，供私有區塊鏈應用提供單位進行自我檢查。或讓其他單位對私有區塊鏈應用之安全性進行評估。


# 為何選擇私有區塊鏈來訂定應用安全需求?
相較於公有鏈，私有鏈因為參與節點有限，節點之間要達成共識也較容易，基於私有鏈所建立的區塊鏈應用其交易速度普遍較常見的公有鏈為快，因此，許多區塊鏈應用都是基於私有鏈。然而，私有鏈最常讓人質疑的就是：這樣和做一個集中式資料庫應用有何差異？和基於集中式資料庫的應用相比，私有鏈和其最大的差別就是在於私有鏈會建立有交互勾稽機制，而可以減少單一組織竄改資料的可行性。但就底安全程度提升了多少？這就是大家近來建立區塊鏈應用常會面臨到的問題。

# 參考的資訊安全指引
本文件主旨為「私有區塊鏈應用安全需求」，主要描述在建立私有區塊鏈應用時參與者應該要考慮到的「六大類安全需求」，而對於每一類的安全需求，本文件會提供建議的採取控制措施，期望可以透過這些控制措施，去滿足私有區塊鏈應用的相關安全需求。為了進一步提供對於各控制措施的實作建議，本文件也參考了以下的資訊安全指引：
1. Payment Card Industry (PCI), Data Security Standard - Requirements and Security Assessment Procedures v3.2.1, 2018：本標準一般簡稱PCI-DSS，由支付卡公司所建立，主要要求處理信用卡交易的廠商，應該符合 PCI-DSS 所訂定的安全要求。本文件原先想要直接在這標準上做延伸，不過該標準是以控制措施為出發來呈現，而本文件則依照區塊鏈本身元件的特性，來組織相關的安全控制措施。

2. Center for Information Security, CIS Controls v7.1, 2019：此標準是由 CIS 這個國際組織所制定，主要是要基於縱深防禦(Defend in Depth) 的概念，從 20 個不同的構面，去提出在各構面上可以採用的安全控制。而透過在不同構面的安全控制，來降低資安事件發生的機率以及發生後的影響。事實上，要做好私有區塊鏈安全，也需要由縱深防禦的角度出發，從各層面去強化安全，因此本文件也有參考此標準對於資訊安全控制措施的要求。

3. ISO/IEC, Information technology - Security techniques - Information security management systems – Requirements, ISO/IEC 27001:2013, 2013：ISO/IEC 27001:2013 應該是建立資訊安全管理制度最知名且重要的標準之一，該標準強調組織應該建立管理程序，以便能夠形成 PDCA 的循環，而落實與持續強化資訊安全的防禦。本文件則納入其中對於制度落實與持續改善的要求。

4. ISO/IEC, Information technology - Security techniques - Code of practice for information security controls, ISO/IEC 27002:2013, 2013：ISO/IEC 27002:2013 是針對 14 個控制類別，提供了相關 114 個控制措施建議的做法。而 ISO/IEC 27001:2013 會要求組織在建立資訊安全管理制度時，應該要考量這 114 個控制措施對本身是否適用。本文會將控制措施和 ISO/IEC 27002:2013 的控制措施做對應，以提供相關控制措施的實施細節。

除了特別針對私有區塊鏈應用的控制措施外，在本文件中會針對控制措施，列出和該控制措施相關安全指引相關的建議或規範，希望能夠對於了解控制措施的內涵與實作方式有所助益。
