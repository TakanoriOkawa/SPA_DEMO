<template>
  <main class="service">
    <section class="service__canvas appear">
      <canvas class="service__mainCanvas"></canvas>
    </section>
    <h2 class="service__title appear">Service</h2>

    <section class="product appear">
      <div class="product__textArea">
        <h2 class="product__title">自社開発アプリ</h2>
        <div class="product__text">
          圧倒的に使いやすい勤怠管理システム、「TRY WORK」を始め、<br />大手医療メーカーと共同開発のアプリケーション、
          SES業界をよりよくするサービスをなどを開発中です。
        </div>
      </div>
    </section>

    <section class="ses appear">
      <div class="ses__textArea">
        <h2 class="ses__title">SES・技術者派遣事業</h2>
        <div class="ses__text">
          お客様先にエンジニアが常駐し、技術提供するSES事業を展開しています。
          Web系、システム構築、ネットワーク・サーバーのインフラ設計と構築など、ニーズに即したエンジニアを提案します。
        </div>
      </div>
    </section>

    <section class="contract appear">
      <div class="contract__textArea">
        <h2 class="contract__title">受託開発事業</h2>
        <div class="contract__text">
          様々なシーンでの受託開発を得意としています。
          トータルソリューションのご提案から個別システム開発まで、幅広いニーズにご対応が可能な少数精鋭のエンジニアチームが対応します。
        </div>
      </div>
    </section>

    <section class="overseas appear">
      <div class="overseas__textArea">
        <h2 class="overseas__title">海外事業</h2>
        <div class="overseas__text">
          アジアを中心に、事業拡大中です。現地の技術者と共同で開発業務に当たっています。
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { pointsThreeStart, pointsThreeRemove } from '../js/pointsThree';
import Scroll from '../js/scroll';
import { startAnimation, moveAnimation } from '../js/tween';

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
        moveAnimation(el);
      }
    },
  },

  mounted() {
    pointsThreeStart();
    startAnimation();
    const _this = this;
    setTimeout(function () {
      this.ob = new Scroll('.appear', _this._inviewAnima);
    }, 600);
  },

  destroyed() {
    pointsThreeRemove();
  },
};
</script>

<style lang="scss">
.service__canvas,
.service__title,
.product,
.ses,
.contract,
.overseas {
  opacity: 0;
}

.service__canvas {
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
