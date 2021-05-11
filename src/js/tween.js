import { gsap, Back} from 'gsap';
import { moveScroll } from '../js/scrollControll';

const animationSpeed = 1;
const headerSpeed = 0.4;

function startAnimation(){
  const tl =  gsap.timeline();
  tl.from('.header',{
    duration:headerSpeed,
    opacity:0,
    color:'blue',
    ease: Back.easeIn,
  })
}

function topAnimation(){
  const tl =  gsap.timeline();

  tl.set('.mv',{
    opacity:0
  })
  tl.set('#app',{
    visibility:'hidden',
    opacity:0,
  })
  tl.set('.load',{
    visibility:'visible',
    opacity: 1,
    right:'100%'
  })
  tl.set('.circle',{
    transformOrigin: 'center',
    strokeDashoffset: 3000,
    rotate:0,
  })

  // 読み込み時アニメーションスタート
  tl.to('.load', {
    delay: 0.4,
    duration: 0.6,
    right: 0,
  });

  // svgアニメーション
  tl.to('.circle',{
    duration:2,
    strokeDashoffset: 0,
    rotate:360,
  })

  tl.from('.load__char', {
    duration: 0.6,
    stagger: { each: 0.08 },
    x: 140,
    scale:0.4,
    opacity:0,
  });

  //カラーフラッシュ
  tl.to(".load__char", {
    duration: 0.5,
    color: "skyblue",
    stagger: { each: 0.01, from: "random" },
  });
  tl.to(".load__char", {
    duration: 0.5,
    color: "white",
    stagger: { each: 0.01, from: "random" },
  });

  //黒背景 消える
  tl.to('.load', {
    duration: 0.6,
    opacity: 0,
  });
  // 黒背景がコンテンツにかぶるので、非表示に変更
  tl.to('.load', {
    duration: 0.001,
    visibility: 'hidden',
  });
  // メインのコンテンツを表示
  tl.to('#app',{
    duration: 0.001,
    opacity:1,
    visibility: 'visible',
  });
  // ヘッダーの透明度をあげる
  tl.from('.header',{
    duration:headerSpeed,
    opacity:0,
    color:'blue',
    ease: Back.easeIn,
    onComplete:mainVisualAnimation, // メインthreeの表示へ
  })
}

function mainVisualAnimation(){
  const tl =  gsap.timeline();

    //mvアニメーション
    tl.to('.mv', {
      duration:animationSpeed,
      ease: Back.easeIn,
      opacity: 1,
    })
    // mvテキスト ランダム出現
    tl.from('.mv__char', {
      duration:animationSpeed,
      y:150,
      stagger:{each:0.02, from: 'random'},
      ease: Back.easeIn,
      opacity: 0,
      color:'skyblue',
      scale: 4,
      onComplete:moveScroll, //scroll解除
    });
}

function moveAnimation(el){
  gsap.fromTo(el,{
    opacity:0,
    y:150,
  },{
    duration:animationSpeed,
    y:0,
    ease: Back.easeIn,
    opacity:1,
  })
}

function scaleAnimation(el){
  gsap.fromTo(el,{
    opacity:0,
    scale:0,
  },{
    duration:animationSpeed,
    scale:1,
    ease: Back.easeIn,
    opacity:1,
  })
}

function rightAnimation(el){
  gsap.fromTo(el,{
    opacity:0,
    x:"100%",
  },{
    duration:animationSpeed,
    x:0,
    ease: Back.easeIn,
    opacity:1,
  })
}

function leftAnimation(el){
  gsap.fromTo(el,{
    opacity:0,
    x: "-100%",
  },{
    duration:animationSpeed,
    x:0,
    ease: Back.easeIn,
    opacity:1,
  })
}

function loopFashText(){
  const tl = gsap.timeline({
    repeat: -1,
    repeatDelay: 0.3,
    yoyo: true,
    defaults: { duration: 0.5, ease: "power4.out" },
  });

  tl.to(".mv__char", {
    color: "skyblue",
    stagger: { each: 0.01, from: "random" },
  });
  tl.to(".mv__char", {
    color: "white",
    stagger: { each: 0.01, from: "random" },
  });
}
  
export { moveAnimation,startAnimation,topAnimation,scaleAnimation,rightAnimation,leftAnimation,loopFashText};
// export { moveAnimation,startAnimation,topAnimation,scaleAnimation,rightAnimation,loopFashText};