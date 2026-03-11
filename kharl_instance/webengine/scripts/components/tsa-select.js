  const selectStyles = new CSSStyleSheet();

    selectStyles.replaceSync(`
    .dropdown {
    position: relative;
    width: auto;
    }

    #dropdown-input {
    padding: 8px 12px;
    border: 1px solid #000000;
    border-radius: 5px;
    width: 100%;
    }

    .dropdown-menu {
    display: none;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1;
    min-height: 200px;
    overflow-y: auto;
    width: 100%;
    border: 1px solid #000000;
    padding: 12px;
    border-radius: 5px;
    }

    .dropdown-item {
    cursor: pointer;
    margin-bottom: 16px;
    }
    .dropdown-item label {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    text-align: left;

    }
    .dropdown-buttons {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin-top: 8px;
    }

    .dropdown-buttons button {
    margin-left: 8px;
    display: flex;
    flex-direction: column;
    }
    #clear-btn {
    position: relative;
    padding: 16px 33px;
    border-bottom: 1px solid #5a5d5d;
    border-top: 1px solid #5a5d5d;
    font-size: 13px;
    }

    .close-btn {
    display: inline-block;
    width: 16px;
    height: 16px;
    position: absolute;
    top: 45%;
    left: 0;
    transform: rotate(45deg) translateY(-50%);
    }
    .line-1 {
    display: block;
    width: 100%;
    height: 1px;
    background: #5a5d5d;
    top: 50%;
    position: absolute;
    transform: translateY(-50%);
    }
    .line-2 {
    display: block;
    width: 1px;
    height: 100%;
    background: #5a5d5d;
    transform: translateX(-50%);
    position: absolute;
    left: 50%;
    }
    .cta-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 16px;
    }

    .btn {
    font-family: "Montserrat", serif;
    border: none;
    border-radius: .6rem;
    cursor: pointer;
    color: var(--color-base-light);
    transition: all .3s ease-out;
    font-size: 1.6rem;
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
    padding: 1.2rem 1.4rem;
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
    `)


class SelectModule extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode : "open" });
  }

  connectedCallback() {
    if(this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [selectStyles];
    
    const optionsAttr  = this.getAttribute('options');
    const optionsItems = optionsAttr ? JSON.parse(optionsAttr) : [];
    this.selectItems = optionsItems;
    this.label = this.getAttribute('label');
    this.placeholder = this.getAttribute('placeholder');

    let optionsHTML = '';
    optionsItems.map((option) => {
      optionsHTML += `
            <div class="dropdown-item">
              <input type="checkbox" id="option1" value="${option.value}">
              <label for="option1">${option.label}</label>
            </div>
      `;
    });

    this.shadowRoot.innerHTML = `
      <div id="dropdown" class="dropdown">
        <label for="dropdown-input" class="dropdown__label">${this.label}</label>
        <input class="input--large" type="text" id="dropdown-input" placeholder="${this.placeholder}" readonly>
        <div id="dropdown-menu" class="dropdown-menu">
          ${optionsHTML}
          <div class="dropdown-buttons">
            <div id="clear-btn">
              <div class="close-btn">
                <span class="line-1"></span>
                <span class="line-2"></span>
              </div>
              Clear selections
            </div>
            <div class="cta-btn">
              <button type="button" id="cancel-btn" class="btn btn--small btn--dark--outline">Cancel</button>
              <button type="button" id="apply-btn" class="btn btn--small btn--dark--fill">Apply</button>
            </div>
          </div>
        </div>
      </div>
      `;



      // this.shadowRoot.appendChild(template.content.cloneNode(true));

      // Get references to the required elements
      const dropdownInput = this.shadowRoot.querySelector('#dropdown-input');
      const clearBtn = this.shadowRoot.querySelector('#clear-btn');
      const applyBtn = this.shadowRoot.querySelector('#apply-btn');
      const cancelBtn = this.shadowRoot.querySelector('#cancel-btn');

      // Add event listeners
      dropdownInput?.addEventListener('click', this.toggleDropdown.bind(this));
      clearBtn?.addEventListener('click', this.clearSelectors.bind(this));
      applyBtn?.addEventListener('click', this.applySelectors.bind(this));
      window.addEventListener('click', this.handleOutsideClick.bind(this));
    }
  }

  toggleDropdown(event) {
    const dropdownMenu = this.shadowRoot?.querySelector('#dropdown-menu');
    if (dropdownMenu) {
      if ((dropdownMenu).style.display === 'none') {
        (dropdownMenu).style.display = 'block';
      } else {
        (dropdownMenu).style.display = 'none';
      }
    }
  
    if (event) {
      event.stopPropagation();
    }
  }

  clearSelectors() {
    const checkboxes = this.shadowRoot?.querySelectorAll('input[type="checkbox"]');
    if (checkboxes) {
      checkboxes.forEach((checkbox) => {
        (checkbox).checked = false;
      });
    }
  }

  applySelectors() {
    const dropdownInput = this.shadowRoot?.querySelector('#dropdown-input');
    const selectedOptions = Array.from(this.shadowRoot?.querySelectorAll('input[type="checkbox"]:checked') || [])
      .map((checkbox) => checkbox.nextElementSibling?.textContent);
  
    if (dropdownInput) {
      (dropdownInput).value = selectedOptions.join(', ');
    }
  
    this.toggleDropdown();
  }

  handleOutsideClick(event) {
    const dropdownInput = this.shadowRoot?.querySelector('#dropdown-input');
    const dropdownMenu = this.shadowRoot?.querySelector('#dropdown-menu');
    
    console.log(event?.target);
  
    if (dropdownMenu && dropdownMenu.contains(event?.target) && event?.target !== dropdownInput) {
      (dropdownMenu).style.display = 'none';
    }
  }
  
}

customElements.define('tsa-select', SelectModule);