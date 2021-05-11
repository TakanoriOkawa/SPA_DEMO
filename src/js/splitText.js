//読み込んだと同時に文字を分割する。
class Split{
  constructor(el){
    this.el = el;
    this.chars = this.el.trim().split("");
  }

  split(){
    return this.chars.reduce((acc, curr) => {
      curr = curr.replace(/\s+/, '&nbsp;');
      return `${acc}<span class="char">${curr}</span>`;
    }, "");
  }
}


export default Split;