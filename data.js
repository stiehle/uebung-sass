const products = [
  {
    id: 0,
    file: "PI_5_HERO_300x300.avif",
    badge: "--bestseller",
    badge_text: "Bestseller",
    instock: true,
    stars: 4,
    title: "Raspberry Pi 5 – 8GB RAM",
    text: "Der Raspberry Pi 5 ist bis zu dreimal schneller, hat zwei 4K-Displays und ist mit Kamera- und USB-Upgrades ausgestattet. Eine echte dreifache Bedrohung im Mini-Computing!",
    price_basis: 74.88,
    price_reduce: 69.99,
    price_unit: "€",
  },
  {
    id: 1,
    file: "badger-w-1_300x300.avif",
    badge: "--new",
    badge_text: "NEU!",
    instock: false,
    stars: 3,
    title: "Badger 2040 W (Pico W an Bord) – Nur Badger W",
    text: "Ein programmierbarer Ausweis mit schnell aktualisierendem E Ink®-Display und drahtloser Konnektivität, angetrieben von einem Raspberry Pi Pico W.",
    price_basis: 32.17,
    price_reduce: 30.99,
    price_unit: "€",
  },

  {
    id: 2,
    file: "pico-wh-2_300x300.avif",
    badge: "--Bestseller",
    badge_text: "Bestseller",
    instock: true,
    stars: 5,
    title: "Raspberry Pi Pico W – Pico WH",
    text: "Ein kostengünstiges, flexibles Mikrocontroller-Board mit Wireless, das auf dem RP2040-Chip des Raspberry Pi basiert.",
    price_basis: 6.14,
    price_reduce: 5.99,
    price_unit: "€",
  },
  {
    id: 3,
    file: "gfx-hat-1_5a3a555b-a7db-4c07-8c7b-2ccf04042920_300x300.avif",
    badge: "--new",
    badge_text: "NEU!",
    instock: true,
    stars: 2,
    title: "Pico GFX Pack",
    text: "Ein retro 2,15 (128x64) Mono-LCD-Display für Raspberry Pi Pico mit RGBW-Hintergrundbeleuchtung, Tasten und einem Qw/ST-Breakout-Anschluss.",
    price_basis: 16.09,
    price_reduce: 14.49,
    price_unit: "€",
  },
  {
    id: 4,
    file: "RaspberryPiZero2W_300x300.avif",
    badge: "--bestseller",
    badge_text: "Bestseller",
    instock: true,
    stars: 5,
    title: "Raspberry Pi Zero 2 W – Pi Zero 2 W",
    text: "Ein beliebter, extrem hackbarer Einplatinencomputer mit Wireless und Bluetooth - jetzt mit einem Quad-Core-, 64-Bit-CPU-Upgrade! ",
    price_basis: 14.04,
    price_reduce: 13.99,
    price_unit: "€",
  },
  {
    id: 5,
    file: "nvme-base-final-1-256_300x300.avif",
    badge: "--new",
    badge_text: "NEU!",
    instock: true,
    stars: 4,
    title: "NVMe Base for Raspberry Pi 5 – NVMe Base + 250GB SSD",
    text: "Fügen Sie Ihrem Raspberry Pi 5 einen superschnellen Speicher hinzu, der blitzschnelle Bootvorgänge, NAS-Nutzung und flotte Anwendungen ermöglicht!",
    price_basis: 43.88,
    price_reduce: 39.99,
    price_unit: "€",
  },
  {
    id: 6,
    file: "raspberry-pi-3a-plus-3_300x300.webp",
    badge: "--offer",
    badge_text: "Angebot %",
    instock: true,
    stars: 4,
    title: "Raspberry Pi 3 A+",
    text: "Leistung in Miniaturformat! Der Raspberry Pi 3 Model A+ bietet die gesamte Verarbeitungs- und WLAN-Leistung des 3 B+ in einem deutlich kleineren Gehäuse.",
    price_basis: 23.62,
    price_reduce: 18.99,
    price_unit: "€",
  },
];

const star = `
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="product__stock-stars__icon"">
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
    />
  </svg>
`;
