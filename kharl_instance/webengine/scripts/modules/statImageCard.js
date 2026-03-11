const statImageCardStyles = new CSSStyleSheet();

statImageCardStyles.replaceSync(`
    .stat-image-card{
      max-width: 50rem;
        text-align: center;
        & .stat-image-card__img{
            display: flex;
            align-items: center;
            justify-content: center;
        }

        & .stat-image-card__header{
            margin: 2rem 0;
            & h1{
                font-size: 2rem;
                margin: 0;
            }
        }

        & .stat-image-card__content{
            padding: 0 2rem;
        }
    }

    @media (min-width: 1280px) {
       .stat-image-card__content{
        padding: 0 4rem;
      }
    }
`);

class StatsImageCardModule extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const title = this.getAttribute('title');
    const imageUrl = this.getAttribute('imageUrl');

    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [statImageCardStyles];
      this.shadowRoot.innerHTML = `
      <div class="stat-image-card">
        <div class="stat-image-card__img">
            <img src="${imageUrl}" />
        </div>
        <div class="stat-image-card__header">
            <h1>${title}</h1>
        </div>
        <div class="stat-image-card__content">
            <slot></slot>
        </div>
      </div>
      `;
    }
  }
}

customElements.define('stat-image-card-module', StatsImageCardModule);
