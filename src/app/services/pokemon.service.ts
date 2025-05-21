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
}
