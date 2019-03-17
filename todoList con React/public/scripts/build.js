"use strict";

var listAtivita = ['Andare a correre', 'Fare questo'];

function aggiungiAllaLista() {
  var elemento = document.getElementById("add").value;

  if (elemento != '') {
    listAtivita.push(elemento);
  }

  ReactDOM.render(React.createElement(RenderToDo, null), document.getElementById('root'));
}

function selezionaTutto() {
  var checkboxes = document.getElementsByName('check');

  for (var i = 0; i < checkboxes.length; i++) {
    // if (checkboxes[i].checked == false) {
    //     checkboxes[i].checked = true;
    // } else {
    //     checkboxes[i].checked = true;
    // }
    if (checkboxes[i].checked == true) {
      for (var j = 0; j < checkboxes.length; j++) {
        checkboxes[j].checked = false;
      }

      break;
    } else {
      for (var _j = 0; _j < checkboxes.length; _j++) {
        checkboxes[_j].checked = true;
      }

      break;
    }
  }
}

function eliminaSelezionati() {
  var checkboxes = document.getElementsByName('check');
  var listaRimanenti = [];

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked == false) {
      listaRimanenti.push(listAtivita[i]);
    }

    checkboxes[i].checked = false;
  }

  listAtivita = listaRimanenti;
  ReactDOM.render(React.createElement(RenderToDo, null), document.getElementById('root'));
}

function Input() {
  return React.createElement("div", {
    className: "margin"
  }, React.createElement("h5", {
    className: "text-grey"
  }, " LISTA ATTIVIT\xC0"), React.createElement("input", {
    type: "text",
    id: "add",
    className: "form-control",
    placeholder: "Scrivi attivit\xE0"
  }));
}

;

function Invia() {
  return React.createElement("div", null, React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return aggiungiAllaLista();
    },
    className: "btn  btn-success flex-1"
  }, "Aggiungi"), React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return selezionaTutto();
    },
    className: "btn  btn-success flex-1"
  }, "Seleziona tutto"), React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return eliminaSelezionati();
    },
    className: "btn  btn-success flex-1"
  }, "Elimina"));
}

;

function Attivita(props) {
  return React.createElement("div", {
    className: "input-group mb-3 margin"
  }, React.createElement("div", {
    className: "input-group-prepend"
  }, React.createElement("div", {
    className: "input-group-text"
  }, React.createElement("input", {
    type: "checkbox",
    name: "check"
  }))), React.createElement("h2", {
    className: "form-control margin-right"
  }, props.attivita));
}

function Elementi() {
  return React.createElement("div", null, listAtivita.map(function (el, i) {
    return React.createElement(Attivita, {
      indice: i,
      key: i,
      attivita: el
    });
  }));
}
/**
 * FORM DI INPUT
 * INVIA
 * SELEZIONA ELEMENTI
 * ELENCO ELEMENTI
 */


function RenderToDo() {
  return React.createElement("div", null, React.createElement(Input, null), React.createElement(Invia, null), React.createElement(Elementi, null));
}

;
ReactDOM.render(React.createElement(RenderToDo, null), document.getElementById('root')); // function Semaforo(props){
//     return(
//         <div>
//             <h1 className = {props.coloreFont}> {props.colore}</h1>
//             <Buttone/>
//         </div>
//     );
// }
// function avvia(){
//     setTimeout( ()=> {
//         ReactDOM.render(
//         <Semaforo coloreFont = 'verde' colore = 'Verde'/>,
//         document.getElementById('root'))
//         }, 1000)
//     setTimeout( ()=> {
//         ReactDOM.render(
//         <Semaforo   coloreFont = 'giallo'  colore = 'Giallo'/>,
//         document.getElementById('root'))
//         }, 4000)
//     setTimeout( ()=> {
//         ReactDOM.render(
//         <Semaforo  coloreFont = 'rosso'  colore = 'Rosso'/>,
//         document.getElementById('root'))
//         }, 8000)
// }
// function Buttone(){
//     return ( 
//       <div>
//           <button onClick= {avvia}> Avvia </button>
//       </div>
//       )
// }
// ReactDOM.render(
//     <Semaforo colore = 'Rosso' coloreFont = 'rosso' />,
//     document.getElementById('root')
// );
