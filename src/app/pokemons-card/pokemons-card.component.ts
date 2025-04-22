import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemons-card',
  imports: [CommonModule],
  templateUrl: './pokemons-card.component.html',
  styleUrl: './pokemons-card.component.css'
})
export class PokemonsCardComponent {
  @Output()
  selectedPokemonEvent = new EventEmitter<Pokemon>(); 

  @Input()
  pokemon : Pokemon = {
    id: 0,
    nombre: "",
    imagen: "",
    descripcion: "",
    tipo: [],
    region: ""
  }

  isSelected: boolean = false; 

  selectPokemon(){
    this.isSelected = !this.isSelected; 
    console.log('Pokemon seleccionado', this.pokemon); 
    this.selectedPokemonEvent.emit(this.pokemon); 
  }
  
}
