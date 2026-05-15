const LOCATIONS = [
  // Tirana
  [41.3275, 19.8187, 90,  0, "Skanderbeg Square, Tirana"],
  [41.3306, 19.8320, 180, 0, "Blloku neighbourhood, Tirana"],
  [41.3265, 19.8150, 270, 0, "Dëshmorët e Kombit Boulevard, Tirana"],

  // Durrës
  [41.3233, 19.4414, 90,  0, "Durrës city centre"],
  [41.3270, 19.4370, 45,  0, "Durrës beach promenade"],

  // Vlorë
  [40.4667, 19.4833, 90,  0, "Vlorë city centre"],
  [40.4700, 19.4900, 180, 0, "Vlorë promenade"],

  // Shkodër
  [42.0683, 19.5126, 90,  0, "Shkodër city centre"],
  [42.0650, 19.5180, 180, 0, "Rruga Kolë Idromeno, Shkodër"],

  // Gjirokastër
  [40.0758, 20.1389, 90,  0, "Gjirokastër old town"],
  [40.0790, 20.1420, 180, 0, "Gjirokastër bazaar"],

  // Sarandë
  [39.8753, 20.0053, 90,  0, "Sarandë promenade"],
  [39.8780, 20.0090, 180, 0, "Sarandë city centre"],

  // Berat
  [40.7058, 19.9522, 90,  0, "Berat old town"],
  [40.7090, 19.9560, 180, 0, "Mangalem quarter, Berat"],

  // Korçë
  [40.6186, 20.7808, 90,  0, "Korçë city centre"],
  [40.6220, 20.7840, 180, 0, "Korçë old bazaar"],

  // Elbasan
  [41.1125, 20.0822, 90,  0, "Elbasan city centre"],

  // Fier
  [40.7239, 19.5567, 90,  0, "Fier city centre"],

  // Lezhë
  [41.7836, 19.6436, 90,  0, "Lezhë city centre"],
];

  const API_KEY = 'AIzaSyBWmvS7XqqbcM-txHmGLbFwe0T7k1iB1U8';

  let lastIndex = -1;

  function wander() {
    const btn    = document.getElementById('wanderBtn');
    const frame  = document.getElementById('map-frame');
    const ph     = document.getElementById('placeholder');
    const link   = document.getElementById('mapsLink');
    const nameEl = document.getElementById('locationName');

    let idx;
    do { idx = Math.floor(Math.random() * LOCATIONS.length); } while (idx === lastIndex);
    lastIndex = idx;

    const [lat, lng, heading, pitch, label] = LOCATIONS[idx];

    nameEl.textContent = label;
    btn.disabled = true;
    btn.textContent = 'Wandering...';
    frame.classList.remove('loaded');
    ph.classList.remove('hidden');

    frame.src = `https://www.google.com/maps/embed/v1/streetview?key=${API_KEY}&location=${lat},${lng}&heading=${heading}&pitch=${pitch}&fov=90`;
    link.href = `https://www.google.com/maps?q=${lat},${lng}&layer=c&cbll=${lat},${lng}&cbp=12,${heading},,0,0`;
    link.classList.remove('hidden');

    frame.onload = () => {
      frame.classList.add('loaded');
      ph.classList.add('hidden');
      btn.disabled = false;
      btn.textContent = 'Explore Albania';
    };
  }