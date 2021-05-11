<template>
  <main class="home">
    <main-visual></main-visual>

    <div class="contents">
      <section class="our">
        <div class="our__textArea">
          <div class="our__text-inner">
            <h2 class="our__title path-appear">ABOUT</h2>
            <div class="our__text appear">
              私たちは、従来の開発の在り方 を見直し、
              現代を生きる私たちに最も必要な 過程、プロセスを創造し続けます。
            </div>

            <div class="our__button appear">
              <router-link to="/about" class="our__link">About</router-link>
            </div>
          </div>
          <!-- /.our__textInner -->
        </div>

        <div class="our__imgArea cover-slide">
          <img
            src="../assets/image_02.jpg"
            class="our__img img"
            alt="私たちについて"
          />
        </div>
      </section>

      <section class="servi">
        <div class="servi__outer">
          <div class="servi__textArea">
            <div class="servi__text-inner">
              <h2 class="servi__title path-appear">SERVICE</h2>
              <div class="servi__text appear">
                多くの新技術を活用した 数々のプロジェクトに携わっています。
                弊社には新技術を活用した非公開実績も多数あります。
              </div>

              <div class="servi__button appear">
                <router-link to="/service" class="servi__link">
                  Service
                </router-link>
              </div>
            </div>
          </div>

          <div class="servi__imgArea cover-slide">
            <img
              src="../assets/image_05.jpg"
              alt="サービス"
              class="servi__img img"
            />
          </div>
        </div>

        <!-- /.servi__outer -->
        <div class="servi__company cover-slide-background">
          <h2
            class="servi__company__text left"
            @mouseenter="enterAnima"
            @mouseleave="leaveAnima"
            v-html="splitTitle[0]"
          ></h2>
        </div>
        <!-- /.servi__company -->
      </section>

      <section class="news">
        <div class="news__textArea">
          <div class="news__text-inner">
            <h2 class="news__title path-appear">NEWS</h2>
            <div class="news__text appear">
              弊社の最新情報を掲載しています。エンジニアチームの技術ブログ「Try
              Blog」も随時更新中です。
            </div>
          </div>
          <!-- /.news__text-inner -->
        </div>

        <div class="news__imgArea cover-slide">
          <img
            src="../assets/image_01.jpg"
            alt="ニュース"
            class="news__img img"
          />
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import { gsap } from 'gsap';

import { topThreeStart, topThreeRemove } from '../js/topThree';
import {
  moveAnimation,
  topAnimation,
  loopFashText,
  leftAnimation,
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
      title: 'TRY+TECHNOLOGY',
      splitTitle: [],
    };
  },
  methods: {
    _moveAnimation(el, inview) {
      if (inview) {
        moveAnimation(el);
      }
    },
    _inviewAddClass(el, inview) {
      if (inview) {
        el.classList.add('inview');
      }
    },

    _leftAnima(el, inview) {
      if (inview) {
        leftAnimation(el);
      }
    },

    _splitInit() {
      const chars = this.title.trim().split('');
      // 全ての処理が終わったものに、\nでの変換をかける
      let result = this._splite(chars);
      let replaceText = result.replace(
        //記号の前は全て\をつける。
        /<span class="char1" style="display:inline-block;">\+<\/span>/g,
        '<br>'
      );

      this.splitTitle.push(replaceText);
    },

    _splite(chars) {
      return chars.reduce((acc, curr) => {
        curr = curr.replace(/\s+/, '&nbsp;');
        //styleでinline-blockを当てないとxyアニメーションしない
        return `${acc}<span class="char1" style="display:inline-block;">${curr}</span>`;
      }, '');
    },

    enterAnima() {
      gsap.to('.char1', {
        duration: 0.3,
        color: 'skyblue',
        stagger: { each: 0.01, from: 'random' },
        ease: 'Power2.easeIn',
      });
    },

    leaveAnima() {
      gsap.to('.char1', {
        duration: 0.3,
        color: 'white',
        stagger: { each: 0.01, from: 'random' },
        ease: 'Power2.easeIn',
      });
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
    this._splitInit(); // 文字分割処理

    this.ob = new Scroll('.appear', this._moveAnimation); // inviewクラス付与
    this.ob2 = new Scroll('.left', this._leftAnima);
    this.ob3 = new Scroll('.cover-slide', this._inviewAddClass);
    this.ob4 = new Scroll('.path-appear', this._inviewAddClass); // inviewクラス付与
    this.ob5 = new Scroll('.cover-slide-background', this._inviewAddClass); // inviewクラス付与
  },

  destroyed() {
    topThreeRemove(); // THREEアニメーション削除
  },
};
</script>
