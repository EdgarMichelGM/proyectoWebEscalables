import { Router } from 'express';
import * as PokemonController from '../controllers/pokemon.controller';
import { verifyToken } from '../middleware/auth.middleware';

const router = Router();

router.get('/', verifyToken, PokemonController.getAllPokemons);
router.get('/:id', verifyToken, PokemonController.getPokemonById);
router.post('/', verifyToken, PokemonController.createPokemon);
router.put('/:id', verifyToken, PokemonController.updatePokemon);
router.delete('/:id', verifyToken, PokemonController.deletePokemon);


export default router;
