const storySingleStyle = new CSSStyleSheet();

storySingleStyle.replaceSync(`
  .story-detail {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .separator {
    display: block;
    height: 1px;
    width: 100%;
    background: #000;
  }
  .story-detail__date,
  .story-detail__location, 
  .story-detail__header
  {
    margin-bottom: 2rem
  }
  .story-detail__header h3 {
    font-size: 2rem;
  }
  #map2 {
    width: 100%;
    background: #EFF1F0;
    min-height: 197px;
  }
  .story-detail__date h3 {
    font-size: 1.5rem;
  }
  .story-detail__address {
    margin-bottom: 1.5rem;
  }
  .story-detail__location h3 {
    font-size: 1.5rem;
  }
  .story-detail__contact h3 {
    font-size: 1.5rem;
  }
  slot[name=contact]::slotted(p) {
    font-size: 1.2rem !important;
  }
  slot[name=contact]::slotted(span) {
    font-size: 1.2rem !important;
    font-weight: 600 !important;
    margin-bottom: 0.2rem !important;
    display: block;
  }
  slot[name=date]::slotted(p) {
    font-size: 1.2rem !important;
    margin-bottom: 1.5rem !important;
    display: block;
  }
  slot[name=location]::slotted(p) {
    font-size: 1.2rem !important;
    display: block;
  }
  .story-detail__date a {
    display: flex;
    align-items: center;
    color: #000;
    font-weight: 700;
    font-size: 1.2rem;
    text-decoration: none;
  }
  .story-detail__date a svg {
    margin-right: 0.5rem;
  }
`)

class EventsSingleDetailModule extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});

    this.apiKey = 'AIzaSyA1yhWlvD1gOrWCGvHQSOQVB1eCtNOXnyY'
  }

  async connectedCallback() {
    if(this.shadowRoot) {
        this.calendarLink = this.getAttribute('calendarLink');
        const stringLng = this.getAttribute('lng');
        const stringLat = this.getAttribute('lat');
        this.long = parseFloat(stringLng ?? '0');
        this.lat = parseFloat(stringLat ?? '0');
      this.render();
        try {
            await this.loadScript();
            this.loadMap();
        } catch (error) {
            console.error('Error loading Google Maps API:', error);
        }
      this.shadowRoot.adoptedStyleSheets = [storySingleStyle];
    }
  }

  render() {
    if(this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <script
      src=""
      defer
></script>
        <div class="story-detail">
          <div class="story-detail__header">
            <h3>Details</h3>
            <slot name="cta"></slot>
          </div>
          <div class="separator"></div>
          <div class="story-detail__date">
            <h3>Date & Time</h3>
            <slot name="date"></slot>
            <a href="${this.calendarLink}">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-week" viewBox="0 0 16 16">
              <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
              </svg>
              Add to Calendar
          </a>
          </div>
          <div class="separator"></div>
          <div class="story-detail__location">
            <h3>Location</h3>
            <div class="story-detail__address"><slot name="location"></slot></div>
            <div id="map2"></div>
          </div>
          <div class="separator"></div>
          <div class="story-detail__contact">
            <h3>Contact</h3>
            <slot name="contact"></slot>
          </div>
        </div>
      `;
    }
  }

  loadScript() {
    return new Promise((resolve, reject) => {
        if (typeof google === 'object' && typeof google.maps === 'object') {
            resolve();
            return;
        }

        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&callback=loadMap`;
        script.async = true;
        script.defer = true;
        window.loadMap = () => {
            resolve();
        };
        script.onerror = (error) => {
            reject(error);
        };
        document.head.appendChild(script);
    });
}

  loadMap() {
    if(this.shadowRoot) {
      const mapStylesArray = [
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e9e9e9"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dedede"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "saturation": 36
                },
                {
                    "color": "#333333"
                },
                {
                    "lightness": 40
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f2f2f2"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        }
    ];
      const mapContainer = this.shadowRoot.getElementById('map2');
      const mapOptions = {
          center: { lat: this.lat, lng: this.long },
          zoom: 15,
          mapTypeId: 'roadmap',
          fullscreenControl: false,
          mapTypeControl: false,
          streetViewControl: false,
          styles: mapStylesArray,
      };

      const map = new google.maps.Map(mapContainer, mapOptions);
      var marker = new google.maps.Marker({
        position: { lat: this.lat, lng: this.long }, // For position your marker
        map: map, //For your google map element
     })
    }
  }
}
customElements.define('tsa-event-detail', EventsSingleDetailModule);

