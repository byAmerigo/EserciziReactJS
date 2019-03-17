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
    return (
      <h4> Torre </h4>
    );
}

let arrRiga = [0,0,0,1,1,1,1,0,0] //9



function spostaArray(n){
    let arrTemporanea = []
    console.log(arrRiga)

    for (let i = 0; i < arrRiga.length; i++) {
        if(arrRiga[i]==1){
            console.log(i+1)
            arrTemporanea.push(arrRiga[i+n])
        }
    }
    
    console.log('Arrtemporanea = '+arrTemporanea)
    arrRiga = arrTemporanea

    renderGame()

}

function prova(){

    setInterval(()=>spostaArray(+1), 800)
 }

// prova()

    
function Cella(props){
    //props.colore è uguale all'elemento nell array
    if (props.colore == 0){
    return(
        <div className='cella cella-vuota'> 
            
        </div>
    )}

    if (props.colore != 0){
        return(
            <div className='cella' > 
                
            </div>
        )

    }
}

function Riga(props){

    let array = props.array 

   return( 
    <div className= 'flex-row'> 
        {array.map((el,i) => <Cella indice = {i} key = {i} colore = {el}/> )}
    </div>
   );
}
function RenderTris() {

    return (
        <div>
            <Titolo/>
            <Riga array = {arrRiga}/>
        </div>
    );
}

function renderGame(){
ReactDOM.render(
<RenderTris />,
document.getElementById('root')
);


}

renderGame(

)