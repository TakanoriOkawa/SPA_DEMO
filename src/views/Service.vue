<template>
  <main class="service">
    <section class="service__canvas">
      <canvas class="service__mainCanvas"></canvas>
    </section>

    <h2 class="service__title char-animation" v-html="chars[0]"></h2>

    <section class="product">
      <div class="product__textArea">
        <h2 class="product__title char-animation" v-html="chars[1]"></h2>
        <div class="product__text appear">
          圧倒的に使いやすい勤怠管理システム、「TRY WORK」を始め、<br />大手医療メーカーと共同開発のアプリケーション、
          SES業界をよりよくするサービスをなどを開発中です。
        </div>
      </div>

      <div class="product__img-area cover-slide">
        <img src="../assets/image_05.jpg" class="product__img img" />
      </div>
    </section>

    <section class="ses">
      <div class="ses__textArea">
        <h2 class="ses__title char-animation" v-html="chars[2]"></h2>
        <div class="ses__text appear">
          お客様先にエンジニアが常駐し、技術提供するSES事業を展開しています。
          Web系、システム構築、ネットワーク・サーバーのインフラ設計と構築など、ニーズに即したエンジニアを提案します。
        </div>
      </div>

      <div class="ses__img-area cover-slide">
        <img src="../assets/image_04.jpg" class="ses__img img" />
      </div>
    </section>

    <section class="contract">
      <div class="contract__textArea">
        <h2 class="contract__title char-animation" v-html="chars[3]"></h2>
        <div class="contract__text appear">
          様々なシーンでの受託開発を得意としています。
          トータルソリューションのご提案から個別システム開発まで、幅広いニーズにご対応が可能な少数精鋭のエンジニアチームが対応します。
        </div>
      </div>

      <div class="contract__img-area cover-slide">
        <img src="../assets/image_01.jpg" class="contract__img img" />
      </div>
    </section>

    <section class="overseas">
      <div class="overseas__textArea">
        <h2 class="overseas__title char-animation" v-html="chars[4]"></h2>
        <div class="overseas__text appear">
          アジアを中心に、事業拡大中です。現地の技術者と共同で開発業務に当たっています。
        </div>
      </div>

      <div class="overseas__img-area cover-slide">
        <img src="../assets/image_07.jpg" class="overseas__img img" />
      </div>
    </section>
  </main>
</template>

<script>
import { pointsThreeStart, pointsThreeRemove } from '../js/pointsThree';
import Scroll from '../js/scroll';
import { startAnimation, moveAnimation } from '../js/tween';

import Split from '../js/splitText';

export default {
  data() {
    return {
      ob: '',
      ob2: '',
      ob3: '',
      titles: [
        'Service',
        '自社開発アプリ',
        'SES・技術者派遣事業',
        '受託開発事業',
        '海外事業',
      ],
      chars: [],
    };
  },
  methods: {
    _inviewAnima(el, inview) {
      if (inview) {
        moveAnimation(el);
      }
    },

    _inviewAddClass(el, inview) {
      if (inview) {
        el.classList.add('inview');
      }
    },
  },

  mounted() {
    for (let i = 0; i < Object.keys(this.titles).length; i++) {
      this.chars.push(new Split(this.titles[i]).split()); // 文字列分割
    }

    console.log(this.chars);

    pointsThreeStart();
    startAnimation();
    const _this = this;
    setTimeout(function () {
      this.ob = new Scroll('.appear', _this._inviewAnima);
      this.ob2 = new Scroll('.cover-slide', _this._inviewAddClass);
      this.ob3 = new Scroll('.char-animation', _this._inviewAddClass);
    }, 600);
  },

  destroyed() {
    pointsThreeRemove();
  },
};
</script>
