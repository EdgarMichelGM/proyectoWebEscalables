import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { TypesComponent } from './pages/types/types.component';
import { RegionsComponent } from './pages/regions/regions.component';
import { BattleTeamComponent } from './pages/battle-team/battle-team.component';
import { PokedexCrudComponent } from './pages/pokedex-crud/pokedex-crud.component';

export const routes: Routes = [
    {
        path: "home", 
        component: HomeComponent, 
        title: "Home"
    },
    {
        path: "favorites",
        component: FavoritesComponent, 
        title: "Favorites" 
    },
    {
        path: "types",
        component: TypesComponent, 
        title: "Types"
    }, 
    {
        path: "regions",
        component: RegionsComponent, 
        title: "Regions"
    },
    {
        path: "battles",
        component: BattleTeamComponent, 
        title: "Battles"
    }, 
    {
        path: "admin-pokedex", 
        component: PokedexCrudComponent, 
        title: "Admin Pokedex"
    }
];
