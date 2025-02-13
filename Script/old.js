

const languageKey = "language";
const bookKey = "book";
// let book = "krvavy_rad"

function loadLanguage() {
    if (localStorage.getItem(languageKey) == null) {
        localStorage.setItem(languageKey, "cz")

        loadCZ()
        return;
    }

    if (localStorage.getItem(languageKey) == "en") {
        loadEN();
    } else {
        loadCZ();
    }
}

function loadBook()
{
    if (localStorage.getItem(bookKey) == null) {
        localStorage.setItem(bookKey, "krvavy_rad")

        bookLoadKR();
        return;
    }

    else if (localStorage.getItem(bookKey) == "grandfather") {
        bookLoadG();
    } 

    else if (localStorage.getItem(bookKey) == "spletac_snu") {
        bookLoadSS();
    } 
    
    else {
        bookLoadKR();
    } 
}

loadLanguage();
loadBook();

function toggleLanguage() {
    let currentLanguage = localStorage.getItem(languageKey);

    if (currentLanguage == "en") {
        localStorage.setItem(languageKey, "cz");

        loadCZ();
    } else {
        localStorage.setItem(languageKey, "en");

        loadEN();
    }
}

function loadCZ() {
    document.getElementById("textWelcome").innerText = "Overon je svět, kde temnota a strach vládnou na každém kroku. Zničená království a ztracená města jsou plná hrůz a nestvůr, které se živí strachem a zoufalstvím. Každý, kdo se odváží překročit hranice známého světa, se ocitá v říši, kde nic není bezpečné a kde magie je nebezpečná a zvrácená. Smrt je zde jen začátkem něčeho ještě horšího a každá snaha o naději se ztrácí v šedi tohoto světa. Mnozí ztrácejí svou lidskost, jak se jejich duše odevzdávají temným silám, a odpovědi na tajemství Overonu jsou stejně záhadné jako jeho hrůzy. V tomto světě, kde panuje chaos, není místo pro slabé. Těm, kteří se rozhodnou přežít, hrozí nejen smrt, ale i ztráta duše v nekonečných stínech a nebezpečných kouzlech.";
    document.getElementById("textBookHeader").innerText = "Overon: Krvavý řád";
    document.getElementById("textBook").innerText = "Enzim z Taergonu, kdysi řadový voják, nyní velitel řádu elitářů. Byl poslední nadějí, ale jeho rozkaz zahájil Velkou elitářskou čistku. V jeho mysli zní hlas ze samotného počátku světa – síla, která musí chránit lidstvo před temnotou Riftu.";
    document.getElementById("supportButton").innerText = "Podpořit";
    document.getElementById("showButton").innerText = "Ukázka";
    document.getElementById("textRights").innerText = "Všechna práva vyhrazena &copy; Šimon Pícha 2025";
    document.getElementById("textPoE1").innerText = "Tisíceré díky path of exile - horní obrázek je od nich.";
    document.getElementById("textPoE2").innerText = "Jedná se o place holdder a bude změňěn.";
    document.getElementById("anchorPoE").innerText = "Ještě jednou děkuji.";
}

function loadEN() {
    document.getElementById("textWelcome").innerText = "Enzim from Taergon, once a common soldier, now leader of the Elitarian Order. He was the last hope, but his command sparked the Great Elitarian Purge. In his mind echoes a voice from the dawn of time—a force that must shield humanity from the Rift’s darkness.";
    document.getElementById("textBookHeader").innerText = "Overon: Blood order";
    document.getElementById("textBook").innerText = "Enzim of Taergon, once a simple soldier, now a leader. The last chance of order´s survival, but his orders have started a great purge. In his mind and ancient voice - a power that wants to protect humanity before itself and ruinouss power of Rift";
    document.getElementById("supportButton").innerText = "Support";
    document.getElementById("showButton").innerText = "Show sample";
    document.getElementById("textRights").innerText = "All rights reserved &copy; Šimon Pícha 2025";
    document.getElementById("textPoE1").innerText = "Many thanks to path of exile - top image and bottom ones are from their";
    document.getElementById("textPoE2").innerText = "website. They are just placeholders and will be replaced.";
    document.getElementById("anchorPoE").innerText = "Once again, thanks.";
}


function toggleBook(book)
{

    // book = selectBook;
    localStorage.getItem(bookKey, book);

    if(book == "krvavy_rad")
    {
        bookLoadKR();
    }
    else if(book == "grandfather")
    {
        bookLoadG();
    }
    else if(book == "spletac_snu")
    {
        bookLoadSS();
    }
}

function bookLoadKR()
{
    document.getElementById("krvavy_rad").src = "Images/button_active.png";
    document.getElementById("grandfather").src = "Images/button.png";
    document.getElementById("spletac_snu").src = "Images/button.png";

    document.querySelector('.books').style.backgroundImage = "url('Images/Banner-Krvavy_Rad.jpg')";


}

function bookLoadG()
{
    document.getElementById("krvavy_rad").src = "Images/button.png";
    document.getElementById("grandfather").src = "Images/button_active.png";
    document.getElementById("spletac_snu").src = "Images/button.png";

    document.querySelector('.books').style.backgroundImage = "url('Images/Banner_ostatni.png')";

}

function bookLoadSS()
{
    document.getElementById("krvavy_rad").src = "Images/button.png";
    document.getElementById("grandfather").src = "Images/button.png";
    document.getElementById("spletac_snu").src = "Images/button_active.png";

    document.querySelector('.books').style.backgroundImage = "url('Images/Banner_ostatni.png')";

}