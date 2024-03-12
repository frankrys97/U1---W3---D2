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

const generateTable = function () {
  let tableData = [
    {
      image: "https://placedog.net/50",
      name: "Prodotto 1",
      quantity: 3,
      price: 10,
    },
    {
      image: "https://placedog.net/50",
      name: "Prodotto 2",
      quantity: 2,
      price: 15,
    },
    {
      image: "https://placedog.net/50",
      name: "Prodotto 3",
      quantity: 5,
      price: 20,
    },
    {
      image: "https://placedog.net/50",
      name: "Prodotto 4",
      quantity: 1,
      price: 25,
    },
    {
      image: "https://placedog.net/50",
      name: "Prodotto 5",
      quantity: 4,
      price: 30,
    },
  ];

  let tableArea = document.getElementById("tableArea");
  let table = document.createElement("table");

  for (let i = 0; i < tableData.length; i++) {
    let rowData = tableData[i];
    let row = document.createElement("tr");

    let cell1 = document.createElement("td");
    let image = document.createElement("img");

    image.src = rowData.image;
    cell1.appendChild(image);
    row.appendChild(cell1);

    let cell2 = document.createElement("td");
    cell2.textContent = rowData.name;
    row.appendChild(cell2);

    let cell3 = document.createElement("td");
    cell3.textContent = rowData.quantity;
    row.appendChild(cell3);

    let cell4 = document.createElement("td");
    cell4.textContent = rowData.price;
    row.appendChild(cell4);

    table.appendChild(row);
  }

  tableArea.appendChild(table);
};

generateTable();

/* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */

const addRow = function () {};

/* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */

const hideAllImages = function () {};

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
