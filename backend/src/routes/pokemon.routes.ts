import { Router } from 'express';
import * as PokemonController from '../controllers/pokemon.controller';
import { verifyToken, isAdmin } from '../middleware/auth.middleware';

const router = Router();

router.get('/', verifyToken, PokemonController.getAllPokemons);
router.get('/:id', verifyToken, PokemonController.getPokemonById);

// Rutas protegidas por el administrador 
router.post('/', verifyToken, isAdmin, PokemonController.createPokemon);
router.put('/:id', verifyToken, isAdmin, PokemonController.updatePokemon);
router.delete('/:id', verifyToken, isAdmin, PokemonController.deletePokemon);


export default router;
