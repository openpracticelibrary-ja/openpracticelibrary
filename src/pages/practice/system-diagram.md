---
templateKey: practice-page
title: システムダイアグラム
subtitle: システムを可能な限りハイレベルで記述する方法
date: 2019-12-20T14:52:30.100Z
authors:
  - zedr
area: discovery-loop-why
people: 1+
icon: /images/needs-an-image.png
time: '15 minutes or more, as required to flesh out all the components of the diagram'
difficulty: moderate
participants:
  - Facilitator
  - Product owner
  - Technical and business Architects
  - Developers
tags:
  - ideate
whatIs: >-
  システムダイアグラムは既存のシステムまたはこれから構築する必要のあるシステムをハイレベルで記述するシンプルな方法です。
  チームは短時間に共同でこの図を描くことで、明確で完全な共通の理解を得ることができます。


  システムダイアグラムの構成は以下のとおりです:

  * **目的**

  * **システムの境界**

  * 1つ以上の**インプット**

  * 1つ以上の**アウトプット**

  * 1つ以上の**サブシステム**

  * 一つ以上の**フィードバックループ**


  ![システムダイアグラムの例：切符の自動販売機](/images/system-diagram.png "システムダイアグラムの例：切符の自動販売機 ")


whydo: >-
  システムアーキテクトやソフトウェアエンジニアの主な敵は複雑さです。
  複雑さはシステムの理解を困難にし、修正することを難しくするだけでなく、ときには使うこと自体を難しくさせます。
  システムの複雑さはそれを描いたものやドキュメントに反映されます。
  そのため、複雑なシステムを非技術者向けに説明することは困難ですが、
  このシステムダイアグラムのプラクティスはそのような問題を解決する方法です。
  


  すべてのコンポーネントの特定と説明は、チームがシステムを理解することを手助けするはずです。
  もしその図が複雑過ぎるなら、システム自体を複数に分割する必要があることを示唆しているかもしれません。
howto: >-
  1. チームをホワイトボードの周りに集める


  2. 中心に大きな長方形を描く。これがあなたの**システムの境界**になる


  3. チームとしてシステムの主な目的を一文で定義して長方形の上に貼る

  * もし目的を一文で定義することが難しい場合、システムが複雑すぎるのかもしれません。もしかしたら複数のシステムに分けて、複数の図に分けるべきなのかもしれません。


  4. 外部アクターから受け取る1つ以上の**インプット**を定義する


  4. 外部アクターから受け取る1つ以上の**アウトプット**を定義する


  6. 長方形の内側にある1つ以上の**サブシステム**を定義する。（これらは通常入力を処理するものだが、他のタスクを実行する場合もある）


  7. システムが持つ一つ以上のフィードバックループを定義する（これによりシステムは継続的に自己改善する）


  ## 難易度

  * ファシリテーター: ふつう

  * 参加者: かんたん


  ## ファシリテーションに必要なもの


  ### デジタルの場合:

  * 共同ダイアグラミングツール（例: Miro や Gliphy）


  ### 物理的な場合:

  * 大きなホワイトボード

  * ホワイトボードマーカー
mediaGallery:
  - link: 'https://openpracticelibrary.github.io/opl-media/images/system-diagram.png'
resources: null
mobiusTag: discovery
---
## What is it?

A system diagram is a simple and very high level description of a system that exists or needs to be built. It is a simple diagram that can be drawn collaboratively in little time. It can help a team get a clear, complete, and common understanding of a system.

The components of a system diagram are:

* The **Purpose**
* The **System Boundary**
* One or more **Inputs**
* One or more **Outputs**
* One or more **Subsystems**
* One or more **Feedback Loops**

![A picture of an example system diagram depicting a vending machine for train tickets](/images/system-diagram.png "An example system diagram depicting a vending machine for train tickets")

## Why use it?

The main enemy of system architects and software engineers is complexity. Complexity leads to a poor understanding of a system, which in turn can make the task of modifying or even using the system very challenging. The complexity of a system is reflected in its descriptions and documentation. The task of explaining a system to an audience of non technical people can be daunting. The System Diagram provides a simple method to solve this problem.

Identifying and describing all the components of a System Diagram should enable a team to get a good understanding of the system. If the diagram is too complex, perhaps it needs to be broken down into multiple integrated systems.

## How to use it?

1. Gather the team around a blank whiteboard
2. Begin by drawing a large box in the middle of the canvas; this is your **System Boundary**
3. As a team, define the main **Purpose** of the system in one brief sentence and write it above the box

   * If you struggle to define the Purpose in just one sentence, then the system might be too complex to describe, and you'll need to split it into multiple systems and diagrams
4. Define one or more **Inputs** that the system will receive from external actors
5. Define one or more **Outputs** that the system will provide to external actors
6. Define one or more **Subsystems** that are inside the Boundar; these typically process the inputs, but may perform other tasks as well
7. Define one or more **Feedback loops** that the system has in place to continously improve itself

## Difficulty

* Facilitator: Moderate
* Participants: Easy

## Facilitation Materials Needed

### Digital Variation:

* any collaborative diagramming tool (such as Miro or Gliphy)

### Physical Variation:

* a large whiteboard
* whiteboard markers

## Further Information
