const statsStyles = new CSSStyleSheet();

statsStyles.replaceSync(`
    .stats{
        background: rgba(239, 241, 240, 1);
        padding: 5rem 2rem;
        & .stats__header{
            margin-bottom: 4rem;
            & h1{
                margin:0;
                font-size: 2.8rem;
                font-family: "Cinzel", serif;
                font-weight: 200;
                text-align: center;
            }
        }
    }

@media (min-width: 840px) {
  .stats{
          & .stats__header{
              & h1{
                  font-size: 3.8rem;
              }
          }
      }
  }

@media (min-width: 1280px) {
 .stats{
          & .stats__header{
              & h1{
                  font-size: 4.8rem;
              }
          }
      }
  }
}
    
`);

class StatsModule extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const title = this.getAttribute('title');

    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [statsStyles];

      this.shadowRoot.innerHTML = `
        <div class="stats">
            <div class="stats__header">
                <h1 class="tsa-title">${title}</h1>
            </div>

            <div class="stats__content">
                <slot name="content"></slot>
            </div>
        </div>
      `;
    }
  }
}

customElements.define('stats-module', StatsModule);