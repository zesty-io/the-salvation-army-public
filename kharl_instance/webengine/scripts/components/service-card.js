class ServiceCardModule extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <div class="service-card shadow pb-8">
            <div class="mb-6 w-100">
                <img class="w-100" src="${this.getAttribute("data-image-src")}" alt="${this.getAttribute("data-image-alt")}"/>
            </div>
            <div class="d-flex align-items-center justify-content-center flex-column gap-6">
                <h1 class="fw-semibold fs-2">${this.getAttribute("data-title")}</h1>
                <button class="btn btn--small btn--dark--outline">Learn More</button>
            </div>
        </div>`;
	}
}

customElements.define("tsa-service-card", ServiceCardModule);
