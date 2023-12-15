---
templateKey: practice-page
authors:
  - syvanen
  - Zenigata
  - itblaked
howTo: >-
  これらのテストは通常、継続的インテグレーション（CI）ツールによって実行される。
  例：[ Jenkins ](https://jenkins.io/)、[TravisCI](https://www.travis-ci.com/)。


  アプリケーションをビルドした直後や、コードがソースコントロールにプッシュまたはマージされた際に簡単かつ迅速にテストを実行することができる。


  これらのテストの多くは並行して実行することができ、複数のテストを実行するためにかかる全体の時間を短縮できる。
resources:
  - link: https://jenkins.io/
    linkType: web
    description: Jenkins
  - link: https://en.wikipedia.org/wiki/Test_automation
    linkType: web
    description: Wikipedia Article - Test automation
  - link: https://www.travis-ci.com/
    linkType: web
    description: TravisCI
participants:
  - Team members
area: foundation-technical
title: テスト自動化
subtitle: フィードバックのループを短縮し、ソースコードの品質を高める。
date: 2021-04-13T00:30:23.187Z
tags:
  - methods
mobiusTag: foundation
icon: /images/final_test-automation.png
whatIs: >-
  テスト自動化により、チームはソフトウェア開発における遅くて手動のテストサイクルを排除することができる。
  テスト自動化には、以下のようなものが含まれる：

  * 静的コード解析

  * Lint処理

  * ユニットテスト

  * E2E テスト

  * セキュリティテスト
whyDo: |-
  * コード品質の向上
  * 迅速なフィードバック
  * テスト手法の標準化
mediaGallery:
  - link: https://github.com/openpracticelibrary/opl-media/blob/master/images/test%20automation.jpg?raw=true
people: 1+
difficulty: moderate
---
## これは何？

テスト自動化により、チームはソフトウェア開発における遅くて手動のテストサイクルを排除することができる。テスト自動化には、以下のようなものが含まれる：

- 静的コード解析
- Lint処理
- ユニットテスト
- E2E テスト
- セキュリティテスト

これらのテストは通常、ビルド自動化ツールによって実行される。例えば、[Jenkins](https://jenkins.io/) などがありる。アプリケーションのビルド（コンパイル）直後に実行すべき簡単で迅速なテストには、ユニットテストや静的コード解析などがある。また、これらのテストの多くは並行して実行することができ、テストの実行にかかる全体の時間を短縮できる。

## なぜ使うの？

- コードの品質を向上させる。
- フィードバックループを短縮する。
- 以前動作していたコードに対して、変更が影響を与えたかどうかを示す。

## どうやって使うの？

## さらに他のリソース:

- [Wikipedia Article - Test automation](https://en.wikipedia.org/wiki/Test_automation)
