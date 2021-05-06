<template>
  <div class="mv">
    <div class="mv__canvas">
      <canvas class="mv__mainCanvas"></canvas>
    </div>
    <h2 class="mv__text" v-html="splitTitle[0]">
      先端技術で世界をリードする会社<br />Try Technology
    </h2>
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  data() {
    return {
      title: '先端技術で世界をリードする会社+TryTechnology',
      splitTitle: [],
    };
  },
  methods: {
    init() {
      const chars = this.title.trim().split('');

      // 全ての処理が終わったものに、\nでの変換をかける
      let result = this._splite(chars);

      let replaceText = result.replace(
        //記号の前は全て\をつける。
        /<span class="mv__char">\+<\/span>/g,
        '<br>'
      );

      this.splitTitle.push(replaceText);
    },

    _splite(chars) {
      return chars.reduce((acc, curr) => {
        curr = curr.replace(/\s+/, '&nbsp;');
        //styleでinline-blockを当てないとxyアニメーションしない
        return `${acc}<span class="mv__char">${curr}</span>`;
      }, '');
    },

    // enterAnima() {
    //   console.log('enter');
    //   gsap.to('.mv__char', {
    //     duration: 0.3,
    //     color: 'skyblue',
    //     stagger: { each: 0.01, from: 'random' },
    //     ease: 'Power2.easeIn',
    //   });
    // },

    // leaveAnima() {
    //   console.log('leave');
    //   gsap.to('.mv__char', {
    //     duration: 0.3,
    //     color: 'black',
    //     stagger: { each: 0.01, from: 'random' },
    //     ease: 'Power2.easeIn',
    //   });
    // },
  },

  mounted() {
    this.init();
  },
};
</script>
