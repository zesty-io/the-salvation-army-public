const heroStyles = new CSSStyleSheet();

heroStyles.replaceSync(`
    .tsa-hero {
    background: rgba(175, 183, 187, 1);
    height: 50rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 2rem;
    position: relative;
    overflow: hidden; 

    &.light {
      background: #EFF1F0;
    }

    & .tsa-hero__bg {
        position: absolute;
        height: 100%;

        & img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            filter: opacity(50%);

            /* width: auto;
            height: 100%;
            max-width: none;
            max-height: none; */
            /* mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%); */
        }
    }

    & .tsa-content {
        text-align: center;
        z-index: 40;
        display: flex;
        flex-direction: column;
        justiy-content: center;

        & h1 {
            font-family: "Cinzel", serif;
            font-size: 2.8rem;
            font-weight: 200;
            line-height: 3.36rem;
            margin: 0;
            margin-bottom: 3rem;
        }

        & p {
            font-family: "Montserrat", serif;
            font-size: 1.6rem;
            
            margin-top: 1.6rem;
            line-height: 2.8rem;
            padding: 0;
            margin-bottom: 3rem;
        }
    }
}

@media (min-width: 640px){
  .tsa-hero{
    & .tsa-content{
      & h1{
        padding: 0 10rem;
        font-size: 3.6rem;
      }

      & p{
        padding: 0 10rem;
      }
    }
  }
}

@media (min-width: 1024px){
  .tsa-hero{
    padding: 5rem 2rem;
    & .tsa-content{
      & h1{
        padding: 0 15rem;
        font-size: 4.6rem;
      }

      & p {
        padding: 0 10rem;

      }
    }
  }
}

@media (min-width: 1280px){
  .tsa-hero{
    padding: 5rem 2rem;
    & .tsa-content{
      & h1{
        padding: 0 28rem;
        font-size: 6.4rem;
        line-height: 7.68rem;
        margin-bottom: 0;
      }

      & p{
        padding: 0 50rem;
      }
    }
  }
}
`);

class HeroModule extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const title = this.getAttribute('title');
    const subtitle = this.getAttribute('subtitle');
    const imageUrl = this.getAttribute('imageUrl');
    const lightMode = this.getAttribute('lightMode');

    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [heroStyles];

      this.shadowRoot.innerHTML = `
        <div part="body" class="tsa-hero ${lightMode === 'true' ? 'light' : ''}">
          <div class="tsa-hero__bg">
            <img src="${imageUrl}" />
          </div>
          <div part="text-content" class="tsa-content">
            <h1 part="title">${title}</h1>
            <p part="subtitle">
               ${subtitle}
            </p>
          </div>
    
          <slot name="cta">
          </slot>
        </div>
        `;
    }
  }
}

customElements.define('hero-module', HeroModule);
