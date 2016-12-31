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
// カルーセル
<amp-carousel class="carouselClass" width="300" height="300" controls>
    <amp-img src="./assets/img/img1.png" width="300" height="300"></amp-img>
    <amp-img src="./assets/img/img2.png" width="300" height="300"></amp-img>
    <amp-img src="./assets/img/img3.png" width="300" height="300"></amp-img>
</amp-carousel>

// スライド
<amp-carousel class="carouselClass" type="slides" width="300" height="300" loop autoplay controls>
    <amp-img src="./assets/img/img1.png" width="300" height="300"></amp-img>
    <amp-img src="./assets/img/img2.png" width="300" height="300"></amp-img>
    <amp-img src="./assets/img/img3.png" width="300" height="300"></amp-img>
</amp-carousel>

// スライド　youtube
<amp-carousel class="carouselClass" type="slides" width="300" height="300" loop autoplay controls>
    <amp-youtube data-videoid="WVuM7SuxCSA" width="400" height="225">
    </amp-youtube>
    <amp-youtube data-videoid="vfSV9I2OeNU" width="400" height="225">
    </amp-youtube>
    <amp-youtube data-videoid="QBnYf6T0EIk" width="400" height="225">
    </amp-youtube>
</amp-carousel>
```

###lightbox

```
<button on="tap:box1">開く1</button>
<amp-lightbox id="box1" layout="nodisplay">
    <p>ライトボックスライトボックスライトボックスライトボックスライトボックスライトボックスライトボックスライトボックス</p>
    <p>ライトボックスライトボックスライトボックスライトボックスライトボックスライトボックスライトボックスライトボックス</p>
    <p>ライトボックスライトボックスライトボックスライトボックスライトボックスライトボックスライトボックスライトボックス</p>
    <p>ライトボックスライトボックスライトボックスライトボックスライトボックスライトボックスライトボックスライトボックス</p>
    <p>ライトボックスライトボックスライトボックスライトボックスライトボックスライトボックスライトボックスライトボックス</p>
    <p>
        <button on="tap:box1.close" role="button" tabindex="0">閉じる1</button>
    </p>
</amp-lightbox>
<button on="tap:box2">開く2</button>
<amp-lightbox id="box2" layout="nodisplay">
    <amp-img src="./assets/img/img1.png" width="300" height="200" layout="fill" on="tap:box2.close" role="button" tabindex="1">
    </amp-img>
</amp-lightbox>
```
