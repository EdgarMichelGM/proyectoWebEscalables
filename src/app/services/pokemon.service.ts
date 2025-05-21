import { Injectable } from "@angular/core";
import { Pokemon } from '../interfaces/pokemon.interface';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    
    private apiUrl = 'http://localhost:3000/api/pokemons'; 
    constructor(private http: HttpClient) {}

    getPokemons(): Observable<Pokemon[]> {
        return this.http.get<Pokemon[]>(this.apiUrl); 
    }

    // GET - Leer uno por ID
    getPokemon(id: string): Observable<Pokemon> {
        return this.http.get<Pokemon>(`${this.apiUrl}/${id}`);
    }

    // POST - Crear nuevo
    createPokemon(pokemon: Pokemon): Observable<Pokemon> {
        return this.http.post<Pokemon>(this.apiUrl, pokemon);
    }

    // PUT - Actualizar existente
    updatePokemon(id: string, pokemon: Pokemon): Observable<Pokemon> {
        return this.http.put<Pokemon>(`${this.apiUrl}/${id}`, pokemon);
    }

    // DELETE - Eliminar
    deletePokemon(id: string): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
