const heroTextTemplate = document.createElement('template');

const heroTextStyle = new CSSStyleSheet();

heroTextStyle.replaceSync(`
  .tsa-hero-text {
    min-height: 50rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 2rem;
    position: relative;
    overflow: hidden;
    text-align: center;
  }
  .tsa-hero-text__heading {
    width: 100%;
  }
  .tsa-hero-text__heading h2 {
    padding: 0px 28rem;
    font-size: 6.4rem;
    line-height: 7.68rem;
    font-family: Cinzel, serif;
    font-weight: 200;
    width: 100%;
    box-sizing: border-box;
  }
  .tsa-hero-text__content {
    text-align: center;
    font-family: Montserrat, serif;
    font-size: 1.6rem;
    margin-top: 1.6rem;
    line-height: 2.8rem;
  }
  @media (max-width: 769px) {
    .tsa-hero-text__heading h2 {
      padding: 0px 4rem;
      font-size: 3.4rem;
      text-align: center;
    }
  }
`)


class HeroTextModule extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

  }

  connectedCallback() {
    if(this.shadowRoot) {
        this.heading = this.getAttribute('heading')

        heroTextTemplate.innerHTML = `
        <div class="tsa-hero-text">
            <div class="tsa-hero-text__heading"><h2>${this.heading}</h2></div>
            <div class="tsa-hero-text__content">
            <slot></slot>
            </div>
        </div>
        `
        this.shadowRoot.adoptedStyleSheets = [heroTextStyle];
        this.shadowRoot.appendChild(heroTextTemplate.content.cloneNode(true));
    }
  }
}
customElements.define('tsa-hero-text', HeroTextModule);