import { Component } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { PokemonsCardComponent } from '../../components/pokemons-card/pokemons-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  imports: [ CommonModule, PokemonsCardComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
  favoritos: Pokemon[] = []; 

  ngOnInit() {
    console.log('FavoritesComponent cargado'); 
    const guardados = localStorage.getItem('favoritos'); 
    console.log('Valor en localStorage:', guardados);
    this.favoritos = guardados ? JSON.parse(guardados) : [];
    console.log('Favoritos guardados', this.favoritos); // Verificar si se estan cargando 
  }

  removeFromFavorites(pokemon: Pokemon){ 
    this.favoritos = this.favoritos.filter(p => p.id !== pokemon.id); 
    localStorage.setItem('favoritos', JSON.stringify(this.favoritos)); // Actualiza 
  }

}
