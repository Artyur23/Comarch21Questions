const reasons = [
    "#1 Zdobycie cennego doświadczenia zawodowego",
    "#2 Możliwość uczenia się od doświadczonych specjalistów",
    "#3 Praca w firmie o ugruntowanej pozycji na rynku",
    "#4 Zdobycie wiedzy na temat nowoczesnych rozwiązań IT",
    "#5 Praca w dynamicznym i innowacyjnym środowisku",
    "#6Szansa na zdobycie praktycznych umiejętności z zakresu programowania",
    "#7 Praca w międzynarodowej korporacji",
    "#8 Możliwość współpracy z klientami na całym świecie",
    "#9 Szansa na stałą współpracę z firmą po ukończeniu stażu",
    "#10 Praca z nowoczesnymi narzędziami IT",
    "#11 Dostęp do szkoleń i kursów doszkalających",
    "#12 Możliwość rozwoju w różnych dziedzinach IT",
    "#13 Praca w przyjaznej atmosferze",
    "#14 Zdobycie certyfikatów potwierdzających kwalifikacje",
    "#15 Możliwość rozwoju w dziedzinie e-commerce",
    "#16 Szansa na rozwój w dziedzinie analizy danych",
    "#17 Praca w zespole specjalistów o różnych specjalizacjach",
    "#18 Możliwość zdobycia wiedzy na temat systemów ERP",
    "#19 Praca na różnorodnych projektach",
    "#20 Możliwość poznania różnych technologii IT",
    "#21 Praca w firmie o ugruntowanej pozycji na rynku polskim i europejskim",
    "#22 Dostęp do mentorów z wieloletnim doświadczeniem zawodowym",
    "#23 Możliwość rozwoju w dziedzinie sieci komputerowych",
    "#24 Praca w zespole, który tworzy innowacyjne rozwiązania IT",
    "#25 Szansa na zdobycie wiedzy na temat systemów CRM",
    "#26 Możliwość zdobycia wiedzy na temat bezpieczeństwa IT",
    "#27 Praca w firmie z bogatą historią i tradycjami",
    "#28 Możliwość zdobycia wiedzy na temat programowania obiektowego",
    "#29 Szansa na rozwój w dziedzinie tworzenia aplikacji mobilnych",
    "#30 Praca z wykorzystaniem narzędzi do zarządzania projektami",
    "#31 Możliwość rozwoju w dziedzinie programowania w języku Java",
    "#32 Praca w zespole, który tworzy rozwiązania dla różnych branż",
    "#33 Szansa na zdobycie doświadczenia w pracy z bazami danych",
    "#34 Możliwość zdobycia wiedzy na temat systemów BI",
    "#35 Praca w firmie, która inwestuje w rozwój swoich pracowników",
    "#36 Możliwość zdobycia wiedzy na temat systemów SCM",
    "#37 Praca w firmie, która tworzy innowacyjne rozwiązania dla biznesu",
    "#38 Możliwość zdobycia wiedzy na temat projektowania interfejsów użytkownika",
    "#39 Praca w firmie, która ceni sobie kreatywność i innowacyjność",
    "#40 Szansa na rozwój w dziedzinie testowania oprogramowania",
    "#41 Możliwość zdobycia wiedzy na temat systemów chmurowych",
    "#42 Praca w firmie, która oferuje szeroki zakres usług IT",
    "#43 Możliwość zdobycia wiedzy na temat systemów HR",
    "#44 Praca w zespole, który tworzy narzędzia dla biznesu",
    "#45 Szansa na zdobycie wiedzy na temat systemów CMS",
    "#46 Możliwość rozwoju w dziedzinie programowania w języku Python",
    "#47 Praca w firmie, która oferuje rozwiązania dla branży finansowej",
    "#48 Możliwość zdobycia wiedzy na temat systemów ERP w chmurze",
    "#49 Praca w zespole, który tworzy narzędzia dla sektora publicznego",
    "#50 Szansa na zdobycie wiedzy na temat systemów CRM w chmurze",
    "#51 Możliwość rozwoju w dziedzinie programowania w języku C++",
    "#52 Praca w firmie, która oferuje rozwiązania dla branży handlowej",
    "#53 Możliwość zdobycia wiedzy na temat systemów SCM w chmurze",
    "#54 Praca w zespole, który tworzy narzędzia dla branży medycznej",
    "#55 Szansa na zdobycie wiedzy na temat systemów BI w chmurze",
    "#56 Możliwość rozwoju w dziedzinie programowania w języku Ruby",
    "#57 Praca w firmie, która oferuje rozwiązania dla branży logistycznej",
    "#58 Możliwość zdobycia wiedzy na temat systemów HR w chmurze",
    "#59 Praca w zespole, który tworzy narzędzia dla branży spożywczej",
    "#60 Szansa na zdobycie wiedzy na temat systemów CMS w chmurze",
    "#61 Możliwość rozwoju w dziedzinie programowania w języku JavaScript",
    "#62 Praca w firmie, która oferuje rozwiązania dla branży farmaceutycznej",
    "#63 Możliwość zdobycia wiedzy na temat systemów ERP dla małych i średnich firm",
    "#64 Praca w zespole, który tworzy narzędzia dla branży turystycznej",
    "#65 Szansa na zdobycie wiedzy na temat systemów CRM dla małych i średnich firm",
    "#66 Możliwość rozwoju w dziedzinie programowania w języku Swift",
    "#67 Praca w firmie, która oferuje rozwiązania dla branży edukacyjnej",
    "#68 Możliwość zdobycia wiedzy na temat systemów SCM dla małych i średnich firm",
    "#69 Praca w zespole, który tworzy narzędzia dla branży energetycznej",
    "#70 Szansa na zdobycie wiedzy na temat systemów HR dla małych i średnich firm",
    "#71 Możliwość rozwoju w dziedzinie programowania w języku PHP",
    "#72 Praca w firmie, która oferuje rozwiązania dla branży IT",
    "#73 Możliwość zdobycia wiedzy na temat systemów ERP dla sektora publicznego",
    "#74 Praca w zespole, który tworzy narzędzia dla branży społecznej",
    "#75 Szansa na zdobycie wiedzy na temat systemów CRM dla sektora publicznego",
    "#76 Możliwość rozwoju w dziedzinie programowania w języku Kotlin",
    "#77 Praca w firmie, która oferuje rozwiązania dla branży motoryzacyjnej",
    "#78 Możliwość zdobycia wiedzy na temat systemów SCM dla sektora publicznego",
    "#79 Praca w zespole, który tworzy narzędzia dla branży sportowej",
    "#80 Szansa na zdobycie wiedzy na temat systemów HR dla sektora publicznego",
    "#81 Możliwość rozwoju w dziedzinie programowania w języku TypeScript",
    "#82 Praca w firmie, która oferuje rozwiązania dla branży telekomunikacyjnej",
    "#83 Możliwość zdobycia wiedzy na temat systemów ERP dla branży handlowej",
    "#84 Praca w zespole, który tworzy narzędzia dla branży turystycznej",
    "#85 Szansa na zdobycie wiedzy na temat systemów CRM dla branży handlowej",
    "#86 Możliwość rozwoju w dziedzinie programowania w języku Scala",
    "#87 Praca w firmie, która oferuje rozwiązania dla branży gastronomicznej",
    "#88 Możliwość zdobycia wiedzy na temat systemów SCM dla branży handlowej",
    "#89 Praca w zespole, który tworzy narzędzia dla branży muzycznej",
    "#90 Szansa na zdobycie wiedzy na temat systemów HR dla branży handlowej",
    "#91 Możliwość rozwoju w dziedzinie programowania w języku Go",
    "#92 Praca w firmie, która oferuje rozwiązania dla branży budowlanej",
    "#93 Możliwość zdobycia wiedzy na temat systemów ERP dla branży logistycznej",
    "#94 Praca w zespole, który tworzy narzędzia dla branży filmowej",
    "#95 Szansa na zdobycie wiedzy na temat systemów CRM dla branży logistycznej",
    "#96 Możliwość rozwoju w dziedzinie programowania w języku Rust",
    "#97 Praca w firmie, która oferuje rozwiązania dla branży reklamowej",
    "#98 Możliwość zdobycia wiedzy na temat systemów SCM dla branży logistycznej",
    "#99 Praca w zespole, który tworzy narzędzia dla branży modowej",
    "#100 Szansa na zdobycie wiedzy na temat systemów HR"
];

let currentReasonIndex = Math.floor(Math.random() * reasons.length);

function showRandomReason() {
  document.querySelector(".reason").textContent = reasons[currentReasonIndex];
}

document.querySelector(".next-button").addEventListener("click", () => {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * reasons.length);
  } while (newIndex === currentReasonIndex); // ensure the new index is different from the current one
  currentReasonIndex = newIndex;
  showRandomReason();
});

showRandomReason();

const button = document.querySelector('.next-button');
const colors = ['#78A2CC', '#88AED0', '#96B9D0', '#A4C3D2', '#AECBD6','#BFD4DB'];
const reasonsSection = document.querySelector('.reasons-section');
const topSection = document.querySelector('.top-section');
const footerSection = document.querySelector('footer')
let remainingColors = [...colors];

button.addEventListener('click', function() {
  if (remainingColors.length === 0) {
    remainingColors = [...colors];
  }
  const randomIndex = Math.floor(Math.random() * remainingColors.length);
  const randomColor = remainingColors[randomIndex];
  remainingColors.splice(randomIndex, 1);
  reasonsSection.style.backgroundColor = randomColor;
  topSection.style.backgroundColor = randomColor;
  footerSection.style.backgroundColor = randomColor;
});

var titleText = "Reasons why Artur loves Comarch 💙";
var titleIndex = 0;
setInterval(function() {
  titleIndex++;
  if (titleIndex > titleText.length) {
    titleIndex = 0;
  }
  var newTitle = titleText.substring(titleIndex) + titleText.substring(0, titleIndex);
  document.title = newTitle;
}, 100);

