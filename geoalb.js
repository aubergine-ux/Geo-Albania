const LOCATIONS = [
  // Tirana
  [41.3275, 19.8187, 90,  0, "Skanderbeg Square, Tirana"],
  [41.3306, 19.8320, 180, 0, "Blloku neighbourhood, Tirana"],
  [41.3265, 19.8150, 270, 0, "Dëshmorët e Kombit Boulevard, Tirana"],

  // Durrës
  [41.3233, 19.4414, 90,  0, "Durrës city centre"],
  [41.3270, 19.4370, 45,  0, "Durrës beach promenade"],
  [41.3083638, 19.4462801, 45, 0, "Durrës Port"],

  // Vlorë
  [40.4667, 19.4833, 90,  0, "Vlorë City Center"],
  [40.4121393, 19.4810308, 180, 0, "Ruga Sali Vranishti, Vlorë"],
  [40.4700, 19.4900, 180, 0, "Vlorë Promenade"],
  [40.4238017, 19.4898321, 270, 0, "Beach 1, Vlorë"],
  [40.4419097, 19.4952375, 180, 0, "Beach 2, Vlorë"],
  [40.4459706, 19.4945242, 180, 0, "Beach 3, Vlorë"],

  // Shkodër
  [42.0683, 19.5126, 90,  0, "Shkodër city centre"],
  [42.0472997, 19.5088055, 90, 0, "Shkodër Backroads"]
  [42.0650, 19.5180, 180, 0, "Rruga Kolë Idromeno, Shkodër"],
  [42.0544036, 19.4829602, 45, 0, "SH24, Shkodër"],

  // Gjirokastër
  [40.0758, 20.1389, 90,  0, "Gjirokastër old town"],
  [40.0790, 20.1420, 180, 0, "Gjirokastër bazaar"],

  // Sarandë
  [39.8753, 20.0053, 90,  0, "Sarandë promenade"],
  [39.8780, 20.0090, 180, 0, "Sarandë city centre"],
  [39.8689375, 19.9996741, 45, 0, "Hotel Piccolino, Sarandë"],
  [39.8555891, 20.0209058, 90, 0, "Flamingo Beach, Sarandë"],

  // Berat
  [90, 0, "Ruga Mihal Komnena, Berat"],
  [40.7058, 19.9522, 90,  0, "Berat Old Town"],
  [40.7016406, 19.9513116, 180, 0, "View of Berat"],
  [40.7090, 19.9560, 180, 0, "Mangalem Quarter, Berat"],
  [40.7078694, 19.9473139, 90, 0, "Berat Castle"],

  // Korçë
  [40.6257995, 20.7845479, 90, 0, "Rinia Park 1, Korçë"],
  [40.6297133, 20.7883103, 90, 0, "Rinia Park 2, Korçë"],
  [40.6186, 20.7808, 90,  0, "Korçë City Center"],
  [40.6220, 20.7840, 180, 0, "Korçë Old Bazaar"],
  [40.6142454, 20.7797787, 45, 0, "Bulevardi Fan Noli, Korçë"],

  // Elbasan
  [41.0979504 ,20.0820469, 90, 0, "Ura e Skumbinit, Elbasan"],
  [41.1125, 20.0822, 90,  0, "Elbasan City Center 1"],
  [41.111386, 20.0821184, 90, 0, "Elbasan City Center 2"],

  // Fier
  [40.7608973, 19.3724797, 270, 0, "Seman Beach"],
  [40.7239, 19.5567, 90,  0, "Fier City Center"],
  [40.9901418 ,19.4911381, 90, 0, "Divjaka National Park"],
  [40.950489, 19.4796791, 90, 0, "Divjaka National Park 2"],
  [40.7208668, 19.4717417, 180, 0, "Apollonia Archaeological Park"],
  [40.7220039, 19.472723, 90, 0, "Apollonia Archaeological Park 2"],

  // Lezhë
  [41.7805974, 19.644825, 270,  0, "Lezhë city centre"],
  [41.7745532, 19.6439775, 90, 0, "Ura e Cenit, Lezhë"],
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
    btn.textContent = 'Exploring...';
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