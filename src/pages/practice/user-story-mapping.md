---
templateKey: practice-page
title: ユーザーストーリーマッピング、バリュースライシング
subtitle: ユーザーストーリー群をグループ分割し、軽量なリリース計画を作成する
date: 2017-04-20T05:00:00.000Z
authors:
  - mtakane
  - rdebeasi
tags:
  - insight
mobiusTag: options
icon: /images/final_value-slicing.png
whatIs: >-
  ユーザーストーリーマッピングは、2008年にJeff Pattonによって広められた、伝統的なアジャイルのバックログの進化形です。
  これは標準的なアジャイルの、おおまかなリリース計画を作成するのに効果的なプラクティスです。

  ユーザーストーリーマッピングでは、ユーザーの行動を時系列で横軸に並べ、各行動に対してプロダクトが提供する価値（ユーザーストーリー）を縦に並べていきます。
  このとき、ストーリーは価値の高いものを上に配置します。

  バリュースライシングでは、上記でマップしたストーリー群をスプリント毎に実装可能なグループに分けていきます。
  ストーリーは価値の高い順に並んでいるため、このグルーピングは上記マップに「横線」を描くことで行います。
  （横線を描くことがマップをスライスするように見える。実施例の２つめの動画のサムネイルを参照。）
  
  ユーザーストーリーマッピング＆バリュースライシングを実践すると、


  * チームがスプリント内で実装できると考えるバックログアイテム（と、次のスプリントに送るべきバックログアイテム）が識別され、定義されます。


  * ストーリー（顧客への提供価値）の一覧を3つ程度のイテレーションに「スライス」します。スライスされたストーリー群は階的なリリースの計画となります。


  * 最初のイテレーション計画は十分に詳細され、作業が開始できる状態になります。
whyDo: >-
  * 作業工数の見積は重要なステップです（見積が好きという人はいませんが）。ユーザーストーリーマッピングは、プランニングポーカーやTシャツサイジングのような見積手法よりもマシな見積手法です。


  * プロダクトが提供する価値は、ユーザーの行動の初めから終わりの流れ沿って発案されていることが多いです。しかし伝統的なバックログはユーザーストーリーを提供価値の順に並べ替えるため、ユーザーの行動の流れとストーリーの関係性の情報が消えてしまいます。ユーザーストーリーマッピングは、複数のイテレーション（つまり、アジャイルのリリース計画）を計画するための軽量なメカニズムでユーザーの行動の流れとストーリーの紐付きを表現しています。


  * ユーザーストーリーマッピングは、バックログの項目をビジネスプロセスの文脈で提示するため、Scrumプロジェクトの一般的な落とし穴である「全体像を見失う」という問題が発生しません。
howTo: >-
  ### 参加者


  * ファシリテーター（チームがユーザーストーリーマッピング＆バリュースライシングに不慣れな場合）

  * Product Owner

  * UXデザイナー

  * ビジネスアナリスト

  * 開発者

  * テスター


  ### 推奨の実施時間


  * ４時間以内（休憩除く）

  * 90分程度のセッションに区切る

  * セッション毎に日を分けることが可能


  ### 難易度


  * ファシリテーター: Easy

  * 参加者: Easy


  ### ファシリテーションに必要なアイテム


  * 模造紙

  * [4x6サイズの付箋](https://www.amazon.com/Post-Sticky-Janeiro-Collection-4621-SSAU/dp/B001UXFT70)のような、横長の付箋３色。

  * [3x3サイズの付箋](https://www.amazon.com/dp/B01N1UE0JY?psc=1)のような小さな正方形の付箋２色。

  * マーカーペン


  ### 実施フェーズ


  * Open Practice LibraryのOptionのフェーズで行います。
resources:
  - link: http://jpattonassociates.com/the-new-backlog/
    linkType: web
    description: User Story Mapping by Jeff Patton in 2008
  - link: http://www.scaledagileframework.com/pi-planning/
    linkType: web
    description: Program Increment Planning by SAFe
  - link: https://methods.18f.gov/decide/site-mapping/
    linkType: web
    description: Site Mapping by 18f
  - link: https://medium.com/digital-experience-design/how-to-apply-a-design-thinking-hcd-ux-or-any-creative-process-from-scratch-b8786efbf812
    linkType: web
    description: Double Diamond design model
  - link: http://jpattonassociates.com/user-story-mapping/
    linkType: web
    description: Jeff Patton's Index of Materials
  - link: https://openpracticelibrary.com/blog/facilitation-tips-for-remote-sessions/
    linkType: web
    description: Remote Facilitation Tips
area: discovery-loop-outcomes
mediaGallery:
  - link: https://youtu.be/N8fxzeZh4Kc
  - link: https://youtu.be/VaN9rCQrdko
perspectives:
  - facilitation-tips-for-remote-sessions
---
## What is it?

User Story Mapping is an evolution of the traditional Agile backlog, made popular by Jeff Patton in 2008[<sup>1</sup>](#footnote-1). It's an effective practice for creating lightweight release plans that can drive standard Agile delivery practices. At the end of user story mapping, you should have:

- A backlog of scope items (captured as stories or simply feature titles) the team believes can be delivered in the planning window. This means some items will be placed out of scope
- The backlog "sliced" into ~3 iterations, such that it forms the outline of plan
- Enough detail in the first iteration of the plan to get started with the work

<iframe width="560" height="315" src="https://www.youtube.com/embed/VaN9rCQrdko" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Why use User Story Mapping?

- No one likes estimating work effort, but it's an important step in many environments. User Story Mapping presents an approach to estimation that many teams find much more tolerable than practices like planning poker or t-shirt sizing
- Many projects have a natural progression of work from beginning, middle to end. This progression is often lost in a traditional flat backlog. User Story Mapping captures this information with a lightweight mechanism to plan out more than one iteration (i.e. an Agile release plan)
- User Story Mapping presents backlog items in the context of the overall business process so you don't lose sight of "the big picture", a common pitfall in Scrum projects

## Related Practices

- User Story Mapping is a great way to create an Agile delivery plan for a business process designed with [Event Storming](/practice/event-storming/)
- Program Increment Planning[<sup>2</sup>](#footnote-2) in Scaled Agile Framework leverages many of the ideas behind User Story Mapping
- Site Mapping[<sup>3</sup>](#footnote-3) should provide the backbone of the User Story Map in UI driven projects

<iframe width="560" height="315" src="https://www.youtube.com/embed/N8fxzeZh4Kc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Who do you need?

- Facilitator (if the team is new to the approach)
- Product Owner
- User Experience Design
- Analysts
- Developers
- Testers

## Suggested Time

- ~4 Hours not including breaks
- Facilitate in small sessions @ around ~90 minutes each
- Session can be done on different days

## Difficulty

- Facilitator: Easy
- Participants: Easy

## Facilitation Materials Needed

- Drawing paper roll[<sup>4</sup>](#footnote-4). Stickies tend to fall off walls otherwise.
- 3 different colors of wide format sticky notes like the 4x6 sticky notes[<sup>5</sup>](#footnote-5)
- 2 different colors of small square sticky notes like the 3x3 sticky notes[<sup>6</sup>](#footnote-6)
- Markers

**Want to run this practice remotely? Here's some help to jump start your session 💻🙏**

<div style="width: 600px;"> <h1 style="position: relative;vertical-align: middle;display: inline-block; font-size: 24px; line-height:28px; color: #393939;margin-bottom: 14px; font-weight: 300;font-family: Proxima Nova, sans-serif;"> Value Slicing Template <span style="font-size: 16px; color: #393939; font-weight: 300;"> <br> by MURAL </span> </span> </h1> <div style="position: relative;padding-bottom: 56.25%;height: 0; overflow: hidden; max-width: 800px; min-width: 320px; border-width: 1px; border-style: solid; border-color: #d8d8d8;"> <div style="position: absolute;top: 0;left: 0;z-index: 10; width: 100%; height: 100%;background: url(https://app.mural.co/template/f4b4b36b-5dee-4843-b3ec-bf99bf050e6c/c2d27d32-e51f-447c-a672-dc7228767a31) no-repeat center center; background-size: cover;"> <div style="position: absolute;top: 0;left: 0;z-index: 20;width: 100%; height: 100%;background-color: white;-webkit-filter: opacity(.4);"> </div> <a href="https://app.mural.co/template/f4b4b36b-5dee-4843-b3ec-bf99bf050e6c/c2d27d32-e51f-447c-a672-dc7228767a31" target="_blank" style="transform: translate(-50%, -50%);top: 50%;left: 50%; position: absolute; z-index: 30; border: none; background: transparent;"> <img src="https://app.mural.co/static/images/button-template-large.png" alt="GET STARTED FROM TEMPLATE" width="347" height="50" style="width: 347px !important; height: 50px !important"> </a> </div> </div> <p style="margin-top: 7px;margin-bottom: 60px;line-height: 18px; font-size: 14px;font-family: Proxima Nova, sans-serif;font-weight: 400; color: #888888;"> Open to create a mural from this template in your workspace. <span style="color: #393939;">

## External Resources

1. <a name="footnote-1"></a>[User Story Mapping by Jeff Patton in 2008](http://jpattonassociates.com/the-new-backlog/)
2. <a name="footnote-2"></a>[Program Increment Planning](http://www.scaledagileframework.com/pi-planning/) by SAFe
3. <a name="footnote-3"></a>[Site Mapping](https://methods.18f.gov/decide/site-mapping/) by 18f
4. <a name="footnote-4"></a>[Drawing Paper example](http://www.ikea.com/us/en/catalog/products/80324072/)
5. <a name="footnote-5"></a>[4x6 sticky notes example](https://www.amazon.com/Post-Sticky-Janeiro-Collection-4621-SSAU/dp/B001UXFT70)
6. <a name="footnote-6"></a>[3x3 sticky notes example](https://www.amazon.com/dp/B01N1UE0JY?psc=1)
7. <a name="footnote-7"></a>[Double Diamond design model](https://medium.com/digital-experience-design/how-to-apply-a-design-thinking-hcd-ux-or-any-creative-process-from-scratch-b8786efbf812)
8. Jeff Patton's [index of materials](http://jpattonassociates.com/user-story-mapping/)
