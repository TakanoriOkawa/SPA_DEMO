<template>
  <div class="about">
    <div class="top__wrap appear">
      <div class="top">
        <div class="top__textArea">
          <div class="top__title">About</div>
          <div class="top__text">
            私たちは、従来の開発の在り方を見直し、
            現代を生きる私たちに最も必要な 過程、プロセスを創造し続けます。<br />
            開発はもちろん、設計、改善、アナリティクスなど、一貫してお任せください。
          </div>
        </div>
      </div>
    </div>

    <div class="table appear">
      <div class="table__title">会社概要</div>
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
    </div>

    <div class="form appear">
      <div class="form__title">CONTACT</div>
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
    </div>
  </div>
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
