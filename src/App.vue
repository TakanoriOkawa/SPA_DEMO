<template>
  <div id="app">
    <header-nav></header-nav>
    <router-view />

    <footer class="footer">
      <div class="footer__nav">
        <router-link class="footer__nav__link" to="/">Home</router-link> |
        <router-link class="footer__nav__link" to="/service"
          >Service</router-link
        >
        |
        <router-link class="footer__nav__link" to="/about">About</router-link>
      </div>
      <p class="footer__copy">©︎ TryTechnology 2021- by takanori okawa</p>
    </footer>
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue';

export default {
  name: 'App',
  data() {
    return {
      //最初のApp.vueが読み込まれているかどうかのフラグ
      //これがfalseの場合は、最初の読み込みアニメーションを行う。trueの場合は、ロゴなどのアニメーション始まる。
    };
  },
  components: {
    HeaderNav,
  },
  mounted() {
    // グローバル変数を用意する。
    // （参考）https://jp.vuejs.org/v2/cookbook/adding-instance-properties.html
    // 最初の読み込みがされたらture
    // Vue.prototype.$loadApp = true;
    // console.log(this.$loadApp);
    // Gsapの各アニメーションをどうセットしていくかが本当にわからん。
    // 例えば、最初の読み込みのtimelineとページ繊維のタイムラインの正しい分け方など。
  },
};
</script>
