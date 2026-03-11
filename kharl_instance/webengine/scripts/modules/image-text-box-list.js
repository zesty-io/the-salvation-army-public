const imageTextBoxListStylesheet = new CSSStyleSheet();

imageTextBoxListStylesheet.replaceSync(`
  slot {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px 40px;
  }
  .image-text-box-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .image-text-box__header {
    text-align: center;
    margin-bottom: 2rem;
  }
  .image-text-box__subheading {
    font-size: 1.6rem;
    line-height: 2.8rem;
    width: 75%;
    margin: 0 auto;
  }
  .tsa-title {
    font-size: 3.8rem;
    font-family: "Cinzel", serif;
    font-weight: 200;
    text-align: center;
  }
  @media (max-width: 769px) {
    slot {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`);

class ImageTextBoxListModule extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        
    }

    connectedCallback() {
        if(this.shadowRoot) {
            this.heading = this.getAttribute('heading');
            this.subheading = this.getAttribute('subheading');
            this.shadowRoot.adoptedStyleSheets = [imageTextBoxListStylesheet];
            this.shadowRoot.innerHTML = `
                <div class="image-text-box-list">
                    <div class="image-text-box__header">
                    <h2 class="tsa-title">${this.heading}</h2>
                    <div class="image-text-box__subheading">${this.subheading}</div>
                    </div>
                    <slot></slot>
                </div>
                `
        }
    }
}

customElements.define('tsa-image-text-box-list', ImageTextBoxListModule);
// export const ImageTextBoxList = ({heading, subheading}: ImageTextBoxListProps) => {
//   return`
//     <tsa-image-text-box-list heading="${heading}" subheading="${subheading}">
//       <tsa-image-text-box imgUrl="https://w1w702z1.media.zestyio.com/image-sample-full.jpg" heading="Seasonal" subheading="1-3 sentences explaining what this means"></tsa-image-text-box>
//       <tsa-image-text-box imgUrl="https://w1w702z1.media.zestyio.com/image-sample-full.jpg" heading="DISASTER" subheading="1-3 sentences explaining what this means"></tsa-image-text-box>
//       <tsa-image-text-box imgUrl="https://w1w702z1.media.zestyio.com/image-sample-full.jpg" heading="GRANTS" subheading="1-3 sentences explaining what this means"></tsa-image-text-box>
//       <tsa-image-text-box imgUrl="https://w1w702z1.media.zestyio.com/image-sample-full.jpg" heading="IN-KIND" subheading="1-3 sentences explaining what this means"></tsa-image-text-box>
//       <tsa-image-text-box imgUrl="https://w1w702z1.media.zestyio.com/image-sample-full.jpg" heading="POINT-OF-SALE/
// ROUND-UP" subheading="1-3 sentences explaining what this means"></tsa-image-text-box>
//       <tsa-image-text-box imgUrl="https://w1w702z1.media.zestyio.com/image-sample-full.jpg" heading="CAUSE
// MARKETING" subheading="1-3 sentences explaining what this means"></tsa-image-text-box>
//       <tsa-image-text-box imgUrl="https://w1w702z1.media.zestyio.com/image-sample-full.jpg" heading="VOLUNTEER
// ENGAGEMENT" subheading="1-3 sentences explaining what this means"></tsa-image-text-box>
//   <tsa-image-text-box imgUrl="https://w1w702z1.media.zestyio.com/image-sample-full.jpg" heading="MATCHING GIFT" subheading="1-3 sentences explaining what this means"></tsa-image-text-box>
//     </tsa-image-text-box-list>
//   `
// };