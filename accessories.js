// 🎩 OpenClaw Pet - Aksesuar Sistemi

const ACCESSORIES = {
  // Şapkalar
  hats: [
    { id: 'cowboy', emoji: '🤠', name: 'Kovboy Şapkası', price: 100, effect: 'coolness +10' },
    { id: 'crown', emoji: '👑', name: 'Altın Taç', price: 500, effect: 'royalty +50', rarity: 'rare' },
    { id: 'party', emoji: '🎉', name: 'Parti Şapkası', price: 150, effect: 'fun +20' },
    { id: 'graduation', emoji: '🎓', name: 'Mezuniyet', price: 300, effect: 'smart +30' },
    { id: 'helmet', emoji: '⛑️', name: 'Kask', price: 200, effect: 'safety +25' },
    { id: 'ribbon', emoji: '🎀', name: 'Fiyonk', price: 80, effect: 'cute +15' },
    { id: 'tophat', emoji: '🎩', name: 'Sapkın Şapka', price: 250, effect: 'fancy +35' },
    { id: 'winter', emoji: '🧢', name: 'Kış Şapkası', price: 120, effect: 'warm +10' }
  ],
  
  // Gözlükler
  glasses: [
    { id: 'sunglasses', emoji: '🕶️', name: 'Güneş Gözlüğü', price: 150, effect: 'cool +25' },
    { id: 'glasses', emoji: '👓', name: 'Gözlük', price: 100, effect: 'smart +20' },
    { id: 'monocle', emoji: '🧐', name: 'Monokl', price: 300, effect: 'fancy +40' },
    { id: 'goggles', emoji: '🥽', name: 'Dalış Gözlüğü', price: 180, effect: 'swim +30' }
  ],
  
  // Kolyeler
  necklaces: [
    { id: 'medal', emoji: '🏅', name: 'Altın Madalya', price: 400, effect: 'proud +50' },
    { id: 'bell', emoji: '🔔', name: 'Zil', price: 120, effect: 'loud +15' },
    { id: 'gem', emoji: '💎', name: 'Elmas Kolye', price: 1000, effect: 'rich +100', rarity: 'epic' },
    { id: 'pearl', emoji: '🦪', name: 'İnci', price: 350, effect: 'elegant +35' }
  ],
  
  // Diğer
  others: [
    { id: 'bowtie', emoji: '🎀', name: 'Papyon', price: 90, effect: 'fancy +20' },
    { id: 'scarf', emoji: '🧣', name: 'Atkı', price: 110, effect: 'warm +15' },
    { id: 'balloon', emoji: '🎈', name: 'Balon', price: 50, effect: 'float +10' },
    { id: 'flower', emoji: '🌸', name: 'Çiçek', price: 60, effect: 'nature +15' },
    { id: 'mushroom', emoji: '🍄', name: 'Mantar', price: 70, effect: 'magic +20' },
    { id: 'clover', emoji: '🍀', name: 'Yonca', price: 200, effect: 'lucky +30' }
  ]
};

// Kullanıcının sahip olduğu aksesuarlar
let ownedAccessories = [];
let equippedAccessories = {
  hat: null,
  glasses: null,
  necklace: null,
  other: null
};

// Aksesuar satın al
function buyAccessory(id) {
  const accessory = findAccessory(id);
  if (!accessory) return { success: false, message: 'Aksesuar bulunamadı!' };
  
  if (ownedAccessories.includes(id)) {
    return { success: false, message: 'Zaten sahipsin!' };
  }
  
  // TODO: Kullanıcının parasını kontrol et
  ownedAccessories.push(id);
  return { success: true, message: `${accessory.name} satın alındı! ${accessory.emoji}` };
}

// Aksesuar giydir
function equipAccessory(id) {
  const accessory = findAccessory(id);
  if (!accessory || !ownedAccessories.includes(id)) {
    return { success: false, message: 'Bu aksesuara sahip değilsin!' };
  }
  
  // Kategoriyi bul
  let category = null;
  for (let cat in ACCESSORIES) {
    if (ACCESSORIES[cat].some(a => a.id === id)) {
      category = cat;
      break;
    }
  }
  
  if (category) {
    equippedAccessories[category] = id;
    return { success: true, message: `${accessory.name} giydirildi!` };
  }
}

// Aksesuar çıkar
function unequipAccessory(category) {
  equippedAccessories[category] = null;
  return { success: true, message: 'Aksesuar çıkarıldı!' };
}

// Aksesuar bul
function findAccessory(id) {
  for (let category in ACCESSORIES) {
    const found = ACCESSORIES[category].find(a => a.id === id);
    if (found) return found;
  }
  return null;
}

// Giyilen aksesuarları göster
function getEquippedDisplay() {
  let display = [];
  for (let category in equippedAccessories) {
    if (equippedAccessories[category]) {
      const acc = findAccessory(equippedAccessories[category]);
      if (acc) display.push(acc.emoji);
    }
  }
  return display.join(' ');
}

// Pet emoji + aksesuarları birleştir
function getPetDisplay(petEmoji) {
  const accessories = getEquippedDisplay();
  return `${petEmoji} ${accessories}`;
}
