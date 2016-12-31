# AMP_TEST
AMPページを試しに作ってみた

## Demo
<a href="https://underground0930.github.io/AMP_TEST/" target="_blank">demo</a>


###テキストと画像

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
```
 <amp-twitter
    data-tweetid="814838838786830337"
    width="800"
    height="600"
    layout="responsive">
  </amp-twitter>
```

###Youtube
```
<amp-youtube
  data-videoid="ubUswMi_5Sw"
  width="800"
  height="450"
  layout="responsive">
</amp-youtube>
```

###instagram
```
 <amp-instagram
    data-shortcode="5GTCSQtghH"
    width="500"
    height="500"
    layout="responsive">
  </amp-instagram>
```

###google-analytics
```
 <amp-pixel src="https://ssl.google-analytics.com/collect?v=1&amp;tid=UA-56791268-1&amp;t=pageview&amp;cid=$RANDOM&amp;dt=$TITLE&amp;dl=$CANONICAL_URL&amp;z=$RANDOM"></amp-pixel>
```
