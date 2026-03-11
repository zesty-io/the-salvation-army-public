const statsNumberStyle = new CSSStyleSheet();

statsNumberStyle.replaceSync(`
  .stats-number__container {
    margin: 0 20px;
    padding: 10px;
    box-shadow: 0px 8px 35px 0px #00000040;
    padding: 32px 16px 32px 16px;
  }
  .stats-number__heading {
    display: flex;
    align-items: center; 
    justify-content: center;

    & img {
      max-width: 34px;
    }

    & span {
      margin-left: 10px;
      font-weight: 700;
      font-size: 80px;
    }
  }
  .stats-number__content p {
    line-height: 28px;
    font-size: 16px;
    text-align: center;
  }

  @media (max-width: 840px){
    .stats-number__heading {
      font-size: 80px;
    }

    .stats-number__container {
      margin-bottom: 40px;
    }
  }
`)
const statsNumberTemplate = document.createElement('template');

class StatsNumberModule extends HTMLElement {

  constructor() {
    super();

    this.attachShadow({ mode : "open" })
    
  }

  connectedCallback() {
    if(this.shadowRoot) {
        this.heading = this.getAttribute("heading");
        this.content = this.getAttribute("content");

        statsNumberTemplate.innerHTML = `
        <div class="stats-number__container">
            <div class="stats-number__heading">
            <span class="stats-number__title">${this.heading}</span>
            </div>
            <div class="stats-number__content">
            <p>${this.content}</p>
            </div>
        </div>
        `
        this.shadowRoot.adoptedStyleSheets = [statsNumberStyle];
        this.shadowRoot.appendChild(statsNumberTemplate.content.cloneNode(true));
    }
  }
}

customElements.define('stats-number', StatsNumberModule);