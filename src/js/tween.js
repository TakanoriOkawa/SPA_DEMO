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

function mvAnimation(){
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
  
export { moveAnimation,startAnimation,mvAnimation,scaleAnimation,rightAnimation,leftAnimation };