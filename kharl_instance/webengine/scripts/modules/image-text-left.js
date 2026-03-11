

const imageTextLelftStyles = new CSSStyleSheet();

imageTextLelftStyles.replaceSync(`
    .container{
        padding: 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .image-container {
        display: flex;
        justify-content: center;
        margin-bottom: 4rem;
    }

    @media(min-width: 1280px){
        .container{
           padding: 8rem 7rem;
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-evenly;

            &  .image-container{
                margin-right: 8rem;
                margin-bottom: 0rem;    
            }
        }

       
    }
`);

class TSAImageTextModule extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [imageTextLelftStyles];
      this.shadowRoot.innerHTML = `
        <div part="container" class="container">
            <div part="image-container" class="image-container">
                <img part="image" src="${this.getAttribute('image')}" alt="${this.getAttribute('alt')}"/>
            </div>
            <div class="content-container">
              <slot></slot>
            </div>
        </div>
      `;
    }
  }
}

customElements.define('tsa-image-text-module', TSAImageTextModule);
