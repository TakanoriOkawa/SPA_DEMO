<template>
  <div class="Service">
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
          お客様先にエンジニアが常駐し、技術提供するSES（システムエンジニアリングサービス）事業を展開しています。
          Web系、システム構築、ネットワーク・サーバーのインフラ設計と構築など、ニーズに即したエンジニアを提案します。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    startAnimation();
    const _this = this;
    setTimeout(function () {
      this.ob = new Scroll('.appear', _this._inviewAnima);
    }, 1400);
  },
};
</script>

<style scoped lang="scss">
.Service__title,
.product,
.ses {
  opacity: 0;
}
</style>
