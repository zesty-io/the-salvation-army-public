const otherEventsListStylesheet = new CSSStyleSheet();

otherEventsListStylesheet.replaceSync(`
    slot {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
    }
    .tsa-other-events-list h3 {
      font-size: 4rem;
      font-weight: 500;
      font-family: "Cinzel", serif;
      margin-bottom: 1rem;
    }

    @media (max-width: 769px) {
      slot {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  `);

class TSAOtherEventsListModule extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    if(this.shadowRoot) {
      this.heading = this.getAttribute('heading');
      this.shadowRoot.innerHTML = `
        <div class="tsa-other-events-list">
          <h3>${this.heading}</h3>
          <slot></slot>
        </div>
      `;
      this.shadowRoot.adoptedStyleSheets = [otherEventsListStylesheet];
    }
  }
}
customElements.define('tsa-other-events', TSAOtherEventsListModule);