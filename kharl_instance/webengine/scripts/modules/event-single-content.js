const eventSingleContent = document.createElement('template');

const eventSingleStyle = new CSSStyleSheet();

eventSingleStyle.replaceSync(`
  ::slotted(p) {
    font-size: 1.5rem !important;
    margin-bottom: 1.2rem !important;
    line-height: 28px !important;
  }
  .event-single-content h3 {
    font-size: 2rem;
  }
`)

class EventSingleContentModule extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    if(this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [eventSingleStyle];
      this.shadowRoot.innerHTML = `
        <div class="event-single-content">
          <h3>About the Event</h3>
          <slot></slot>
        </div>
      `
    }
  }
}
customElements.define('tsa-event-single-content', EventSingleContentModule);