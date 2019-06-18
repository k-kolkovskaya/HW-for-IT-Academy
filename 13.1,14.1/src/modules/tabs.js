const htmlElements = {
  links: document.querySelectorAll('.container .links a'),
  tabsContent: document.querySelectorAll('.container .tabs>div')
};

function Tabs(links) {
  this.links = links;
}


Tabs.prototype.init = function () {
  const linksArray = Array.from(this.links);
  linksArray.forEach(function (link) {
    link.addEventListener('click', switchToMode);
  })
}

function switchToMode() {
  removeClass(htmlElements.links, 'selected');
  hideTabsContent(htmlElements.tabsContent);
  let mode = this.dataset.mode;
  let tabContent = document.querySelector(`div[data-mode="${mode}"]`);
  tabContent.classList.remove('hidden');
  addClass(this, 'selected');
}

function removeClass(elements, className) {
  elements.forEach(function (element) {
    element.classList.remove(className);
  })
}

function addClass(element, className) {
  element.classList.add(className);
}

function hideTabsContent(elements) {
  elements.forEach(function (element) {
    addClass(element, 'hidden');
  });
}


export {
  Tabs
};