---
layout: single
ordinal: 1
title: I.Introduction
excerpt: "簡單介紹本文件的主旨以及含意，會針對私有區塊鏈多做描述，同時訂定評估範圍邊界，以及本文的主要六大檢查框架。" # 摘要 
date: 2021-09-10 11:35 +0800 # update-time
header:
  overlay_image: /assets/images/header/background.png # 圖片
#   caption: "Photo credit: [**Unsplash**](https://www.pexels.com/zh-tw/search/earth/)" # 可以表示圖片來源
#   overlay_filter: rgba(255,255,255,0.1)
  overlay_color: "#333" # 在純黑背景
  actions:
    - label: "Download PDF"
      url: "/assets/files/SmartIoT2021final.pdf" # 可以讓別人下載檔案
toc: true # Auto-generated table of contents list for your posts and pages
toc_label: "Table of Contents"
toc_sticky: true
toc_icon: "ellipsis-h" # fontawesome

sidebar:
  nav: "blockchain"

lang: en
lang-ref: blockchain-00
---
Due to the popularity of Bitcoin and other cryptocurrencies built on blockchain technology, blockchain technology is now at the center stage of the world. Several organizations
have launched their blockchain applications. However, it is said that “the water that bears the boat is the same that swallows it up.” When the prices of Bitcoin and other cryptocurrencies crashed in Dec. 2017, the experts are reconsidering the value of blockchain applications [1]. Currently, blockchain application providers may need to convince their clients that they are not going blockchain for blockchain’s sake. In addition, researches shown the propose criteria to decide whether applications are suitable to use blockchain technology. For example, McAbee et al. mentioned critical factors to determine the adoption of blockchain technology in the military intelligence process [2].

This study refers to a blockchain application as an application founded on blockchain networks. A blockchain network is composed of several nodes (or participants). The application can send a request to a node in a blockchain network and delegate the node to execute the request on behalf of the application. The node further propagates the request or execution results to other nodes. Afterward, the nodes achieve consensus on the execution result of the request collaboratively. We can classify blockchain networks into public and permissioned blockchains [3]. In a permissioned blockchain network, only permitted nodes can join the network. Comparatively, a public blockchain network has no restriction on who can participate in the network.

This study focuses on the applications that rely on permissioned blockchain networks. If organizations establish applications on a public blockchain network, the application
providers or application users may not be capable of affording the transaction fees in return for rewarding the node owners of the network to process the requests of the applications. Moreover, in the public blockchain networks, as nodes of the network spread around the world, the spreading needs a significant amount of time periods to achieve onsensus on the block data. Consequently, in addition to the applications related to cryptocurrency exchanges, organizations usually deploy their blockchain applications based on  ermissioned blockchain.

To avoid a blockchain application from the criticism of blockchain for blockchain’s sake, the involved parties of people could dive into the key features of a blockchain network,
and they can judge a blockchain application by evaluating whether the applications utilize the features of blockchain technology. From a technical perspective, comparing the
blockchain technology with existing technologies such as PKI, distributed database, and high availability architecture, this study advocates that a permissioned blockchain network should at least have the following features: (1) having a friendly means for data verification; (2) letting more than one parties of authority to keep data replication and to endorse
data integrity; (3) being able to tolerate a certain degree of failure.

When a blockchain application claim that it utilizes the above features of its blockchain network, users may be curious about whether the application provider manages its blockchain network properly. For example, a natural disaster may disable a blockchain network if all nodes are located in the same facility. Enabling users to trust that a blockchain application is managed appropriately is especially important to permissioned blockchain applications. Comparatively, a public blockchain application usually assumes that each node of the associated blockchain is untrustworthy. Therefore, users usually judge the blockchain with its algorithm and number of nodes in the blockchain. For example, in addition to regulation risks and market-related risks, Muller et al. propose a framework to evaluate risks of crypto tokens with the underlying technology, such as consensus protocols, cryptographic algorithms, and countermeasures to address cybersecurity attacks [4]. Islam et al. propose to assess the sustainability of blockchain networks on their mining schemes [5]. The number of nodes in a permissioned blockchain network is usually much less than the number of nodes in a public blockchain network. For example, attackers could just control a few nodes in a permissioned blockchain to influence data integrity [6]. Therefore, a security risk management scheme needs to be in place to help permissoned blockchain application providers to estimate the security risks of their applications and adopt measures to control the risks.

In light of this, this study proposes a security risk management framework for permissioned blockchain applications. Based on the implementation stacks of blockchain networks,
the framework classifies security safeguards to protect permissioned blockchain applications into 6 categories. After collecting current information security practices and guidelines, such as ISO/IEC 27001, ISO/IEC 27002, PCI DSS, and CIS Controls, this study maps and practices to the categories and includes controls specific to permissioned blockchain applications. With the framework, application providers can evaluate the security risks of permissioned blockchain applications by determining whether the applications adopt appropriate controls to protect the applications. Moreover, interested parties can delegate auditors to use the framework to ensure permissioned blockchain applications have implemented the controls. Therefore, the framework can improve the trustworthiness of a permissioned blockchain applications. If people can trust the applications that adopted the framework, the paper can hopefully contribute to the adoption of permissioned blockchain technologies.
