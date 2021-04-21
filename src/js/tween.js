import { gsap, Back} from 'gsap';

const animationSpeed = 0.7;

function startAnimation(){
  const tl =  gsap.timeline();

  tl.from('.header__logo', {
    duration:animationSpeed,
    x:-200,
    opacity: 0,
    ease: Back.easeIn,
  }).from('.header__nav',{
    duration:animationSpeed,
    x:200,
    opacity:0,
    ease: Back.easeIn,
  })
}

function mvAnimation(){
  const tl =  gsap.timeline();
  
  tl.from('.header__logo', {
    duration:animationSpeed,
    x:-200,
    opacity: 0,
    ease: Back.easeIn,
  }).from('.header__nav',{
    duration:animationSpeed,
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

function tweenAnimation(el){
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
  
export { tweenAnimation,startAnimation,mvAnimation };