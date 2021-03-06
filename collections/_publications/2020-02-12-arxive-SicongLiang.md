---
layout: article
title: Sicong Liang and Yu Zhang. A Simple General Approach to Balance Task Difficulty in Multi-Task Learning. arXiv:2002.04792, 2020.
key: 20200212
tags: ["Multi-Task Learning", "Year-2020", "Technical Reports"]
article_header:
  type: cover
  image:
    src: /assets/images/cover/publications-cover.png
---



<div class="article__content" markdown="1">

---
`Abstract`{:.info}

In multi-task learning, difficulty levels of different tasks are varying. There are many works to handle this situation and we classify them into five categories, including the direct sum approach, the weighted sum approach, the maximum approach, the curriculum learning approach, and the multi-objective optimization approach. Those approaches have their own limitations, for example, using manually designed rules to update task weights, non-smooth objective function, and failing to incorporate other functions than training losses. In this paper, to alleviate those limitations, we propose a Balanced Multi-Task Learning (BMTL) framework. Different from existing studies which rely on task weighting, the BMTL framework proposes to transform the training loss of each task to balance difficulty levels among tasks based on an intuitive idea that tasks with larger training losses will receive more attention during the optimization procedure. We analyze the transformation function and derive necessary conditions. The proposed BMTL framework is very simple and it can be combined with most multi-task learning models. Empirical studies show the state-of-the-art performance of the proposed BMTL framework.

<!--more-->

[\[PDF\]](https://arxiv.org/abs/2002.04792)
{:.info}
[\[Code\]](https://arxiv.org/abs/2002.04792)
{:.info}

</div>
