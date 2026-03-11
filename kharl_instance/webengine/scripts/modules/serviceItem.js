const serviceItemTemplate = document.createElement('template');

const serviceItemStyle = new CSSStyleSheet();

serviceItemStyle.replaceSync(`
.card {
  background-color: var(--color-base-light);
  display: grid;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 1rem;
  box-shadow: 0px 8px 13px 0px rgba(0, 0, 0, 0.25);
  min-height: 25rem;

  & .tsa-text,
  .tsa-title {
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 1.5rem;
      line-height: 2rem;
  }

  & .card__image{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  & .card__image img{
    width: 107px;
    height: 102px;
  }

  & .card__cta{
    width: 100%;
    align-self: end;
  }

  & .example__cta {
      width: 100%;
      & > button{
        margin: 0 auto;
        display: block;
    }


      & :last-child {
          margin-top: 2rem;
      }
  }

  &>* {
      margin-bottom: 3rem;
  }

  & :last-child {
      margin-bottom: 0;
  }

  .btn {
    font-family: "Montserrat", serif;
    border: none;
    border-radius: .6rem;
    cursor: pointer;
    color: var(--color-base-light);
    transition: all .3s ease-out;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-decoration: none;
  }
  
  .btn:disabled {
    opacity: 55%;
    pointer-events: none;
  }
  
  /* **** Colors **** */
  
  .btn--primary--fill {
    background-color: var(--color-primary);
  }
  
  .btn--primary--fill:hover {
    background-color: var(--color-primary-light);
  }
  
  .btn--success--fill {
    background-color: var(--color-status-success);
  }
  
  .btn--success--fill:hover {
    background-color: var(--color-status-success-dark);
  }
  
  .btn--danger--fill {
    background-color: var(--color-status-danger);
  }
  
  .btn--danger--fill:hover {
    background-color: var(--color-status-danger-dark);
  }
  
  .btn--info--fill {
    background-color: var(--color-status-info);
  }
  
  .btn--info--fill:hover {
    background-color: var(--color-status-info-dark);
  }
  
  .btn--warning--fill {
    background-color: var(--color-status-warning);
    color: var(--color-base-dark);
  }
  
  .btn--warning--fill:hover {
    background-color: var(--color-status-warning-dark);
    color: var(--color-base-light);
  
  }
  
  .btn--dark--fill {
    background-color: var(--color-base-dark);
  }
  
  .btn--dark--fill:hover {
    background-color: var(--color-gray);
  }
  
  .btn--dark--fill:disabled {
    background-color: var(--color-secondary-blue-dark);
  }
  
  /* **** Variants **** */
  .btn--primary--outline {
    background-color: var(--color-base-light);
    border: 1px solid var(--color-primary);
    color: var(--color-base-dark);
  }
  
  .btn--primary--outline:hover {
    background-color: var(--color-primary-light);
    color: var(--color-base-light);
  }
  
  .btn--success--outline {
    background-color: var(--color-base-light);
    border: 1px solid var(--color-status-success);
    color: var(--color-status-success);
  }
  
  .btn--success--outline:hover {
    background-color: var(--color-status-success-dark);
    border-color: transparent;
    color: var(--color-base-light);
  }
  
  .btn--danger--outline {
    background-color: var(--color-base-light);
    border: 1px solid var(--color-status-danger);
    color: var(--color-status-danger);
  }
  
  .btn--danger--outline:hover {
    background-color: var(--color-status-danger-dark);
    border-color: transparent;
    color: var(--color-base-light);
  }
  
  .btn--info--outline {
    background-color: var(--color-base-light);
    border: 1px solid var(--color-status-info);
    color: var(--color-status-info);
  }
  
  .btn--info--outline:hover {
    background-color: var(--color-status-info-dark);
    border-color: transparent;
    color: var(--color-base-light);
  }
  
  .btn--warning--outline {
    background-color: var(--color-base-light);
    border: 1px solid var(--color-status-warning);
    color: var(--color-status-warning);
  }
  
  .btn--warning--outline:hover {
    background-color: var(--color-status-warning-dark);
    border-color: transparent;
    color: var(--color-base-light);
  }
  
  .btn--dark--outline {
    background-color: var(--color-base-light);
    border: 1px solid var(--color-base-dark);
    color: var(--color-base-dark);
  }
  
  .btn--dark--outline:hover {
    background-color: var(--color-gray);
    border-color: var(--color-secondary-blue);
    color: var(--color-base-light);
  }
  
  .btn--dark--outline:disabled {
    border-color: var(--color-secondary-blue-dark);
    color: var(--color-base-dark);
  }
  
  
  /* **** Sizes **** */
  
  .btn--small {
    padding: .5rem 1.2rem;
  }
  
  .btn--medium {
    padding: 1.6rem 1.8rem;
  }
  
  .btn--large {
    padding: 2rem 2.2rem;
  }
  
  .btn--fillWidth {
    width: 100%;
  }
  .cta-btn .btn {
    font-size: 14px;
    font-weight: 400;
    line-height: 28px;
    text-align: center;
  
  }
  input[type='checkbox']::checked {
    border: none;
    outline: 2px solid #fff;
    background: #000;
    color: #fff;
  }
}
`);

class TSAServiceItemModule extends HTMLElement{

  constructor() {
    super();
    this.attachShadow({mode: "open"});
    
  }

  connectedCallback() {
    if(this.shadowRoot) {
      this.imageUrl = this.getAttribute('imageUrl');
    this.serviceTitle = this.getAttribute('serviceTitle');
    this.href = this.getAttribute('href');
    
    serviceItemTemplate.innerHTML = `
      <div class="card">
        <div class="card__image">
            <img src="${this.imageUrl}" alt="sample image" />
            <h3 class="tsa-title">${this.serviceTitle}</h3>
        </div>

        <div class="card__cta">
            <a href="${this.href}" class="btn btn--small btn--dark--outline">Learn More</a>
        </div>
      </div>
    `;

      this.shadowRoot.adoptedStyleSheets = [serviceItemStyle];
      this.shadowRoot.appendChild(serviceItemTemplate.content.cloneNode(true));
    }
  }
}

customElements.define('service-item', TSAServiceItemModule);