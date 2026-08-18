/**
 * Tiffinshala - Vanilla JS Engine with Icon-Only Header Buttons, RTL & Theme Toggle
 * Uses local image assets (images/img1.jpg .. img17.jpg, hero.jpg, tiffin1.jpg)
 */

// --- DATA SETS USING USER'S LOCAL IMAGES ---
const CITIES = [
  { id: 'all', name: 'All Cities', icon: '📍', badge: '50+ Cities' },
  { id: 'Noida', name: 'Noida', icon: '🏙️', badge: '120+ Kitchens' },
  { id: 'Delhi', name: 'Delhi', icon: '🏛️', badge: '180+ Kitchens' },
  { id: 'Gurugram', name: 'Gurugram', icon: '🏢', badge: '95+ Kitchens' },
  { id: 'Bengaluru', name: 'Bengaluru', icon: '🌳', badge: '150+ Kitchens' },
  { id: 'Mumbai', name: 'Mumbai', icon: '🌊', badge: '160+ Kitchens' },
  { id: 'Pune', name: 'Pune', icon: '🎓', badge: '80+ Kitchens' },
  { id: 'Hyderabad', name: 'Hyderabad', icon: '🏰', badge: '110+ Kitchens' },
  { id: 'Kolkata', name: 'Kolkata', icon: '🛺', badge: '75+ Kitchens' },
  { id: 'Chennai', name: 'Chennai', icon: '🛕', badge: '65+ Kitchens' }
];

const KITCHENS = [
  {
    id: 1,
    name: "Annapurna Ghar Ka Khana",
    city: "Noida",
    locality: "Sector 62, Noida",
    rating: 4.9,
    reviewsCount: 342,
    pricePerMeal: 110,
    dietary: "veg",
    dietaryLabel: "Pure Veg",
    isSubscription: true,
    fssai: "FSSAI: 22723011000492",
    hygieneScore: "98% Clean",
    signatureDish: "Desi Ghee Paneer Butter Masala",
    image: "images/img1.jpg",
    dishes: ["Ghar Ki Paneer Thali", "Dal Tadka", "4 Tawa Roti", "Jeera Rice"],
    weeklyMenu: {
      Mon: "Paneer Masala + Dal Tadka + 4 Roti",
      Tue: "Chole Masala + Jeera Rice + 4 Roti",
      Wed: "Kadhai Paneer + Dal Makhani + Roti",
      Thu: "Aloo Gobi + Yellow Dal + Phulka",
      Fri: "Mix Veg + Rajma + Butter Roti",
      Sat: "Paneer Do Pyaza + Kheer + Roti",
      Sun: "Special Festival Thali + Sweet"
    },
    deliveryTime: "25-35 min",
    tag: "Top Rated"
  },
  {
    id: 2,
    name: "Maa Ki Rasoi Tiffin",
    city: "Delhi",
    locality: "Laxmi Nagar, Delhi",
    rating: 4.8,
    reviewsCount: 512,
    pricePerMeal: 99,
    dietary: "veg",
    dietaryLabel: "Pure Veg",
    isSubscription: true,
    fssai: "FSSAI: 11521008000124",
    hygieneScore: "96% Verified",
    signatureDish: "Homestyle Special Rajma Chawal",
    image: "images/img2.jpg",
    dishes: ["Special Rajma Chawal", "Bhojnalaya Thali", "Phulka Roti", "Boondi Raita"],
    weeklyMenu: {
      Mon: "Special Rajma Chawal + Roti",
      Tue: "Kadhi Pakoda + Rice + Roti",
      Wed: "Matar Paneer + Dal + Phulka",
      Thu: "Black Chana + Rice + Roti",
      Fri: "Shahi Paneer + Dal Fry + Roti",
      Sat: "Aloo Jeera + Dal Makhani + Sweet",
      Sun: "Chana Masala + Poori + Halwa"
    },
    deliveryTime: "20-30 min",
    tag: "Budget Friendly"
  },
  {
    id: 3,
    name: "Royal Punjabi Tiffin Service",
    city: "Gurugram",
    locality: "Cyber City, Gurugram",
    rating: 4.7,
    reviewsCount: 219,
    pricePerMeal: 150,
    dietary: "nonveg",
    dietaryLabel: "Veg & Non-Veg",
    isSubscription: true,
    fssai: "FSSAI: 10822004000319",
    hygieneScore: "99% High Hygiene",
    signatureDish: "Amritsari Butter Chicken Thali",
    image: "images/img3.jpg",
    dishes: ["Butter Chicken Thali", "Kadhai Paneer", "Butter Naan", "Kesari Kheer"],
    weeklyMenu: {
      Mon: "Butter Chicken / Shahi Paneer + Naan",
      Tue: "Chicken Curry / Kadhai Paneer + Rice",
      Wed: "Egg Curry / Dal Makhani + Paratha",
      Thu: "Chicken Korma / Mix Veg + Roti",
      Fri: "Kadhai Chicken / Paneer Do Pyaza",
      Sat: "Chicken Biryani / Veg Pulao",
      Sun: "Sunday Royal Non-Veg / Veg Feast"
    },
    deliveryTime: "30-40 min",
    tag: "Executive Meal"
  },
  {
    id: 4,
    name: "South Tiffin Express",
    city: "Bengaluru",
    locality: "Koramangala, Bengaluru",
    rating: 4.9,
    reviewsCount: 410,
    pricePerMeal: 85,
    dietary: "veg",
    dietaryLabel: "Pure Veg",
    fssai: "FSSAI: 11220002000881",
    hygieneScore: "97% Verified",
    signatureDish: "Authentic Ghee Podi Rice & Sambar",
    isSubscription: true,
    image: "images/img4.jpg",
    dishes: ["Sambar Rice", "Curd Rice", "Ghee Podi Dosa", "Appalam"],
    weeklyMenu: {
      Mon: "Drumstick Sambar Rice + Poriyal",
      Tue: "Vathal Kuzhambu + Rasam + Rice",
      Wed: "Tomato Rice + Potato Kara Curry",
      Thu: "Lemon Rice + Curd Rice + Vadai",
      Fri: "Special Meals Thali + Payasam",
      Sat: "Bisi Bele Bath + Boondi Raita",
      Sun: "Special Ghee Meals Feast"
    },
    deliveryTime: "15-25 min",
    tag: "Homestyle"
  },
  {
    id: 5,
    name: "Swad Homemade Meals",
    city: "Mumbai",
    locality: "Andheri West, Mumbai",
    rating: 4.6,
    reviewsCount: 188,
    pricePerMeal: 125,
    dietary: "veg",
    dietaryLabel: "Jain & Regular Veg",
    fssai: "FSSAI: 11519001000552",
    hygieneScore: "95% Clean Kitchen",
    signatureDish: "Kathiyawadi Thali & Phulka",
    isSubscription: true,
    image: "images/img5.jpg",
    dishes: ["Gujarati Thali", "Kadhi Khichdi", "Phulka Roti", "Gulab Jamun"],
    weeklyMenu: {
      Mon: "Sev Tamatar + Gujju Dal + Rice + Roti",
      Tue: "Ringan Bharta + Kadhi + Khichdi",
      Wed: "Paneer Toofani + Phulka + Sweet",
      Thu: "Bhindini Shaak + Gujarati Dal + Rice",
      Fri: "Undhiyu Special + Poori + Shrikhand",
      Sat: "Kaju Curry + Jeera Rice + Roti",
      Sun: "Special Sunday Thali + Basundi"
    },
    deliveryTime: "30-45 min",
    tag: "Healthy Option"
  },
  {
    id: 6,
    name: "Kolkata Homestyle Kitchen",
    city: "Kolkata",
    locality: "Salt Lake, Kolkata",
    rating: 4.8,
    reviewsCount: 290,
    pricePerMeal: 140,
    dietary: "nonveg",
    dietaryLabel: "Fish & Veg Meals",
    fssai: "FSSAI: 12821006000412",
    hygieneScore: "98% Clean",
    signatureDish: "Katla Machher Jhol & Gobindobhog Rice",
    isSubscription: false,
    image: "images/img6.jpg",
    dishes: ["Machher Jhol", "Steamed Gobindobhog Rice", "Aloo Bhaja", "Mishti Doi"],
    weeklyMenu: {
      Mon: "Rui Machher Jhol + Rice + Bhaja",
      Tue: "Shorshe Ilish / Paneer Jhol + Rice",
      Wed: "Chicken Kosha / Dhokar Dalna",
      Thu: "Katla Kalia + Basmati Rice + Chutney",
      Fri: "Chingri Malai Curry / Chanar Dalna",
      Sat: "Kolkata Mutton / Veg Biryani",
      Sun: "Sunday Special Bengali Bhoj"
    },
    deliveryTime: "25-35 min",
    tag: "Authentic"
  },
  {
    id: 7,
    name: "Shuddha Desi Thali",
    city: "Noida",
    locality: "Sector 18, Noida",
    rating: 4.9,
    reviewsCount: 610,
    pricePerMeal: 120,
    dietary: "veg",
    dietaryLabel: "Pure Veg",
    fssai: "FSSAI: 22722009000115",
    hygieneScore: "99% Certified",
    signatureDish: "Desi Ghee Amritsari Chole Bhature",
    isSubscription: true,
    image: "images/img7.jpg",
    dishes: ["Desi Ghee Chole Bhature", "Paneer Do Pyaza", "Missi Roti", "Lassi"],
    weeklyMenu: {
      Mon: "Paneer Lababdar + Dal Makhani",
      Tue: "Chole Bhature / Missi Roti Thali",
      Wed: "Malai Kofta + Jeera Rice + Roti",
      Thu: "Kadhai Paneer + Mix Veg + Phulka",
      Fri: "Shahi Paneer + Dal Tadka + Sweet",
      Sat: "Special Dal Baati Churma",
      Sun: "Sunday Desi Feast + Rabri"
    },
    deliveryTime: "20-30 min",
    tag: "Bestseller"
  },
  {
    id: 8,
    name: "Puneri Tiffin Box",
    city: "Pune",
    locality: "Viman Nagar, Pune",
    rating: 4.7,
    reviewsCount: 175,
    pricePerMeal: 95,
    dietary: "veg",
    dietaryLabel: "Maharashtrian Veg",
    fssai: "FSSAI: 11520003000994",
    hygieneScore: "97% Hygiene Verified",
    signatureDish: "Pithla Bhakri & Solkadhi",
    isSubscription: true,
    image: "images/img8.jpg",
    dishes: ["Pithla Bhakri", "Poli Thali", "Usal Pav", "Solkadhi"],
    weeklyMenu: {
      Mon: "Pithla Bhakri + Thecha + Onion",
      Tue: "Shev Bhaji + Chapati + Rice",
      Wed: "Matki Usal + Jowar Bhakri + Solkadhi",
      Thu: "Paneer Masala + Varan Bhaat",
      Fri: "Aloo Rasawala + Puri + Sreekhand",
      Sat: "Misal Pav / Veg Thali",
      Sun: "Sunday Puneri Thali + Puran Poli"
    },
    deliveryTime: "25-35 min",
    tag: "Local Favorite"
  },
  {
    id: 9,
    name: "Sharma Ji Ka Dhaba",
    city: "Delhi",
    locality: "Karol Bagh, Delhi",
    rating: 4.8,
    reviewsCount: 310,
    pricePerMeal: 115,
    dietary: "veg",
    dietaryLabel: "Pure Veg",
    fssai: "FSSAI: 13321008000456",
    hygieneScore: "95% Verified",
    signatureDish: "Paneer Butter Masala Thali",
    isSubscription: true,
    image: "images/img15.jpg",
    dishes: ["Paneer Butter Masala", "Dal Makhani", "Garlic Naan", "Lassi"],
    weeklyMenu: {
      Mon: "Paneer Butter Masala + Naan",
      Tue: "Chole Bhature + Lassi",
      Wed: "Kadhai Paneer + Tandoori Roti",
      Thu: "Rajma Chawal + Raita",
      Fri: "Malai Kofta + Jeera Rice",
      Sat: "Mix Veg + Dal Tadka + Phulka",
      Sun: "Special North Indian Thali"
    },
    deliveryTime: "30-40 min",
    tag: "Spicy Choice"
  },
  {
    id: 10,
    name: "Hyderabad Nawabi Kitchen",
    city: "Hyderabad",
    locality: "Banjara Hills, Hyderabad",
    rating: 4.9,
    reviewsCount: 385,
    pricePerMeal: 160,
    dietary: "nonveg",
    dietaryLabel: "Veg & Non-Veg",
    fssai: "FSSAI: 13622013000981",
    hygieneScore: "99% Certified",
    signatureDish: "Authentic Hyderabadi Chicken Dum Biryani",
    isSubscription: true,
    image: "images/img16.jpg",
    dishes: ["Chicken Dum Biryani", "Mirchi Ka Salan", "Mutton Kheema", "Double Ka Meetha"],
    weeklyMenu: {
      Mon: "Chicken Curry + Rice + Roti",
      Tue: "Egg Masala + Jeera Rice",
      Wed: "Mutton Rogan Josh + Naan",
      Thu: "Kadhai Chicken + Pulao",
      Fri: "Hyderabadi Chicken Biryani",
      Sat: "Fish Curry + Rice",
      Sun: "Sunday Special Mutton Biryani Feast"
    },
    deliveryTime: "35-45 min",
    tag: "Premium Meal"
  }
];

const PGS = [
  {
    id: 1,
    name: "Comfort Stays Luxury PG",
    city: "Noida",
    locality: "Sector 62, Noida (Near IT Park)",
    gender: "Boys & Girls Wings",
    sharingType: "Single & Double Sharing",
    rent: "₹ 8,500 / month",
    foodIncluded: true,
    distance: "200m from Metro Station",
    image: "images/img9.jpg",
    amenities: ["WiFi 200 Mbps", "AC Room", "3-Time Tiffin Included", "Daily Housekeeping", "Biometric Entry"]
  },
  {
    id: 2,
    name: "Stanza Living Delhi Nest",
    city: "Delhi",
    locality: "North Campus, Delhi University",
    gender: "Girls PG",
    sharingType: "Single & Double Sharing",
    rent: "₹ 11,000 / month",
    foodIncluded: true,
    distance: "5 min walk to Miranda House",
    image: "images/img10.jpg",
    amenities: ["High-speed WiFi", "Attached Washroom", "Nutritious Homestyle Food", "24/7 Security", "Study Room"]
  },
  {
    id: 3,
    name: "Zolo Cyber Stay PG",
    city: "Gurugram",
    locality: "DLF Phase 3, Gurugram",
    gender: "Boys PG",
    sharingType: "Double & Triple Sharing",
    rent: "₹ 10,500 / month",
    foodIncluded: true,
    distance: "3 min from Cyber City Metro",
    image: "images/img11.jpg",
    amenities: ["AC Rooms", "Daily Laundry", "North & South Indian Tiffins", "Gaming Zone", "Gym Access"]
  },
  {
    id: 4,
    name: "Homely Nest Residency",
    city: "Bengaluru",
    locality: "HSR Layout, Bengaluru",
    gender: "Unisex Co-Living",
    sharingType: "Studio & 2-BHK Sharing",
    rent: "₹ 12,500 / month",
    foodIncluded: true,
    distance: "500m from Sony World Signal",
    image: "images/img12.jpg",
    amenities: ["Power Backup", "South & North Indian Meals Included", "Keycard Access", "Rooftop Lounge"]
  }
];

const WEEKLY_SPECIALS_FULL = [
  {
    day: "Monday",
    title: "Rajma Chawal & Gulab Jamun Special",
    image: "images/img13.jpg",
    kitchen: "Maa Ki Rasoi Tiffin",
    price: "₹ 110",
    nutrition: "580 kcal • 18g Protein",
    prepTime: "Freshly cooked at 11:30 AM"
  },
  {
    day: "Tuesday",
    title: "Desi Ghee Chole Bhature Feast",
    image: "images/img7.jpg",
    kitchen: "Shuddha Desi Thali",
    price: "₹ 125",
    nutrition: "640 kcal • 20g Protein",
    prepTime: "Freshly fried at 12:00 PM"
  },
  {
    day: "Wednesday",
    title: "Punjabi Kadhi Pakoda & Butter Roti",
    image: "images/img14.jpg",
    kitchen: "Royal Punjabi Tiffin",
    price: "₹ 120",
    nutrition: "520 kcal • 15g Protein",
    prepTime: "Freshly simmered at 11:45 AM"
  },
  {
    day: "Thursday",
    title: "Shahi Matar Paneer & Jeera Rice",
    image: "images/img1.jpg",
    kitchen: "Annapurna Ghar Ka Khana",
    price: "₹ 130",
    nutrition: "590 kcal • 22g Protein",
    prepTime: "Cooked at 12:15 PM"
  },
  {
    day: "Friday",
    title: "Paneer Butter Masala Deluxe Thali",
    image: "images/img15.jpg",
    kitchen: "Annapurna Kitchen",
    price: "₹ 140",
    nutrition: "650 kcal • 24g Protein",
    prepTime: "Prepared at 12:00 PM"
  },
  {
    day: "Saturday",
    title: "Dal Baati Churma & Ghee Special",
    image: "images/img5.jpg",
    kitchen: "Swad Homemade Meals",
    price: "₹ 150",
    nutrition: "720 kcal • 19g Protein",
    prepTime: "Baked at 11:30 AM"
  },
  {
    day: "Sunday",
    title: "Sunday Special Festival Thali & Kheer",
    image: "images/img16.jpg",
    kitchen: "Shuddha Desi Thali",
    price: "₹ 160",
    nutrition: "780 kcal • 26g Protein",
    prepTime: "Grand Sunday Feast at 12:30 PM"
  }
];

const REVIEWS = [
  {
    id: 1,
    name: "Aman Sharma",
    role: "Software Engineer at Noida",
    comment: "Tiffinshala made my life so easy! Moving from Jaipur to Noida was tough, but finding Annapurna Kitchen through Tiffinshala feels just like eating Mom's handmade food every single day.",
    rating: 5,
    avatar: "images/img17.jpg"
  },
  {
    id: 2,
    name: "Priya Murthy",
    role: "Student at Delhi University",
    comment: "Super transparent prices, hygienic packaging, and I can pause/resume my tiffin subscription whenever I go home on weekends! Recommended to all PG students.",
    rating: 5,
    avatar: "images/img2.jpg"
  },
  {
    id: 3,
    name: "Rohan Varma",
    role: "IT Analyst, Bengaluru",
    comment: "Found an awesome North Indian tiffin service right in Koramangala. The food is non-oily, fresh, and delivered hot right to my desk.",
    rating: 5,
    avatar: "images/img4.jpg"
  }
];

const FAQS = [
  {
    q: "How does Tiffinshala work?",
    a: "Tiffinshala connects you with verified home kitchens and tiffin providers near your location. You can browse menus, filter by dietary requirements (Veg/Non-Veg/Jain), order daily meals, or start a 7/30-day subscription."
  },
  {
    q: "Can I pause or skip my tiffin subscription when traveling?",
    a: "Yes! Through your personal Tiffinshala Dashboard, you can pause your daily meals with a single toggle before 9:00 AM for lunch or 5:00 PM for dinner. Unused meals auto-extend your validity."
  },
  {
    q: "How are the kitchens verified for hygiene and safety?",
    a: "Every home kitchen listed on Tiffinshala undergoes strict quality checks, FSSAI compliance verification, and monthly hygiene inspections to ensure fresh, clean, and nutritious food."
  },
  {
    q: "What payment methods are supported?",
    a: "We accept all major payment modes including UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards, Net Banking, and Cash on Delivery (COD)."
  },
  {
    q: "How can I register my kitchen or PG on Tiffinshala?",
    a: "Click on 'Register Kitchen' or 'Register PG' in the menu, fill in your basic details, and our onboarding team will verify your setup within 24 hours to help you start earning!"
  }
];

// --- APPLICATION STATE ---
let state = {
  currentCity: 'all',
  currentCategory: 'all',
  searchQuery: '',
  theme: localStorage.getItem('tiffin_theme') || 'dark',
  isRtl: localStorage.getItem('tiffin_rtl') === 'true',
  cart: [],
  activeDashboardTab: 'subscriptions',
  subscriptions: [
    {
      id: 'SUB-9821',
      kitchen: 'Annapurna Ghar Ka Khana',
      plan: '30-Day Veg Meal Plan (Lunch & Dinner)',
      status: 'ACTIVE',
      deliveriesRemaining: 22,
      todayLunchStatus: 'OUT_FOR_DELIVERY',
      todayDinnerStatus: 'SCHEDULED',
      nextDeliveryTime: 'Today, 1:15 PM'
    }
  ],
  vendorMetrics: {
    isKitchenOpen: true,
    todayOrders: 142,
    todayRevenue: 15620,
    monthlyRevenue: 384500
  },
  corporateHeadcount: 25
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRtl();
  renderCities();
  renderKitchens();
  renderPgs();
  renderWeeklySpecials();
  renderReviews();
  renderFaqs();
  setupEventListeners();
  renderDashboardContent();
  updateCorporateCalculator(25);
});

// --- THEME MANAGEMENT (ICON-ONLY UPDATE) ---
function initTheme() {
  if (state.theme === 'light') {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }
  updateThemeButtonsUI();
}

function toggleTheme() {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  localStorage.setItem('tiffin_theme', state.theme);
  if (state.theme === 'light') {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }
  updateThemeButtonsUI();
}

function updateThemeButtonsUI() {
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.innerHTML = state.theme === 'light' ? '☀️' : '🌙';
  }
}

// --- RTL MANAGEMENT (ICON-ONLY UPDATE) ---
function initRtl() {
  if (state.isRtl) {
    document.documentElement.setAttribute('dir', 'rtl');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
  }
  updateRtlButtonsUI();
}

function toggleRtl() {
  state.isRtl = !state.isRtl;
  localStorage.setItem('tiffin_rtl', state.isRtl ? 'true' : 'false');
  if (state.isRtl) {
    document.documentElement.setAttribute('dir', 'rtl');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
  }
  updateRtlButtonsUI();
}

function updateRtlButtonsUI() {
  const rtlBtn = document.getElementById('rtl-toggle-btn');
  if (rtlBtn) {
    rtlBtn.innerHTML = '⇄';
  }
}

// --- RENDER CITIES & LOCALITIES ---
function renderCities() {
  const container = document.getElementById('cities-scroll-container');
  if (!container) return;

  container.innerHTML = CITIES.map(city => `
    <button 
      onclick="selectCity('${city.name}')" 
      class="city-chip group flex flex-col items-center gap-2 shrink-0 cursor-pointer transition-all duration-200"
    >
      <div class="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full flex flex-col items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:border-2 group-hover:border-orange-500 shadow-md ${state.currentCity === city.name ? 'bg-orange-500/20 border-2 border-orange-500 text-orange-400' : 'bg-slate-800/80 border border-slate-700 text-slate-200'}">
        ${city.id === 'all' 
          ? `<span class="text-3xl sm:text-4xl mb-1">${city.icon}</span><span class="text-[10px] font-bold tracking-wider uppercase opacity-75">${city.badge}</span>` 
          : `<img src="images/${city.name}.png" alt="${city.name}" class="w-full h-full object-cover" onerror="this.outerHTML='<span class=\\'text-4xl\\'>${city.icon}</span>'" />`
        }
      </div>
      <span class="text-sm font-semibold text-center ${state.currentCity === city.name ? 'text-orange-500' : 'text-slate-300'}">${city.name}</span>
    </button>
  `).join('');
}

function selectCity(cityName) {
  state.currentCity = cityName;
  renderCities();
  renderKitchens();
  renderPgs();
  
  const section = document.getElementById('kitchens');
  if (section) section.scrollIntoView({ behavior: 'smooth' });

  showToast(`Filtering for city: ${cityName}`);
}

// --- RENDER KITCHENS WITH FSSAI & WEEKLY MENU PREVIEW ---
function renderKitchens() {
  const container = document.getElementById('kitchens-grid');
  const countBadge = document.getElementById('kitchens-count-badge');
  if (!container) return;

  let filtered = KITCHENS.filter(k => {
    const matchesCity = (state.currentCity === 'all' || state.currentCity === 'All Cities') ? true : k.city.toLowerCase() === state.currentCity.toLowerCase();
    
    let matchesCategory = true;
    if (state.currentCategory === 'veg') matchesCategory = k.dietary === 'veg';
    if (state.currentCategory === 'nonveg') matchesCategory = k.dietary === 'nonveg';
    if (state.currentCategory === 'subscription') matchesCategory = k.isSubscription === true;

    const matchesSearch = state.searchQuery === '' || 
      k.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      k.locality.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      k.dishes.some(d => d.toLowerCase().includes(state.searchQuery.toLowerCase()));

    return matchesCity && matchesCategory && matchesSearch;
  });

  if (countBadge) {
    countBadge.textContent = `${filtered.length} Kitchens Available`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center text-slate-400 bg-slate-800/40 rounded-2xl border border-slate-700/50">
        <div class="text-5xl mb-3">🍲</div>
        <h3 class="text-xl font-bold text-slate-200">No home kitchens found</h3>
        <p class="text-sm text-slate-400 mt-1">Try clearing your filters or changing the search query.</p>
        <button onclick="resetFilters()" class="mt-4 px-5 py-2 bg-orange-500 text-white rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors">
          Reset Filters
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(k => `
    <div class="food-card rounded-2xl overflow-hidden shadow-lg flex flex-col group animate-fade-in">
      <div class="relative h-48 overflow-hidden bg-slate-900">
        <img 
          src="${k.image}" 
          alt="${k.name}" 
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
        <span class="absolute top-3 left-3 px-3 py-1 bg-slate-900/80 backdrop-blur-md border border-slate-700/60 rounded-full text-xs font-semibold text-orange-400 shadow">
          ${k.tag}
        </span>
        <span class="absolute top-3 right-3 px-2.5 py-1 bg-green-900/90 border border-green-700 rounded-full text-xs font-bold text-green-300 flex items-center gap-1">
          <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> ${k.dietaryLabel}
        </span>
        <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300">
          <span class="flex items-center gap-1 bg-black/60 px-2 py-1 rounded-md backdrop-blur-sm !text-white">
            📍 ${k.locality}
          </span>
          <span class="flex items-center gap-1 bg-black/60 px-2 py-1 rounded-md backdrop-blur-sm text-emerald-400 font-bold">
            🛡️ ${k.hygieneScore}
          </span>
        </div>
      </div>

      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-start justify-between gap-2 mb-1">
            <h3 class="text-lg font-bold text-slate-100 group-hover:text-orange-400 transition-colors line-clamp-1">
              ${k.name}
            </h3>
            <div class="flex items-center gap-1 bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 rounded text-xs font-bold text-amber-400 shrink-0">
              ⭐ ${k.rating} <span class="text-slate-400 font-normal">(${k.reviewsCount})</span>
            </div>
          </div>

          <p class="text-[11px] text-slate-400 mb-3 flex items-center gap-1">
            <span>✨ Signature:</span> <span class="text-slate-200 font-semibold">${k.signatureDish}</span>
          </p>

          <div class="flex flex-wrap gap-1.5 mb-4">
            ${k.dishes.map(dish => `
              <span class="text-[11px] px-2 py-0.5 rounded bg-slate-800 border border-slate-700/60 text-slate-300">
                ${dish}
              </span>
            `).join('')}
          </div>
        </div>

        <div class="pt-3 border-t border-slate-700/50 flex items-center justify-between">
          <div>
            <span class="text-[10px] text-slate-400 font-mono block">${k.fssai}</span>
            <div class="text-lg font-extrabold text-orange-400">
              ₹${k.pricePerMeal} <span class="text-xs font-normal text-slate-400">/ meal</span>
            </div>
          </div>

          <button 
            onclick="openKitchenModal(${k.id})" 
            class="px-2.5 sm:px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-[10px] sm:text-xs font-bold rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-1.5 whitespace-nowrap shrink-0"
          >
            View Menu & Order →
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// --- RENDER PGS WITH AMENITIES & DISTANCE ---
function renderPgs() {
  const container = document.getElementById('pgs-grid');
  if (!container) return;

  let filtered = PGS.filter(pg => {
    return (state.currentCity === 'all' || state.currentCity === 'All Cities') ? true : pg.city.toLowerCase() === state.currentCity.toLowerCase();
  });

  if (filtered.length === 0) {
    filtered = PGS;
  }

  container.innerHTML = filtered.map(pg => `
    <div class="food-card rounded-2xl overflow-hidden shadow-lg flex flex-col group animate-fade-in">
      <div class="relative h-44 md:h-60 xl:h-48 overflow-hidden bg-slate-900">
        <img src="${pg.image}" alt="${pg.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
        <div class="absolute top-3 left-3 right-3 flex flex-wrap justify-between gap-2">
          <span class="px-3 py-1 bg-slate-900/90 border border-slate-700 rounded-full text-xs font-semibold text-amber-400">
            ${pg.gender}
          </span>
          ${pg.foodIncluded ? `
            <span class="px-2.5 py-1 bg-emerald-900/90 border border-emerald-700 rounded-full text-xs font-bold !text-white">
              🍲 Daily Tiffin Included
            </span>
          ` : ''}
        </div>
      </div>

      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="text-base font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
            ${pg.name}
          </h3>
          <p class="text-xs text-slate-400 mt-1 flex items-center gap-1">
            📍 ${pg.locality}
          </p>
          <p class="text-[11px] text-emerald-400 mt-0.5 font-medium">
            🚶 ${pg.distance}
          </p>

          <div class="flex flex-wrap gap-1.5 mt-3">
            ${pg.amenities.map(a => `
              <span class="text-[10px] font-medium px-2 py-0.5 bg-slate-800 border border-slate-700/50 text-slate-300 rounded">
                ✓ ${a}
              </span>
            `).join('')}
          </div>
        </div>

        <div class="mt-4 pt-3 border-t border-slate-700/50 flex flex-col gap-3">
          <div class="text-base font-extrabold text-emerald-400 whitespace-nowrap">
            ${pg.rent}
          </div>
          <button onclick="openModal('register-pg-modal')" class="w-full px-3.5 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-200 text-xs font-bold rounded-lg transition-colors whitespace-nowrap text-center">
            Book Free Visit
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// --- RENDER FULL WEEKLY CHEF SPECIALS ---
function renderWeeklySpecials() {
  const container = document.getElementById('weekly-specials-grid');
  if (!container) return;

  container.innerHTML = WEEKLY_SPECIALS_FULL.map(spec => `
    <div class="food-card rounded-2xl overflow-hidden p-4 flex flex-col group animate-fade-in sm:last:col-span-2 sm:last:w-[calc(50%-0.75rem)] sm:last:mx-auto lg:last:col-span-1 lg:last:w-full lg:last:mx-0">
      <div class="relative h-44 rounded-xl overflow-hidden mb-3">
        <img src="${spec.image}" alt="${spec.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <span class="absolute top-2 left-2 px-3 py-1 bg-orange-500 text-white text-[10px] font-black uppercase rounded-md shadow">
          ${spec.day} Special
        </span>
        <span class="absolute bottom-2 left-2 px-2 py-0.5 bg-black/70 backdrop-blur-sm !text-white text-[10px] font-semibold rounded">
          🔥 ${spec.nutrition}
        </span>
      </div>
      <h4 class="text-sm font-bold text-slate-100 line-clamp-1 mb-1">${spec.title}</h4>
      <p class="text-xs text-slate-400 mb-2">By ${spec.kitchen}</p>
      <p class="text-[11px] text-emerald-400 mb-3">⏱️ ${spec.prepTime}</p>
      
      <div class="mt-auto flex items-center justify-between pt-3 border-t border-slate-800">
        <span class="text-base font-black text-amber-400">${spec.price}</span>
        <button onclick="addToOrder('${spec.kitchen}', '${spec.title}', 120)" class="px-3.5 py-1.5 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold rounded-lg transition-colors shadow">
          Pre-Order
        </button>
      </div>
    </div>
  `).join('');
}

// --- CORPORATE DISCOUNT CALCULATOR ---
function updateCorporateCalculator(val) {
  state.corporateHeadcount = parseInt(val);
  const countSpan = document.getElementById('corp-count-display');
  const priceSpan = document.getElementById('corp-price-display');
  const savingsSpan = document.getElementById('corp-savings-display');

  if (countSpan) countSpan.textContent = `${val} Employees`;

  let pricePerMeal = 110;
  if (val >= 25) pricePerMeal = 95;
  if (val >= 50) pricePerMeal = 85;
  if (val >= 100) pricePerMeal = 75;

  const monthlySavings = (130 - pricePerMeal) * val * 22;

  if (priceSpan) priceSpan.textContent = `₹ ${pricePerMeal} / meal`;
  if (savingsSpan) savingsSpan.textContent = `Save ₹ ${monthlySavings.toLocaleString()} / month`;
}

// --- RENDER REVIEWS ---
function renderReviews() {
  const container = document.getElementById('reviews-container');
  if (!container) return;

  container.innerHTML = REVIEWS.map(r => `
    <div class="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 shadow-lg flex flex-col justify-between">
      <div class="text-amber-400 text-sm mb-3 text-center">
        ${'⭐'.repeat(r.rating)}
      </div>
      <p class="text-sm text-slate-300 italic leading-relaxed mb-6">
        "${r.comment}"
      </p>
      <div class="flex flex-col items-center justify-center gap-2 pt-4 border-t border-slate-700/40 text-center">
        <img src="${r.avatar}" alt="${r.name}" class="w-10 h-10 rounded-full object-cover border border-orange-500/40" />
        <div>
          <h4 class="text-sm font-bold text-slate-100">${r.name}</h4>
          <p class="text-[11px] text-slate-400 mt-0.5">${r.role}</p>
        </div>
      </div>
    </div>
  `).join('');
}

// --- RENDER FAQS ---
function renderFaqs() {
  const container = document.getElementById('faqs-accordion');
  if (!container) return;

  container.innerHTML = FAQS.map((faq, index) => `
    <div class="border border-slate-700/70 rounded-xl overflow-hidden bg-slate-800/40 transition-colors">
      <button 
        onclick="toggleFaq(${index})" 
        class="w-full px-5 py-4 text-start flex items-center justify-between gap-4 font-bold text-white text-sm hover:text-orange-400 transition-colors"
      >
        <span>${faq.q}</span>
        <span id="faq-icon-${index}" class="text-sm font-mono text-orange-400 transition-transform duration-200 shrink-0">▼</span>
      </button>
      <div id="faq-ans-${index}" class="hidden px-5 pb-4 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-700/30 pt-3">
        ${faq.a}
      </div>
    </div>
  `).join('');
}

function toggleFaq(index) {
  const ans = document.getElementById(`faq-ans-${index}`);
  const icon = document.getElementById(`faq-icon-${index}`);
  if (!ans || !icon) return;

  if (ans.classList.contains('hidden')) {
    ans.classList.remove('hidden');
    icon.textContent = '▲';
  } else {
    ans.classList.add('hidden');
    icon.textContent = '▼';
  }
}

// --- DASHBOARD CONTROLLER ---
function setDashboardTab(tabName) {
  state.activeDashboardTab = tabName;
  
  document.querySelectorAll('[data-dash-tab]').forEach(btn => {
    if (btn.getAttribute('data-dash-tab') === tabName) {
      btn.classList.add('bg-orange-500', 'text-white');
      btn.classList.remove('bg-neutral-900', 'bg-slate-800', 'text-slate-400', 'text-slate-800', 'dark:text-slate-400');
    } else {
      btn.classList.remove('bg-orange-500', 'text-white');
      btn.classList.add('bg-neutral-900', 'text-slate-800', 'dark:text-slate-400');
    }
  });

  renderDashboardContent();
}

function renderDashboardContent() {
  const container = document.getElementById('dashboard-tab-body');
  if (!container) return;

  if (state.activeDashboardTab === 'subscriptions') {
    const sub = state.subscriptions[0];
    container.innerHTML = `
      <div class="space-y-6 animate-fade-in">
        <!-- Active Plan Banner Card -->
        <div class="p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700/80 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 rounded-2xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-3xl shrink-0">
              🍲
            </div>
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold">
                  ● ACTIVE PLAN
                </span>
                <span class="text-xs text-slate-400 font-mono">${sub.id}</span>
              </div>
              <h3 class="text-lg font-bold text-white">${sub.kitchen}</h3>
              <p class="text-xs text-slate-300">${sub.plan}</p>
            </div>
          </div>

          <div class="text-left md:text-right shrink-0">
            <span class="text-xs text-slate-400 block">Deliveries Remaining</span>
            <span class="text-2xl font-black text-orange-400">${sub.deliveriesRemaining} / 30</span>
          </div>
        </div>

        <!-- Today's Delivery Live Tracker -->
        <div class="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80">
          <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4">
            <marquee direction="left" scrollamount="8" class="w-full">🛵 Today's Meal Delivery Tracker</marquee>
          </h4>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Lunch Tracker -->
            <div class="p-4 rounded-xl bg-slate-900 border border-slate-700/60 flex items-center justify-between">
              <div>
                <span class="text-xs font-bold text-slate-400 uppercase">Lunch Meal (1:15 PM)</span>
                <h5 class="text-sm font-bold text-white mt-1">Standard Paneer Veg Thali</h5>
                <p class="text-xs text-orange-400 font-semibold mt-1">
                  ${sub.todayLunchStatus === 'OUT_FOR_DELIVERY' ? '🛵 Out for Delivery (Rider: Rahul)' : (sub.todayLunchStatus === 'PAUSED' ? '⏸️ PAUSED BY YOU' : '✅ DELIVERED')}
                </p>
              </div>

              <button 
                onclick="toggleMealPause('lunch')" 
                class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow ${sub.todayLunchStatus === 'PAUSED' ? 'bg-emerald-600 text-white' : 'bg-rose-500/20 text-rose-400 border border-rose-500/40 hover:bg-rose-500 hover:text-white'}"
              >
                ${sub.todayLunchStatus === 'PAUSED' ? '▶️ Resume Lunch' : '⏸️ Pause Lunch'}
              </button>
            </div>

            <!-- Dinner Tracker -->
            <div class="p-4 rounded-xl bg-slate-900 border border-slate-700/60 flex items-center justify-between">
              <div>
                <span class="text-xs font-bold text-slate-400 uppercase">Dinner Meal (8:00 PM)</span>
                <h5 class="text-sm font-bold text-white mt-1">Special Dal Makhani & Roti</h5>
                <p class="text-xs text-amber-400 font-semibold mt-1">
                  ${sub.todayDinnerStatus === 'PAUSED' ? '⏸️ PAUSED BY YOU' : '⏳ Cooking in Kitchen'}
                </p>
              </div>

              <button 
                onclick="toggleMealPause('dinner')" 
                class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow ${sub.todayDinnerStatus === 'PAUSED' ? 'bg-emerald-600 text-white' : 'bg-rose-500/20 text-rose-400 border border-rose-500/40 hover:bg-rose-500 hover:text-white'}"
              >
                ${sub.todayDinnerStatus === 'PAUSED' ? '▶️ Resume Dinner' : '⏸️ Pause Dinner'}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  } else if (state.activeDashboardTab === 'history') {
    container.innerHTML = `
      <div class="space-y-3 animate-fade-in">
        <div class="p-4 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
          <div>
            <span class="text-xs text-slate-400 font-mono">INV-2026-0814</span>
            <h5 class="text-sm font-bold text-white">Annapurna Kitchen (1 Month Veg Subscription)</h5>
            <p class="text-xs text-slate-400">Paid via UPI • 14 Aug 2026</p>
          </div>
          <div class="text-right">
            <span class="text-sm font-bold text-emerald-400 block">₹ 2,860</span>
            <button onclick="showToast('Downloading PDF Receipt...')" class="text-xs text-orange-400 hover:underline">Download Receipt</button>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
          <div>
            <span class="text-xs text-slate-400 font-mono">INV-2026-0720</span>
            <h5 class="text-sm font-bold text-white">Maa Ki Rasoi (Executive Rajma Thali)</h5>
            <p class="text-xs text-slate-400">Paid via Card • 20 Jul 2026</p>
          </div>
          <div class="text-right">
            <span class="text-sm font-bold text-emerald-400 block">₹ 199</span>
            <button onclick="showToast('Reorder request placed!')" class="text-xs text-orange-400 hover:underline">Reorder Meal</button>
          </div>
        </div>
      </div>
    `;
  } else if (state.activeDashboardTab === 'vendor') {
    const v = state.vendorMetrics;
    container.innerHTML = `
      <div class="space-y-6 animate-fade-in">
        <div class="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
          <div>
            <h4 class="text-sm font-bold text-amber-400">Kitchen Owner Analytics (Annapurna Rasoi)</h4>
            <p class="text-xs text-slate-300">Live dashboard for kitchen partners and daily order tracking.</p>
          </div>
          <button 
            onclick="toggleVendorKitchenStatus()" 
            class="px-4 py-2 rounded-xl text-xs font-black shadow transition-all ${v.isKitchenOpen ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'}"
          >
            ${v.isKitchenOpen ? '🟢 Kitchen OPEN' : '🔴 Kitchen PAUSED'}
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div class="p-4 rounded-xl bg-slate-800 border border-slate-700">
            <span class="text-xs text-slate-400 uppercase font-bold block mb-1">Today's Tiffins</span>
            <span class="text-2xl font-black text-white">${v.todayOrders}</span>
            <span class="text-[10px] text-emerald-400 block mt-1">↑ 12% from yesterday</span>
          </div>

          <div class="p-4 rounded-xl bg-slate-800 border border-slate-700">
            <span class="text-xs text-slate-400 uppercase font-bold block mb-1">Today's Revenue</span>
            <span class="text-2xl font-black text-orange-400">₹ ${v.todayRevenue.toLocaleString()}</span>
            <span class="text-[10px] text-slate-400 block mt-1">142 Tiffins delivered</span>
          </div>

          <div class="p-4 rounded-xl bg-slate-800 border border-slate-700">
            <span class="text-xs text-slate-400 uppercase font-bold block mb-1">Monthly Earnings</span>
            <span class="text-2xl font-black text-emerald-400">₹ ${v.monthlyRevenue.toLocaleString()}</span>
            <span class="text-[10px] text-emerald-400 block mt-1">26 Active Subscribers</span>
          </div>
        </div>
      </div>
    `;
  }
}

function toggleMealPause(mealType) {
  const sub = state.subscriptions[0];
  if (mealType === 'lunch') {
    sub.todayLunchStatus = sub.todayLunchStatus === 'PAUSED' ? 'OUT_FOR_DELIVERY' : 'PAUSED';
    showToast(sub.todayLunchStatus === 'PAUSED' ? '⏸️ Today\'s Lunch Meal has been PAUSED. Delivery extended by +1 day.' : '▶️ Lunch Meal resumed!');
  } else {
    sub.todayDinnerStatus = sub.todayDinnerStatus === 'PAUSED' ? 'SCHEDULED' : 'PAUSED';
    showToast(sub.todayDinnerStatus === 'PAUSED' ? '⏸️ Today\'s Dinner Meal has been PAUSED. Delivery extended by +1 day.' : '▶️ Dinner Meal resumed!');
  }
  renderDashboardContent();
}

function toggleVendorKitchenStatus() {
  state.vendorMetrics.isKitchenOpen = !state.vendorMetrics.isKitchenOpen;
  showToast(state.vendorMetrics.isKitchenOpen ? '🟢 Kitchen Status set to OPEN. Accepting new orders!' : '🔴 Kitchen Status set to PAUSED. No new orders accepted.');
  renderDashboardContent();
}

// --- FILTER CONTROLLERS ---
function setCategoryFilter(category) {
  state.currentCategory = category;
  
  document.querySelectorAll('.filter-pill').forEach(btn => {
    if (btn.getAttribute('data-category') === category) {
      btn.classList.add('bg-orange-500', 'text-slate-900', 'border-orange-500', 'pill-active');
      btn.classList.remove('bg-neutral-900', 'text-slate-300', 'border-neutral-800', 'bg-slate-800', 'border-slate-700', 'text-white');
    } else {
      btn.classList.remove('bg-orange-500', 'text-slate-900', 'border-orange-500', 'pill-active', 'text-white');
      btn.classList.add('bg-neutral-900', 'text-slate-300', 'border-neutral-800');
    }
  });

  renderKitchens();
}

function handleSearch(query) {
  state.searchQuery = query;
  renderKitchens();
}

function resetFilters() {
  state.currentCity = 'all';
  state.currentCategory = 'all';
  state.searchQuery = '';
  const input = document.getElementById('kitchen-search-input');
  if (input) input.value = '';
  renderCities();
  renderKitchens();
}

// --- MODAL & ORDERING CONTROLLERS ---
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }
}

function openKitchenModal(kitchenId) {
  const kitchen = KITCHENS.find(k => k.id === kitchenId);
  if (!kitchen) return;

  const content = document.getElementById('kitchen-modal-content');
  if (!content) return;

  const menuDays = Object.entries(kitchen.weeklyMenu).map(([day, item]) => `
    <div class="flex items-center justify-between text-xs py-1 border-b border-slate-800">
      <span class="font-bold text-orange-400 w-12">${day}:</span>
      <span class="text-slate-300 flex-1 text-right line-clamp-1">${item}</span>
    </div>
  `).join('');

  content.innerHTML = `
    <div class="relative h-44 sm:h-52 bg-slate-900 rounded-t-2xl overflow-hidden">
      <img src="${kitchen.image}" alt="${kitchen.name}" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
      <button onclick="closeModal('kitchen-menu-modal')" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80">
        ✕
      </button>
      <div class="absolute bottom-4 left-5 right-5">
        <span class="px-2.5 py-0.5 rounded text-[10px] font-bold bg-orange-500 text-white uppercase tracking-wider">
          ${kitchen.dietaryLabel}
        </span>
        <h3 class="text-xl sm:text-2xl font-extrabold text-white mt-1">${kitchen.name}</h3>
        <p class="text-xs text-slate-300 flex items-center gap-2 mt-0.5">
          <span>📍 ${kitchen.locality}</span> • <span>⭐ ${kitchen.rating} (${kitchen.reviewsCount} reviews)</span>
        </p>
      </div>
    </div>

    <div class="p-6 max-h-[65vh] overflow-y-auto space-y-5">
      <div>
        <h4 class="text-xs font-extrabold uppercase tracking-wider text-orange-400 mb-2">Today's Homestyle Thali Selection</h4>
        
        <div class="space-y-3">
          <div class="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
            <div>
              <h5 class="font-bold text-slate-100 text-sm">Standard Veg Thali</h5>
              <p class="text-xs text-slate-400 mt-0.5">Paneer Butter Masala, Dal Tadka, 4 Chapati, Jeera Rice, Salad</p>
            </div>
            <div class="text-right shrink-0">
              <span class="text-base font-extrabold text-orange-400">₹${kitchen.pricePerMeal}</span>
              <button onclick="addToOrder('${kitchen.name}', 'Standard Veg Thali', ${kitchen.pricePerMeal})" class="block mt-1 px-3 py-1 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold rounded-lg transition-colors">
                Add +
              </button>
            </div>
          </div>

          <div class="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
            <div>
              <h5 class="font-bold text-slate-100 text-sm">Deluxe Executive Thali</h5>
              <p class="text-xs text-slate-400 mt-0.5">Shahi Paneer, Dal Makhani, Mix Veg, 4 Butter Roti, Rice, Sweet, Curd</p>
            </div>
            <div class="text-right shrink-0">
              <span class="text-base font-extrabold text-orange-400">₹${kitchen.pricePerMeal + 40}</span>
              <button onclick="addToOrder('${kitchen.name}', 'Deluxe Executive Thali', ${kitchen.pricePerMeal + 40})" class="block mt-1 px-3 py-1 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold rounded-lg transition-colors">
                Add +
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Weekly Schedule Preview Box -->
      <div class="p-4 rounded-xl bg-slate-950 border border-slate-800">
        <h5 class="text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-2">📅 7-Day Weekly Rotational Menu</h5>
        <div class="space-y-1">
          ${menuDays}
        </div>
      </div>

      <div class="p-4 rounded-xl bg-orange-500/10 border border-orange-500/30">
        <h5 class="text-sm font-bold text-orange-400 flex items-center gap-1.5">
          📅 Start 30-Day Monthly Subscription
        </h5>
        <p class="text-xs text-slate-300 mt-1">
          Save 20% on daily meals with free delivery. Pause or skip anytime from your dashboard.
        </p>
        <button onclick="subscribeKitchen('${kitchen.name}')" class="mt-3 w-full py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-extrabold rounded-xl shadow-lg hover:opacity-90 transition-opacity">
          Subscribe for ₹${(kitchen.pricePerMeal * 26).toLocaleString()} / month (26 Days)
        </button>
      </div>
    </div>
  `;

  openModal('kitchen-menu-modal');
}

function addToOrder(kitchenName, mealName, price) {
  state.cart.push({ kitchenName, mealName, price });
  updateCartBadge();
  showToast(`Added "${mealName}" to your order summary!`);
}

function subscribeKitchen(kitchenName) {
  closeModal('kitchen-menu-modal');
  showToast(`🎉 Subscription request sent for ${kitchenName}! Check your Dashboard.`);
}

function updateCartBadge() {
  const badge = document.getElementById('cart-count-badge');
  if (badge) {
    badge.textContent = state.cart.length;
    if (state.cart.length > 0) {
      badge.classList.remove('hidden');
    }
  }
}

// --- FORM SUBMISSION HANDLERS ---
function handleRegisterForm(e, type) {
  e.preventDefault();
  closeModal(type === 'kitchen' ? 'register-kitchen-modal' : 'register-pg-modal');
  showToast(`🎉 Thank you! Your ${type === 'kitchen' ? 'Kitchen' : 'PG'} registration application has been received. Our team will verify and contact you within 24 hours.`);
}

// --- TOGGLE PASSWORD VISIBILITY ---
function togglePasswordVisibility(inputId, btnElement) {
  const input = document.getElementById(inputId);
  if (!input) return;
  
  if (input.type === 'password') {
    input.type = 'text';
    btnElement.textContent = '🙈';
  } else {
    input.type = 'password';
    btnElement.textContent = '👁️';
  }
}
// --- TOAST NOTIFICATIONS ---
function showToast(msg) {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'fixed bottom-5 right-5 z-[100] flex flex-col gap-2 pointer-events-none';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'px-4 py-3 rounded-xl bg-slate-900/95 border border-orange-500/50 text-slate-100 text-xs font-semibold shadow-2xl backdrop-blur-md animate-fade-in pointer-events-auto flex items-center gap-2 max-w-sm';
  toast.innerHTML = `<span>✨</span> <span>${msg}</span>`;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// --- EVENT LISTENERS ---
function setupEventListeners() {
  const menuOpenBtn = document.getElementById('mobile-menu-open');
  const menuCloseBtn = document.getElementById('mobile-menu-close');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('drawer-backdrop');

  if (menuOpenBtn && mobileDrawer && backdrop) {
    menuOpenBtn.addEventListener('click', () => {
      mobileDrawer.classList.remove('-translate-x-full');
      backdrop.classList.remove('opacity-0', 'pointer-events-none');
    });
  }

  if (menuCloseBtn && mobileDrawer && backdrop) {
    const closeDrawer = () => {
      mobileDrawer.classList.add('-translate-x-full');
      backdrop.classList.add('opacity-0', 'pointer-events-none');
    };
    menuCloseBtn.addEventListener('click', closeDrawer);
    backdrop.addEventListener('click', closeDrawer);
  }

  const searchInput = document.getElementById('kitchen-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => handleSearch(e.target.value));
  }

  // Scrollspy logic for navbar highlighting
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.scrollY;
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 200; // offset for fixed header
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if(href && href.length > 1) {
        link.classList.remove('text-orange-400', 'font-bold');
        if (current && href === '#' + current) {
          link.classList.add('text-orange-400', 'font-bold');
        }
      }
    });

    const homeBtn = document.getElementById('nav-home-btn');
    if (homeBtn) {
      if (current === 'hero' || current === 'home2') {
        homeBtn.classList.add('text-orange-400', 'font-bold');
      } else {
        homeBtn.classList.remove('text-orange-400', 'font-bold');
      }
    }

    // Scroll to Top Button Visibility
    const scrollBtn = document.getElementById('scrollToTopBtn');
    if (scrollBtn) {
      if (scrollY > 300) {
        scrollBtn.classList.remove('opacity-0', 'invisible', 'translate-y-4');
        scrollBtn.classList.add('opacity-100', 'visible', 'translate-y-0');
      } else {
        scrollBtn.classList.add('opacity-0', 'invisible', 'translate-y-4');
        scrollBtn.classList.remove('opacity-100', 'visible', 'translate-y-0');
      }
    }
  });
  
  // Trigger once on load to set initial state
  window.dispatchEvent(new Event('scroll'));
}
