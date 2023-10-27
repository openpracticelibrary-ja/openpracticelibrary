---
templateKey: practice-page
title: ピンポン・プログラミング
subtitle: ペア・プログラミングとTDDを融合する場所
date: 2020-03-30T21:31:10.661Z
authors:
  - mabulgu
area: foundation-culture-and-collaboration
perspectives: []
icon: /images/ping-pong-programming-tile.png
people: 2+
difficulty: null
participants: []
tags:
  - culture
whatIs: >-
  ピンポン・プログラミング（別名：ピンポン・ペア・プログラミング）とは、TDD（[テスト駆動開発](https://openpracticelibrary-ja.netlify.app/practice/test-driven-development/)）をプラクティスに入れながら行う[ペア・プログラミング](https://openpracticelibrary-ja.netlify.app/practice/pair-programming/)の一種です。つまり、ペアプログラミングとTDDの組み合わせです。

  ![](https://openpracticelibrary.github.io/opl-media/images/ping-pong-programming.png)
whyDo: >-
  ピンポン・ペア・プログラミングには、[ペア・プログラミング](https://openpracticelibrary-ja.netlify.app/practice/pair-programming/)自体の利点に加え、次のような利点があります：


  * [テスト駆動開発](http://butunclebob.com/ArticleS.UncleBob.TheThreeRulesOfTdd) :)


  * ペアを交代する際に問題となる、開発の流れのリズムをつかみやすい。


  * 管理する必要のある問題領域はずっと小さくなり、そのため、開発者は他のスタイルよりも素早く流れに同調することができる。


  * 各開発者が交代でテストを書き、それをパスさせるので、一方の開発者がもう一方の開発者よりも詳しいといった、ペアのミスマッチの問題を避けることができる。


  *  この仕事はゲーム化されているので、開発者にとっては別のモチベーションになる。
howTo: >-
  例えば、開発者Aと開発者Bの2人がいるとしましょう：


  * Aが失敗するテストを書きます。


  * Bは、テストがパスするのに十分なコードだけを書いてテストをパスさせます。


  * Bは次のテストを書く。


  * Aは、そのテストがパスするのに十分なコードだけを書きます。


  * AとBの両方が、現在取り組んでいるユニットのテストがもうないことに同意するまで続けます。


  * どちらの開発者がコードをリファクタリングしても、すべてのテストは「パス」のままです。


  このリズムで作業するための最適なセットアップは、2人の開発者が並んで座り、1台のコンピューターに2つの入力デバイスを使うことです： つまり、2つのモニター、2つのキーボード、2つのマウスを準備します。ただし、[Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)などのツールを使ってリモート環境で作業する場合は、開発者が2人1組になることもあります。


  ピンポン・プログラミングは、[モブ・プログラミング](https://openpracticelibrary-ja.netlify.app/practice/mob-programming/)の形式に沿ったグループで行うこともできます。その場合、ピンポン・モブ・プログラミングと呼ぶことができます：


  * ある開発者が失敗する単体テストを書きます。


  * 別の開発者（たぶんその隣の開発者）は、テストがパスするようにできるだけコードを書きます。


  * 別の開発者が（たぶんその隣の開発者が）失敗するユニットテストを書きます。そのあとは繰り返し続く...。


  * どんな開発者でも、必要なときにどんなコードでもリファクタリングできるが、常にテストがパスするようにします。


  * 「ドライバー」が助けを求めると、グループは他の邪魔をすることなく丁寧に手助けをします。

mediaGallery:
  - link: >-
      https://openpracticelibrary.github.io/opl-media/images/ping-pong-programming.png
  - link: >-
      https://github.com/openpracticelibrary/opl-media/blob/master/images/Ping%20Pong%20Programming.png?raw=true
resources:
  - link: 'http://wiki.c2.com/?PairProgrammingPingPongPattern'
    linkType: web
    description: 'http://wiki.c2.com/?PairProgrammingPingPongPattern'
  - link: 'https://dzone.com/articles/ping-pong-pair-programming'
    linkType: web
    description: 'https://dzone.com/articles/ping-pong-pair-programming'
  - link: >-
      https://www.agileconnection.com/article/ping-pong-programming-enhance-your-tdd-and-pair-programming-practices
    linkType: web
    description: >-
      https://www.agileconnection.com/article/ping-pong-programming-enhance-your-tdd-and-pair-programming-practices
  - link: 'https://anthonysciamanna.com/2015/04/18/ping-pong-pair-programming.html'
    linkType: web
    description: 'https://anthonysciamanna.com/2015/04/18/ping-pong-pair-programming.html'
  - link: 'https://openpracticelibrary-ja.netlify.app/practice/pair-programming/'
    linkType: web
    description: Pair Programming
  - link: 'https://openpracticelibrary-ja.netlify.app/practice/mob-programming/'
    linkType: web
    description: Mob Programming
  - link: 'http://butunclebob.com/ArticleS.UncleBob.TheThreeRulesOfTdd'
    linkType: web
    description: TDD
  - link: >-
      https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare
    linkType: web
    description: Live Share
mobiusTag: foundation
---
## What is it?

Ping-Pong Programming (aka. Ping-Pong Pair Programming) is a kind of [Pair Programming](https://openpracticelibrary-ja.netlify.app/practice/pair-programming/) that TDD ([Test Driven Development](https://openpracticelibrary-ja.netlify.app/practice/test-driven-development/)) is included while in practice. In other words, it is a combination of Pair Programming and TDD.

![](/images/ping-pong-programming.png)

## Why use it?

In addition to the [Pair Programming](https://openpracticelibrary-ja.netlify.app/practice/pair-programming/)'s own benefits, Ping-Pong Pair Programming has the following advantages:

- [TDD](http://butunclebob.com/ArticleS.UncleBob.TheThreeRulesOfTdd) :)
- Easier to find the rhythm of the development flow which can be a problem when it comes to switching pairs.
- A much smaller problem space needs to be managed, so this enables developers to sync with the flow quicker than other styles.
- Avoids mismatched pair issues -like one developer knows more than the other- as each developer takes turns writing tests and making them pass.
- The work is gamified, so it puts another kind of motivation for developers.

## How to do it?

Let's say there are two developers, developer A and developer B. The development flow goes like the following:

- A writes a failing test.
- B makes the test pass writing only enough code to make the test pass.
- B writes the next test.
- A writes only enough code to make that test pass.
- Continue until A and B both agree that there are no more tests for the unit they are currently working on.
- Either developer can refactor the code only all tests stays "passing".

The optimal setup to work in this rhythm is two developers sitting side by side, a single computer with two input devices: That’s two monitors, two keyboards, and two mice. However, developers may do pairs remotely if they work in a remote environment via tools like [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare) etc.

Ping-Pong programming can also be done in a group which is a form of [Mob Programming](https://openpracticelibrary-ja.netlify.app/practice/mob-programming/). So it can be called Ping-Pong Mob Programming:

- A developer writes a failing unit test.
- Another developer -maybe the one next to her/him- writes as little code as possible to make the test pass.
- Another developer -maybe the one next to her/him- writes a failing unit test. And it continues like this...
- Any developer can refactor any code when needed but only when the tests pass.
- When the driver asks for help, the rest of the group politely helps out without any other interruption.

## Further Information

<http://wiki.c2.com/?PairProgrammingPingPongPattern>

<https://dzone.com/articles/ping-pong-pair-programming>

<https://anthonysciamanna.com/2015/04/18/ping-pong-pair-programming.html>

<https://www.agileconnection.com/article/ping-pong-programming-enhance-your-tdd-and-pair-programming-practices>
