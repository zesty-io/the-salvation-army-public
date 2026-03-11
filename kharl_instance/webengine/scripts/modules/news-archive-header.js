class NewsArchiveHeaderModule extends HTMLElement {
  constructor() {
    super();
    
  }

  connectedCallback() {
    this.heading = this.getAttribute('heading');
    this.innerHTML = `
      <div class="tsa-news-archive-header">
        <div class="tsa-news-archive-header__back-btn"><i class="bi bi-arrow-left-short"></i><a href="#">Back to Newsroom</a></div>
        <div class="tsa-news-archive-header__title"><h1>${this.heading}</h1></div>
        <div class="tsa-news-archive-header__form">
          <div class="tsa-news-archive-header__form-wrapper">
              <span>Search News</span>
              <div class="tsa-news-archive-header__input">
                <label class="input">
                    <input class="input--medium" name="" value="" placeholder="What are you looking for" type="text"/>
                    <i class="bi bi-search"></i>
                </label>
                <button type="button" class="btn btn--small btn--dark--fill ">Search</button>
              </div>
          </div>
        </div>
        <div class="tsa-news-archive-header__filter">
          <div class="tsa-news-archive-header__filter-wrapper">
            <span>Filter by Content Type</span>
            <select>
              <option value="" disabled selected>Select Content Type</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 4</option>
            </select>
          </div>
          <div class="tsa-news-archive-header__check-filter">
            <input type="checkbox" value="check" />
            <span>Display only Augusta Capital Region Corps News</span>
          </div>
        </div>
      <div>
    `
  }
}
// <tsa-news-archive-header heading="${heading}"></tsa-news-archive-header>
customElements.define('tsa-news-archive-header', NewsArchiveHeaderModule);