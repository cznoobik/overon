
const languageKey = "language";
const bookKey = "book";

const bookTexts = {
    "krvavy_rad": {
        "cz": {
            "header": "Overon: Krvavý řád",
            "description": "Enzim z Taergonu, kdysi řadový voják, nyní velitel řádu elitářů. Byl poslední nadějí, ale jeho rozkaz zahájil Velkou elitářskou čistku. V jeho mysli zní hlas ze samotného počátku světa – síla, která musí chránit lidstvo před temnotou Riftu."
        },
        "en": {
            "header": "Overon: Blood Order",
            "description": "Enzim from Taergon, once a common soldier, now leader of the Elitarian Order. He was the last hope, but his command sparked the Great Elitarian Purge. In his mind echoes a voice from the dawn of time—a force that must shield humanity from the Rift’s darkness."
        }
    },
    "grandfather": {
        "cz": {
            "header": "Overon: Praotec vědy",
            "description": "Flaer, kdysi bezstarostný chlapec, je nyní zlomenou bytostí. Temná síla Zary ho pohltila, zohavila jeho mysl i duši. Donucen sloužit jejich krutému strýci, je uvězněn mezi zbytky své lidskosti a zničující silou, která ho ovládá. Jeho tělo nese stopy oběti a v jeho očích se odráží agónie toho, čím se stal—nástrojem zkázy. Přesto, v nejhlubších koutech jeho rozbitých myšlenek, stále přežívá jiskra chlapce, kterým býval, toužící po svobodě.."
        },
        "en": {
            "header": "Overon: Grandfather",
            "description": "Flaer, once a carefree boy, is now a broken vessel. The dark power of Zara has consumed him, twisting his mind and soul. Forced to serve their cruel uncle, he is trapped between the remnants of his humanity and the devastating force within him. His body bears the mark of sacrifice, and his eyes reflect the agony of what he’s become—a tool of destruction. Yet, in the deepest corners of his fractured mind, a flicker of the boy he once was still lingers, yearning for freedom."
        }
    },
    "spletac_snu": {
        "cz": {
            "header": "Overon: Spletáč Snů",
            "description": "Popis pro knihu Spletáč Snů v češtině."
        },
        "en": {
            "header": "Overon: Dream Weaver",
            "description": "Popis pro knihu Spletáč Snů v češtině."
        }
    }
};

function loadLanguage() {
    if (localStorage.getItem(languageKey) == null) {
        localStorage.setItem(languageKey, "cz");
    }
    updateLanguage();
}

function updateLanguage() {
    let currentLanguage = localStorage.getItem(languageKey);

    if (currentLanguage == "en") {
        loadEN();
    } else {
        loadCZ();
    }

    updateBookText();
}

function loadBook() {
    if (localStorage.getItem(bookKey) == null) {
        localStorage.setItem(bookKey, "krvavy_rad");
    }
    updateBook();
}

function updateBook() {
    let book = localStorage.getItem(bookKey);
    
    if (book == "krvavy_rad") {
        bookLoadKR();
    } else if (book == "grandfather") {
        bookLoadG();
    } else if (book == "spletac_snu") {
        bookLoadSS();
    }
    
    updateBookText();
}

function toggleLanguage() {
    let currentLanguage = localStorage.getItem(languageKey);
    localStorage.setItem(languageKey, currentLanguage == "en" ? "cz" : "en");

    updateLanguage();
}

function updateBookText() {
    let currentLanguage = localStorage.getItem(languageKey);
    let currentBook = localStorage.getItem(bookKey);

    document.getElementById("textBookHeader").innerText = bookTexts[currentBook][currentLanguage].header;
    document.getElementById("textBook").innerText = bookTexts[currentBook][currentLanguage].description;
}

function loadCZ() {
    document.getElementById("textWelcome").innerText = "Overon je svět, kde temnota a strach vládnou na každém kroku. Zničená království a ztracená města jsou plná hrůz a nestvůr, které se živí strachem a zoufalstvím. Každý, kdo se odváží překročit hranice známého světa, se ocitá v říši, kde nic není bezpečné a kde magie je nebezpečná a zvrácená. Smrt je zde jen začátkem něčeho ještě horšího a každá snaha o naději se ztrácí v šedi tohoto světa. Mnozí ztrácejí svou lidskost, jak se jejich duše odevzdávají temným silám, a odpovědi na tajemství Overonu jsou stejně záhadné jako jeho hrůzy. V tomto světě, kde panuje chaos, není místo pro slabé. Těm, kteří se rozhodnou přežít, hrozí nejen smrt, ale i ztráta duše v nekonečných stínech a nebezpečných kouzlech.";
    document.getElementById("supportButton").innerText = "Podpořit";
    document.getElementById("showButton").innerText = "Ukázka";
    document.getElementById("textRights").innerText = "Všechna práva vyhrazena &copy; Šimon Pícha 2025";
    document.getElementById("textPoE1").innerText = "Tisíceré díky Path of Exile - horní obrázek je od nich.";
    document.getElementById("textPoE2").innerText = "Jedná se o placeholder a bude změněn.";
    document.getElementById("anchorPoE").innerText = "Ještě jednou děkuji.";
}

function loadEN() {
    document.getElementById("textWelcome").innerText = "Overon is a world ruled by darkness and fear at every turn. Ruined kingdoms and lost cities are haunted by horrors and monsters that feed on fear and despair. Anyone who dares to venture beyond the known world finds themselves in a realm where nothing is safe, and where magic is dangerous and twisted. Death is only the beginning of something far worse, and any hope that might arise is swallowed by the grey void of this land. Many lose their humanity as their souls are consumed by dark forces, and the mysteries of Overon are as elusive as its terrors. In this world, where chaos reigns, there is no place for the weak. Those who strive to survive face not only death but the potential loss of their very soul, swallowed by the endless shadows and perilous magics.";
    document.getElementById("supportButton").innerText = "Support";
    document.getElementById("showButton").innerText = "Show sample";
    document.getElementById("textRights").innerText = "All rights reserved &copy; Šimon Pícha 2025";
    document.getElementById("textPoE1").innerText = "Many thanks to Path of Exile - the top image is from them.";
    document.getElementById("textPoE2").innerText = "This is a placeholder and will be replaced.";
    document.getElementById("anchorPoE").innerText = "Once again, thanks.";
}

function toggleBook(book) {
    localStorage.setItem(bookKey, book);
    updateBook();
}

function bookLoadKR() {
    document.getElementById("krvavy_rad").src = "Images/button_active.png";
    document.getElementById("grandfather").src = "Images/button.png";
    document.getElementById("spletac_snu").src = "Images/button.png";

    document.querySelector('.books').style.backgroundImage = "url('Images/Banner-Krvavy_Rad.jpg')";

   // Nastavení barvy nadpisu na červenou pomocí RGB
   document.getElementById("textBookHeader").style.color = "rgb(255, 82, 82)";  // Červená barva
    document.getElementById("bookText").style.color = "rgb(255, 82, 82)";
    document.querySelector(".bookText hr").style.borderColor = "rgb(255, 82, 82)";
}

function bookLoadG() {
    document.getElementById("krvavy_rad").src = "Images/button.png";
    document.getElementById("grandfather").src = "Images/button_active.png";
    document.getElementById("spletac_snu").src = "Images/button.png";

    document.querySelector('.books').style.backgroundImage = "url('Images/Banner-Other.png')";

    // Nastavení barvy nadpisu na červenou pomocí RGB
    document.getElementById("textBookHeader").style.color = "#d4af37";
    document.getElementById("bookText").style.color = "#d4af37";
    document.querySelector(".bookText hr").style.borderColor = "#d4af37";
}

function bookLoadSS() {
    document.getElementById("krvavy_rad").src = "Images/button.png";
    document.getElementById("grandfather").src = "Images/button.png";
    document.getElementById("spletac_snu").src = "Images/button_active.png";

    document.querySelector('.books').style.backgroundImage = "url('Images/Banner-Other.png')";

    // Nastavení barvy nadpisu na červenou pomocí RGB
    document.getElementById("textBookHeader").style.color = "#d4af37";
    document.getElementById("bookText").style.color = "#d4af37";
    document.querySelector(".bookText hr").style.borderColor = "#d4af37";
}

loadLanguage();
loadBook();

    
