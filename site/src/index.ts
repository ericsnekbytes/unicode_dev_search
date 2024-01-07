// Main unicode site logic

class UnicodeSite {

  rootNode: any;
  centerColumn: any;
  codepointSearchBox: any;

  constructor(userNode: any) {

    this.rootNode = userNode;
    this.rootNode.classList.add('uni_root');

    this.centerColumn = document.createElement('div');
    this.centerColumn.classList.add('uni_center_column');
    this.rootNode.appendChild(this.centerColumn);

    this.codepointSearchBox = document.createElement('input');
    this.codepointSearchBox.classList.add('uni_codepoint_search_box');
    this.centerColumn.appendChild(this.codepointSearchBox);
  }
}

window.addEventListener('load', () => {
  console.log('Loading Unicode site!');
  var site = new UnicodeSite(document.getElementsByTagName('body')[0]);
  (window as any).uniSite = site;
})
