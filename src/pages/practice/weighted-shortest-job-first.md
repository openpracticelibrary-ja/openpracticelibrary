---
templateKey: practice-page
title: Weighted Shortest Job First (WSJF)
subtitle: バックログの優先順位を定量的に評価し、合意するためのプラクティス
date: 2021-04-13T08:58:44.242Z
authors:
  - nick-woods
tags:
  - insight
mobiusTag: options
icon: /images/wsjf-template.jpg
whatIs: >-

aaaa


whyDo: >-
  この方法は未完成の大きな作業項目を細部まで掘り下げ、客観的な優先順位を確立し」、ステークホルダーやその他の関係者に共有することができる優れた方法です。

  チーム全体でこのプラクティスを実施する場合、より多くの観点を用いてプライオリティや順序性を確立することができます。結果として


  In running this exercise with the whole team, a more rounded view of the priority and sequencing is established; 特定の項目と他の項目との間で作業の緊急性をチームが把握できるようになります。
howTo: >-
  遅延コストの各要素のスコアを1個ずつつけます。スコアにはフィボナッチ数列を使うことが推奨されています。フィボナッチ数列を使うことで大きな数値はそれだけ不確実な要素を含んでいることが分かります。スコアをつける際には一番小さなアイテムにまずはスコアをつけ、相対見積を用いることで他のアイテムのスコアをつけます。


最初はビジネス価値 (BV) です。リストに並んでいるワークアイテムのうちビジネス価値が最小と思われるものに1のスコアをつけます。次に小さなビジネス価値と思われるワークアイテムを見つけ、1と同等程度か、あるいはそれよりも大きいのか、相対的にスコアをつけます。全てのワークアイテムのスコアをつけたら緊急性のスコア、リスト低減あるいは機会創出のスコアと続けます。全ての項目にスコアをつけたら、結果を合計して遅延コストを算出します。 


  注意： 各アイテムのスコアを正確に定義しようと時間を使いすぎないように気をつけます。フィボナッチ数列を用いるのは詳細の議論に集中しすぎることを避けるためです。


  次はジョブサイズに移ります。対象のワークアイテムを実際に開発するチームが、同じようにリストの中で一番小さなジョブサイズのものを見つけて1をつけます。1のアイテムと他のアイテムを比較することでリストの中の全てのアイテムのスコアを定義します。


  遅延コストとジョブサイズが定義できたら、WSJFスコアを算出します。スコアが高いものがプライオリティが高いものと考えます。


  注意： ジョブサイズが結果として算出された優先順位に対して大きな影響を持つことに気がつくと思います。スコアリングの際にバックログを見直すことをお勧めします。あるアイテムを小さく分割した時に、分割結果の要素のうち特定の要素に分割前の価値のほとんどが集約されていることがあります。

mediaGallery:
  - link: https://github.com/openpracticelibrary/opl-media/blob/master/Alternative%20Worlds.png?raw=true
  - link: https://github.com/openpracticelibrary/opl-media/blob/master/Alternative%20Worlds%202.png?raw=true
resources:
  - link: www.luma-institute.com
    linkType: web
    description: Luma Institute
people: 1-10+
time: 15-60 min
difficulty: easy
participants:
  - Product Team
---
