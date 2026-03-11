
const accordionItemTemplate = document.createElement('template');

const accordionItemCss = new CSSStyleSheet();

accordionItemCss.replaceSync(`
  .accordion-item {
    border: 1px solid #ddd;
    width: auto;
    background: #fff;
  }

  .accordion-header {
    background-color: transparent;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: start;
    cursor: pointer;
    width: auto;
    position: relative;
    flex-direction: column;
  }
  .accordion-header h3 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 600;
  }
  .accordion-header span {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 600;
  }
  .accordion-content {
    max-height: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: all .3s ease-in-out;
  }

  ::slotted( p ) {
    margin-bottom: 10px;
  }

  .accordion-content div {
    padding: 10px;
    padding-top: 0;
  }
  
  :host .accordion-content {
    visibility: visible;
  }

  .accordion-toggle {
    width: 10px;
    height: 10px;
    position: absolute;
    top: 50%;
    right: 1.5rem;
    transform: translate(-50%, -50%);
  }
  .accordion-header .accordion-toggle .line-2  {
    opacity: 1;
    transition: opacity 0.5 ease;
  }

  .accordion-header.show .accordion-toggle .line-2 {
    opacity: 0;
  }

  .line-1 {
    width: 100%;
    height: 1px;
    background: #000;
    display: block;
    position: absolute;
    top: 48%;
    transform: translateY(-50%);
  }

  .line-2 {
    width: 1px;
    height: 100%;
    background: #000;
    display: block;
    position: absolute;
    left: 52%;
    transform: translateX(-50%);
  }

`)

class AccordionItemComponent extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: "open"});
    
    this.isOpen = false;
  }
  
  connectedCallback() {
    if (this.shadowRoot) {
      const root = this.shadowRoot;
      this.heading = this.getAttribute('heading');
      this.subtext = this.getAttribute('subtext');
      accordionItemTemplate.innerHTML = `
      <style>
        ::slotted( p ) {
          margin-bottom: 10px;
        }
      </style>
      <div class="accordion-item">
        <div class="accordion-header">
          <h3>${this.heading}</h3>
          <span>${this.subtext ? this.subtext : ''}</span>
          <div class="accordion-toggle">
            <span class="line-1"></span>
            <span class="line-2"></span>
          </div> 
        </div>
        <div class="accordion-content">
          <div>
            <slot></slot>
          </div>
        </div>
      </div>
    `;

      this.shadowRoot.adoptedStyleSheets = [accordionItemCss];
      this.shadowRoot.appendChild(accordionItemTemplate.content.cloneNode(true));
      const headerToggle = root.querySelector('.accordion-header');
      headerToggle?.addEventListener('click', () => this.toggleContent(headerToggle));
    }
  }

  toggleContent(headerEl) {

    const content = this.shadowRoot?.querySelector('.accordion-content');
    if (content) {
      if (content.style.maxHeight) {
        content.style.maxHeight = ''; // Close the accordion
        headerEl.classList.toggle('show');
      } else {
        content.style.maxHeight = content.scrollHeight + 'px'; // Open the accordion
        headerEl.classList.toggle('show');
      }
      // 
      this.isOpen = !this.isOpen;
    }
  }
}

customElements.define('tsa-accordion-item', AccordionItemComponent);
