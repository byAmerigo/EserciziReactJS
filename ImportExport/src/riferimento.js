
// let contenutoDelleCelle= [null,null,null,null,null,null,null,null,null]

// let turn = 0

// let winnerVar

// function resetGame(){
//     contenutoDelleCelle = [null,null,null,null,null,null,null,null,null]
//     turn = 0;
//     winnerVar = null;
//     ReactDOM.render( 
//         <RenderTris />, 
//         document.getElementById('root')
//     );
// }//Resetta il gioco

// function changeArray(indice){

//     var elem = ''

//     if (turn%2==0) { 
//         elem = 'croce'
//     }
//     else {
//         elem = 'cerchio'
//     }

//     contenutoDelleCelle[indice] = elem

//     turn++

//     ReactDOM.render( 
//         <RenderTris />,
//         document.getElementById('root')
//     );

// }//cambia il valore all'array per poi rifare il render della pagina

// function checkWinner(){

//     if (
//         contenutoDelleCelle[0] + contenutoDelleCelle[1] + contenutoDelleCelle[2] == 'crocecrocecroce' ||
//         contenutoDelleCelle[3] + contenutoDelleCelle[4] + contenutoDelleCelle[5] == 'crocecrocecroce' ||
//         contenutoDelleCelle[6] + contenutoDelleCelle[7] + contenutoDelleCelle[8] == 'crocecrocecroce' ||

//         contenutoDelleCelle[0] + contenutoDelleCelle[3] + contenutoDelleCelle[6] == 'crocecrocecroce' ||
//         contenutoDelleCelle[1] + contenutoDelleCelle[4] + contenutoDelleCelle[7] == 'crocecrocecroce' ||
//         contenutoDelleCelle[2] + contenutoDelleCelle[5] + contenutoDelleCelle[8] == 'crocecrocecroce' ||

//         contenutoDelleCelle[0] + contenutoDelleCelle[4] + contenutoDelleCelle[8] == 'crocecrocecroce' ||
//         contenutoDelleCelle[2] + contenutoDelleCelle[4] + contenutoDelleCelle[6] == 'crocecrocecroce' ){
            
//             return winnerVar = 'Croce'
//     }

//     if (
//         contenutoDelleCelle[0] + contenutoDelleCelle[1] + contenutoDelleCelle[2] == 'cerchiocerchiocerchio' ||
//         contenutoDelleCelle[3] + contenutoDelleCelle[4] + contenutoDelleCelle[5] == 'cerchiocerchiocerchio' ||
//         contenutoDelleCelle[6] + contenutoDelleCelle[7] + contenutoDelleCelle[8] == 'cerchiocerchiocerchio' ||

//         contenutoDelleCelle[0] + contenutoDelleCelle[3] + contenutoDelleCelle[6] == 'cerchiocerchiocerchio' ||
//         contenutoDelleCelle[1] + contenutoDelleCelle[4] + contenutoDelleCelle[7] == 'cerchiocerchiocerchio' ||
//         contenutoDelleCelle[2] + contenutoDelleCelle[5] + contenutoDelleCelle[8] == 'cerchiocerchiocerchio' ||

//         contenutoDelleCelle[0] + contenutoDelleCelle[4] + contenutoDelleCelle[8] == 'cerchiocerchiocerchio' ||
//         contenutoDelleCelle[2] + contenutoDelleCelle[4] + contenutoDelleCelle[6] == 'cerchiocerchiocerchio' ){ 
            
//             return winnerVar = 'Cerchio'
//     }

// } //controlla se c'è un vincitore o meno e SE esiste le assegna il nome

// function Bottoni(props){
//     if (props.segno){
//         return (
//             <button className = 'resetButton' >
//                 <img  
//                     className = ' tasto'  
//                     src = {props.segno+'.png'}>
//                 </img>
//             </button>
//         );
//     }
    
//     return (
//         <button 
//             onClick = {()=> changeArray(props.indice)} 
//             className = 'resetButton'>
//         </button>
//     );

// }


// function Tabella(props){


//     if (props.turno >= 9 && !props.winner){
//         return (
//             <div className = 'centered'>
//                 <h1> 
//                     Partita patta 
//                 </h1>
//                 <button 
//                     onClick = {()=> resetGame()} 
//                     className = 'button-resetGame'>

//                     RIGIOCA 

//                 </button>
//             </div>
//         );
//     }

//     if(props.winner){
//         return (
//             <div className = 'centered'>
//                 <h1> 
//                     Partita finita, ha vinto {props.winner} 
//                 </h1>
//                 <button 
//                     onClick = {()=> resetGame()} 
//                     className = 'button-resetGame'> 

//                     RIVINCITA 
            
//                 </button>

//             </div>
//         );
//     }

//     return (
//         <div className= 'griglia grid'>
//             {contenutoDelleCelle.map((el,i) => 
//             <Bottoni 
//                 indice = {i} 
//                 key = {i} 
//                 segno = {el} 
//             /> )}
//         </div>
//     );
// }

// function RenderTris() {

//     checkWinner()

//     return (
//         <div className='centered'>
//             <Tabella 
//                 turno = {turn} 
//                 winner = {winnerVar} 
//             />
//         </div>
//     );
// }

// ReactDOM.render( 
//     <RenderTris />,
//     document.getElementById('root')
// );


import React from 'react'
import ReactDOM from 'react-dom'






function RenderTris() {

    checkWinner()

    
}

ReactDOM.render( 
    <RenderTris />,
    document.getElementById('root')
);




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++SOSTITUZIONE IN COMPONENTI DI REACT ++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




// let segnoArr= [null,null,null,null,null,null,null,null,null]

// let turn = 0

// let winnerVar

// function resetGame(){
//     segnoArr = [null,null,null,null,null,null,null,null,null]
//     turn = 0;
//     winnerVar = null;
//     ReactDOM.render( <RenderTris />, document.getElementById('root'));
// }

// function changeArray(indice){
    
//     var elem

//     if (turn%2==0){
//         elem = 'croce'
//     }

//     else {
//         elem = 'cerchio'
//     }

//     segnoArr[indice] = elem

//     turn++

//     ReactDOM.render( <RenderTris />, document.getElementById('root'));
// }

// function checkWinner(){

//     if (
//         segnoArr[0] + segnoArr[1] + segnoArr[2] == 'crocecrocecroce' ||
//         segnoArr[3] + segnoArr[4] + segnoArr[5] == 'crocecrocecroce' ||
//         segnoArr[6] + segnoArr[7] + segnoArr[8] == 'crocecrocecroce' ||

//         segnoArr[0] + segnoArr[3] + segnoArr[6] == 'crocecrocecroce' ||
//         segnoArr[1] + segnoArr[4] + segnoArr[7] == 'crocecrocecroce' ||
//         segnoArr[2] + segnoArr[5] + segnoArr[8] == 'crocecrocecroce' ||

//         segnoArr[0] + segnoArr[4] + segnoArr[8] == 'crocecrocecroce' ||
//         segnoArr[2] + segnoArr[4] + segnoArr[6] == 'crocecrocecroce' ){
            
//             return winnerVar = 'Croce'
//     }

//     if (
//         segnoArr[0] + segnoArr[1] + segnoArr[2] == 'cerchiocerchiocerchio' ||
//         segnoArr[3] + segnoArr[4] + segnoArr[5] == 'cerchiocerchiocerchio' ||
//         segnoArr[6] + segnoArr[7] + segnoArr[8]  == 'cerchiocerchiocerchio' ||

//         segnoArr[0] + segnoArr[3] + segnoArr[6] == 'cerchiocerchiocerchio' ||
//         segnoArr[1] + segnoArr[4] + segnoArr[7] == 'cerchiocerchiocerchio' ||
//         segnoArr[2] + segnoArr[5] + segnoArr[8] == 'cerchiocerchiocerchio' ||

//         segnoArr[0] + segnoArr[4] + segnoArr[8] == 'cerchiocerchiocerchio' ||
//         segnoArr[2] + segnoArr[4] + segnoArr[6] == 'cerchiocerchiocerchio' ){ 
            
//             return winnerVar = 'Cerchio'
//     }

// }

// class Bottoni extends React.Component {

//         render() {
//             if (this.props.segno){
//                 return (
//                     <button className = 'resetButton' >
//                         <img  className = ' tasto'  src = {this.props.segno+'.png'}>
//                         props segno </img>
//                     </button>
//                 );
//             }

//             return (
//                 <button onClick = {()=> changeArray(this.props.indice)} className = 'resetButton' >
//                 senza la props {this.state}
//                 </button>
//             );
//         }
//     }

// class Tabella extends React.Component{

//         render(){

//         if (this.props.turno >= 9 && !this.props.winner){
//             return (
//                 <div className = 'centered'>
//                     <h1> Partita patta </h1>
//                     {/* <button onClick = {()=> resetGame()} className = 'button-resetGame'> RIGIOCA </button>               */}
//                 </div>
//             );
//         }; //controlla se c'è non ci sono più mosse (il turno è maggiore di 9) e se c'è un vincitore

//         if (this.props.winner){
//             return (
//                 <div className = 'centered'>
//                     <h1> Partita finita, ha vinto {this.props.winner} </h1>
//                     {/* <button onClick = {()=> resetGame()} className = 'button-resetGame'> RIVINCITA </button>               */}
//                 </div>
//             );
//         } //controlla se c'è un vincitore

//         return (
//             <div className= 'griglia grid'>
//                 {/* {segnoArr.map((el,i) => <Bottoni indice = {i} key = {i} segno = {el}/> )} */}
//                 Ciao
//             </div>
//             ); //imposta l'immagine nella casella

//         }

// }

// class RenderTris extends React.Component{

//     //checkWinner()
   
//     render(){

//         // return (
//         //     <div className='centered'>
//         //       <Tabella turno = {turn} winner = {winnerVar} />
//         //     </div>
//         //   );

//     return (
//         <div className='centered'>
//             <Bottoni />
//             <Tabella/>
//         </div>
//         );
//     }

// }


// ReactDOM.render(
// <RenderTris/>,
// document.getElementById('root')
// );





