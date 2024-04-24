import {adatok} from "/adatok.js"

let sorok = [
    // { tétel: "Herczeg_Ferenc_Az_Élet_kapuja", esemény: "Agostino Chigi", válasz: "A művészek pártfogója és akit a leggazdagabbnak tartanak Rómában.", kép1: "Herczeg_Ferenc_Az_Élet_kapuja_Agostino Chigi_1.jpg"},
    // { tétel: "Herczeg_Ferenc_Az_Élet_kapuja", esemény: "Cardulo", válasz: "Szentéletű pap, tudós és diplomata, aki igyekezett a világi tudását is gyarapítani.", kép1: "Herczeg_Ferenc_Az_Élet_kapuja_Cardulo_1.jfif"},
    // { tétel: "Herczeg_Ferenc_Az_Élet_kapuja", esemény: "Vico Hannibal", válasz: "Nápolyi kalandor, köpönyegforgató macsó, aki a barátságait úgy váltogatja, ahogy az érdekei kívánják.", kép1: "Herczeg_Ferenc_Az_Élet_kapuja_Vico Hannibal_1.jfif"},
    // { tétel: "Herczeg_Ferenc_Az_Élet_kapuja", esemény: "II. Julius", válasz: "Ő maga semmihez sem ért az öntelt magamutogatáson kívül, ezért művészekre bízza, hogy naggyá tegyék a kereszténység központját, Rómát.", kép1: "Herczeg_Ferenc_Az_Élet_kapuja_II. Julius_1.jfif", kép2: "Herczeg_Ferenc_Az_Élet_kapuja_II. Julius_2.jfif", kép3: "Herczeg_Ferenc_Az_Élet_kapuja_II. Julius_3.jfif"},
    // { tétel: "Herczeg_Ferenc_Az_Élet_kapuja", esemény: "Medici Giovanni", válasz: "Szereti szórni a pénzt és más magas rangú emberekhez hasonlóan ő is szeret 'pogány' áldozatokat bemutatni a régi római isteneknek.", kép1: "Herczeg_Ferenc_Az_Élet_kapujac_Medici Giovanni_1.jpg"},
    // { tétel: "Csokonai_Mihály_stílusszintézisek", esemény: "Estve", válasz: "Klasszicizmus (Rousseau)", kép1: "Csokonai_Mihály_stílusszintézisek_Estve_1.jfif", kép2: "Csokonai_Mihály_stílusszintézisek_Estve_2.jfif" },
    // { tétel: "Csokonai_Mihály_stílusszintézisek", esemény: "Tartózkodó Kérelem", válasz: "Rokokó", kép1: "Csokonai_Vitéz_Mihály_stílusszintézisek_rokokó1.jpg" },
    // { tétel: "Csokonai_Mihály_stílusszintézisek", esemény: "A Reményhez", válasz: "Szentimentalizmus", kép1: "Csokonai_Vitéz_Mihály_stílusszintézisek_szentimentalizmus1.jpg"},
    // { tétel: "Csokonai_Mihály_stílusszintézisek", esemény: "Szegény Zsuzsi, a táborozáskor", válasz: "Népiesség", kép1: "Csokonai_Vitéz_Mihály_stílusszintézisek_népiesség1.jpg"},
    // { tétel: "Csokonai_Mihály_stílusszintézisek", esemény: "Konstancinápoly", válasz: "Klasszicizmus (Voltaire)", kép1: "Csokonai_Mihály_stílusszintézisek_Konstancinápoly_1.jpg", kép2: "Csokonai_Vitéz_Mihály_stílusszintézisek_konstancinápoly2.jpg", kép3: "Csokonai_Vitéz_Mihály_stílusszintézisek_klasszicizmus1.jpg"},
    // { tétel: "Kosztolányi_Dezső_Számadás", esemény: "Műfaja filozofikus vers, típusa szerint őn-és létértelmező", válasz: "Hajnali részegség", kép1: "Kosztolányi_Dezső_Számadás_Hanali_Részegség3.jpg"},
    // { tétel: "Kosztolányi_Dezső_Számadás", esemény: "Műfaja elégikus óda, temetési beszéd, prédikáció", válasz: "Halotti beszéd", kép1: "Kosztolányi_Dezső_Számadás_Halotti_beszéd3.jpg"},
    // { tétel: "Kosztolányi_Dezső_Számadás", esemény: "Témája egy káprázatos látomás, amely ráébreszti a költőt az élet szépségeire és értelmére", válasz: "Hajnali részegség", kép1: "Kosztolányi_Dezső_Számadás_Hanali_Részegség2.jpg", kép2: "Kosztolányi_Dezső_Számadás_Hanali_Részegség1.jpg", kép3: "Kosztolányi_Dezső_Számadás_Hanali_Részegség.jpg"},
    // { tétel: "Kosztolányi_Dezső_Számadás", esemény: "A mű mondanivalója, hogy hogy mindannyian halandóak vagyunk, minden ember egyedi példány és minden emberi élet egyszeri, megismételhetetlen.", válasz: "Halotti beszéd", kép1: "Kosztolányi_Dezső_Számadás_Halotti_Beszéd_1.jpg"},
    // { tétel: "Kosztolányi_Dezső_Számadás", esemény: "Ez a vers a Számadás című versciklus darabja", válasz: "Mindkettő", kép1: "Kosztolányi_Dezső_Számadás_Számadás_kötet.jpg"}
];


let index = 0;
let valasztott = "";
let pontszam = 0;
let hibazott = [];
let jelenlegiKerdes = "";

function ReadLines2Obj(importedCSV){
    importedCSV.shift()
    importedCSV.forEach(sor => {
        var splitelt = sor.split(';')
        sorok.push({"tétel":`${splitelt[0]}`, "esemény":`${splitelt[1]}`,"válasz":`${splitelt[2]}`})
    });
}

function Indit() {
    for (let i = sorok.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [sorok[i], sorok[j]] = [sorok[j], sorok[i]];
    }
    KerdesLetrehoz(sorok[0]);
    document.querySelector('.progress-bar').style.display = 'block';
}

function KerdesLetrehoz(sor) {
    if (index >= sorok.length) {
        showModal(pontszam);
        return;
    }
    jelenlegiKerdes = sor;
    document.getElementById("display-help").innerHTML = "";
    document.getElementById("question-counter").textContent = `Kérdés ${index + 1} / ${sorok.length}`;
    index++;
    document.querySelector(".quiz-options").innerHTML = "";
    document.querySelector(".question").innerHTML = sor.esemény;
    if (sor.tétel != "[ 4] Kosztolányi_Dezső_Számadás") {
        let kerdesek = sorok.filter(x => x.tétel == sor.tétel);
        kerdesek.forEach(x => {
            let ujDiv = document.createElement("div");
            ujDiv.classList.add("quiz-option");
            ujDiv.innerHTML = x.válasz;
            ujDiv.addEventListener("click", (y) => {
                KerdesLetrehoz(sorok[index]);
                valasztott = y.target.innerHTML;
                if ( valasztott == sor.válasz)
                    pontszam++;
                else
                    hibazott.push(sor);
            });
            document.querySelector(".quiz-options").appendChild(ujDiv);
        });
    }
    else {
        let tomb=["Mindkettő","Hajnali részegség","Halotti beszéd"];         
        tomb.forEach(x => {
            let ujDiv = document.createElement("div");
            ujDiv.classList.add("quiz-option");
            ujDiv.innerHTML = x;
            ujDiv.addEventListener("click", (y) => {
                KerdesLetrehoz(sorok[index]);
                valasztott = y.target.innerHTML;
                if ( valasztott == sor.válasz)
                    pontszam++;
                else
                    hibazott.push(sor);
            });
            document.querySelector(".quiz-options").appendChild(ujDiv);
        });
    }
    if (index >= 2) {
        document.querySelector('.progress-bar').style.display = 'block';
        document.querySelector('.progress-bar').style.width = ((index / sorok.length) * 100) + '%';
    }
}

function showModal(score) {
    const modal = document.getElementById("modal");
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = score;
    modal.style.display = "block";
}

function restartQuiz() {
    index = 0;
    pontszam = 0;
    hibazott = [];
    document.querySelector('.progress-bar').style.display = 'none'; 
    document.querySelector('.progress-bar').style.width = '0%';
    Indit();
    document.getElementById("modal").style.display = "none";
}

document.getElementById("restart").addEventListener("click", restartQuiz);
document.querySelector(".close").addEventListener("click", restartQuiz);

var modal = document.getElementById("modal");

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    restartQuiz();
}
}

document.addEventListener('DOMContentLoaded', function () {
    const startBtn = document.getElementById('start-btn');
    const startContainer = document.getElementById('start-container');
    const quizContainers = document.querySelectorAll('.container');
    const question = document.querySelector('.question');
    
    startBtn.addEventListener('click', function () {
        startContainer.style.display = 'none';
        quizContainers.forEach(container => {
            container.style.display = 'grid';
        });
        question.style.display = 'block';
    });
});

document.getElementById("question-help").addEventListener("click", () => {
    let kep = document.createElement("img");
    kep.src = `images\\${jelenlegiKerdes.kép1}`
    document.getElementById("display-help").innerHTML = "";
    document.getElementById("display-help").appendChild(kep);
})

ReadLines2Obj(adatok)

Indit();