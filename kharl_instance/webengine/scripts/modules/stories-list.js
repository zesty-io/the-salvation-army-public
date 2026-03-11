const storiesTemplate = document.createElement('template');

const storiesStyle = new CSSStyleSheet();

storiesStyle.replaceSync(`
  ::slotted(div) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    padding: 0 3rem !important;
  }
  @media (max-width: 769px){
    ::slotted(div) {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 40px;
    }
  }
`);

class StoriesModule extends HTMLElement {

  constructor() {
    super();

    this.attachShadow({mode: 'open'});

    storiesTemplate.innerHTML = `
      <div class="stories-list">
        <slot name="title"></slot>
        <slot></slot>
        <slot name="link"></slot>
      </div>
    `
  }

  connectedCallback() {
    if(this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [storiesStyle];
      this.shadowRoot.appendChild(storiesTemplate.content.cloneNode(true));
    }
  }
}

customElements.define('tsa-stories', StoriesModule);