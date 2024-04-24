import {adatok} from "./adatok.js"

let sorok = []

let temakorKerdesei = [];
let index = 0;
let valasztott = "";
let pontszam = 0;
let hibazott = [];
let jelenlegiKerdes = "";
let table = document.querySelector('#quiz-table')
ReadLines2Obj(adatok)

let lista = document.getElementById("temakorok");
let tempTomb = [];
sorok.forEach(y => {
    if (tempTomb.includes(y.tétel) == false) {
        tempTomb.push(y.tétel);
        let opcio = document.createElement("option");
        opcio.text = y.tétel.replaceAll('_',' ');
        lista.appendChild(opcio);
    }
});
let osszesOpcio =document.createElement("option");
osszesOpcio.text = "Összes";
osszesOpcio.id = "Összes";
lista.appendChild(osszesOpcio);



function Indit() {
    if (!document.querySelector(".forditott-kerdesek-btn").classList.contains("nem-forditott-kerdesek-btn")) {
      sorok.forEach(x => {
        if(x.tétel != "[ 4] Kosztolányi_Dezső_Számadás"){          
          let valasz = x.esemény;
          let esemeny = x.válasz;
          x.válasz = valasz;
          x.esemény = esemeny;
        }
      });
    }

    if (document.getElementById('temakorok').value != "Összes") 
      temakorKerdesei = sorok.filter(x => x.tétel.replaceAll('_',' ') == document.getElementById('temakorok').value);
    else
      temakorKerdesei = sorok;

    for (let i = temakorKerdesei.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [temakorKerdesei[i], temakorKerdesei[j]] = [temakorKerdesei[j], temakorKerdesei[i]];
    }
    KerdesLetrehoz(temakorKerdesei[0]);
    document.querySelector('.progress-bar').style.display = 'block';
    document.querySelector('#score').innerHTML = `${pontszam}/${temakorKerdesei.length}`;
}

function KerdesLetrehoz(sor) {
    if (index >= temakorKerdesei.length) {
        showModal(pontszam);
        return;
    }
    jelenlegiKerdes = sor;
    document.getElementById("display-help").innerHTML = "";
    document.getElementById("question-counter").textContent = `Kérdés ${index + 1} / ${temakorKerdesei.length}`;
    index++;
    document.querySelector(".quiz-options").innerHTML = "";
    document.querySelector(".question").innerHTML = sor.esemény;
    if (sor.tétel != "[ 4] Kosztolányi_Dezső_Számadás") {
        let kerdesek = temakorKerdesei.filter(x => x.tétel == sor.tétel);
        kerdesek.forEach(x => {
            let ujDiv = document.createElement("div");
            ujDiv.classList.add("quiz-option");
            ujDiv.innerHTML = x.válasz;
            ujDiv.addEventListener("click", (y) => {
                KerdesLetrehoz(temakorKerdesei[index]);
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
                KerdesLetrehoz(temakorKerdesei[index]);
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
        document.querySelector('.progress-bar').style.width = ((index / temakorKerdesei.length) * 100) + '%';
    }
}

function showModal(score) {
  const modal = document.getElementById("modal");
  const scoreElement = document.getElementById("score");
  scoreElement.textContent = score;
  modal.style.display = "block";
}
/*
function restartQuiz() {
  index = 0;
  pontszam = 0;
  hibazott = [];
  document.querySelector('.table-div').style.display = 'none';
  document.querySelector('.progress-bar').style.display = 'none';
  document.querySelector('.progress-bar').style.width = '0%';
  Indit();
  document.getElementById("modal").style.display = "none";
}*/

document.getElementById("restart").addEventListener("click", () => location.reload());
document.querySelector(".close").addEventListener("click", () => location.reload());

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
        Indit();
    });
    question.style.display = 'block';
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

document.getElementById('reszletez').onclick = () => Reszletez()

function Atnezes(){
    document.querySelector('.table-div').style.display = 'flex';
    table.innerHTML = '';
    sorok.forEach(sor => {
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

document.getElementById('atnez').onclick = () => Atnezes()

document.getElementById("question-help").addEventListener("click", () => {
  document.getElementById("display-help").innerHTML = "";
  if (jelenlegiKerdes.kép3 != null) {
    let kep1= document.createElement("img");
    let kep2= document.createElement("img");
    let kep3= document.createElement("img");
    kep1.src = `images\\${jelenlegiKerdes.kép1}`
    kep2.src = `images\\${jelenlegiKerdes.kép2}`
    kep3.src = `images\\${jelenlegiKerdes.kép3}`
    kep1.classList.add("kepek-help");
    kep2.classList.add("kepek-help");
    kep3.classList.add("kepek-help");
    document.getElementById("display-help").appendChild(kep1);
    document.getElementById("display-help").appendChild(kep2);
    document.getElementById("display-help").appendChild(kep3);
  }
  else{
    let kep = document.createElement("img");
    kep.src = `images\\${jelenlegiKerdes.kép1}`
    kep.classList.add("kepek-help");
    document.getElementById("display-help").appendChild(kep);
  }
})

function ForditottKerdesek() {
  document.querySelector(".forditott-kerdesek-btn").classList.toggle("nem-forditott-kerdesek-btn");
}

document.querySelector(".forditott-kerdesek-btn").addEventListener("click", ForditottKerdesek);

function ReadLines2Obj(importedCSV){
  importedCSV.shift()
  importedCSV.forEach(sor => {
      var splitelt = sor.split(';')
      if (splitelt.length == 4)
        sorok.push({"tétel":`${splitelt[0]}`, "esemény":`${splitelt[1]}`,"válasz":`${splitelt[2]}`,"kép1":`${splitelt[3]}`})
      else
        sorok.push({"tétel":`${splitelt[0]}`, "esemény":`${splitelt[1]}`,"válasz":`${splitelt[2]}`,"kép1":`${splitelt[3]}`, "kép2":`${splitelt[4]}`, "kép3":`${splitelt[5]}`})        
  });
  console.log(sorok)
}