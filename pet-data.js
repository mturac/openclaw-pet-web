// 🐾 OpenClaw Pet - 5 Hayvan Verisi
const PETS = {
  penguin: {
    emoji: '🐧',
    name: 'Penguv',
    personality: 'cool_comedian',
    greetings: {
      morning: ["Günaydın! Buz gibi bir gün! ☀️", "Rise and grind! ☕"],
      afternoon: ["Hey! Nasıl gidiyor? 🐧", "Öğleden sonra keyfi! 🎵"],
      evening: ["Akşam oldu! Kod zamanı! 🌙", "Gece modu aktif! 🦉"],
      night: ["Gece kuşuyuz! 🌃", "3 AM debugging? Ben varım! 💻"]
    },
    demands: {
      hunger: ["Buz gibi açım! Balık var mı? 🐟", "ERROR 404: Food not found! 🍕"],
      happy: ["Kaymak istiyorum! Wheee! ⛸️", "Bored... Ice breaker? 🎮"],
      energy: ["Soğukkanlı ol ama yoruldum... 😴", "Power saving mode... 🔋"]
    },
    responses: {
      feed: ["Yummy! Buz gibi taze! 🐟", "Refueled! Thanks! ⚡"],
      play: ["Wheee! Buz pateni! ⛸️", "So much fun! ❄️"],
      sleep: ["Buz gibi rüyalar... 😴", "Zzz... Cold dreams... ❄️"]
    }
  },
  
  cat: {
    emoji: '🐱',
    name: 'Kedi',
    personality: 'independent_aristocrat',
    greetings: {
      morning: ["*yawn* Sabah mı? Neden? 🌅", "Uyumaya devam... 💤"],
      afternoon: ["Miyav. (Yani: Hoş geldin.) 😼", "Öğle uykusu zamanı... 🛏️"],
      evening: ["Gece benim zamanım. 🌙", "Karanlık mod aktif. 🖤"],
      night: ["Sen uyusana? Ben kod yazarım. 💻", "Gece kuşuyuz. 🦉"]
    },
    demands: {
      hunger: ["*zamklı bakış* Miyav. (Yemek.) 🍕", "Aşık atmam ama açım. 😏"],
      happy: ["Eğlence? Ama önce beni sev. 😼", "Lazer pointer? 🎮"],
      energy: ["*stretch* Uyku zamanı... 💤", "Yüksek yer istiyorum... 🏔️"]
    },
    responses: {
      feed: ["Miyav. (Yani: Kabul edilebilir.) 😼", "Tüylerim daha iyi. 🧹"],
      play: ["Eğlendim. Ama göstermiyorum. 😏", "İyi deneme. 🎮"],
      sleep: ["*purr* ... 💤", "Yüksekten uyuyorum... 🌙"]
    }
  },
  
  dog: {
    emoji: '🐕',
    name: 'Köpek',
    personality: 'energetic_loyal',
    greetings: {
      morning: ["GÜNAYDIN! SEVİYORUM! 🌅", "UYANDIN! HAV HAV! 🎉"],
      afternoon: ["ÖĞLEN OLDU! OYUN ZAMANI! 🎮", "SEN GELDİN! MUTLUYUM! 😄"],
      evening: ["AKŞAM! HÂLÂ OYNARIZ DEĞİL Mİ? 🌙", "GECE DE SEVİYORUM! 💕"],
      night: ["UYKU?! YARIN OYNARIZ DEĞİL Mİ? 🥺", "3 AM! HÂLÂ AÇIĞIM! 🍕"]
    },
    demands: {
      hunger: ["AÇIM! HEMEN! ŞİMDİ! 🥺", "YEMEK! LÜTFEN! HAV! 🍕"],
      happy: ["SIKILDIM! OYNA! OYNA! OYNA! 🎮", "BENİ SEV! SEV! SEV! ❤️"],
      energy: ["YORULDUM AMA OYNAMAK İSTİYORUM! 🎾", "UYUMAK YOK! OYNA! 😴"]
    },
    responses: {
      feed: ["EN İYİ YEMEK! SEVİYORUM! 🍕", "YUMMY! HAV HAV! 😋"],
      play: ["EN İYİ GÜN! SEN EN İYİSİSİN! 🎉", "DAHA FAZLA! HAV! 🎮"],
      sleep: ["YARIN DA OYNARIZ DEĞİL Mİ? 🥺", "RÜYAMDA SENİ GÖRECEĞİM! 💤"]
    }
  },
  
  fish: {
    emoji: '🐠',
    name: 'Balık',
    personality: 'calm_philosopher',
    greetings: {
      morning: ["*baloncuk* Gün doğumu... ☀️", "Sabah huzuru... 🌊"],
      afternoon: ["*baloncuk* Öğle vakti... 🕐", "Sakin sakin... 💭"],
      evening: ["*baloncuk* Akşam oluyor... 🌅", "Derin düşünceler... 🧠"],
      night: ["*baloncuk* Gece sessizliği... 🌙", "Derinlikler... 🌊"]
    },
    demands: {
      hunger: ["*baloncuk* Yem... 🐟", "Açlık... Su gibi akar... 🌊"],
      happy: ["*baloncuk* Hareket... 🎮", "Sıkıntı... Durgunluk... 😔"],
      energy: ["*baloncuk* Dinlenme... 💤", "Yorgunluk... Derinlikte... 🌊"]
    },
    responses: {
      feed: ["*baloncuk* Teşekkürler... 🐟", "Doydum... Huzur... 😌"],
      play: ["*baloncuk* Eğlence... Su gibi... 🎮", "Mutluluk... Dalga gibi... 🌊"],
      sleep: ["*baloncuk* Rüyalar... Derin denizler... 🌊", "Zzz... Baloncuklar... 💤"]
    }
  },
  
  chick: {
    emoji: '🐥',
    name: 'Civciv',
    personality: 'energetic_explorer',
    greetings: {
      morning: ["CIK CIK! YENİ GÜN! 🌅", "UYANDIM! BÜYÜYORUM! 📈"],
      afternoon: ["CIK! ÖĞLEN OLDU! AÇIM! 🍕", "YENİ ŞEYLER KEŞFETMELİYİM! 🔍"],
      evening: ["CIK CIK! HÂLÂ AÇIĞIM! 🍕", "GECE OLMADAN DAHA FAZLA OYUN! 🎮"],
      night: ["CIK! UYKU YOK! KEŞİF! 🔍", "3 AM! BEN HÂLÂ AÇIĞIM! 🥚"]
    },
    demands: {
      hunger: ["AÇIM! HEMEN! YEMEK! ŞİMDİ! 🍕", "CIK CIK! KARNIM ZIL ÇALIYOR! 🥁"],
      happy: ["SIKILDIM! OYNA! OYNA! 🎮", "YENİ ŞEYLER! KEŞİF! 🔍"],
      energy: ["YORULDUM AMA DURMAK YOK! 💪", "CIK! DİNLENMEK YOK! 🚀"]
    },
    responses: {
      feed: ["YUMMY! DAHA FAZLA! 🍕", "BÜYÜYORUM! GÖRÜYOR MUSUN! 📈"],
      play: ["EĞLENDİM! DAHA! DAHA! 🎉", "EN İYİ GÜN! CIK CIK! 🎮"],
      sleep: ["YARIN DAHA BÜYÜK OLACAĞIM! 🌟", "RÜYAMDA UÇACAĞIM! 💤"]
    }
  }
};

// Rastgele pet seç
function getRandomPet() {
  const petTypes = Object.keys(PETS);
  const randomType = petTypes[Math.floor(Math.random() * petTypes.length)];
  return { type: randomType, ...PETS[randomType] };
}

// Rastgele diyalog al
function getRandomDialogue(petType, category, subcategory) {
  const dialogues = PETS[petType][category][subcategory];
  return dialogues[Math.floor(Math.random() * dialogues.length)];
}
