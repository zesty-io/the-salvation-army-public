class TSATextWithIconComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log(this.getAttribute('title'));
    this.innerHTML = `
      <div class="text-with-icon">
        <i class="bi bi-${this.getAttribute('bootstrapIcon')}"></i>
        <h6>${this.getAttribute('title')}</h6>
      </div>
      `;
  }
}

customElements.define('tsa-text-with-icon', TSATextWithIconComponent);