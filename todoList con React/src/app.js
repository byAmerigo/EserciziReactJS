
 let listAtivita = ['Andare a correre','Fare questo']

function aggiungiAllaLista(){

    
    var elemento = document.getElementById("add").value
    
    if (elemento != '') {listAtivita.push(elemento)}


   ReactDOM.render( <RenderToDo />, document.getElementById('root'));
}

function selezionaTutto(){

    var checkboxes = document.getElementsByName('check');
      
    for (let i = 0; i < checkboxes.length; i++) {
        // if (checkboxes[i].checked == false) {

        //     checkboxes[i].checked = true;

        // } else {
        //     checkboxes[i].checked = true;
        // }

        if (checkboxes[i].checked == true){
            for (let j = 0; j < checkboxes.length; j++){
                checkboxes[j].checked = false; 
            }
            break
        } else {
            for (let j = 0; j < checkboxes.length; j++){
                checkboxes[j].checked = true;                   
            }
            break
        }
    }
}




function eliminaSelezionati(){
    var checkboxes = document.getElementsByName('check');
    var listaRimanenti = []

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked == false) {

            listaRimanenti.push(listAtivita[i])
        }
        
        
        checkboxes[i].checked=false
    }
    listAtivita = listaRimanenti

    ReactDOM.render( <RenderToDo />, document.getElementById('root'));

}




function Input (){

    
   return ( 
    <div className = 'margin'>
        <h5 className = 'text-grey' > LISTA ATTIVITÀ</h5>
        <input type="text" id = 'add'  className="form-control"  placeholder="Scrivi attività"></input>
    </div>
  );
};

function Invia (){
   return (
    <div>
        <button type="button" onClick = {()=>(aggiungiAllaLista())} className="btn  btn-success flex-1">Aggiungi</button>
        <button type="button" onClick = {()=>(selezionaTutto())} className="btn  btn-success flex-1">Seleziona tutto</button>
        <button type="button" onClick = {()=>(eliminaSelezionati())} className="btn  btn-success flex-1">Elimina</button>
    </div>
    );
};

function Attivita (props){

return (
    <div className="input-group mb-3 margin">
            <div className="input-group-prepend">
                <div className="input-group-text">
                    <input type="checkbox" name = 'check'></input>
                </div>
            </div>
            <h2 className="form-control margin-right">{props.attivita}</h2>
        </div>
)
}

function Elementi (){
    return (

        <div>

            {listAtivita.map((el,i) => <Attivita indice = {i} key = {i} attivita = {el}/> )}

        </div>
    )
}


    /**
     * FORM DI INPUT
     * INVIA
     * SELEZIONA ELEMENTI
     * ELENCO ELEMENTI
     */

function RenderToDo (){
    
    
    return(
        <div>
            <Input/>
            <Invia/>
            <Elementi/>
        </div>
    );
};


ReactDOM.render(
    <RenderToDo/>,
    document.getElementById('root')
);

// function Semaforo(props){
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