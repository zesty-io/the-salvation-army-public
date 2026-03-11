const localNeedStyles = new CSSStyleSheet();

localNeedStyles.replaceSync(`
    .local-need{

      & .local-need__header{
          display: flex;  

          & span{
            font-size: 3.6rem;
            margin-right: .6rem;
          }

          & h1 {
            font-size: 2rem;
          }
      }

      & .local-need__content{
         margin-top: 1rem;
         font-size: 1.6rem;
         line-height: 2.8rem;
         overflow: hidden;
         text-overflow: ellipsis;
         display: -webkit-box;
         -webkit-line-clamp: 3; 
                 line-clamp: 3;
         -webkit-box-orient: vertical;
      }
    }
    `);

class LocalNeedModule extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [localNeedStyles];
      this.shadowRoot.innerHTML = `
        <div class="local-need">
            <div class="local-need__header">
              <span><slot name="icon"></slot></span> 
              <slot name="title"></slot>
            </div>
            <div class="local-need__content">
              <slot name="content"></slot>
            </div>
        </div>
      `;
    }
  }
}

customElements.define('local-need-module', LocalNeedModule);
