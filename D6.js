/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const changeTitle = function (newTitle) {
  return (document.getElementsByTagName("h1")[0].innerText = newTitle);
};

changeTitle("Questo è il nostro nuovo titolo dopo la manipolazione del DOM");

/* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */

const addClassToTitle = function (newClass) {
  return document.getElementsByTagName("h1")[0].classList.add(newClass);
};

addClassToTitle("myHeading");

/* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
       */

const changePcontent = function (newPText) {
  let pInDiv = document.querySelectorAll("div p"); // Non possiamo appliccare direttamente la proprità
  // innerText a questa variabile perchè querySelectorAll restituisce una NODE COLLECTION
  // quindi una serie di elementi, su cui è possibile iterare con il metodo forEach,
  // per poi andare a modificare ogni singolo elemento

  pInDiv.forEach((pContent) => {
    pContent.innerText = newPText;
  });
};

changePcontent("Questo è il testo dei nuovi p dopo la manipolazione del DOM");

/* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */

const changeUrls = function (newUrl) {
  return document
    .querySelectorAll("body a:not(footer a)")
    .forEach(function (links) {
      links.href = newUrl;
      links.target = "blank";
    });
  //    return document.getElementsByTagName("a")[0].href = newUrl
  // questo poteva essere un ulteriore metodo ma non teneva conto esattamente della richiesta dell'esercizio
  // poichè teneva presente solo questo caso specifico in cui i tag a erano solo due, uno nel main ed uno nel footer
  // quindi andando a predendere solo il primo avremmo fatto una forzatura del codice per andare a prendere quel tag specifico
};

changeUrls("https://www.google.com");

/* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */

const addToTheSecond = function (newElement) {
  let newLine = document.createElement("li");
  return (document
    .getElementById("secondList")
    .appendChild(newLine).textContent = newElement);
};

addToTheSecond("Nuovo elemento della lista");

/* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */

const addParagraph = function (pText) {
  let newP = document.createElement("p");
  return (document
    .querySelectorAll("body div")[0]
    .appendChild(newP).textContent = pText);
};

addParagraph("Questo è un nuovo paragrafo aggiunto");

/* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */

const hideFirstUl = function () {
  return (document.getElementById("firstList").style.display = "none");
};

// hideFirstUl(); /* ho commentato per vedere le liste  */

/* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */

const paintItGreen = function () {
  let backList = document.getElementsByTagName("ul");
  for (let i = 0; i < backList.length; i++) {
    backList[i].style.backgroundColor = "green";
  }
};

paintItGreen();

// Avremmo potuto anche utilizzare il querySelectorAll ed applicare il metodo forEach:
// let backList = document.querySelectorAll("ul")
// backlist.forEach((listcolor) => listcolor.display.backgroundColor = "green")

/* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */

const makeItClickable = function () {
  let title = document.getElementsByClassName("myHeading")[0];
  return title.addEventListener("click", function () {
    return (title.textContent = title.textContent.slice(0, -1));
  });
};

makeItClickable();

/* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */

const revealFooterLink = function () {
  let footer = document.getElementsByTagName("footer")[0]; // oppure document.querySelector("footer")
  return footer.addEventListener("click", function () {
    let link = document.querySelector("footer a").getAttribute("href");
    return alert(link);
  });
};
revealFooterLink();

/* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */

const generateTable = function (data, headText) {
  // data corrisponde ad un array di oggetti
  // headText è un array di stringhe con le intestazioni della tabella

  let tableArea = document.getElementById("tableArea");
  let table = document.createElement("table");

  // THEAD
  let thead = document.createElement("thead");
  let headerRow = document.createElement("tr");

  headText.forEach((headerText) => {
    let header = document.createElement("th");
    header.textContent = headerText;
    headerRow.appendChild(header);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Tbody

  const tbody = document.createElement("tbody");

  // Itera su ogni oggetto nell'array
  data.forEach((item) => {
    const row = document.createElement("tr");

    // Per ogni chiave nell'oggetto, creiamo una cella nella riga
    Object.keys(item).forEach((key, index) => {
      // Object.keys(item) restituisce un array con i valori dell'oggetto item
      const cell = document.createElement("td");
      if (key === "imageSrc" && index === 0) {
        // Se è la prima cella e la chiave è 'imageSrc'
        const img = document.createElement("img");
        img.src = item[key];
        // impostiamo il valore dell'attributo src dell'img uguale alla chiave key dell'oggetto item
        cell.appendChild(img);
        // inseriamo l'immagine nella cella
      } else {
        // altrimenti
        cell.textContent = item[key]; // il contenuto del testo è uguale alla chiave key dell'oggetto item
      }
      row.appendChild(cell);
      // inseriamo le celle nelle righe
    });

    tbody.appendChild(row);
    // inseriamo le righe nel tbody
  });
  table.appendChild(tbody);

  tableArea.appendChild(table);
  table.setAttribute("border", "2");
};

let arrayProp = ["Immagine", "Nome Prodotto", "Quantità", "Prezzo"];
let obj = [
  {
    imageSrc: `https://placedog.net/100/100?id=${Math.floor(
      Math.random() * 200
    )}`,
    productName: "Prodotto 1",
    quantity: 2,
    price: "€10",
  },
  {
    imageSrc: `https://placedog.net/100/100?id=${Math.floor(
      Math.random() * 200
    )}`,
    productName: "Prodotto 2",
    quantity: 1,
    price: "€15",
  },
  {
    imageSrc: `https://placedog.net/100/100?id=${Math.floor(
      Math.random() * 200
    )}`,
    productName: "Prodotto 3",
    quantity: 3,
    price: "€20",
  },
  {
    imageSrc: `https://placedog.net/100/100?id=${Math.floor(
      Math.random() * 200
    )}`,
    productName: "Prodotto 4",
    quantity: 5,
    price: "€25",
  },
  {
    imageSrc: `https://placedog.net/100/100?id=${Math.floor(
      Math.random() * 200
    )}`,
    productName: "Prodotto 5",
    quantity: 4,
    price: "€30",
  },
];

generateTable(obj, arrayProp);

/* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */

const newRowData = [
  `https://placedog.net/100/100?id=${Math.floor(Math.random() * 200)}`,
  "Nuovo Prodotto",
  10,
  "€50",
];

const addRow = function (rowData) {
  const tableBody = document.querySelector("#tableArea tbody");

  // Creiamo una nuova riga
  const newRow = document.createElement("tr");

  // Manipoliamo il primo elemento separatamente per aggiungere l'immagine
  const firstCell = document.createElement("td");
  const img = document.createElement("img");
  img.src = rowData[0]; // Assumendo che il primo elemento sia l'URL dell'immagine
  firstCell.appendChild(img);
  newRow.appendChild(firstCell);

  // Itera attraverso gli altri dati nella riga e crea le celle corrispondenti
  for (let i = 1; i < rowData.length; i++) {
    const cell = document.createElement("td");
    cell.textContent = rowData[i];
    newRow.appendChild(cell);
  }

  // Aggiunge la nuova riga al corpo della tabella
  tableBody.appendChild(newRow);
};

addRow(newRowData);

/* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */

const hideAllImages = function () {
  const hiddenImage = document.querySelectorAll("#tableArea img");
  for (let i = 0; i < hiddenImage.length; i++) {
    hiddenImage[i].style.visibility = "hidden";
  }
};

// hideAllImages();

/* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */

const changeColorWithRandom = function () {
  let randomColor = function () {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 17)];
    }
    return color;
  };

  let h2Element = document.getElementById("changeMyColor");
  h2Element.addEventListener("click", function () {
    return (h2Element.style.color = randomColor());
  });
};

changeColorWithRandom();
