import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true, 
    imports: [RouterOutlet
        , MatSidenavModule, MatListModule, MatDividerModule, RouterLink, RouterLinkActive, NgIf
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    constructor(public auth: AuthService, private router: Router) {}

    logout() {
        this.auth.logout();
        this.router.navigate(['/login']);
    }
}