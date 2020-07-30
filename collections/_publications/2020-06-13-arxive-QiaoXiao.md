---
layout: article
title: Qiao Xiao and Yu Zhang. Distant Transfer Learning via Deep Random Walk. arXiv:2006.07622, 2020.
key: 20200613
tags: ["Transfer Learning", "2020", "Technical Reports"]
article_header:
  type: cover
  image:
    src: /assets/images/cover/publications-cover.png
---



<div class="article__content" markdown="1">

---
`Abstract`{:.info}

Transfer learning, which is to improve the learning performance in the target domain by leveraging useful knowledge from the source domain, often requires that those two domains are very close, which limits its application scope. Recently, distant transfer learning has been studied to transfer knowledge between two distant or even totally unrelated domains via auxiliary domains that are usually unlabeled as a bridge in the spirit of human transitive inference that it is possible to connect two completely unrelated concepts together through gradual knowledge transfer. In this paper, we study distant transfer learning by proposing a DeEp Random Walk basEd distaNt Transfer (DERWENT) method. Different from existing distant transfer learning models that implicitly identify the path of knowledge transfer between the source and target instances through auxiliary instances, the proposed DERWENT model can explicitly learn such paths via the deep random walk technique. Specifically, based on sequences identified by the random walk technique on a data graph where source and target data have no direct edges, the proposed DERWENT model enforces adjacent data points in a squence to be similar, makes the ending data point be represented by other data points in the same sequence, and considers weighted training losses of source data. Empirical studies on several benchmark datasets demonstrate that the proposed DERWENT algorithm yields the state-of-the-art performance. 

<!--more-->

[\[PDF\]](https://arxiv.org/abs/2006.07622)
{:.info}
[\[Code\]](https://arxiv.org/abs/2006.07622)
{:.info}

</div>