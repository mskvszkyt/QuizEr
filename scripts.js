let sorok = [
    { tétel: "Herczeg_Ferenc_Az_Élet_kapuja", esemény: "Agostino Chigi", válasz: "A művészek pártfogója és akit a leggazdagabbnak tartanak Rómában.", kép1: "", kép2: "", kép3: "", kép4: "" },
    { tétel: "Herczeg_Ferenc_Az_Élet_kapuja", esemény: "Cardulo", válasz: "Szentéletű pap, tudós és diplomata, aki igyekezett a világi tudását is gyarapítani.", kép1: "", kép2: "", kép3: "", kép4: "" },
    { tétel: "Herczeg_Ferenc_Az_Élet_kapuja", esemény: "Vico Hannibal", válasz: "Nápolyi kalandor, köpönyegforgató macsó, aki a barátságait úgy váltogatja, ahogy az érdekei kívánják.", kép1: "", kép2: "", kép3: "", kép4: "" },
    { tétel: "Herczeg_Ferenc_Az_Élet_kapuja", esemény: "II. Julius", válasz: "Ő maga semmihez sem ért az öntelt magamutogatáson kívül, ezért művészekre bízza, hogy naggyá tegyék a kereszténység központját, Rómát.", kép1: "", kép2: "", kép3: "", kép4: "" },
    { tétel: "Herczeg_Ferenc_Az_Élet_kapuja", esemény: "Medici Giovanni", válasz: "Szereti szórni a pénzt és más magas rangú emberekhez hasonlóan ő is szeret 'pogány' áldozatokat bemutatni a régi római isteneknek.", kép1: "", kép2: "", kép3: "", kép4: "" },
    { tétel: "Csokonai_Mihály_stílusszintézisek", esemény: "Estve", válasz: "Klasszicizmus (Rousseau)", kép1: "", kép2: "", kép3: "", kép4: "" },
    { tétel: "Csokonai_Mihály_stílusszintézisek", esemény: "Tartózkodó Kérelem", válasz: "Rokokó", kép1: "", kép2: "", kép3: "", kép4: "" },
    { tétel: "Csokonai_Mihály_stílusszintézisek", esemény: "A Reményhez", válasz: "Szentimentalizmus", kép1: "", kép2: "", kép3: "", kép4: "" },
    { tétel: "Csokonai_Mihály_stílusszintézisek", esemény: "Szegény Zsuzsi, a táborozáskor", válasz: "Népiesség", kép1: "", kép2: "", kép3: "", kép4: "" },
    { tétel: "Csokonai_Mihály_stílusszintézisek", esemény: "Konstancinápoly", válasz: "Klasszicizmus (Voltaire)", kép1: "", kép2: "", kép3: "", kép4: "" },
    { tétel: "Kosztolányi_Dezső_Számadás", esemény: "Műfaja filozofikus vers, típusa szerint őn-és létértelmező", válasz: "Hajnali részegség", kép1: "", kép2: "", kép3: "", kép4: "" },
    { tétel: "Kosztolányi_Dezső_Számadás", esemény: "Műfaja elégikus óda, temetési beszéd, prédikáció", válasz: "Halotti beszéd", kép1: "", kép2: "", kép3: "", kép4: "" },
    { tétel: "Kosztolányi_Dezső_Számadás", esemény: "Témája egy káprázatos látomás, amely ráébreszti a költőt az élet szépségeire és értelmére", válasz: "Hajnali részegség", kép1: "", kép2: "", kép3: "", kép4: "" },
    { tétel: "Kosztolányi_Dezső_Számadás", esemény: "A mű mondanivalója, hogy hogy mindannyian halandóak vagyunk, minden ember egyedi példány és minden emberi élet egyszeri, megismételhetetlen.", válasz: "Halotti beszéd", kép1: "", kép2: "", kép3: "", kép4: "" },
    { tétel: "Kosztolányi_Dezső_Számadás", esemény: "Ez a vers a Számadás című versciklus darabja", válasz: "Mindkettő", kép1: "", kép2: "", kép3: "", kép4: "" }
];


let index = 0;
let valasztott = ""
let pontszam = 0
let hibazott = []
function Indit() {

    for (let i = sorok.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [sorok[i], sorok[j]] = [sorok[j], sorok[i]];
    }
    KerdesLetrehoz(sorok[0])
}

function KerdesLetrehoz(sor) {
    if (index >= sorok.length) {
        alert(`Véget ért a quiz! A pontod ${pontszam}/15`)
        return;
    }
    index++;
    document.querySelector(".quiz-options").innerHTML = "";
    document.querySelector(".question").innerHTML = sor.esemény;
    if (sor.tétel != "Kosztolányi_Dezső_Számadás") {
        let kerdesek = sorok.filter(x => x.tétel == sor.tétel);
        kerdesek.forEach(x => {
            let ujDiv = document.createElement("div");
            ujDiv.classList.add("quiz-option");
            ujDiv.innerHTML = x.válasz;
            ujDiv.addEventListener("click", (y) => {
                KerdesLetrehoz(sorok[index])
                valasztott = y.target.innerHTML;
                if ( valasztott == sor.válasz)
                    pontszam++
                else
                    hibazott.push(sor)
            })
            document.querySelector(".quiz-options").appendChild(ujDiv);
        })
    }
    else {
        let tomb=["Mindkettő","Hajnali részegség","Halotti beszéd"]         
        tomb.forEach(x => {
            let ujDiv = document.createElement("div");
            ujDiv.classList.add("quiz-option");
            ujDiv.innerHTML = x;
            ujDiv.addEventListener("click", (y) => {
                KerdesLetrehoz(sorok[index])
                valasztott = y.target.innerHTML;
                if ( valasztott == sor.válasz)
                    pontszam++
                else
                    hibazott.push(sor)
            })
            document.querySelector(".quiz-options").appendChild(ujDiv);
        })
    }
}

//TODO: h1 a kérdés kosztolányinál eltolja valószínűleg

Indit()

