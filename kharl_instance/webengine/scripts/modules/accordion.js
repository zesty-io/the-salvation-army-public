const accordionTemplate = document.createElement('template');

const accordionStyle = new CSSStyleSheet();

accordionStyle.replaceSync(`
  .accordion {
    display: flex;
    flex-direction: column;
  }
`);

class AccordionModule extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: "open"});

    accordionTemplate.innerHTML = `
      <div class="accordion">
        <slot></slot>
      </div>
    `
  }

  connectedCallback() {
    if(this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [accordionStyle];
      this.shadowRoot.appendChild(accordionTemplate.content.cloneNode(true));
    }
  }
}

customElements.define('tsa-accordion', AccordionModule);