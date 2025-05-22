import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  imagenes = [
    "images/axolotlon.jpg",
    "images/chiltigre.jpg",
    "images/tamalchu.jpg",
    "images/nopantor.jpg",
    "images/calaverin.jpg",
    "images/teotilux.jpg",
    "images/jaguaron.jpg",
    "images/chilnido.jpg",
    "images/sombrax.jpg",
    "images/molcatzin.jpg",
    "images/agavix.jpg",
    "images/quetzaflare.jpg",
    "images/tortapresa.jpg",
    "images/charrobite.jpg",
    "images/salsalita.jpg",
    "images/luchafenix.jpg",
    "images/coyosombra.jpg",
    "images/maizon.jpg",
    "images/chaparron.jpg",
    "images/xocolatl.jpg",
    "images/albadrillo.jpg",
    "images/cervezoar.jpg",
    "images/chicatron.jpg",
    "images/cigarraz.jpg",
    "images/florazul.jpg",
    "images/frijolon.jpg",
    "images/mariachin.jpg",
    "images/nevatl.jpg",
    "images/sombravelo.jpg",
    "images/tenextli.jpg",
    "images/tlayoleon.jpg",
    "images/tzompavox.jpg",
    "images/xochisweet.jpg"
  ];
}
