export default class Scroll{
  constructor(els,cb,options){
    this.els = document.querySelectorAll(els);
    const defaultOption = {
      rootMargin: "-150px 0px",
      once:false
    };

    this.cb = cb;
    this.options = Object.assign(defaultOption,options);
    this._init();
  }

  _init(){
    const callback = function(entries,ob){
      entries.forEach(entry => {
        if(entry.isIntersecting){
          this.cb(entry.target, true);
          ob.unobserve(entry.target);
        }else{
          this.cb(entry.target,false);
        }
      })
    };

    this.io = new IntersectionObserver(callback.bind(this),this.options);
    this.els.forEach(title => {
      this.io.observe(title);
    })

    this.io.POLL_INTERVAL = 100;
  }
  destroy(){
    this.io.disconnect();
  }
}