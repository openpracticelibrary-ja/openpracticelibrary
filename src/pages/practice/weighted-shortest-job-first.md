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
  Weighted Shortest Job First (WSJF) はバックログに蓄積されたワークアイテムから最初にデリバリすべきワークアイテムを見つけるために、コストメリットやジョブサイズを使って評価し優先順位を定義するための方法です。

  「コストメリット」はこの場合、何もしなかった場合に発生するコストと似たような意味を持ちます。もし仮に不具合の修正をしなかった場合に重大なトラブルが見込まれる場合、修正のためのコストとトラブルが発生した場合のコストが時と共に増加します。売上が見込まれる新しい機能の実装を後回しにした場合、この機能をデリバリしないことのコストは時と共に増加します。これは機会費用あるいは「遅延コスト」と呼びます。


  遅延コスト (Cost of Delay, CoD) は次のように計算します:


  **遅延コスト = (ビジネス価値, BV + 緊急性, TC + リスク低減 または 機会創出, RR/OE)**


  遅延コストを算出したら、遅延コストをジョブサイズで割ることでWSJFスコアを算出します。結果として最もコストメリットが高く、かつ小さなジョブが優先順位が高くなるようにスコアが算出されます。


  **WSJF = 遅延コスト ÷ ジョブサイズ**


  このプラクティスは Don Reinertson が著書 Principles of Product Development Flow の中で確立したもので、それまで使われていた Shortest Job First を進化させたものです。Scaled Agile Framework (SAFe) で取り上げられ、原則の中に盛り込まれました。

whyDo: >-
  ファシリテーターはよくチームリーダーから悩ましい問題に対する新しいアイデアを探索する支援を依頼されます。参加者が自らの視点を取り除くことは難しく、（現実の、あるいは想像上の）制約にとらわれて新しいアイデアを思い浮かべることができません。


howTo: >-
  While there are many variations for this activity, my approach described below
  has worked the best for me.
  さまざまなバリエーションがありますが、私のアプローチは以下のようになります。


  ***始める前に…***
mediaGallery: []
difficulty: moderate
participants: []
---
