const imageBoxTextStylesheet = new CSSStyleSheet();

imageBoxTextStylesheet.replaceSync(`
  .image-text-box {
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    padding: 0 2.5rem;
  }
  .image-text-box:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    background: rgba(0,0,0, 0.6);
    z-index: 1;
  }
  .image-text-box__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 10;
    color: #fff;
  }
  .image-text-box__subheading {
    visibility: hidden;
    height: 0;
    opacity: 0;
    font-size: 1.4rem;
    text-align: center;
    line-height: 1.6rem;
    margin-bottom: 1.2rem;
    transition: height 0.4s ease-in-out, visibility 0.5s ease-in-out, opacity 0.5s ease-in-out;
  }
  .image-text-box__heading {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    text-transform: uppercase;
  }
  .image-text-box:hover .image-text-box__subheading {
    visibility: visible;
    height: 1.6rem;
    opacity: 1;
    transition: height 0.4s ease-in-out, visibility 0.5s ease-in-out, opacity 0.5s ease-in-out;
  }
  @media (max-width: 769px) {
    .image-text-box:active .image-text-box__subheading,
    .image-text-box:focus .image-text-box__subheading {
      visibility: visible;
      height: 1.6rem;
      opacity: 1;
      transition: height 0.4s ease-in-out, visibility 0.5s ease-in-out, opacity 0.5s ease-in-out;
    }
  }
`);

class ImageBoxTextModule extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'})
    
  }

  connectedCallback() {
    if(this.shadowRoot) {
      this.imgUrl = this.getAttribute('imgUrl');
      this.heading = this.getAttribute('heading');
      this.subheading = this.getAttribute('subheading');
      this.shadowRoot.adoptedStyleSheets = [imageBoxTextStylesheet];
      this.shadowRoot.innerHTML = `
        <div class="image-text-box" style="background-image: url('${this.imgUrl}')" tab-index="0">
          <div class="image-text-box__wrapper">
            <h3 class="image-text-box__heading">${this.heading}</h3>
            <div class="image-text-box__subheading">
              <span>${this.subheading}</span>
            </div>
          </div>
        </div>
      `
    }
  }
}

customElements.define('tsa-image-text-box', ImageBoxTextModule);
// export const ImageBoxText = ({imgUrl, heading, subheading}: ImageBoxTextProps) => {
//   return`
//     <tsa-image-text-box imgUrl="${imgUrl}" heading="${heading}" subheading="${subheading}"></tsa-image-text-box>
//   `
// }