export function resetGame(){
    contenutoDelleCelle = [null,null,null,null,null,null,null,null,null]
    turn = 0;
    winnerVar = null;
    ReactDOM.render( 
        <RenderTris />, 
        document.getElementById('root')
    );
}//Resetta il gioco

export function changeArray(indice){

    var elem = ''

    if (turn%2==0) { 
        elem = 'croce'
    }
    else {
        elem = 'cerchio'
    }

    contenutoDelleCelle[indice] = elem

    turn++

    ReactDOM.render( 
        <RenderTris />,
        document.getElementById('root')
    );

}//cambia il valore all'array per poi rifare il render della pagina

export function checkWinner(){

    if (
        contenutoDelleCelle[0] + contenutoDelleCelle[1] + contenutoDelleCelle[2] == 'crocecrocecroce' ||
        contenutoDelleCelle[3] + contenutoDelleCelle[4] + contenutoDelleCelle[5] == 'crocecrocecroce' ||
        contenutoDelleCelle[6] + contenutoDelleCelle[7] + contenutoDelleCelle[8] == 'crocecrocecroce' ||

        contenutoDelleCelle[0] + contenutoDelleCelle[3] + contenutoDelleCelle[6] == 'crocecrocecroce' ||
        contenutoDelleCelle[1] + contenutoDelleCelle[4] + contenutoDelleCelle[7] == 'crocecrocecroce' ||
        contenutoDelleCelle[2] + contenutoDelleCelle[5] + contenutoDelleCelle[8] == 'crocecrocecroce' ||

        contenutoDelleCelle[0] + contenutoDelleCelle[4] + contenutoDelleCelle[8] == 'crocecrocecroce' ||
        contenutoDelleCelle[2] + contenutoDelleCelle[4] + contenutoDelleCelle[6] == 'crocecrocecroce' ){
            
            return winnerVar = 'Croce'
    }

    if (
        contenutoDelleCelle[0] + contenutoDelleCelle[1] + contenutoDelleCelle[2] == 'cerchiocerchiocerchio' ||
        contenutoDelleCelle[3] + contenutoDelleCelle[4] + contenutoDelleCelle[5] == 'cerchiocerchiocerchio' ||
        contenutoDelleCelle[6] + contenutoDelleCelle[7] + contenutoDelleCelle[8] == 'cerchiocerchiocerchio' ||

        contenutoDelleCelle[0] + contenutoDelleCelle[3] + contenutoDelleCelle[6] == 'cerchiocerchiocerchio' ||
        contenutoDelleCelle[1] + contenutoDelleCelle[4] + contenutoDelleCelle[7] == 'cerchiocerchiocerchio' ||
        contenutoDelleCelle[2] + contenutoDelleCelle[5] + contenutoDelleCelle[8] == 'cerchiocerchiocerchio' ||

        contenutoDelleCelle[0] + contenutoDelleCelle[4] + contenutoDelleCelle[8] == 'cerchiocerchiocerchio' ||
        contenutoDelleCelle[2] + contenutoDelleCelle[4] + contenutoDelleCelle[6] == 'cerchiocerchiocerchio' ){ 
            
            return winnerVar = 'Cerchio'
    }

} //controlla se c'è un vincitore o meno e SE esiste le assegna il nome


