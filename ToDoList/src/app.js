
let listAtivita = ['Andare a correre','Studiare ReactJS','Chiamare il dottore']

function aggiungiAllaLista(){

   var elemento = document.getElementById("add").value
   
   if (elemento != '') {
      listAtivita.push(elemento)
   }

   ReactDOM.render( 
      <RenderToDo />, 
      document.getElementById('root')
   );
}

function selezionaTutto(){

   var checkboxes = document.getElementsByName('check');
      
   for (let i = 0; i < checkboxes.length; i++) {

      if (checkboxes[i].checked == true){
         for (let j = 0; j < checkboxes.length; j++){
            checkboxes[j].checked = false; 
         }
         break
      } 

      else {
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

   ReactDOM.render( 
      <RenderToDo />, 
      document.getElementById('root')
   );
}

function Input (){
    
   return ( 
      <div className = 'margin'>
         <h5 className = 'text-grey' > LISTA ATTIVITÀ</h5>
         <input 
            type="text" 
            id = 'add'  
            className="form-control"  
            placeholder="Scrivi attività">
         </input>
      </div>
   );
};

function Invia (){
   return (
      <div>
         <button 
            type="button" 
            onClick = {()=>(aggiungiAllaLista())} 
            className="btn  btn-success flex-1">
            
            Aggiungi
         </button>

         <button 
            type="button" 
            onClick = {()=>(selezionaTutto())} 
            className="btn  btn-success flex-1">

            Seleziona tutto
         </button>
         <button 
            type="button" 
            onClick = {()=>(eliminaSelezionati())} 
            className="btn  btn-success flex-1">
            
            Elimina
         </button>
      </div>
   );
};

function Attivita (props){

   return(
      <div className="input-group mb-3 margin">
         <div className="input-group-prepend">
            <div className="input-group-text">
               <input 
                  type="checkbox" 
                  name = 'check'>
               </input>
            </div>
         </div>
      
         <h2 className="form-control margin-right">
            {props.attivita}
         </h2>
      </div>
   )
}

function Elementi (){
    return (
        <div>
            {listAtivita.map((el,i) => 
               <Attivita 
                  indice = {i} 
                  key = {i} 
                  attivita = {el}
               /> )}
        </div>
    )
}

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

/*
class Login extends React.Component{

    constructor(props){
       super(props);
       this.state = {
          username: '',
          password: ''
       }
    }
    
    changeUsername(event){
         this.setState({username:event.target.value});
    }
    changePassword(event){
         this.setState({password:event.target.value});
    }
 
    changeText(field, event){
         this.setState({[field] : event.target.value})
    }
    onSubmit(event){
         event.preventDefault();
    }
    login(event){
        //FAKE REST API NEI PROSSIMI ARTICOLI
        console.log("Login con username: ", this.state.username);
        console.log("Login con password: ", this.state.password);
    }
 
     render(){
         return(
  
             <form onSubmit={this.onSubmit.bind(this)}>
                 <div className = "form-group">
                     <input 
                         type="text"
                         placeholder="username"
                         value = {this.state.username || ''}
                         onChange = {this.changeText.bind(this,'username')}/>
                 </div>
 
                 <div className = "form-group">
                     <input 
                     type="password"
                     placeholder="password"
                     value = {this.state.password}
                     onChange = {this.changeText.bind(this,'password')}/>
                 </div>
 
                 <button 
                     type="submit"
                     onClick={this.login.bind(this)}>
                     Invio
                 </button>
             </form>
         );  
     }   
 
 }

 
ReactDOM.render(
    <Login/>,
    document.getElementById('root')
);


*/