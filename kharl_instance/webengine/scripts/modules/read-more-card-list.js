const readMoreCardListStylesheet = new CSSStyleSheet();

readMoreCardListStylesheet.replaceSync(`
  slot {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }
  .read-more-card-list h2{
    font-size: 4rem;
    font-family: "Cinzel", serif;
    font-weight: 200;
    text-align: center;
  }
  @media (max-width: 769px) {
    slot {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`);

class ReadMoreCardListModule extends HTMLElement {
   constructor() {
    super();
    this.attachShadow({mode: 'open'});
   }

   connectedCallback() {
    if(this.shadowRoot) {
      this.heading = this.getAttribute('heading');
      this.shadowRoot.adoptedStyleSheets = [readMoreCardListStylesheet];
      this.shadowRoot.innerHTML = `
        <div class="read-more-card-list">
          <h2>${this.heading}</h2>
          <slot></slot>
        </div>
      `
    }
   }

}

customElements.define('tsa-read-more-card-list', ReadMoreCardListModule);