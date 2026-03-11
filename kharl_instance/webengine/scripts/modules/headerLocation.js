const headerLocationStyles = new CSSStyleSheet();

headerLocationStyles.replaceSync(`
:host{
    display: none;

}

@media (min-width: 1280px){
    :host{
        display: flex;
        position: sticky;
        top: 7.2rem;
        align-items: start;
        justify-content: space-between;
        background-color: #000;
        color: #FFF;
        padding: 1rem 2rem;
        z-index: 50;
    }
    
    svg{
        margin-right: 1rem;
        transform: scale(1.1);
    }
    
    .header-location__title{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-right: auto;
    
        & .title{
            font-size: 1.6rem;
            font-weight: 600;
            margin-bottom: .5rem;
        }
    
        & .subtitle{
            font-size: 1.3rem;
            font-weight: 400;
            color: #FFF;
            text-decoration: none;
        }
    }
    
    .header-location__menu{
        align-self: center;
        z-index: 2;
    }  
}
`);

class HeaderLocationModule extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [headerLocationStyles];
      this.shadowRoot.innerHTML = `

        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_5734_6188" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                <rect width="20" height="20" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_5734_6188)">
                <path d="M9.58493 10.2883C10.0519 10.2883 10.4511 10.1252 10.7825 9.79904C11.114 9.47285 11.2797 9.08071 11.2797 8.62264C11.2797 8.16457 11.1135 7.77296 10.7809 7.44781C10.4484 7.12266 10.0487 6.96008 9.58174 6.96008C9.11479 6.96008 8.71559 7.12318 8.38413 7.44937C8.05268 7.77557 7.88695 8.1677 7.88695 8.62577C7.88695 9.08384 8.05321 9.47545 8.38573 9.80061C8.71825 10.1258 9.11798 10.2883 9.58493 10.2883ZM9.58333 17.3291C11.4193 15.7169 12.8242 14.1705 13.7982 12.6899C14.7721 11.2092 15.259 9.91244 15.259 8.79946C15.259 7.12117 14.7155 5.74146 13.6285 4.66035C12.5415 3.57924 11.1931 3.03869 9.58333 3.03869C7.97356 3.03869 6.62517 3.57924 5.53815 4.66035C4.45113 5.74146 3.90762 7.12117 3.90762 8.79946C3.90762 9.91244 4.39459 11.2092 5.36851 12.6899C6.34244 14.1705 7.74738 15.7169 9.58333 17.3291ZM9.58333 19.1667C7.22163 17.1591 5.45064 15.2908 4.27038 13.5617C3.09013 11.8327 2.5 10.2453 2.5 8.79946C2.5 6.67505 3.20052 4.95515 4.60155 3.63976C6.00257 2.32438 7.66316 1.66669 9.58333 1.66669C11.5035 1.66669 13.1641 2.32438 14.5651 3.63976C15.9661 4.95515 16.6667 6.67505 16.6667 8.79946C16.6667 10.2453 16.0765 11.8327 14.8963 13.5617C13.716 15.2908 11.945 17.1591 9.58333 19.1667Z" fill="white"/>
            </g>
        </svg>

        <div class="header-location__title">        
            <span class="title">${this.getAttribute('title')}</span>
            <a class="subtitle" href="/">${this.getAttribute('subtitle')}</a>
        </div>

        <div class="header-location__menu">
            <slot></slot>
        </div>
      `;

        const locationHeader = this.shadowRoot.querySelector('.title')
        if(window.location.href.indexOf("corps") != -1){
            locationHeader.textContent ="The Salvation Army Corps"
        }
        else{
            locationHeader.textContent ="The Salvation Army National"
        }
    }
  }
}

customElements.define('header-location-module', HeaderLocationModule);