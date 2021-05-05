import { gsap, Back} from 'gsap';

const animationSpeed = 1;
const headerSpeed = 0.7;

function startAnimation(){
  const tl =  gsap.timeline();

  tl.from('.header__logo', {
    duration:headerSpeed,
    x:-200,
    opacity: 0,
    ease: Back.easeIn,
  }).from('.header__nav',{
    duration:headerSpeed,
    x:200,
    opacity:0,
    ease: Back.easeIn,
  })
}

function topAnimation(){
  const tl =  gsap.timeline();
  console.log("gagag");

  tl.set('#app',{
    visibility:'hidden',
    opacity:0,
  })
  tl.set('.load',{
    visibility:'visible',
    opacity: 0.7,
    right:'100%'
  })

  //読み込み時アニメーションスタート
  tl.to('.load', {
    delay: 0.4,
    duration: 0.6,
    right: 0,
  });
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
  })

  tl.from('.header__logo', {
    duration:headerSpeed,
    x:-200,
    opacity: 0,
    ease: Back.easeIn,
  }).from('.header__nav',{
    duration:headerSpeed,
    x:200,
    opacity:0,
    ease: Back.easeIn,
  })
  .from('.mv', {
    duration:animationSpeed,
    ease: Back.easeIn,
    opacity: 0,
  })
  .from('.mv__text', {
    duration:animationSpeed,
    y:150,
    ease: Back.easeIn,
    opacity: 0,
    scale: 2,
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