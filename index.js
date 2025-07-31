//ページの内容を取得
const _fetch = async (url = '') => {
  return await (await (await fetch(url)).text()).toString();
}
//HTMLElementに変換
const _domParse = (text = '') => {
  return new DOMParser().parseFromString(text, 'text/html').body;
}
//本体
const _main = async (txt, page = '') => {
  txt.append(_domParse(await _fetch(`${location.origin}/pages/${page}.html`)));
}

//読み込まれた時に実行
onload = async () => {
  const txt = document.getElementById('text');
  const param = new URLSearchParams(location.search).get('page');
  if(!param) {
    location.replace(`${location.origin}/?page=main`);
    return;
  }
  _main(txt, param);
}