---
layout: single
title:   "存取控制5: 應用系統安全"
excerpt: "需求目標：針對應用系統開發生命週期納入安全考量，以減少因為應用系統缺陷或弱點所造成的資安事件。
" 
date: 2021-09-11 13:20 +0800 # update-time
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
lang-ref: blockchain-5
---


# 控制措施
如果按照McGraw的接觸點概念 [McGraw2006]，可以在程式開發生命週期，加入七個安全考量：

- 在需求與建立使用案例階段，需要擬定安全需求，並且建立誤用案例。
- 對於可能造成的威脅，需要進行風險評估，以按照風險進行系統設計。此外，在系統測試階段，也要再次進行風險的再評估，以確認風險皆有控制。
- 在建立測試計畫的時候，應該要採用風險導向，對於有風險的部分額外進行測試。
- 在程式開發的過程中，要進行程式碼檢查，以發現問題並進行修改。
- 上線前，要進行滲透測試，以便於實際環境中發現問題。
- 上線後，要建立相關安全程序，以確保系統安全。並且能夠在發現弱點時進行修補或更新。

首先，對於誤用案例的建立上，本文件要求可以透過建立威脅模型的方式，掌握應用的主要威脅 (5.1)。由此，可進一步針對私有區塊鏈之應用，定應安全需求 (5.2)。其中，本文件特別點出應該要在使用者端的應用程式，加入告知功能，以便能夠讓使用者了解安全風險，並且在個資的收集與利用上，取得使用者的同意 (5.3)。

在風險評估上，因為在第 9.4 節當中也有要求建立風險管理程序，因此併入 9.4 節作一併考量。而在應用系統開發的過程中，應該要做到程式碼安全分析 (5.4)，並且在上線前要進行測試 (5.5)。

此外，為了確保前述的測試作業都有進行，本文件參考其他安全指引，要求應區隔開發、測試，與營運環境，以透過分工的方式來減少人為疏失的可能 (5.6)。最後，在系統上線後，會須要定期檢視系統元件的弱點並進行更新 (5.7)。最後，有關變更管理與弱點掃描和滲透測試，因為牽涉到多個層級，因此歸入第 6 章。

對於私有區塊鏈應用來說，雖然會由許多參與者組成，但應該會有一個單位，來負責應用服務的開發與維護。此單位應該要得到聯合決策組織的委託，並按照本章所提的控制措施來發展應用服務。