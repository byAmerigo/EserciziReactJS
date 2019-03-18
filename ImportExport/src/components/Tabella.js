import React from 'react'
import Cella from './Cella';
import {resetGame} from '../function.js'
import {checkWinner} from '../function.js'

export default class Tabella extends React.Component{
    render(){

        checkWinner()

        const {arrayDelleCelle, turno,winner} = props

        if (turno >= 9 && !winner){
            return (
                <div className = 'centered'>
                    <h1> 
                        Partita patta 
                    </h1>
                    <button 
                        onClick = {()=> resetGame()} 
                        className = 'button-resetGame'>

                        RIGIOCA 

                    </button>
                </div>
            );
        }

        if(winner){

            return (
                <div className = 'centered'>
                    <h1> 
                        Partita finita, ha vinto {winner} 
                    </h1>
                    <button 
                        onClick = {()=> resetGame()} 
                        className = 'button-resetGame'> 

                        RIVINCITA 
                
                    </button>

                </div>
            );
        }

        return (
            <div className= 'griglia grid'>
                {arrayDelleCelle.map((el,i) => 
                <Cella 
                    indice = {i} 
                    key = {i} 
                    segno = {el} 
                /> )}
            </div>
        );
    }
}
