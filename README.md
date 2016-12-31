# AMP_TEST

##概要
AMPページを試しに作ってみました。<br>
本当は通常ページと対にして作るのが良いのですが、今回は割愛。<br>
このデモはすべての要素ではなく一部のみ作成してあります。<br>
<br>
googleのプロジェクトAccelerated Mobile Pages （AMP）で<br>
モバイルサイトを爆速に作れる、というシロモノ。<br>
<br>
制約がかなり多く、使えるタグも厳しく制限されています。<br>
まず、javascriptが使えません。なのでgoogleが用意したライブラリを駆使していくしかありません。
<br>
cssの外部読み込みも禁止です。htmlにベタ書きするしかありません。<br>
<br>
imgタグ、videoタグ、iframeタグ…その他、多くのタグが使用禁止。その他多くの制約もあり。<br>
<br>
例えば<a href="https://hyper-text.org/archives/2016/01/get_started_accelerated_mobile_pages.shtml" target="_blank">WWW WATCHさんの記事</a>によると<br>
<br>
>（Click-To-Play iframe を除いて） amp-iframe は ViewPort の上端から一定距離以上、下に離れた場所にしか表示できない。一定距離って言うのは、600px、もしくは ViewPort の縦サイズの 75% （例えば ViewPort の縦サイズが 667px だった場合、約 500px） に該当する数値のいずれか小さい方。<br>
>なので、ViewPort の縦サイズが 667px の iPhone 6 の場合、amp-iframe 要素の出現位置が、Web ページの最上部から 500px 以上離れていないと駄目ってことになります。

<br>
これはかなり厳しいですね。おそらくギミックがふんだんに使われているサイトには向かないでしょう。
<br>
細かい仕様などは<a href="https://syncer.jp/amp" target="_blank">syncerさん</a>によくまとまってます。<br>
これらのタグは使わずにgoogleから与えられたカスタムタグを使用してサイトを作っていくことになります。
<br>
<br>

## Demo
※スマフォでみてください。<br>
<a href="https://underground0930.github.io/AMP_TEST/" target="_blank">demo</a>

## Usage

###共通
widthとheightは必ず指定しなくてはいけない。<br>
layout="responsive"でアスペクト比を保ったままレスポンシブ対応を勝手にしてくれる。



###準備

```
<!doctype html><!-- 決まり文句 -->
<html amp lang="ja"><!-- 決まり文句 -->
<head><!-- 決まり文句 -->
    <meta charset="utf-8"><!-- 決まり文句 -->
    <script async src="https://cdn.ampproject.org/v0.js"></script><!-- これは必須で読み込む -->

    <!-- これは要素によって必要なものを都度読み込む -->
    <script async custom-element="amp-carousel" src="https://cdn.ampproject.org/v0/amp-carousel-0.1.js"></script>
    <script async custom-element="amp-facebook" src="https://cdn.ampproject.org/v0/amp-facebook-0.1.js"></script>
    <script async custom-element="amp-twitter" src="https://cdn.ampproject.org/v0/amp-twitter-0.1.js"></script>
    <script async custom-element="amp-youtube" src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js"></script>
    <script async custom-element="amp-instagram" src="https://cdn.ampproject.org/v0/amp-instagram-0.1.js"></script>
    <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>

    <title>AMP DEMO</title>

    <!-- link 要素は rel="canonical" のみ。通常ページを指定、ampページしかなければ自身のURL -->
    <link rel="canonical" href="https://underground0930.github.io/AMP_TEST/" />

    <!-- 決まり文句 -->
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">

    <!-- JSON-LD で構造化データを記述 -->
    <script type="application/ld+json">
    {
        "@context": "http://schema.org",
        "@type": "Review",
        "headline": "AMPのデモです",
        "datePublished": "2016-12-31T00:00:00Z",
        "image": [
            "./assets/img/logo.png"
        ]
    }
    </script>

    <!-- これは決まり文句 -->
    <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>

    <!-- ここにページで使うCSSを記述　インラインで書いていいのは１つだけ 外部読み込み禁止 -->
    <style amp-custom>body{height:100%}#main{padding:30px 20px 0;margin:0 auto;max-width:600px}.text{margin:0 0 30px}.mainTitle{text-align:center;font-size:20px;margin:0 0 30px}.sectionTitle{border-left:4px solid #c00;border-bottom:1px solid #eee;padding:0 0 5px 10px;font-size:14px}.videoClass{margin:0 auto 30px;display:block}.img{text-align:center;margin:0 0 30px}.carouselClass{display:block;margin:0 auto 30px}
</style>
</head>
<body>
</body>
</html>
```




###テキストと画像
画像はpタグで囲う。

```
<p>グイグイ来ております。</p>

<p>
    <amp-img
     src="./assets/img/img1.png"
     width="200"
     height="200"
     alt="Sample Photo"
     layout="responsive">
    </amp-img>
</p>
```

###動画
複数の形式を設定できる。動画を呼び出すプロトコルはhttpsじゃないとダメ。

```
<p>
    <amp-video
      controls
      poster=""
      width="800"
      height="450"
      layout="responsive">
        <source type="video/mp4" src="./assets/movie/video.mp4">
        <source type="video/webm" src="./assets/movie/video.webm">
    </amp-video>
</p>
```

###カルーセル
オプションでカルーセルか、スライドか選べる。youtubeとかも挿入できる。
左右のボタンはCSSでカスタマイズ可能。

```
<!-- カルーセル -->
<amp-carousel
    class="carouselClass"
    width="300"
    height="300"
    controls>
    <amp-img
      src="./assets/img/img1.png"
      width="300"
      height="300">
    </amp-img>
    <amp-img
      src="./assets/img/img2.png"
      width="300"
      height="300">
    </amp-img>
    <amp-img
      src="./assets/img/img3.png"
      width="300"
      height="300">
    </amp-img>
</amp-carousel>

<!-- スライド -->
<amp-carousel
    class="carouselClass"
    type="slides"
    width="300"
    height="300"
    loop
    autoplay
    controls>
    <amp-img
      src="./assets/img/img1.png"
      width="300"
      height="300">
    </amp-img>
    <amp-img
      src="./assets/img/img2.png"
      width="300"
      height="300">
    </amp-img>
    <amp-img
      src="./assets/img/img3.png"
      width="300"
      height="300">
    </amp-img>
</amp-carousel>

<!-- スライド　youtube -->
<amp-carousel
    class="carouselClass"
    type="slides"
    width="300"
    height="300"
    loop
    autoplay
    controls>
      <amp-youtube
      data-videoid="WVuM7SuxCSA"
      width="400"
      height="225">
      </amp-youtube>
      <amp-youtube
      data-videoid="vfSV9I2OeNU"
      width="400"
      height="225">
      </amp-youtube>
      <amp-youtube
      data-videoid="QBnYf6T0EIk"
      width="400"
      height="225">
    </amp-youtube>
</amp-carousel>
```

###lightbox
on: で指定したidのイベントを登録できる。
```
<!-- lightbox　テキスト -->
<button on="tap:box1">開く1</button>
<amp-lightbox id="box1" layout="nodisplay">
    <p>ライトボックスライトボックスライト</p>
    <p>ライトボックスライトボックスライト</p>
    <p>
        <button
          on="tap:box1.close"
          role="button"
          tabindex>閉じる1</button>
    </p>
</amp-lightbox>

<!-- lightbox　画像 -->
<button on="tap:box2">開く2</button>
<amp-lightbox id="box2" layout="nodisplay">
    <amp-img
      src="./assets/img/img1.png"
      width="300"
      height="200"
      layout="fill"
      on="tap:box2.close"
      role="button"
      tabindex>
    </amp-img>
</amp-lightbox>
```


###facebook
urlを指定する。動画もできる。
```
<amp-facebook
  width="400"
  height="300"
  layout="responsive"
  data-href="https://www.facebook.com/spotlightmedia.jp/posts/1091222427655775">
</amp-facebook>
<amp-facebook
  width="400"
  height="300"
  layout="responsive"
  data-embed-as="video"
  data-href="https://www.facebook.com/AmazonJP/videos/1312481438824480/">
</amp-facebook>
```

###Twitter
idを指定する。
```
 <amp-twitter
    data-tweetid="814838838786830337"
    width="800"
    height="600"
    layout="responsive">
  </amp-twitter>
```

###Youtube
idを指定する。
```
<amp-youtube
  data-videoid="ubUswMi_5Sw"
  width="800"
  height="450"
  layout="responsive">
</amp-youtube>
```

###instagram
idを指定する。
```
 <amp-instagram
    data-shortcode="5GTCSQtghH"
    width="500"
    height="500"
    layout="responsive">
  </amp-instagram>
```

###google-analytics
bodyタグ内のどこかにはっつける。1pxの画像になってそれがトラッキングしてくれる（jsが使えないため）
```
 <amp-pixel src="https://ssl.google-analytics.com/collect?v=1&amp;tid=UA-000000000-1&amp;t=pageview&amp;cid=$RANDOM&amp;dt=$TITLE&amp;dl=$CANONICAL_URL&amp;z=$RANDOM"></amp-pixel>
```

## 検証
```
http://hoge.jp/aaa/amp.html#development=1
```
のようにパラメータをつけると、コンソールにエラーや注意が表示される


## reference website
- <a href="https://www.ampproject.org/docs/get_started/create" target="_blank">Create Your First AMP Page</a>
- <a href="http://kaiinui.hatenablog.com/entry/2015/10/10/211636" target="_blank">Google の AMP に対応した HTML を書く</a>
- <a href="https://webkikaku.co.jp/blog/seo/accelerated-mobile-pages/" target="_blank">いよいよ導入されるAMP（Accelerated Mobile Pages）の基礎知識から対応方法まで！まとめ</a>
- <a href="https://syncer.jp/amp" target="_blank">AMPの対応方法まとめ (作成途中)</a>
- <a href="https://hyper-text.org/archives/2016/01/get_started_accelerated_mobile_pages.shtml" target="_blank">AMP （Accelerated Mobile Pages） HTML を出力するようにしてみたけど面倒くさかった話</a>


