import { Schema, model } from 'mongoose';

export interface Pokemon {
    id: number;
    nombre: string;
    tipo: string[];
    descripcion: string;
    region: string;
    imagen: string;
}

const PokemonSchema = new Schema<Pokemon>({
    id: { type: Number, required: true },
    nombre: { type: String, required: true },
    tipo: { type: [String], required: true },
    descripcion: { type: String, required: true },
    region: { type: String, required: true },
    imagen: { type: String, required: true }
});

const PokemonModel = model<Pokemon>('Pokemon', PokemonSchema);
export default PokemonModel;
