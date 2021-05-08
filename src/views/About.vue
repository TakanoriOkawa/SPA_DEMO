<template>
  <main class="about">
    <section class="top__wrap appear">
      <div class="top">
        <div class="top__textArea">
          <h2 class="top__title">About</h2>
          <div class="top__text">
            私たちは、従来の開発の在り方を見直し、
            現代を生きる私たちに最も必要な 過程、プロセスを創造し続けます。<br />
            開発はもちろん、設計、改善、アナリティクスなど、一貫してお任せください。
          </div>
        </div>
      </div>
    </section>

    <section class="table appear">
      <h2 class="table__title">会社概要</h2>
      <table>
        <tbody>
          <tr>
            <td>社名</td>
            <td>株式会社 Try Technology</td>
          </tr>
          <tr>
            <td>設立</td>
            <td>200X年 1月 1日</td>
          </tr>
          <tr>
            <td>資本金</td>
            <td>XXXX万円</td>
          </tr>
          <tr>
            <td>代表</td>
            <td>山田 太郎</td>
          </tr>
          <tr>
            <td>住所</td>
            <td>東京都渋谷区〇〇町００ー００ ××ビル 1階</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="form appear">
      <h2 class="form__title">CONTACT</h2>
      <form class="form__area">
        <input type="text" class="form__name" placeholder="お名前" />
        <textarea
          name="message"
          cols="30"
          rows="10"
          class="form__text"
          placeholder="お問い合わせ内容"
        ></textarea>
        <input type="submit" class="form__submit" value="送信" />
      </form>
    </section>
  </main>
</template>

<script>
import { startAnimation, scaleAnimation } from '../js/tween';
import Scroll from '../js/scroll';

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
        scaleAnimation(el);
      }
    },
  },

  mounted() {
    startAnimation();
    const _this = this;
    setTimeout(function () {
      this.ob = new Scroll('.appear', _this._inviewAnima);
    }, 600);
  },
};
</script>

<style scoped lang="scss">
.top__wrap,
.table,
.form {
  opacity: 0;
}
</style>
