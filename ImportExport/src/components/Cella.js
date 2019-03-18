import React from 'react'
import {changeArray} from '../function.js'


export default class Cella extends React.Component{
    render(){

        const {segno,indice} = this.props


        if (segno){
            return (
                <button className = 'resetButton' >
                    <img  
                        className = ' tasto'  
                        src = {segno+'.png'}>
                    </img>
                </button>
            );
        }
        
        return (
            <button 
                onClick = {()=> changeArray(indice)} 
                className = 'resetButton'>
            </button>
        );
        
    }
}