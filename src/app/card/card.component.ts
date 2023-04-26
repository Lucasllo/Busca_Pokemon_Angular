import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { PokemonService } from 'src/service/pokemon.service';
import { Pokemon } from '../../models/pokemonModel';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() pokemon: string = '';
  poke: Pokemon;

  constructor(private pokemonAPI: PokemonService) {
    this.poke = {
      id : "",
      name: "",
      types:[{
        type:{
          name:""
        }
      }],
      sprites:{
        front_default:""
      }
    }
   }

  ngOnInit(): void { //onInit executa após a criação do component (após o constructor)
    this.pokemonAPI.getPokemon(this.pokemon).subscribe({
      next: (v) => this.poke = v,
      error: (v) => console.log(v)
    });
  }

  ngOnChanges(): void { //onChanges fica verificando mudanças que ocorrem nos @Inputs
    this.pokemonAPI.getPokemon(this.pokemon).subscribe({
      next: (v) => this.poke = v,
      error: (v) => console.log(v)
    });
  }

}
