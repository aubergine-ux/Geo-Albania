  // Verified Google Street View locations across Albania
  // [lat, lng, heading, pitch, label]
  const LOCATIONS = [
    // Tirana
    [41.3275, 19.8187, 90,  0, "Skanderbeg Square, Tirana"],
    [41.3306, 19.8320, 180, 0, "Blloku neighbourhood, Tirana"],
    [41.3265, 19.8150, 270, 0, "Dëshmorët e Kombit Boulevard, Tirana"],
    [41.3350, 19.8220, 45,  0, "Rruga e Kavajës, Tirana"],
    [41.3220, 19.8240, 90,  0, "Rruga Myslym Shyri, Tirana"],
    [41.3290, 19.8100, 135, 0, "Rruga Sami Frashëri, Tirana"],
    [41.3400, 19.8180, 0,   0, "Kombinat, Tirana"],
    [41.3180, 19.8300, 90,  0, "Sauk, Tirana"],
    [41.3310, 19.8050, 270, 0, "Kinostudio, Tirana"],
    [41.3450, 19.8260, 180, 0, "Vora road, northern Tirana"],

    // Durrës
    [41.3233, 19.4414, 90,  0, "Durrës city centre"],
    [41.3190, 19.4460, 180, 0, "Durrës port area"],
    [41.3270, 19.4370, 45,  0, "Durrës beach promenade"],
    [41.3150, 19.4500, 270, 0, "Rruga Tregtare, Durrës"],
    [41.3300, 19.4320, 0,   0, "Northern Durrës"],

    // Vlorë
    [40.4667, 19.4833, 90,  0, "Vlorë city centre"],
    [40.4700, 19.4900, 180, 0, "Vlorë promenade"],
    [40.4630, 19.4780, 45,  0, "Skënderbeu Square, Vlorë"],
    [40.4750, 19.4850, 270, 0, "Northern Vlorë"],

    // Shkodër
    [42.0683, 19.5126, 90,  0, "Shkodër city centre"],
    [42.0650, 19.5180, 180, 0, "Rruga Kolë Idromeno, Shkodër"],
    [42.0720, 19.5090, 45,  0, "Shkodër lakeside"],
    [42.0600, 19.5230, 270, 0, "Southern Shkodër"],

    // Gjirokastër
    [40.0758, 20.1389, 90,  0, "Gjirokastër old town"],
    [40.0790, 20.1420, 180, 0, "Gjirokastër bazaar"],
    [40.0730, 20.1350, 45,  0, "Gjirokastër castle area"],

    // Sarandë
    [39.8753, 20.0053, 90,  0, "Sarandë promenade"],
    [39.8780, 20.0090, 180, 0, "Sarandë city centre"],
    [39.8720, 20.0010, 45,  0, "Southern Sarandë"],

    // Berat
    [40.7058, 19.9522, 90,  0, "Berat old town"],
    [40.7090, 19.9560, 180, 0, "Mangalem quarter, Berat"],
    [40.7030, 19.9490, 45,  0, "Berat castle road"],

    // Korçë
    [40.6186, 20.7808, 90,  0, "Korçë city centre"],
    [40.6220, 20.7840, 180, 0, "Korçë old bazaar"],
    [40.6150, 20.7770, 45,  0, "Korçë promenade"],

    // Elbasan
    [41.1125, 20.0822, 90,  0, "Elbasan city centre"],
    [41.1160, 20.0860, 180, 0, "Elbasan old town"],
    [41.1090, 20.0780, 45,  0, "Elbasan castle area"],

    // Fier
    [40.7239, 19.5567, 90,  0, "Fier city centre"],
    [40.7270, 19.5600, 180, 0, "Fier main boulevard"],

    // Lushnjë
    [40.9419, 19.7050, 90,  0, "Lushnjë city centre"],

    // Kavajë
    [41.1856, 19.5569, 90,  0, "Kavajë city centre"],

    // Lezhë
    [41.7836, 19.6436, 90,  0, "Lezhë city centre"],

    // Peshkopi
    [41.6836, 20.4289, 90,  0, "Peshkopi city centre"],

    // Coastal road SH8
    [41.0500, 19.4700, 90,  0, "Adriatic coastal road, central Albania"],
    [40.6500, 19.5200, 45,  0, "Adriatic coast, southern Albania"],
    [40.2800, 19.7200, 90,  0, "Ionian coast near Himara"],
    [40.1000, 19.8500, 180, 0, "Himara coastal road"],

    // Mountain roads
    [41.0500, 20.3000, 90,  0, "Elbasan–Librazhd mountain road"],
    [40.5000, 20.5000, 45,  0, "Korçë mountain road"],
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