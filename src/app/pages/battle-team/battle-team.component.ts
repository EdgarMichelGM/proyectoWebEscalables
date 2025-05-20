import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { PokemonsCardComponent } from '../../components/pokemons-card/pokemons-card.component';
import { PokemonService } from '../../services/pokemon.service';


@Component({
  selector: 'app-battle-team',
  imports: [CommonModule, PokemonsCardComponent],
  templateUrl: './battle-team.component.html',
  styleUrl: './battle-team.component.css'
})

export class BattleTeamComponent implements OnInit {
  equipo:  (Pokemon | null)[] = [null, null, null]; 
  favoritos: Pokemon[] = []; 
  equipoEnemigo: Pokemon[] = [];

  mensaje: string = ''; 

  ngOnInit(): void {
    const favs = localStorage.getItem('favoritos'); 
    if (favs) {
      this.favoritos = JSON.parse(favs); 
    }
  }
  
  // Simulacion de seleccion (mas adelante se conecta con favoritos o lista)
  seleccionarPokemon(index: number, pokemon: Pokemon): void {
    // Verificar si ya está en el equipo
    const yaSeleccionado = this.equipo.some(p => p?.id === pokemon.id);
  
    if (yaSeleccionado) {
      this.mensaje = `⚠️ ${pokemon.nombre} ya está en tu equipo da click en otro.`;
      return;
    }
  
    // Si no está, lo agrega al equipo en la posición indicada
    this.equipo[index] = pokemon;
    this.mensaje = ''; 
  }
  
  constructor(private pokemonService: PokemonService) {}

  generarEquipoRival(): void {
    const todos = this.pokemonService.pokemons; 
    this.equipoEnemigo = [];
  
    while (this.equipoEnemigo.length < 3) {
      const aleatorio = todos[Math.floor(Math.random() * todos.length)];
      if (!this.equipoEnemigo.find(p => p.id === aleatorio.id)) {
        this.equipoEnemigo.push(aleatorio);
      }
    }
  }

  iniciarBatalla(): void {
     // Verificar si el equipo está completo 
    if (this.equipo.includes(null)) {
      this.mensaje = '⚠️ Tu equipo no está completo. Elige 3 Pokémon para pelear.';
      return;
    }
    this.generarEquipoRival();
    this.mensaje = '';
    this.pelear(); // si ya tienes una función para comparar equipos
  }
  
  compararTipos(tipo1: string[], tipo2: string[]): number {
    let puntos1 = 0; 
    let puntos2 = 0; 

    const fortalezas: Record<string, string[]> = {
      fuego: ['planta', 'hielo', 'bicho', 'dulce'],
      agua: ['fuego', 'roca', 'tierra'],
      planta: ['agua', 'roca', 'tierra'],
      eléctrico: ['agua', 'volador'],
      lucha: ['normal', 'roca', 'siniestro'],
      fantasma: ['fantasma', 'psíquico'],
      roca: ['fuego', 'volador', 'hielo'],
      tierra: ['eléctrico', 'fuego', 'roca'],
      veneno: ['planta', 'hada'],
      volador: ['planta', 'lucha', 'bicho'],
      siniestro: ['psíquico', 'fantasma'],
      psíquico: ['lucha', 'veneno'],
      hada: ['dragón', 'lucha', 'siniestro'],
      hielo: ['planta', 'tierra', 'volador'],
      acero: ['roca', 'hielo', 'hada'],
      normal: [],
      sabio: ['psíquico', 'normal'],
      feroz: ['normal', 'planta'],
      dulce: ['lucha', 'normal'],
      luz: ['oscuro', 'fantasma'],
      oscuro: ['psíquico', 'fantasma']
    };

    for (const t1 of tipo1) {
      for (const t2 of tipo2) {
        if (fortalezas[t1]?.includes(t2)) puntos1++;
        if (fortalezas[t2]?.includes(t1)) puntos2++;
      }
    }
  
    if (puntos1 > puntos2) return 1;
    if (puntos2 > puntos1) return -1;
    return 0;
  }

  pelear(): void { 
    let victorias = 0; 
    for(let i = 0; i < 3; i++){
      const miPokemon = this.equipo[i]; 
      const rivalPokemon = this.equipoEnemigo[i]; 

      if (miPokemon && rivalPokemon) {
        const resultado = this.compararTipos(miPokemon.tipo, rivalPokemon.tipo); 

        if(resultado === 1) victorias++; 
        else if(resultado === -1) victorias--; 
      }
    }

    if (victorias > 0) {
      this.mensaje = "🏆 ¡Ganaste la batalla!";
    } else if (victorias < 0) {
      this.mensaje = "💀 Perdiste... ¡Entrena más!";
    } else {
      this.mensaje = "🤝 Empate. ¡Fue una batalla cerrada!";
    }
    console.log(this.mensaje); 
  }

  removerPokemon(pos: number) {
    this.equipo[pos] = null; 
  } 
}
