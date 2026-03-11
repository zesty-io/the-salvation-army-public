const ImageTextListTemplate = document.createElement('template');

const ImageTextListStyle = new CSSStyleSheet();

ImageTextListStyle.replaceSync(`
    ::slotted(div) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }
    .image-text-list__container {
        margin-top: 3rem;
    }
    .image-text-list {
        padding: 2rem;
    }
    @media(max-width: 769px){
        ::slotted(div) {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 20px;
        }
    }
`)


class ImageTextListModule extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});

    ImageTextListTemplate.innerHTML = `
      <div class="image-text-list">
        <slot name="title"></slot>
        <div class="image-text-list__container">
          <slot name="content"></slot>
        </div>
      </div>
    `
    
  }

  connectedCallback() {
    if(this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [ImageTextListStyle];
      this.shadowRoot.appendChild(ImageTextListTemplate.content.cloneNode(true));
    }
  }
}
customElements.define('tsa-image-text-list', ImageTextListModule);