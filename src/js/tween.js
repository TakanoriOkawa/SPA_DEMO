import { gsap, Back} from 'gsap';
import { moveScroll } from '../js/scrollControll';

const animationSpeed = 1;
const headerSpeed = 1;

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
  })
  // 読み込み時アニメーションスタート
  tl.to('.load', {
    delay: 0.4,
    duration: 0.6,
    right: 0,
  });

  // svgをgsapで動かすとうまくいかない。
  tl.to('.circle',{
    duration:2,
    strokeDashoffset: 0,
    rotate:360,
  })

  tl.from('.char', {
    duration: 1,
    stagger: { each: 0.03 },
    y: 200,
    opacity:0,
  });
  tl.to('.load', {
    duration: 0.6,
    opacity: 0,
  });
  tl.to('.load', {
    duration: 0.001,
    visibility: 'hidden',
  });
  tl.to('#app',{
    duration: 0.01,
    opacity:1,
    visibility: 'visible',
  });
  tl.from('.header',{
    duration:headerSpeed,
    opacity:0,
    color:'blue',
    ease: Back.easeIn,
    onComplete:mainVisualAnimation,
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
    tl.from('.mv__char', {
      duration:animationSpeed,
      y:150,
      stagger:{each:0.02, from: 'random'},
      ease: Back.easeIn,
      opacity: 0,
      color:'skyblue',
      // scale: 2,
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
  
export { moveAnimation,startAnimation,topAnimation,scaleAnimation,rightAnimation,leftAnimation };