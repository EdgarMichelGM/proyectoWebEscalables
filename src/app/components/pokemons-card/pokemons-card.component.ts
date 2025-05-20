import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemons-card',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './pokemons-card.component.html',
  styleUrl: './pokemons-card.component.css'
})
export class PokemonsCardComponent {
  @Input() mini: boolean = false; 

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

    // Obtener favoritos actuales 
    const favs = JSON.parse(localStorage.getItem('favoritos') || '[]'); 

    if (this.isSelected){
      // Agregar a favoritos si no esta
      favs.push(this.pokemon); 
    } else { 
      // Eliminar si ya estaba 
      const index = favs.findIndex((p: Pokemon) => p.id === this.pokemon.id); 
      if (index !== -1){
        favs.splice(index, 1); 
      }
    }
    // Guardar en localStorage
    localStorage.setItem('favoritos', JSON.stringify(favs));

    this.selectedPokemonEvent.emit(this.pokemon); 
  }
  
}
