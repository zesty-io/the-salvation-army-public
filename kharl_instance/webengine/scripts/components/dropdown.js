const dropdownStyles = new CSSStyleSheet();

dropdownStyles.replaceSync(`
:host{
    display: inline-block;
    position: relative;
}

.toggle-btn{
    font-size: 1.6rem;
    color: #FFF;
    background-color: #000;
    padding: .8rem 1.6rem;
    border: none;
    cursor: pointer;
    width: fit-content;
    display: flex;
    align-items: center;

    & :last-child{
        margin-left: 1rem;
    }
}

.toggle-btn:hover{
    background-color: rgba(90, 93, 93, 1);
}

.toggle-btn:hover .dropdown-cotent{
    height: auto !important;
}

.toggle-btn-open{
    background-color: rgba(90, 93, 93, 1);
}

.dropdown-content{
    overflow: hidden;
    position: absolute;
    background-color: #000;
    width: 20rem;
    height: 0;
    top: 3.4rem;
    transition: all .3s ease;
}

.open{
    height: auto !important;
}

`);

class DropdownComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.open = false;
  }

  connectedCallback(){
      this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [dropdownStyles];
      this.shadowRoot.innerHTML = `
      <button class="toggle-btn ${this.open ? 'toggle-btn-open' : ''}">${this.getAttribute('title')}
        ${
          this.open
            ? `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.64663 4.64592C7.69308 4.59935 7.74825 4.56241 7.809 4.5372C7.86974 4.512 7.93486 4.49902 8.00063 4.49902C8.0664 4.49902 8.13152 4.512 8.19226 4.5372C8.25301 4.56241 8.30819 4.59935 8.35463 4.64592L14.3546 10.6459C14.4485 10.7398 14.5013 10.8671 14.5013 10.9999C14.5013 11.1327 14.4485 11.26 14.3546 11.3539C14.2607 11.4478 14.1334 11.5005 14.0006 11.5005C13.8679 11.5005 13.7405 11.4478 13.6466 11.3539L8.00063 5.70692L2.35463 11.3539C2.26075 11.4478 2.13341 11.5005 2.00063 11.5005C1.86786 11.5005 1.74052 11.4478 1.64663 11.3539C1.55274 11.26 1.5 11.1327 1.5 10.9999C1.5 10.8671 1.55274 10.7398 1.64663 10.6459L7.64663 4.64592Z" fill="white"/>
                </svg>
                `
            : ` <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.64689 4.64592C1.69334 4.59935 1.74852 4.56241 1.80926 4.5372C1.87001 4.512 1.93513 4.49902 2.00089 4.49902C2.06666 4.49902 2.13178 4.512 2.19253 4.5372C2.25327 4.56241 2.30845 4.59935 2.35489 4.64592L8.00089 10.2929L13.6469 4.64592C13.6934 4.59943 13.7486 4.56255 13.8093 4.53739C13.87 4.51223 13.9351 4.49929 14.0009 4.49929C14.0666 4.49929 14.1317 4.51223 14.1925 4.53739C14.2532 4.56255 14.3084 4.59943 14.3549 4.64592C14.4014 4.6924 14.4383 4.74759 14.4634 4.80833C14.4886 4.86907 14.5015 4.93417 14.5015 4.99992C14.5015 5.06566 14.4886 5.13076 14.4634 5.1915C14.4383 5.25224 14.4014 5.30743 14.3549 5.35392L8.35489 11.3539C8.30845 11.4005 8.25327 11.4374 8.19253 11.4626C8.13178 11.4878 8.06666 11.5008 8.00089 11.5008C7.93513 11.5008 7.87001 11.4878 7.80926 11.4626C7.74851 11.4374 7.69334 11.4005 7.64689 11.3539L1.64689 5.35392C1.60033 5.30747 1.56339 5.2523 1.53818 5.19155C1.51297 5.13081 1.5 5.06568 1.5 4.99992C1.5 4.93415 1.51297 4.86903 1.53818 4.80828C1.56339 4.74754 1.60033 4.69236 1.64689 4.64592Z" fill="white"/>
                </svg>   
             `
        }
      </button>
      <div class="dropdown-content ${this.open ? 'open' : ''}">
        <slot></slot>
      </div>
      `;

      const root = this.shadowRoot;
      const toggleBtn = root.querySelector('.toggle-btn');

      toggleBtn?.addEventListener('click', (event) => {
        this.toggleState();
      });

      toggleBtn?.addEventListener('blur', (event) => {

        console.log(event.target)
      });
    }
  }

  toggleState = () => {
    this.open = !this.open;
    this.render();
  };
}

customElements.define('tsa-dropdown', DropdownComponent);