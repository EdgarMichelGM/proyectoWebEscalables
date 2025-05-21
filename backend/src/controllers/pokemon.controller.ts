import { Request, Response} from 'express';
import { RequestHandler } from 'express';
import PokemonModel from '../models/Pokemon';
import { error } from 'console';

export const getAllPokemons = async (req: Request, res: Response) => {
    try {
        const pokemons = await PokemonModel.find();
        res.json(pokemons);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener pokemones' });
    }
};

export const createPokemon = async (req: Request, res: Response) => {
    try {
        console.log('Datos recibidos:', req.body);
        const newPokemon = new PokemonModel(req.body);
        const saved = await newPokemon.save();
        res.status(201).json(saved);
    } catch (error:unknown) {
        if (error instanceof Error) {
            console.error('Error al guardar el Pokémon:', error.message);
            res.status(400).json({ error: error.message });
        } else {
            console.error('Error desconocido:', error);
            res.status(400).json({ error: 'Error desconocido al guardar el Pokémon' });
        }
    }
};

export const getPokemonById: RequestHandler = async (req, res) => {
    try {
        const pokemon = await PokemonModel.findById(req.params.id);
        if (!pokemon) {
        res.status(404).json({ error: 'No encontrado' });
        return;               
        }
        res.json(pokemon);      
    } catch (err) {
        res.status(500).json({ error: 'Error al buscar el pokemon' });
    }
};


export const updatePokemon: RequestHandler = async (req, res) => {
    try {
        const updated = await PokemonModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
        );
        if (!updated) {
        // Si no lo encontró, responde y sale (void)
        res.status(404).json({ error: 'No encontrado' });
        return;
        }
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: 'Error al actualizar' });
    }
};


export const deletePokemon: RequestHandler = async (req, res) => {
    try {
        const deleted = await PokemonModel.findByIdAndDelete(req.params.id);
        if (!deleted) {
        res.status(404).json({ error: 'No encontrado' });
        return;
        }
        // Responde confirmación de borrado (void)
        res.json({ mensaje: 'Eliminado correctamente' });
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar' });
    }
};
