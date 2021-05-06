// イベント設定用関数
function noScroll(event) {
  event.preventDefault();
}
// グローバル関数 どこからでも実行可能
// スクロール禁止
function stopScroll() {
  document.addEventListener("touchmove", noScroll, { passive: false });
  document.addEventListener("mousewheel", noScroll, { passive: false });
};

// スクロール禁止を解除
function moveScroll() {
  document.removeEventListener("touchmove", noScroll, { passive: false });
  document.removeEventListener("mousewheel", noScroll, { passive: false });
};

export {stopScroll,moveScroll}