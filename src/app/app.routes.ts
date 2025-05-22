import { Routes } from '@angular/router';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { TypesComponent } from './pages/types/types.component';
import { RegionsComponent } from './pages/regions/regions.component';
import { BattleTeamComponent } from './pages/battle-team/battle-team.component';
import { PokedexCrudComponent } from './pages/pokedex-crud/pokedex-crud.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './guards/auth.guard';


export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () =>
        import('./pages/home/home.component').then(m => m.HomeComponent),
        title: 'Home',
        canActivate: [AuthGuard]
    },
    {
        path: 'favorites',
        loadComponent: () =>
        import('./pages/favorites/favorites.component').then(m => m.FavoritesComponent),
        title: 'Favorites',
        canActivate: [AuthGuard]
    },
    {
        path: 'types',
        loadComponent: () =>
        import('./pages/types/types.component').then(m => m.TypesComponent),
        title: 'Types',
        canActivate: [AuthGuard]
    },
    {
        path: 'regions',
        loadComponent: () =>
        import('./pages/regions/regions.component').then(m => m.RegionsComponent),
        title: 'Regions',
        canActivate: [AuthGuard]
    },
    {
        path: 'battles',
        loadComponent: () =>
        import('./pages/battle-team/battle-team.component').then(m => m.BattleTeamComponent),
        title: 'Battles',
        canActivate: [AuthGuard]
    },
    {
        path: 'admin-pokedex',
        loadComponent: () =>
        import('./pages/pokedex-crud/pokedex-crud.component').then(m => m.PokedexCrudComponent),
        title: 'Admin Pokedex',
        canActivate: [AuthGuard]
    },
    {
        path: 'register',
        loadComponent: () =>
        import('./pages/register/register.component').then(m => m.RegisterComponent),
        title: 'Register'
    },
    {
        path: 'login',
        loadComponent: () =>
        import('./pages/login/login.component').then(m => m.LoginComponent),
        title: 'Login'
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
