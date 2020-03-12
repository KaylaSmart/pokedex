import React, { Component }from 'react';
import Pokecard from './pokecard';
import './pokedex.css';


class Pokedex extends Component {
    
    render(){
        let title;
        if(this.props.isWinner){
            title= <h1 className="Pokedex-winner">Winner</h1>;
        }else{
            title =<h1 className="Pokedex-loser">Loser</h1>;
        }
        return(
            <div className="Pokedex">
                <h1>Pokedex!</h1>
                <h1>Total Experience: {this.props.exp}</h1>
                {title}
                {/* <p > {this.props.isWinner ? 'Winner' : 'Loser'}</p> */}
                <div className="Pokedex-cards">
                {this.props.pokemon.map((p) => (
                    <Pokecard id={p.id} name={p.name}  type={p.type} exp={p.base_expirence} />
                ))}
                </div>
            </div>
        );
    }
}

export default Pokedex;