"use strict";

var segnoArr = [null, null, null, null, null, null, null, null, null];
var turn = 0;
var winnerVar;

function resetGame() {
  segnoArr = [null, null, null, null, null, null, null, null, null];
  turn = 0;
  winnerVar = null;
  ReactDOM.render(React.createElement(RenderTris, null), document.getElementById('root'));
}

function Bottoni(props) {
  if (props.segno) {
    return React.createElement("button", {
      className: "resetButton"
    }, React.createElement("img", {
      className: " tasto",
      src: props.segno + '.png',
      width: "80px",
      height: "80px"
    }));
  }

  return React.createElement("button", {
    onClick: function onClick() {
      return changeArray(props.indice);
    },
    className: "resetButton"
  });
}

var Tabella = function Tabella(props) {
  if (props.turno >= 9 && !props.winner) {
    return React.createElement("div", {
      className: "centered"
    }, React.createElement("h1", null, " Partita patta "), React.createElement("button", {
      onClick: function onClick() {
        return resetGame();
      },
      className: "button-resetGame"
    }, " RIGIOCA "));
  }

  if (props.winner) {
    return React.createElement("div", {
      className: "centered"
    }, React.createElement("h1", null, " Partita finita, ha vinto ", props.winner, " "), React.createElement("button", {
      onClick: function onClick() {
        return resetGame();
      },
      className: "button-resetGame"
    }, " RIVINCITA "));
  }

  return React.createElement("div", {
    className: "griglia grid"
  }, segnoArr.map(function (el, i) {
    return React.createElement(Bottoni, {
      indice: i,
      key: i,
      segno: el
    });
  }));
};

function changeArray(indice) {
  var elem;

  if (turn % 2 == 0) {
    elem = 'croce';
  } else {
    elem = 'cerchio';
  }

  segnoArr[indice] = elem;
  turn++;
  ReactDOM.render(React.createElement(RenderTris, null), document.getElementById('root'));
}

function checkWinner() {
  if (segnoArr[0] + segnoArr[1] + segnoArr[2] == 'crocecrocecroce' || segnoArr[3] + segnoArr[4] + segnoArr[5] == 'crocecrocecroce' || segnoArr[6] + segnoArr[7] + segnoArr[8] == 'crocecrocecroce' || segnoArr[0] + segnoArr[3] + segnoArr[6] == 'crocecrocecroce' || segnoArr[1] + segnoArr[4] + segnoArr[7] == 'crocecrocecroce' || segnoArr[2] + segnoArr[5] + segnoArr[8] == 'crocecrocecroce' || segnoArr[0] + segnoArr[4] + segnoArr[8] == 'crocecrocecroce' || segnoArr[2] + segnoArr[4] + segnoArr[6] == 'crocecrocecroce') {
    return winnerVar = 'Croce';
  }

  if (segnoArr[0] + segnoArr[1] + segnoArr[2] == 'cerchiocerchiocerchio' || segnoArr[3] + segnoArr[4] + segnoArr[5] == 'cerchiocerchiocerchio' || segnoArr[6] + segnoArr[7] + segnoArr[8] == 'cerchiocerchiocerchio' || segnoArr[0] + segnoArr[3] + segnoArr[6] == 'cerchiocerchiocerchio' || segnoArr[1] + segnoArr[4] + segnoArr[7] == 'cerchiocerchiocerchio' || segnoArr[2] + segnoArr[5] + segnoArr[8] == 'cerchiocerchiocerchio' || segnoArr[0] + segnoArr[4] + segnoArr[8] == 'cerchiocerchiocerchio' || segnoArr[2] + segnoArr[4] + segnoArr[6] == 'cerchiocerchiocerchio') {
    return winnerVar = 'Cerchio';
  }
}

function RenderTris() {
  checkWinner();
  return React.createElement("div", {
    className: "centered"
  }, React.createElement(Tabella, {
    turno: turn,
    winner: winnerVar
  }));
}

ReactDOM.render(React.createElement(RenderTris, null), document.getElementById('root'));
