class HeaderModule extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="tsa-header">
        <div class="tsa-header__logo">
            <a href="${this.getAttribute('href') ?? '/'}">
                <img class="logo-small" src="${this.getAttribute('src')}" alt="Salvation Army Logo"/>
                <img class="logo-large" src="${this.getAttribute('srcLarge')}" alt="Salvation Army Logo"/>
            </a>
            <tsa-switch labels="EN,ES"></tsa-switch>
        </div>

        <div class="tsa-header__input">
            <label class="input">
                <i class="bi bi-search"></i>
                <input class="input--medium" name="" value="" placeholder="What are you looking for" type="text"/>
            </label>
        </div>

        <div class="tsa-header__cta">
            <button id="find-help" type="button" class="btn btn--small btn--dark--fill ">Find Help</button>
            <button type="button" class="btn btn--small btn--dark--fill ">Donate</button>
        </div>

        <button class="tsa-header__burger" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
          <i class="bi bi-list"></i>
        </button>
    </div>
    
    <div class="tsa-header__input-mobile">
          <label class="input">
              <i class="bi bi-search"></i>
              <input class="input--medium" name="" value="" placeholder="What are you looking for" type="text"/>
          </label>
      </div>
    `;

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      this.document.querySelector(".tsa-header__input-mobile").style.top = "0";
      this.document.querySelector(".tsa-header__input-mobile").style.opacity = "1";
      this.document.querySelector(".tsa-header__input-mobile").style.padding = "1rem";

    } else {
      this.document.querySelector(".tsa-header__input-mobile").style.opacity= "0";
      this.document.querySelector(".tsa-header__input-mobile").style.padding= "0";
      this.document.querySelector(".tsa-header__input-mobile").style.top = "-10rem";
      this.document.querySelector(".tsa-header__input-mobile").style.zIndex = "-10rem";
    }
  prevScrollpos = currentScrollPos;
}
  }
}

customElements.define('header-module', HeaderModule);