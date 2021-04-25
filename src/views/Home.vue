<template>
  <div class="home">
    <div class="mv">
      <div class="mv__canvas">
        <canvas class="mv__mainCanvas"></canvas>
      </div>
      <h2 class="mv__text">
        先端技術で世界をリードする会社<br />Try Technology
      </h2>
    </div>

    <div class="contents">
      <div class="our">
        <div class="our__textArea right">
          <div class="our__title">ABOUT US</div>
          <div class="our__text">
            私たちは、従来の開発の在り方を見直し、
            現代を生きる私たちに最も必要な 過程、プロセスを創造し続けます。
          </div>

          <div class="our__button">
            <router-link to="/about" class="our__link"> About </router-link>
          </div>
        </div>
        <div class="our__imgArea left">
          <img
            src="../assets/image_02.jpg"
            class="our__img"
            alt="私たちについて"
          />
        </div>
      </div>
      <div class="service">
        <div class="service__textArea appear">
          <div class="service__title">SERVICE</div>
          <div class="service__text">
            多くの新技術を活用した 数々のプロジェクトに携わっています
            弊社には新技術を活用した非公開実績も多数あります。
            開発実績の一部が以下になります。
          </div>

          <div class="service__button">
            <router-link to="/service" class="service__link">
              Service
            </router-link>
          </div>
        </div>

        <div class="service__imgArea appear">
          <img
            src="../assets/image_05.jpg"
            alt="サービス"
            class="service__img"
          />
        </div>
      </div>

      <div class="news">
        <div class="news__textArea scale">
          <div class="news__title">NEWS</div>
          <div class="news__text">弊社の最新情報を掲載しています。</div>
        </div>

        <div class="news__imgArea scale">
          <img src="../assets/image_01.jpg" alt="ニュース" class="news__img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { start, remove } from '../js/topThree';
import {
  moveAnimation,
  scaleAnimation,
  mvAnimation,
  rightAnimation,
  leftAnimation,
} from '../js/tween';
import Scroll from '../js/scroll';

export default {
  data() {
    return {
      ob: '',
      ob2: '',
      ob3: '',
      ob4: '',
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
  },

  mounted() {
    this.ob = new Scroll('.appear', this._inviewAnima);
    this.ob2 = new Scroll('.right', this._rightAnima);
    this.ob3 = new Scroll('.left', this._leftAnima);
    this.ob4 = new Scroll('.scale', this._scaleAnima);
    start();
    mvAnimation();
  },

  destroyed() {
    remove();
  },
};
</script>

<style scoped lang="scss">
.our__textArea,
.our__imgArea,
.service__textArea,
.service__imgArea,
.news__textArea,
.news__imgArea {
  opacity: 0;
}
</style>
