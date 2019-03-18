//export default class Header extends React.Component {
// import log ,{cross, circle} from './utils.js'
import ReactDOM from 'react-dom';
import React from 'react'
// console.log(cross, circle)

// log(cross)

import Tabella from './components/Tabella.js';

let contenutoDelleCelle= [null,null,null,null,null,null,null,null,null]

let turn = 0

let winnerVar= 'Croce'

function MyApp(){

    return (
        <div className='centered'>
            <Tabella 
                arrayDelleCelle = {contenutoDelleCelle}
                turno = {turn} 
                winner = {winnerVar} 
            />
        </div>
    );
}

ReactDOM.render(
    <MyApp/>,
    document.getElementById('root')
)