<template>
  <header class="header">
    <div class="header__logo">
      <img
        src="../assets/header_logo.png"
        alt="TryTechnology"
        class="header__logo__img"
      />
    </div>

    <ul class="header__nav">
      <router-link class="header__nav__link" to="/">
        <li class="header__nav__item" @click="resetAnimation">
          <div class="nav__en" v-html="navEn[0]"></div>
          <div class="nav__jp" v-html="navJp[0]"></div>
        </li>
      </router-link>

      <router-link class="header__nav__link" to="/service">
        <li class="header__nav__item" @click="resetAnimation">
          <div class="nav__en" v-html="navEn[1]"></div>
          <div class="nav__jp" v-html="navJp[1]"></div>
        </li>
      </router-link>

      <router-link class="header__nav__link" to="/about">
        <li class="header__nav__item" @click="resetAnimation">
          <div class="nav__en" v-html="navEn[2]"></div>
          <div class="nav__jp" v-html="navJp[2]"></div>
        </li>
      </router-link>
    </ul>
  </header>
</template>

<script>
import gsap from 'gsap';

export default {
  name: 'HeaderNav',
  data() {
    return {
      navsJp: ['ホーム', '事業内容', '私たちについて'],
      navsEn: ['Home', 'Service', 'AboutUs'],
      navJp: [],
      navEn: [],
      charsJp: '',
      charsEn: '',
    };
  },

  methods: {
    // 毎回リンクした場合、gsap.setで元に戻す。
    resetAnimation() {
      // console.log('setではなくtoにしたらうまくいった、setとの相性があるのか？');
      gsap.to('.en', {
        opacity: 1,
        y: 0,
      });
      gsap.to('.jp', {
        opacity: 0,
        y: -30,
      });
    },
    init() {
      //連想配列の長さを取得
      for (let i = 0; i < Object.keys(this.navsJp).length; i++) {
        this.charsJp = this.navsJp[i].trim().split(''); // 分割
        this.charsEn = this.navsEn[i].trim().split('');

        this.navJp.push(this._splitTextJp(this.charsJp)); // html文字列を返して、配列に追加
        this.navEn.push(this._splitTextEn(this.charsEn));
      }
      //gsapアニメーション実行
      this._mouseoverAnimation();
    },

    _splitTextJp(chars) {
      return chars.reduce((acc, curr) => {
        curr = curr.replace(/\s+/, '&nbsp;');
        //styleでinline-blockを当てないとxyアニメーションしない spanを作った段階でopacity0にしておかないと後からはできない。
        return `${acc}<span class="char jp" style="display:inline-block; opacity: 0 ;transform: translate(0px, -30px)">${curr}</span>`;
      }, '');
    },

    _splitTextEn(chars) {
      return chars.reduce((acc, curr) => {
        curr = curr.replace(/\s+/, '&nbsp;');
        return `${acc}<span class="char en" style="display:inline-block;">${curr}</span>`;
      }, '');
    },

    _mouseoverAnimation() {
      const li = document.querySelectorAll('li'); //各ナビの全体を囲むliを取得
      const en_nav = document.querySelectorAll('.nav__en'); // 各navを取得。
      const jp_nav = document.querySelectorAll('.nav__jp'); // 各navを取得。

      // ナビゲーションの数だけループ
      for (let i = 0; i < en_nav.length; i++) {
        //マウスが各li要素に入ったとき
        li[i].addEventListener('mouseenter', () => {
          //英語の文字をアニメーションさせる。
          en_nav[i].children.forEach((c, i) => {
            gsap.to(c, {
              duration: 0.3,
              delay: 0.02 * i,
              y: 30,
              opacity: 0,
              ease: 'Power4.easeInOut',
            });
          });
          //日本語の文字をアニメーションさせる。
          jp_nav[i].children.forEach((c, i) => {
            gsap.to(c, {
              duration: 0.3,
              delay: 0.02 * i,
              y: 0,
              opacity: 1,
              ease: 'Power4.easeInOut',
            });
          });
        });

        //マウスが各li要素から出たとき。
        li[i].addEventListener('mouseleave', () => {
          //英語の文字をアニメーションさせる。
          en_nav[i].children.forEach((c, i) => {
            gsap.to(c, {
              duration: 0.3,
              delay: 0.02 * i,
              y: 0,
              opacity: 1,
              ease: 'Power4.easeInOut',
            });
          });
          //日本語の文字をアニメーションさせる。
          jp_nav[i].children.forEach((c, i) => {
            gsap.to(c, {
              duration: 0.3,
              delay: 0.02 * i,
              y: -30,
              opacity: 0,
              ease: 'Power4.easeInOut',
            });
          });
        });
      }
    },
  },
  mounted() {
    this.init();
  },
};
</script>
