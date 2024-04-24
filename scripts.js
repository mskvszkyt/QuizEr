let sorok = [
  {
    "tétel": "[10] Herczeg_Ferenc_Az_Élet_kapuja",
    "esemény": "Agostino Chigi",
    "válasz": "A művészek pártfogója és akit a leggazdagabbnak tartanak Rómában.",
    "kép1": "Herczeg_Ferenc_Az_Élet_kapuja_Agostino Chigi_1.jpg"
  },
  {
    "tétel": "[10] Herczeg_Ferenc_Az_Élet_kapuja",
    "esemény": "Cardulo",
    "válasz": "Szentéletű pap, tudós és diplomata, aki igyekezett a világi tudását is gyarapítani.",
    "kép1": "Herczeg_Ferenc_Az_Élet_kapuja_Cardulo_1.jfif"
  },
  {
    "tétel": "[10] Herczeg_Ferenc_Az_Élet_kapuja",
    "esemény": "Vico Hannibal",
    "válasz": "Nápolyi kalandor, köpönyegforgató macsó, aki a barátságait úgy váltogatja, ahogy az érdekei kívánják.",
    "kép1": "Herczeg_Ferenc_Az_Élet_kapuja_Vico Hannibal_1.jfif"
  },
  {
    "tétel": "[10] Herczeg_Ferenc_Az_Élet_kapuja",
    "esemény": "II. Julius",
    "válasz": "Ő maga semmihez sem ért az öntelt magamutogatáson kívül, ezért művészekre bízza, hogy naggyá tegyék a kereszténység központját, Rómát.",
    "kép1": "Herczeg_Ferenc_Az_Élet_kapuja_II. Julius_1.jfif",
    "kép2": "Herczeg_Ferenc_Az_Élet_kapuja_II. Julius_2.jfif",
    "kép3": "Herczeg_Ferenc_Az_Élet_kapuja_II. Julius_3.jfif"
  },
  {
    "tétel": "[10] Herczeg_Ferenc_Az_Élet_kapuja",
    "esemény": "Medici Giovanni",
    "válasz": "Szereti szórni a pénzt és más magas rangú emberekhez hasonlóan ő is szeret \"pogány\" áldozatokat bemutatni a régi római isteneknek.",
    "kép1": "Herczeg_Ferenc_Az_Élet_kapujac_Medici Giovanni_1.jpg"
  },
  {
    "tétel": "[11] Csokonai_Mihály_stílusszintézisek",
    "esemény": "Estve",
    "válasz": "Klasszicizmus (Rousseau)",
    "kép1": "Csokonai_Mihály_stílusszintézisek_Estve_1.jfif",
  },
  {
    "tétel": "[11] Csokonai_Mihály_stílusszintézisek",
    "esemény": "Tartózkodó Kérelem",
    "válasz": "Rokokó",
    "kép1": "Csokonai_Vitéz_Mihály_stílusszintézisek_rokokó1.jpg"
  },
  {
    "tétel": "[11] Csokonai_Mihály_stílusszintézisek",
    "esemény": "A Reményhez",
    "válasz": "Szentimentalizmus",
    "kép1": "Csokonai_Vitéz_Mihály_stílusszintézisek_szentimentalizmus1.jpg"
  },
  {
    "tétel": "[11] Csokonai_Mihály_stílusszintézisek",
    "esemény": "Szegény Zsuzsi, a táborozáskor",
    "válasz": "Népiesség",
    "kép1": "Csokonai_Vitéz_Mihály_stílusszintézisek_népiesség1.jpg"
  },
  {
    "tétel": "[11] Csokonai_Mihály_stílusszintézisek",
    "esemény": "Konstancinápoly",
    "válasz": "Klasszicizmus (Voltaire)",
    "kép1": "Csokonai_Mihály_stílusszintézisek_Konstancinápoly_1.jpg",
    "kép2": "Csokonai_Vitéz_Mihály_stílusszintézisek_konstancinápoly2.jpg",
    "kép3": "Csokonai_Vitéz_Mihály_stílusszintézisek_klasszicizmus1.jpg"
  },
  {
    "tétel": "[ 4] Kosztolányi_Dezső_Számadás",
    "esemény": "Műfaja filozofikus vers, típusa szerint őn-és létértelmező",
    "válasz": "Hajnali részegség",
    "kép1": "Kosztolányi_Dezső_Számadás_Hajnali_Részegség3.jpg"
  },
  {
    "tétel": "[ 4] Kosztolányi_Dezső_Számadás",
    "esemény": "Műfaja elégikus óda, temetési beszéd, prédikáció",
    "válasz": "Halotti beszéd",
    "kép1": "Kosztolányi_Dezső_Számadás_Halotti_beszéd3.jpg"
  },
  {
    "tétel": "[ 4] Kosztolányi_Dezső_Számadás",
    "esemény": "Témája egy káprázatos látomás, amely ráébreszti a költőt az élet szépségeire és értelmére",
    "válasz": "Hajnali részegség",
    "kép1": "Kosztolányi_Dezső_Számadás_Hajnali_Részegség2.jpg",
    "kép2": "Kosztolányi_Dezső_Számadás_Hajnali_Részegség.jpg",
    "kép3": "Kosztolányi_Dezső_Számadás_Hajnali_Részegség3.jpg"
  },
  {
    "tétel": "[ 4] Kosztolányi_Dezső_Számadás",
    "esemény": "A mű mondanivalója, hogy hogy mindannyian halandóak vagyunk, minden ember egyedi példány és minden emberi élet egyszeri, megismételhetetlen.",
    "válasz": "Halotti beszéd",
    "kép1": "Kosztolányi_Dezső_Számadás_Halotti_Beszéd_1.jpg"
  },
  {
    "tétel": "[ 4] Kosztolányi_Dezső_Számadás",
    "esemény": "Ez a vers a Számadás című versciklus darabja",
    "válasz": "Mindkettő",
    "kép1": "Kosztolányi_Dezső_Számadás_Számadás_kötet.jpg"
  }
]

let ogSorok = sorok;
let index = 0;
let valasztott = "";
let pontszam = 0;
let hibazott = [];
let jelenlegiKerdes = "";
let table = document.querySelector('#quiz-table')

function Indit() {
  for (let i = sorok.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [sorok[i], sorok[j]] = [sorok[j], sorok[i]];
  }
  KerdesLetrehoz(sorok[0]);
  document.querySelector('.progress-bar').style.display = 'block';
  document.querySelector('#score').innerHTML = `${pontszam}/${sorok.length}`;
}

function KerdesLetrehoz(sor) {
  if (index >= sorok.length) {
    showModal(pontszam);
    return;
  }
  jelenlegiKerdes = sor;
  document.querySelector('#display-help').innerHTML = ""

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
        if (valasztott == sor.válasz)
          pontszam++;
        else
          hibazott.push([sor, valasztott]);
      });
      document.querySelector(".quiz-options").appendChild(ujDiv);
    });
  }
  else {
    let tomb = ["Mindkettő", "Hajnali részegség", "Halotti beszéd"];
    tomb.forEach(x => {
      let ujDiv = document.createElement("div");
      ujDiv.classList.add("quiz-option");
      ujDiv.innerHTML = x;
      ujDiv.addEventListener("click", (y) => {
        KerdesLetrehoz(sorok[index]);
        valasztott = y.target.innerHTML;
        if (valasztott == sor.válasz)
          pontszam++;
        else
          hibazott.push([sor, valasztott]);
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
  document.querySelector('.table-div').style.display = 'none';
  document.querySelector('.progress-bar').style.display = 'none';
  document.querySelector('.progress-bar').style.width = '0%';
  Indit();
  document.getElementById("modal").style.display = "none";
}

document.getElementById("restart").addEventListener("click", restartQuiz);
document.querySelector(".close").addEventListener("click", restartQuiz);

var modal = document.getElementById("modal");

window.onclick = function (event) {
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



function Reszletez() {
  document.querySelector('.table-div').style.display = 'flex';
  table.innerHTML = '';
  hibazott.forEach(hiba => {
    var valasztott = hiba[1]
    var quiz = hiba[0]

    let tr = document.createElement('tr')
    table.appendChild(tr)

    let tdTetelnev = document.createElement('td')
    tdTetelnev.innerHTML = quiz.tétel.replace('_', ' ')

    let tdEsemeny = document.createElement('td')
    tdEsemeny.innerHTML = quiz.esemény

    let tdValasz = document.createElement('td')
    tdValasz.innerHTML = quiz.válasz
    tdValasz.style.color = "green"

    let tdValasztott = document.createElement('td')
    tdValasztott.innerHTML = valasztott
    tdValasztott.style.color = "red"

    tr.appendChild(tdTetelnev)
    tr.appendChild(tdEsemeny)
    tr.appendChild(tdValasz)
    tr.appendChild(tdValasztott)

  });
}

function Atnezes() {
  document.querySelector('.table-div').style.display = 'flex';
  table.innerHTML = '';
  ogSorok.forEach(sor => {
    let tr = document.createElement('tr')
    table.appendChild(tr)

    let tdTetelnev = document.createElement('td')
    tdTetelnev.innerHTML = sor.tétel.replace('_', ' ')

    let tdEsemeny = document.createElement('td')
    tdEsemeny.innerHTML = sor.esemény

    let tdValasz = document.createElement('td')
    tdValasz.innerHTML = sor.válasz
    tdValasz.style.color = "green"

    let tdKep = document.createElement('td')
    if (sor.kép3 != null) {
      let kep1 = document.createElement('img')
      let kep2 = document.createElement('img')
      let kep3 = document.createElement('img')
      kep1.src = `images/${sor.kép1}`
      kep1.classList.add("kicsiKepek");
      tdKep.appendChild(kep1)
      kep2.src = `images/${sor.kép2}`
      kep2.classList.add("kicsiKepek");
      tdKep.appendChild(kep2)
      kep3.src = `images/${sor.kép3}`
      kep3.classList.add("kicsiKepek");
      tdKep.appendChild(kep3)
    }

    else if (sor.kép2 == null && sor.kép3 == null) {
      let kep = document.createElement('img')
      kep.src = `images/${sor.kép1}`
      kep.classList.add("kicsiKepek");
      tdKep.appendChild(kep)
    }


    tr.appendChild(tdTetelnev)
    tr.appendChild(tdEsemeny)
    tr.appendChild(tdValasz)
    tr.appendChild(tdKep)
  });
}

document.getElementById("question-help").addEventListener("click", () => {
  let kep = document.createElement("img");
  kep.src = `images\\${jelenlegiKerdes.kép1}`
  document.getElementById("display-help").innerHTML = "";
  document.getElementById("display-help").appendChild(kep);
})

function ForditottKerdesek() {
  document.querySelector("#forditott-kerdesek-btn").style.background = "#0056b3"
}

Indit();