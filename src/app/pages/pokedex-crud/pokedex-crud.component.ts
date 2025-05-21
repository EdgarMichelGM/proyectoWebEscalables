import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { CommonModule  } from '@angular/common';

@Component({
  selector: 'app-pokedex-crud',
  imports: [ReactiveFormsModule, CommonModule], 
  templateUrl: './pokedex-crud.component.html',
  styleUrl: './pokedex-crud.component.css'
})
export class PokedexCrudComponent implements OnInit{
  pokemons: Pokemon[] = []; 
  form: FormGroup; 
  editando: boolean = false; 
  idActual: string | null = null; 
  mostrarFormulario: boolean = false; 

  constructor(private fb: FormBuilder, private pokemonService: PokemonService) {
    this.form = this.fb.group({
      id: [0],
      nombre: ['', Validators.required], 
      tipo: this.fb.array([], Validators.required), 
      descripcion: [''], 
      region: [], 
      imagen: [], 
    });
  }
  ngOnInit(): void {
      this.cargarPokemones(); 
  }

  get tipo(): FormArray{
    return this.form.get('tipo') as FormArray; 
  }

  agregarTipo(nuevo: String){
    if(nuevo && !this.tipo.value.includes(nuevo)) { 
      this.tipo.push(this.fb.control(nuevo));
    }
  }

  eliminarTipo(index: number) { 
    this.tipo.removeAt(index); 
  }

  cargarPokemones() {
    this.pokemonService.getPokemons().subscribe(p => this.pokemons = p); 
  }

  guardar() {
    const data = this.form.value;
    console.log('Datos a enviar:', data);

    if (this.editando && this.idActual) {
      this.pokemonService.updatePokemon(this.idActual, data).subscribe(() => {
        this.resetFormulario();
        this.cargarPokemones();
      });
    } else {
        console.log('Formulario a enviar:', this.form.value);
        this.pokemonService.createPokemon(data).subscribe(() => {
        this.resetFormulario();
        this.cargarPokemones();
      });
    }
  }

  editar(pokemon: Pokemon) {
    this.editando = true; 
    this.idActual = pokemon._id!;
    this.mostrarFormulario = true; 

    this.form.patchValue({
      nombre: pokemon.nombre, 
      descripcion: pokemon.descripcion, 
      region: pokemon.region, 
      imagen: pokemon.imagen
    });
    
    this.tipo.clear(); 
    pokemon.tipo.forEach(t => this.tipo.push(this.fb.control(t))); 
  }

  eliminar(id: string){ 
    this.pokemonService.deletePokemon(id).subscribe(() => this.cargarPokemones());
  }

  resetFormulario() {
    this.form.reset(); 
    this.tipo.clear(); 
    this.editando = false; 
    this.idActual = null; 
  }

  abrirFormulario() { 
    this.resetFormulario(); 
    this.mostrarFormulario = true; 
  }

  cerrarFormulario() { 
    this.mostrarFormulario = false; 
  }
}
