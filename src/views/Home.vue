<template>
  <main class="home">
    <main-visual></main-visual>

    <section class="contents">
      <div class="our">
        <div class="our__textArea right">
          <h2 class="our__title">ABOUT US</h2>
          <div class="our__text">
            私たちは、従来の開発の在り方を見直し、
            現代を生きる私たちに最も必要な 過程、プロセスを創造し続けます。
          </div>

          <div class="our__button">
            <router-link to="/about" class="our__link">About</router-link>
          </div>
        </div>
        <div class="our__imgArea imgArea slide">
          <img
            src="../assets/image_02.jpg"
            class="our__img img"
            alt="私たちについて"
          />
        </div>
      </div>

      <section class="servi">
        <div class="servi__textArea appear">
          <h2 class="servi__title">SERVICE</h2>
          <div class="servi__text">
            多くの新技術を活用した 数々のプロジェクトに携わっています
            弊社には新技術を活用した非公開実績も多数あります。
          </div>

          <div class="servi__button">
            <router-link to="/service" class="servi__link">
              Service
            </router-link>
          </div>
        </div>

        <div class="servi__imgArea imgArea slide">
          <img
            src="../assets/image_05.jpg"
            alt="サービス"
            class="servi__img img"
          />
        </div>
      </section>

      <section class="news">
        <div class="news__textArea scale">
          <h2 class="news__title">NEWS</h2>
          <div class="news__text">
            弊社の最新情報を掲載しています。エンジニアチームの技術ブログ「Try
            Blog」も随時更新中です。
          </div>
        </div>

        <div class="news__imgArea imgArea slide">
          <img
            src="../assets/image_01.jpg"
            alt="ニュース"
            class="news__img img"
          />
        </div>
      </section>
    </section>
  </main>
</template>

<script>
import { topThreeStart, topThreeRemove } from '../js/topThree';
import {
  moveAnimation,
  scaleAnimation,
  rightAnimation,
  leftAnimation,
  topAnimation,
  loopFashText,
} from '../js/tween';
import Scroll from '../js/scroll';
import { stopScroll } from '../js/scrollControll';
import MainVisual from '../components/MainVisual';

export default {
  data() {
    return {
      ob: '',
      ob2: '',
      ob3: '',
      ob4: '',
      ob5: '',
    };
  },
  methods: {
    _inviewAnima(el, inview) {
      if (inview) {
        moveAnimation(el);
      }
    },
    _scaleAnima(el, inview) {
      if (inview) {
        scaleAnimation(el);
      }
    },
    _rightAnima(el, inview) {
      if (inview) {
        rightAnimation(el);
      }
    },
    _leftAnima(el, inview) {
      if (inview) {
        leftAnimation(el);
      }
    },
    _slideImgAnima(el, inview) {
      if (inview) {
        el.classList.add('inview');
      }
    },
  },
  components: {
    MainVisual,
  },

  mounted() {
    stopScroll(); // マウススクロール停止
    topAnimation(); // GSAPアニメーション
    topThreeStart(); // THREEアニメーション
    loopFashText(); // ループ文字から変更アニメーション

    this.ob = new Scroll('.appear', this._inviewAnima);
    this.ob2 = new Scroll('.right', this._rightAnima);
    this.ob3 = new Scroll('.left', this._leftAnima);
    this.ob4 = new Scroll('.scale', this._scaleAnima);
    this.ob5 = new Scroll('.slide', this._slideImgAnima);
  },

  destroyed() {
    topThreeRemove(); // THREEアニメーション削除
  },
};
</script>

<style scoped lang="scss">
.our__textArea,
.servi__textArea,
.news__textArea {
  opacity: 0;
}
</style>
