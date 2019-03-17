"use strict";

// function App (){
//     return (
//         <div> Funziona</div>
//     )
// }
// function RenderGame(){
//     ReactDOM.render(
//         <App/>, document.getElementById('root')
//     )
// }
function Titolo() {
  return React.createElement("h4", null, " Torre ");
}

var arrRiga = [0, 0, 0, 1, 1, 1, 1, 0, 0]; //9

function spostaArray(n) {
  var arrTemporanea = [];
  console.log(arrRiga);

  for (var i = 0; i < arrRiga.length; i++) {
    if (arrRiga[i] == 1) {
      console.log(i + 1);
      arrTemporanea.push(arrRiga[i + n]);
    }
  }

  console.log('Arrtemporanea = ' + arrTemporanea);
  arrRiga = arrTemporanea;
  renderGame();
}

function prova() {
  setInterval(function () {
    return spostaArray(+1);
  }, 800);
} // prova()


function Cella(props) {
  //props.colore è uguale all'elemento nell array
  if (props.colore == 0) {
    return React.createElement("div", {
      className: "cella cella-vuota"
    });
  }

  if (props.colore != 0) {
    return React.createElement("div", {
      className: "cella"
    });
  }
}

function Riga(props) {
  var array = props.array;
  return React.createElement("div", {
    className: "flex-row"
  }, array.map(function (el, i) {
    return React.createElement(Cella, {
      indice: i,
      key: i,
      colore: el
    });
  }));
}

function RenderTris() {
  return React.createElement("div", null, React.createElement(Titolo, null), React.createElement(Riga, {
    array: arrRiga
  }));
}

function renderGame() {
  ReactDOM.render(React.createElement(RenderTris, null), document.getElementById('root'));
}

renderGame();
