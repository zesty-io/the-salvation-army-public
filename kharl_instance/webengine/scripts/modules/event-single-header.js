const eventSingleHeaderStyle = new CSSStyleSheet();

eventSingleHeaderStyle.replaceSync(`
`);

class EventSingleHeaderModule extends HTMLElement {
  constructor() {
    super();
    // this.attachShadow({mode: 'open'});

  }

  connectedCallback() {
    this.heading = this.getAttribute('heading');
    this.imageUrl = this.getAttribute('imageUrl');
    this.innerHTML = `
        <div class="tsa-event-single">
          <div class="tsa-event-single__breadcrumb"><a href="#"><i class="bi bi-arrow-left-short"></i>Back to Events</a></div>
          <div class="tsa-event-single__wrapper">
            <div class="tsa-event-single__heading"><h1>${this.heading}</h1></div>
            <div class="tsa-event-single__socials">
              <ul>
                <li><a><i class="bi bi-facebook"></i>Share</a></li>
                <li><a><i class="bi bi-linkedin"></i>Share</a></li>
                <li><a><i class="bi bi-twitter-x"></i>share</a></li>
              </ul>
            </div>
            <div class="tsa-event-single__image">
              <img src="${this.imageUrl}" alt="Event Header" />
            </div>
          </div>
        </div>
      `
  }
}
customElements.define('tsa-event-single-header', EventSingleHeaderModule);