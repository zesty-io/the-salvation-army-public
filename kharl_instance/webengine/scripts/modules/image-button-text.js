const imageButtonStyles = new CSSStyleSheet();

imageButtonStyles.replaceSync(`
    .ibt {
        display: flex;
        align-items: center;
        justify-content: start;
        padding: 7.5rem 2rem;
        background: inherit;

        & .ibt__header{
            & h1{
                margin: 0;
                font-size: 2.8rem;
                font-family: "Cinzel", serif;
                font-weight: 200;
            }
        }
    }

    .ibt__content-wrapper {
      display: flex;
      align-items: start;
      justify-content: start;
      flex-direction: column;
      padding-left: 5rem;
      width: 60%;
    }

    & .ibt__top{
        order: 1 !important;
    }

    .ibt__left{
      order: 1 !important;
      width: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .ibt__right{
      order: 2 !important;
      width: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .ibt > * {
        margin-bottom: 3rem;
    }

    .ibt:last-child{
        margin-bottom: 0rem;
    }

    #ibt {
      display: flex;
      align-items: start;
      text-align: start;
      font-size: 1.6rem;
      line-height: 2.8rem;

    & #ibt__cta {
        margin-top: 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        & :first-child {
            margin-bottom: 2rem;
        }
      }
    }
    @media(max-width: 769px){
      .ibt {
        flex-direction: column;
      }
      .ibt__right {
        order: 1 !important;
      }
      .ibt__content-wrapper {
        order: 2;
        width: 100%;
        padding: 0 5%;
      }
    }
`);

class ImageButtonTextModule extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const title = this.getAttribute('title');
    const imageUrl = this.getAttribute('imageUrl');
    const imagePos = this.getAttribute('imagePosition');

    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [imageButtonStyles];

      this.shadowRoot.innerHTML = `
        <div class="ibt">
            <div class="ibt__image ibt__${imagePos}">
                <img src="${imageUrl}" />
            </div>
            <div class="ibt__content-wrapper">
              <div class="ibt__header">
                  <h1 part="heading">${title}</h1>
              </div>
              
              <div class="ibt__content">
                  <slot></slot>
              </div>
              <slot name="cta"></slot>
            </div>
        </div>
      `;
    }
  }
}

customElements.define('image-button-text', ImageButtonTextModule);

