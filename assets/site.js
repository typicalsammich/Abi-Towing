const SERVICES = [
  ['Commercial Vehicles','commercial-vehicles.html','Motorhomes, box trucks, shuttles and fleet equipment.','assets/images/site-rv-heavy.webp'],
  ['Heavy Duty Towing','heavy-duty-towing.html','Heavy trucks, construction equipment and oversized recoveries.','assets/images/site-bobcat-flatbed.webp'],
  ['Container Transport','container-transport.html','20-foot and 40-foot container relocation and transport.','assets/images/site-container-transport.webp'],
  ['Semi Truck Towing','semi-truck-towing.html','Commercial rig breakdown, accident and relocation towing.','assets/images/truck-wrecker.png'],
  ['Light Duty Towing','light-duty-towing.html','Cars, motorcycles, SUVs and small trucks.','assets/images/site-classic-car-flatbed.webp'],
  ['Medium & Heavy Duty','medium-heavy-duty.html','Equipment for vehicles beyond standard light-duty capacity.','assets/images/ford-flatbed.png'],
  ['Private Property Towing','private-property-towing.html','Property monitoring and removal programs for owners and managers.','assets/images/exotic-tow.png'],
  ['Local & Long Distance','local-long-distance.html','Local dispatch plus long-distance towing up to 500 miles from Fresno.','assets/images/sports-car-flatbed.png'],
  ['5th Wheel & RV Towing','5th-wheel-towing.html','RV, camper and trailer towing in Fresno, Clovis and beyond.','assets/images/site-rv-heavy.webp'],
  ['Recovery & Emergency','recovery-emergency.html','Accident, ditch, mud and disabled-vehicle recovery.','assets/images/recovery-snow.png'],
  ['Roadside Assistance','roadside-assistance.html','Jump starts, tire changes, fuel delivery and lockout help.','assets/images/site-corvette-flatbed.webp']
];

function header(){
  const serviceLinks = SERVICES.map(s=>`<a href="${s[1]}">${s[0]}</a>`).join('');
  return `<header class="site-header"><div class="container header-inner">
    <a class="brand" href="index.html"><img src="assets/images/logo.webp" alt="A's Towing Fresno logo"><span class="brand-copy"><strong>A's Towing</strong><span>Fresno, California</span></span></a>
    <nav class="nav" id="nav"><a href="index.html">Home</a><div class="nav-dropdown"><button type="button" id="services-toggle">Towing Services ▾</button><div class="dropdown-menu">${serviceLinks}</div></div><a href="gallery.html">Gallery</a><a href="testimonials.html">Testimonials</a><a href="faq.html">FAQ</a><a href="contact.html">Contact</a></nav>
    <a class="header-call" href="tel:+15595753951">☎ (559) 575-3951</a><button class="menu-toggle" id="menu-toggle" aria-label="Open menu" aria-controls="nav" aria-expanded="false">☰</button>
  </div></header>`;
}
function footer(){return `<footer class="footer"><div class="container"><div class="footer-grid">
  <div class="footer-brand"><img src="assets/images/logo.webp" alt="A's Towing"><p>Family-owned towing and recovery serving Fresno, Clovis and surrounding areas with local and long-distance capability.</p><div class="footer-social"><span class="footer-social-label">Follow us:</span><div class="footer-social-links"><a class="social-icon" href="https://www.facebook.com/p/As-towing-100023152166958/" target="_blank" rel="noopener noreferrer" aria-label="A's Towing on Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v2H6v4h3v9h4v-9h3.2l.8-4H13V9c0-.7.3-1 1-1Z"/></svg></a><a class="social-icon" href="https://www.instagram.com/abi_559_towing/" target="_blank" rel="noopener noreferrer" aria-label="A's Towing on Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a><a class="social-icon social-yelp" href="https://www.yelp.com/search?find_desc=A%27s+Towing&find_loc=3709+E+Pitt+Ave%2C+Fresno%2C+CA+93725" target="_blank" rel="noopener noreferrer" aria-label="A's Towing on Yelp"><span>Y</span></a><a class="social-icon social-google" href="https://www.google.com/maps/search/?api=1&query=A%27s+Towing%2C+3709+E+Pitt+Ave%2C+Fresno%2C+CA+93725" target="_blank" rel="noopener noreferrer" aria-label="A's Towing on Google"><span>G</span></a></div></div></div>
  <div><h4>Services</h4><a href="light-duty-towing.html">Light Duty</a><a href="heavy-duty-towing.html">Heavy Duty</a><a href="semi-truck-towing.html">Semi Truck</a><a href="recovery-emergency.html">Emergency Recovery</a><a href="roadside-assistance.html">Roadside Assistance</a></div>
  <div><h4>Explore</h4><a href="gallery.html">Gallery</a><a href="testimonials.html">Testimonials</a><a href="faq.html">FAQ</a><a href="contact.html">Contact</a></div>
  <div><h4>Contact</h4><a href="tel:+15595753951">(559) 575-3951</a><p>3709 East Pitt Avenue<br>Fresno, CA 93725</p><p>Se habla español.</p></div>
</div><div class="footer-bottom"><span>© 2026 A's Towing. All rights reserved.</span><span>Fresno • Clovis • Long-distance service up to 500 miles</span></div></div></footer><a class="mobile-call" href="tel:+15595753951">Call A's Towing • (559) 575-3951</a>`}

function initChrome(){
  document.body.insertAdjacentHTML('afterbegin',header());document.body.insertAdjacentHTML('beforeend',footer());
  const toggle=document.getElementById('menu-toggle'),nav=document.getElementById('nav'),services=document.querySelector('.nav-dropdown'),st=document.getElementById('services-toggle');
  toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open))});st?.addEventListener('click',e=>{if(innerWidth<=980){e.preventDefault();const open=services.classList.toggle('open');st.setAttribute('aria-expanded',String(open))}});
  // Highlight the current top-level section in the header. Service detail pages keep Towing Services highlighted.
  const current=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  const servicePages=new Set(SERVICES.map(s=>s[1].toLowerCase()));
  document.querySelectorAll('.nav a').forEach(a=>{const href=(a.getAttribute('href')||'').toLowerCase();if(href===current){a.classList.add('active');a.setAttribute('aria-current','page')}});
  if(servicePages.has(current)||current==='services.html'){st?.classList.add('active');if(current==='services.html')st?.setAttribute('aria-current','page')}

  const cursor=document.createElement('div');cursor.id='tow-cursor';cursor.innerHTML=`<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="#f5b400" stroke="#111" stroke-width="1.3" d="M21.8 3.3c1.3.2 2.1 1.6 1.5 2.7l-2.4 4.4 2.7 2.8 4.5-2.3c1.2-.6 2.5.2 2.7 1.5.5 3.4-1.7 6.7-5 7.6-1.5.4-3 .3-4.3-.2L10.7 30.6a3 3 0 0 1-4.2 0l-5.1-5.1a3 3 0 0 1 0-4.2l10.8-10.8a8.3 8.3 0 0 1-.1-4.4c.9-3.3 4.2-5.5 7.6-5l.1.1 2 2.1Zm-14 20.4a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4Z"/></svg>`;document.body.appendChild(cursor);
  document.addEventListener('mousemove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'});document.querySelectorAll('a,button,.service-card,.map-chip,summary').forEach(el=>{el.addEventListener('mouseenter',()=>document.body.classList.add('cursor-active'));el.addEventListener('mouseleave',()=>document.body.classList.remove('cursor-active'))});
  const yellowTargets=document.querySelectorAll('.band,.band-item,.cta,.btn-primary,.header-call,.mobile-call');
  yellowTargets.forEach(el=>{el.addEventListener('mouseenter',()=>document.body.classList.add('cursor-on-yellow'));el.addEventListener('mouseleave',()=>document.body.classList.remove('cursor-on-yellow'))});
  document.querySelectorAll('.dropdown-menu a').forEach(el=>{el.addEventListener('mouseenter',()=>document.body.classList.add('cursor-on-yellow'));el.addEventListener('mouseleave',()=>document.body.classList.remove('cursor-on-yellow'))});
}
function serviceCards(limit){return SERVICES.slice(0,limit||SERVICES.length).map((s,i)=>`<a class="service-card" href="${s[1]}"><div class="service-card-media"><img src="${s[3]}" alt="${s[0]} by A's Towing"><span class="service-number">${String(i+1).padStart(2,'0')}</span></div><div class="service-card-content"><span class="service-kicker">A's Towing Service</span><h3>${s[0]}</h3><p>${s[2]}</p><span class="service-link">View service <b>↗</b></span></div></a>`).join('')}
function initMap(){
  if(!document.getElementById('service-map')||typeof L==='undefined') return;
  const map=L.map('service-map',{scrollWheelZoom:false}).setView([36.75,-119.77],10);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'© OpenStreetMap contributors'}).addTo(map);
  const core=L.featureGroup().addTo(map);
  const fresno=L.circle([36.7378,-119.7871],{radius:19000,color:'#f5b400',weight:3,fillColor:'#f5b400',fillOpacity:.12}).bindPopup('<b>Fresno Core Service Area</b>');
  const clovis=L.circle([36.8252,-119.7029],{radius:10000,color:'#f5b400',weight:3,fillColor:'#f5b400',fillOpacity:.12}).bindPopup('<b>Clovis Core Service Area</b>');core.addLayer(fresno).addLayer(clovis);
  const long=L.circle([36.7378,-119.7871],{radius:804672,color:'#555b60',weight:2,dashArray:'8 8',fillOpacity:0}).addTo(map).bindPopup('<b>Long-distance capability:</b> up to 500 miles from Fresno, subject to availability.');
  L.marker([36.7378,-119.7871]).addTo(map).bindPopup("A's Towing • Fresno, CA");map.fitBounds(core.getBounds().pad(.3));
  const coreBtn=document.querySelector('[data-map="core"]'),longBtn=document.querySelector('[data-map="long"]');
  function active(b){document.querySelectorAll('.map-chip').forEach(x=>x.classList.remove('active'));b.classList.add('active')}
  coreBtn?.addEventListener('click',()=>{map.fitBounds(core.getBounds().pad(.3));active(coreBtn)});longBtn?.addEventListener('click',()=>{map.fitBounds(long.getBounds().pad(.05));active(longBtn)});
}
document.addEventListener('DOMContentLoaded',()=>{initChrome();initMap()});

function initGallery(){
  const grid=document.getElementById('gallery-masonry');
  if(!grid) return;
  const filter=document.getElementById('gallery-filter');
  const count=document.getElementById('gallery-count');
  const more=document.getElementById('gallery-more');
  const items=[...grid.querySelectorAll('.gallery-item')];
  const lightbox=document.getElementById('gallery-lightbox');
  const lbImg=document.getElementById('lightbox-image');
  const lbCap=document.getElementById('lightbox-caption');
  const lbCount=document.getElementById('lightbox-counter');
  let expanded=false, visibleItems=[], current=0;
  function apply(){
    const cat=filter?.value||'all';
    visibleItems=items.filter(x=>cat==='all'||x.dataset.category===cat);
    items.forEach(x=>{x.classList.toggle('is-hidden',!visibleItems.includes(x));x.classList.remove('is-collapsed')});
    if(!expanded&&visibleItems.length>12) visibleItems.slice(12).forEach(x=>x.classList.add('is-collapsed'));
    if(count) count.textContent=`${visibleItems.length} photo${visibleItems.length===1?'':'s'}`;
    if(more){more.hidden=visibleItems.length<=12;more.textContent=expanded?'Show fewer photos':'Show more photos'}
  }
  filter?.addEventListener('change',()=>{expanded=false;apply()});
  more?.addEventListener('click',()=>{expanded=!expanded;apply();if(!expanded) grid.scrollIntoView({behavior:'smooth',block:'start'})});
  function show(i){
    if(!visibleItems.length) return; current=(i+visibleItems.length)%visibleItems.length;
    const img=visibleItems[current].querySelector('img'); lbImg.src=img.src; lbImg.alt=img.alt; lbCap.textContent=img.alt.replace(" by A's Towing in Fresno",''); lbCount.textContent=`${current+1} / ${visibleItems.length}`;
  }
  function open(item){expanded=true;apply();current=visibleItems.indexOf(item);show(current);lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');document.body.classList.add('lightbox-open')}
  function close(){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');document.body.classList.remove('lightbox-open')}
  items.forEach(item=>item.querySelector('.gallery-open')?.addEventListener('click',()=>open(item)));
  lightbox?.querySelector('.lightbox-close')?.addEventListener('click',close);
  lightbox?.querySelector('.lightbox-prev')?.addEventListener('click',()=>show(current-1));
  lightbox?.querySelector('.lightbox-next')?.addEventListener('click',()=>show(current+1));
  lightbox?.addEventListener('click',e=>{if(e.target===lightbox) close()});
  document.addEventListener('keydown',e=>{if(!lightbox?.classList.contains('open'))return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(current-1);if(e.key==='ArrowRight')show(current+1)});
  apply();
}
document.addEventListener('DOMContentLoaded',initGallery);
