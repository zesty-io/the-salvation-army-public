const localNeedsStyles = new CSSStyleSheet();

localNeedsStyles.replaceSync(`
    .local-needs{
        padding: 5rem 3rem;

        & .local-needs__header{
           & h1{
                font-family: "Cinzel", serif;
                font-size: 2.8rem;
                font-weight: 200;
                text-align: center;
           }
        }

        & .local-needs__image{
            margin: 4rem 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        & .local-needs__content{
            display: grid;
            row-gap: 2.6rem;
            justify-content: center; 
            align-items: center; 
        }
    }

      @media (min-width: 840px){
        .local-needs__content{
            grid-template-columns: auto auto;
            column-gap: 2.6rem;
        }
      }
      
      @media (min-width: 1024px){
            .local-needs__header{
           & h1{ 
                font-size: 4.8rem;
           }
        }
      }
      
      @media (min-width: 1280px){
        .local-needs{
          & .local-needs__header{
            & h1{
                  font-family: "Cinzel", serif;
                  font-size: 4.8rem;
                  font-weight: 200;
                  text-align: center;
            }
          }

        .local-needs__content{
            grid-template-columns: auto auto auto;
            column-gap: 8rem;
        }
      }
`);

class LocalNeedsModule extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const title = this.getAttribute('title');
    const imageUrl = this.getAttribute('imageUrl');

    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [localNeedsStyles];
      this.shadowRoot.innerHTML = `
    <div class="local-needs">
        <div class="local-needs__header">
            <h1>${title}</h1>
        </div>
        <div class="local-needs__image">
            <img src="${imageUrl}"/>
        </div>
        
        <div class="local-needs__content">
            <slot></slot>
        </div>
    </div>
      `;
    }
  }
}

customElements.define('local-needs-module', LocalNeedsModule);
