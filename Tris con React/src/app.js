    let segnoArr= [null,null,null,null,null,null,null,null,null]

    let turn = 0

    let winnerVar 

    function resetGame(){
        segnoArr = [null,null,null,null,null,null,null,null,null]
        turn = 0;
        winnerVar = null;
        ReactDOM.render( <RenderTris />, document.getElementById('root'));        
    }
    function Bottoni(props){
        if (props.segno){
            return (
                <button className = 'resetButton' >
                    <img  className = ' tasto'  src = {props.segno+'.png'}></img>
                </button>
            );
        }
        return (
            <button onClick = {()=> changeArray(props.indice)} className = 'resetButton' >
            </button>
        );

    }
        
        
    var Tabella = (props) => {

        if (props.turno >= 9 && !props.winner){
            return (
                <div className = 'centered'>                
                    <h1> Partita patta </h1>  
                    <button onClick = {()=> resetGame()} className = 'button-resetGame'> RIGIOCA </button>              
                </div>
            );
        }

        if(props.winner){
            return (
                <div className = 'centered'>                 
                    <h1> Partita finita, ha vinto {props.winner} </h1> 
                    <button onClick = {()=> resetGame()} className = 'button-resetGame'> RIVINCITA </button>              
            
                </div>
            );
        }
        return (
            <div className= 'griglia grid'>
                {segnoArr.map((el,i) => <Bottoni indice = {i} key = {i} segno = {el}/> )}
            </div>
        );
    }

    function changeArray(indice){
        var elem 

        if (turn%2==0) { elem = 'croce'
        }
        else {elem = 'cerchio'
        }

        segnoArr[indice] = elem

        turn++

        ReactDOM.render( <RenderTris />, document.getElementById('root'));
    }


    function checkWinner(){

        if (segnoArr[0] + segnoArr[1] + segnoArr[2] == 'crocecrocecroce' ||  
            segnoArr[3] + segnoArr[4] + segnoArr[5] == 'crocecrocecroce' || 
            segnoArr[6] + segnoArr[7] + segnoArr[8] == 'crocecrocecroce' ||
            
            segnoArr[0] + segnoArr[3] + segnoArr[6] == 'crocecrocecroce' ||
            segnoArr[1] + segnoArr[4] + segnoArr[7] == 'crocecrocecroce' ||
            segnoArr[2] + segnoArr[5] + segnoArr[8] == 'crocecrocecroce' ||
        
            segnoArr[0] + segnoArr[4] + segnoArr[8] == 'crocecrocecroce' ||
            segnoArr[2] + segnoArr[4] + segnoArr[6] == 'crocecrocecroce' ){ return winnerVar = 'Croce'
        } 
            
        if (segnoArr[0] + segnoArr[1] + segnoArr[2] == 'cerchiocerchiocerchio' ||  
            segnoArr[3] + segnoArr[4] + segnoArr[5] == 'cerchiocerchiocerchio' || 
            segnoArr[6] + segnoArr[7] + segnoArr[8]  == 'cerchiocerchiocerchio' ||
            
            segnoArr[0] + segnoArr[3] + segnoArr[6] == 'cerchiocerchiocerchio' ||
            segnoArr[1] + segnoArr[4] + segnoArr[7] == 'cerchiocerchiocerchio' ||
            segnoArr[2] + segnoArr[5] + segnoArr[8] == 'cerchiocerchiocerchio' ||
        
            segnoArr[0] + segnoArr[4] + segnoArr[8] == 'cerchiocerchiocerchio' ||
            segnoArr[2] + segnoArr[4] + segnoArr[6] == 'cerchiocerchiocerchio' ){ return winnerVar = 'Cerchio'
        }

    }
    
    function RenderTris() {

        checkWinner()

        return (
          <div className='centered'>
            <Tabella turno = {turn} winner = {winnerVar} />
          </div>
        );
    }
      
    ReactDOM.render(
    <RenderTris />,
    document.getElementById('root')
    );
