class Tabs {
  constructor() {
    this.htmlElements = {
      links: document.querySelectorAll(".container .links a"),
      tabsContent: document.querySelectorAll(".container .tabs>div")
    };
  }

  switchToMode = () => {
    removeClass(this.htmlElements.links, "selected");
    hideTabsContent(this.htmlElements.tabsContent);
    let mode = this.htmlElements.links.dataset.mode;
    let tabContent = document.querySelector(`div[data-mode="${mode}"]`);
    tabContent.classList.remove("hidden");
    addClass(this, "selected");
  };

  init() {
    this.htmlElements.links.forEach(link => {
      link.addEventListener("click", this.switchToMode);
    });
  }
}

function removeClass(elements, className) {
  elements.forEach(function(element) {
    element.classList.remove(className);
  });
}

function addClass(element, className) {
  element.classList.add(className);
}

function hideTabsContent(elements) {
  elements.forEach(function(element) {
    addClass(element, "hidden");
  });
}

export { Tabs };
