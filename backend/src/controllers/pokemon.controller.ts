import { Request, Response } from 'express';
import PokemonModel from '../models/Pokemon';

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
        const newPokemon = new PokemonModel(req.body);
        const saved = await newPokemon.save();
        res.status(201).json(saved);
    } catch (error) {
        res.status(400).json({ error: 'Error al guardar el pokemon' });
    }
};
