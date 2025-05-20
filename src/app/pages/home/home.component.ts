import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonsCardComponent } from '../../components/pokemons-card/pokemons-card.component';
import { ControlsComponent } from '../../components/controls/controls.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Pokemon } from '../../interfaces/pokemon.interface';


@Component({
  selector: 'app-home',
  imports: [CommonModule, PokemonsCardComponent, MatButtonModule, MatInputModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  pokemons: Pokemon[] = []; 
  querySearch: string = ""; 
  favoritos: Pokemon[] = []; 

  addToFavorites(pokemon: Pokemon) {
    const guardados = localStorage.getItem('favoritos');
    const favoritos = guardados ? JSON.parse(guardados) : [];

    const yaExiste = favoritos.find((p: Pokemon) => p.id === pokemon.id);
    if (!yaExiste) {
      favoritos.push(pokemon);
      localStorage.setItem('favoritos', JSON.stringify(favoritos));
      console.log('Agregado a localStorage:', favoritos); // 🔥 Aquí debe salir en consola
    } else {
      console.log('Ya está en favoritos:', pokemon.nombre);
    }
  }

  constructor(private pokemonService: PokemonService){

  }
  
  ngOnInit() {
    this.pokemons = this.pokemonService.pokemons; 
  }
}
