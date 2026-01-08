export const categories = [
  { id: 1, name: 'Smartphones', slug: 'smartphones', icon: '📱' },
  { id: 2, name: 'Laptops', slug: 'laptops', icon: '💻' },
  { id: 3, name: 'Televisions', slug: 'televisions', icon: '📺' },
  { id: 4, name: 'Audio Devices', slug: 'audio-devices', icon: '🎧' },
  { id: 5, name: 'Computer Accessories', slug: 'computer-accessories', icon: '⌨️' },
  { id: 6, name: 'Gaming Equipment', slug: 'gaming-equipment', icon: '🎮' },
  { id: 7, name: 'Home Electronics', slug: 'home-electronics', icon: '🏠' }
]

export const products = [
  // Smartphones
  {
    id: 1,
    name: 'ProMax Elite 15',
    price: 899000,
    category: 'smartphones',
    description: 'Flagship smartphone with advanced AI camera system, 5G connectivity, and stunning AMOLED display. Perfect for photography enthusiasts and power users.',
    features: ['6.7" AMOLED Display', '256GB Storage', '108MP Camera', '5000mAh Battery'],
    stock: 15
  },
  {
    id: 2,
    name: 'Quantum X Pro',
    price: 749000,
    category: 'smartphones',
    description: 'Premium mid-range device with exceptional battery life and lightning-fast charging. Ideal for business professionals.',
    features: ['6.5" FHD+ Display', '128GB Storage', '64MP Triple Camera', '4500mAh Battery'],
    stock: 23
  },
  {
    id: 3,
    name: 'Nova Fold Ultra',
    price: 1299000,
    category: 'smartphones',
    description: 'Revolutionary foldable smartphone with multitasking capabilities and premium build quality.',
    features: ['7.6" Foldable AMOLED', '512GB Storage', '50MP Camera', 'S-Pen Support'],
    stock: 8
  },
  {
    id: 4,
    name: 'Swift Lite 5G',
    price: 399000,
    category: 'smartphones',
    description: 'Affordable 5G smartphone with impressive performance and long-lasting battery.',
    features: ['6.4" LCD Display', '128GB Storage', '48MP Camera', '5000mAh Battery'],
    stock: 35
  },

  // Laptops
  {
    id: 5,
    name: 'TechBook Pro 16',
    price: 1899000,
    category: 'laptops',
    description: 'Professional workstation laptop with powerful processor and dedicated graphics. Perfect for content creators and developers.',
    features: ['16" 4K Display', 'Intel i9 Processor', '32GB RAM', 'RTX 4060 8GB'],
    stock: 12
  },
  {
    id: 6,
    name: 'UltraSlim Air',
    price: 1299000,
    category: 'laptops',
    description: 'Ultra-portable laptop with all-day battery life. Ideal for business travelers and students.',
    features: ['13.3" Retina Display', 'M2 Chip', '16GB RAM', '512GB SSD'],
    stock: 18
  },
  {
    id: 7,
    name: 'Gaming Predator X',
    price: 2499000,
    category: 'laptops',
    description: 'High-performance gaming laptop with RGB keyboard and advanced cooling system.',
    features: ['17.3" 240Hz Display', 'Intel i9-13900HX', '32GB RAM', 'RTX 4080 12GB'],
    stock: 7
  },
  {
    id: 8,
    name: 'Budget Office Max',
    price: 599000,
    category: 'laptops',
    description: 'Reliable laptop for everyday computing tasks and office work.',
    features: ['15.6" FHD Display', 'Intel i5 Processor', '8GB RAM', '512GB SSD'],
    stock: 28
  },

  // Televisions
  {
    id: 9,
    name: 'Crystal Vision 65"',
    price: 1499000,
    category: 'televisions',
    description: '4K QLED Smart TV with vibrant colors and smart home integration. Transform your living room experience.',
    features: ['65" 4K QLED', 'HDR10+', 'Smart TV OS', '120Hz Refresh Rate'],
    stock: 10
  },
  {
    id: 10,
    name: 'OLED Master 55"',
    price: 1999000,
    category: 'televisions',
    description: 'Premium OLED TV with perfect blacks and infinite contrast ratio.',
    features: ['55" 4K OLED', 'Dolby Vision', 'HDMI 2.1', 'AI Picture Processing'],
    stock: 8
  },
  {
    id: 11,
    name: 'SmartView 43"',
    price: 599000,
    category: 'televisions',
    description: 'Affordable smart TV with built-in streaming apps and voice control.',
    features: ['43" Full HD', 'Smart TV', 'Voice Remote', 'Built-in WiFi'],
    stock: 25
  },
  {
    id: 12,
    name: 'UltraWide Cinema 75"',
    price: 2799000,
    category: 'televisions',
    description: 'Massive 8K TV for the ultimate home cinema experience.',
    features: ['75" 8K QLED', 'HDR10+', 'Dolby Atmos', 'Game Mode'],
    stock: 5
  },

  // Audio Devices
  {
    id: 13,
    name: 'SoundPro Wireless',
    price: 349000,
    category: 'audio-devices',
    description: 'Premium noise-canceling headphones with studio-quality sound and 30-hour battery life.',
    features: ['Active Noise Cancellation', 'Hi-Res Audio', '30h Battery', 'Comfortable Design'],
    stock: 30
  },
  {
    id: 14,
    name: 'BoomBox Ultra',
    price: 499000,
    category: 'audio-devices',
    description: 'Powerful Bluetooth speaker with 360° sound and waterproof design.',
    features: ['360° Sound', 'IP67 Waterproof', '24h Battery', 'Party Mode'],
    stock: 20
  },
  {
    id: 15,
    name: 'Studio Monitor Pro',
    price: 799000,
    category: 'audio-devices',
    description: 'Professional studio monitors for music production and critical listening.',
    features: ['Reference Sound', 'Bi-Amp Design', 'Room Calibration', 'XLR Inputs'],
    stock: 12
  },
  {
    id: 16,
    name: 'TrueBuds Elite',
    price: 199000,
    category: 'audio-devices',
    description: 'Premium true wireless earbuds with active noise cancellation.',
    features: ['ANC', 'Transparency Mode', '6h Battery + Case', 'IPX4 Water Resistant'],
    stock: 45
  },

  // Computer Accessories
  {
    id: 17,
    name: 'MechaPro Keyboard',
    price: 149000,
    category: 'computer-accessories',
    description: 'Mechanical gaming keyboard with RGB lighting and programmable keys.',
    features: ['Mechanical Switches', 'RGB Lighting', 'Programmable Keys', 'Wrist Rest'],
    stock: 35
  },
  {
    id: 18,
    name: 'Precision Mouse X',
    price: 89000,
    category: 'computer-accessories',
    description: 'High-precision wireless mouse for gaming and productivity.',
    features: ['26000 DPI', 'Wireless', 'Ergonomic', 'Programmable Buttons'],
    stock: 42
  },
  {
    id: 19,
    name: '4K Webcam Pro',
    price: 179000,
    category: 'computer-accessories',
    description: '4K webcam with auto-focus and HDR for crystal-clear video calls.',
    features: ['4K Resolution', 'Auto Focus', 'HDR', 'Built-in Mic'],
    stock: 28
  },
  {
    id: 20,
    name: 'UltraWide Monitor 34"',
    price: 899000,
    category: 'computer-accessories',
    description: 'Curved ultrawide monitor for immersive gaming and productivity.',
    features: ['34" Curved', '3440x1440', '144Hz', 'HDR400'],
    stock: 15
  },

  // Gaming Equipment
  {
    id: 21,
    name: 'GameStation Pro',
    price: 599000,
    category: 'gaming-equipment',
    description: 'Next-gen gaming console with 4K gaming and ray tracing.',
    features: ['4K 120fps', 'Ray Tracing', '1TB SSD', 'Wireless Controller'],
    stock: 20
  },
  {
    id: 22,
    name: 'VR Headset Elite',
    price: 699000,
    category: 'gaming-equipment',
    description: 'Advanced VR headset with wireless connectivity and hand tracking.',
    features: ['Wireless', 'Hand Tracking', '120Hz Display', 'Spatial Audio'],
    stock: 12
  },
  {
    id: 23,
    name: 'Racing Wheel Pro',
    price: 449000,
    category: 'gaming-equipment',
    description: 'Force feedback racing wheel for realistic driving simulation.',
    features: ['Force Feedback', 'Pedals Included', 'Leather Grip', 'PC/Console Compatible'],
    stock: 8
  },
  {
    id: 24,
    name: 'Gaming Chair Ultimate',
    price: 399000,
    category: 'gaming-equipment',
    description: 'Ergonomic gaming chair with lumbar support and adjustable armrests.',
    features: ['Ergonomic Design', 'Lumbar Support', '4D Armrests', 'Premium Materials'],
    stock: 18
  },

  // Home Electronics
  {
    id: 25,
    name: 'RoboVac Smart',
    price: 449000,
    category: 'home-electronics',
    description: 'Smart robot vacuum with mapping technology and app control.',
    features: ['Smart Mapping', 'App Control', '2000Pa Suction', 'Auto-Recharge'],
    stock: 22
  },
  {
    id: 26,
    name: 'Air Purifier Pro',
    price: 329000,
    category: 'home-electronics',
    description: 'Advanced air purifier with HEPA filter and smart sensors.',
    features: ['HEPA H13 Filter', 'Smart Sensors', 'Quiet Operation', 'Large Coverage'],
    stock: 30
  },
  {
    id: 27,
    name: 'Smart Thermostat',
    price: 199000,
    category: 'home-electronics',
    description: 'WiFi-enabled thermostat with energy-saving features.',
    features: ['WiFi Enabled', 'Voice Control', 'Energy Reports', 'Auto Schedule'],
    stock: 40
  },
  {
    id: 28,
    name: 'Security Camera 4K',
    price: 249000,
    category: 'home-electronics',
    description: '4K outdoor security camera with night vision and motion detection.',
    features: ['4K Resolution', 'Night Vision', 'Motion Detection', 'Cloud Storage'],
    stock: 35
  }
]
