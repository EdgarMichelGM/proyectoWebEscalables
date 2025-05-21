import { Router } from 'express';
import * as PokemonController from '../controllers/pokemon.controller';

const router = Router();

router.get('/', PokemonController.getAllPokemons);
router.get('/:id', PokemonController.getPokemonById);
router.post('/', PokemonController.createPokemon);
router.put('/:id', PokemonController.updatePokemon);
router.delete('/:id', PokemonController.deletePokemon);


export default router;
