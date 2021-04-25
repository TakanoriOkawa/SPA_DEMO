<template>
  <div class="Service">
    <div class="Service__canvas appear">
      <canvas class="Service__mainCanvas"></canvas>
    </div>
    <h2 class="Service__title appear">Service</h2>

    <div class="product appear">
      <div class="product__textArea">
        <div class="product__title">自社開発アプリ</div>
        <div class="product__text">
          圧倒的に使いやすい勤怠管理システム、「TRY WORK」を始め、<br />大手医療メーカーと共同開発のアプリケーション、
          SES業界をよりよくするサービスをなどを開発中です。
        </div>
      </div>
    </div>

    <div class="ses appear">
      <div class="ses__textArea">
        <div class="ses__title">SES・技術者派遣事業</div>
        <div class="ses__text">
          お客様先にエンジニアが常駐し、技術提供するSES事業を展開しています。
          Web系、システム構築、ネットワーク・サーバーのインフラ設計と構築など、ニーズに即したエンジニアを提案します。
        </div>
      </div>
    </div>

    <div class="contract appear">
      <div class="contract__textArea">
        <div class="contract__title">受託開発事業</div>
        <div class="contract__text">
          様々なシーンでの受託開発を得意としています。
          トータルソリューションのご提案から個別システム開発まで、幅広いニーズにご対応が可能な少数精鋭のエンジニアチームが対応します。
        </div>
      </div>
    </div>
    <div class="contract appear">
      <div class="contract__textArea">
        <div class="contract__title">受託開発事業</div>
        <div class="contract__text">
          様々なシーンでの受託開発を得意としています。
          トータルソリューションのご提案から個別システム開発まで、幅広いニーズにご対応が可能な少数精鋭のエンジニアチームが対応します。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { startThree, removeThree } from '../js/pointsThree';
import Scroll from '../js/scroll';
import { startAnimation, tweenAnimation } from '../js/tween';

export default {
  data() {
    return {
      ob: '',
    };
  },
  methods: {
    _inviewAnima(el, inview) {
      if (inview) {
        el.classList.add('.inview');
        tweenAnimation(el);
      }
    },
  },

  mounted() {
    startThree();
    startAnimation();
    const _this = this;
    setTimeout(function () {
      this.ob = new Scroll('.appear', _this._inviewAnima);
    }, 1400);
  },

  destroyed() {
    removeThree();
  },
};
</script>

<style lang="scss">
.Service__canvas,
.Service__title,
.product,
.ses,
.contract {
  opacity: 0;
}

.Service__canvas {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -10;
  width: 100%;
  height: 100%;
}
</style>
