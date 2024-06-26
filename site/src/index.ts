// Main unicode site logic

class UnicodeSite {
  centerColumn: HTMLElement;
  codepointSearchBox: any;

  constructor() {
    this.centerColumn = document.getElementById('uni_center_column');

    this.codepointSearchBox = document.getElementById('uni_codepoint_search_box');
    this.codepointSearchBox.placeholder = 'U+266b, 29, Boat, Arrow...';
  }
}

window.addEventListener('load', () => {
  console.log('Loading Unicode site!');
  var site = new UnicodeSite();
  (window as any).uniSite = site;
})
