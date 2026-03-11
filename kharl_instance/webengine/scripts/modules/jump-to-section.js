const jumpToSectoionTemplate = document.createElement('template');

const jumpToSectionStylesheet = new CSSStyleSheet();

jumpToSectionStylesheet.replaceSync(`
  slot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3rem;
    width: 75%;
    margin: 0 auto;
    box-sizing: border-box;
  }
  .tsa-jump-to-section h3 {
    font-family: "Cinzel", serif;
    font-size: 48px;
    font-weight: 400;
    line-height: 57.6px;
    text-align: center;
  }
  @media (max-width: 769px) {
    .tsa-jump-to-section h3 {
      font-size: 38px;
    }
    slot {
      flex-direction: column;
      width: 100%;
      margin: 0 auto;
    }
    ::slotted(a) {
      width: 100%;
      margin-bottom: 2rem !important;
    }
  }
`);


class TSAJumpToSectionModule extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'})
    
  }

  connectedCallback() {
    if(this.shadowRoot){
        this.heading = this.getAttribute('heading');
        this.shadowRoot.adoptedStyleSheets = [jumpToSectionStylesheet];
        this.shadowRoot.innerHTML = `
        <div class="tsa-jump-to-section">
            <h3>${this.heading}</h3>
            <slot></slot>
        </div>
        `
    }
  }
}
customElements.define('tsa-jump-to-section', TSAJumpToSectionModule);

// export const JumpToSectionModule = ({heading}: TSAJumpToSectionProps) => {
//   return`
//     <tsa-jump-to-section heading="${heading}">
//       <a class="btn btn--medium btn--dark--outline" href="#id1">What We Do</a>
//       <a class="btn btn--medium btn--dark--outline" href="#id2">Partner Opportunities</a>
//       <a class="btn btn--medium btn--dark--outline" href="#id3">Our Corporate Partners</a>
//       <a class="btn btn--medium btn--dark--outline" href="#id4">Become a Partner</a>
//     </tsa-jump-to-section>
//   `
// }