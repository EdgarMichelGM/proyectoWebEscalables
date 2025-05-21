import { Router } from 'express';
import * as PokemonController from '../controllers/pokemon.controller';

const router = Router();

router.get('/', PokemonController.getAllPokemons);
router.post('/', PokemonController.createPokemon);

export default router;
