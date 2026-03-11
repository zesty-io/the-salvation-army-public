class ReadMoreCardModule extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    this.imgUrl = this.getAttribute('imgUrl');
    this.heading = this.getAttribute('heading');
    this.content = this.getAttribute('content');
    this.link = this.getAttribute('link');
    this.intro = this.getAttribute('intro');
    this.innerHTML = `
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div class="tsa-card">
              <div class="card__image">
                <img src="${this.imgUrl}" />
              </div>
              <div class="card__content">
                <h3>${this.heading}</h3>
                <div class="card__text">${this.intro}</div> 
              </div>
              <div class="card__link">
                <a href="#" class="flip-link">Read More <i class="bi bi-arrow-right-circle"></i></a>
              </div>
            </div>
          </div>
          <div class="flip-card-back">
            <div class="tsa-card">
              <div class="card__content">
                <h3>${this.heading}</h3>
                <div class="card__text">${this.content}</div>
              </div>
              <div class="card__link">
                <a href="#" class="flip-link-back">Read Less <i class="bi bi-arrow-left-circle"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    this.querySelector('.flip-link')?.addEventListener('click', (event) => {
        event.preventDefault();
        this.querySelector('.flip-card-inner')?.classList.add('flipped');
    });

    this.querySelector('.flip-link-back')?.addEventListener('click', (event) => {
        event.preventDefault();
        this.querySelector('.flip-card-inner')?.classList.remove('flipped');
    });
  }
}
customElements.define('read-more-card', ReadMoreCardModule);
