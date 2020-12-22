import  L from 'leaflet';

const host = 'https://maps.omniscale.net/v2/tested-api-ccbe1bdb/style.grayscale/{z}/{x}/{y}.png';
const coords = [40.7560984, -73.9845125];
const attribution = '';
const map = L.map('OSMMap').setView(coords, 13);
const myIcon = L.icon({
  iconUrl: '/img/contacts/leaflet-map-marker.png',
  iconSize: [24, 32],
});

L.tileLayer(host, {
  id: 'tested-api-ccbe1bdb', // до 5 января на localhost
  attribution: attribution
}).addTo(map);

L.marker(coords, {
  icon: myIcon,
}).addTo(map).bindPopup(`
  <div class="map-header">
    <h2 class="map-header__title">
      Company's Name
    </h2>
    <p class="map-header__address">
      7th Ave New York, NY hall 123
    </p>
  </div>
  
  <div class="map-body">
    <p class="working-time map-body__working-time">
      <h3 class="working-time__title">
        Working hours:
      </h3>
      
      9:00 a.m. - 9:00 p.m. from Monday to Friday. <br/>
      On other days, the duty manager will answer you.
    </p>
  </div>
  
  <div class="map-footer">
    <p class="email map-footer__email">
      <b class="email__title map-footer__title">Email:</b> <a href="mailto:info@example.com" class="email__link map-footer__link">info@example.com</a>
    </p>
    
    <p class="phone map-footer__phone">
      <b class="phone__title map-footer__title">Phone:</b> <a href="tel:+01234567890" class="phone__link map-footer__link">+0 (123) 456-78-90</a>
    </p>
  </div>
`).openPopup();

map.scrollWheelZoom.disable();
map.attributionControl.setPrefix(false);