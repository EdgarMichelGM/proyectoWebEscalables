import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

interface RegionData { 
  nombre: string; 
  comentario: string; 
}

@Component({
  selector: 'app-regions',
  imports: [ CommonModule],
  templateUrl: './regions.component.html',
  styleUrl: './regions.component.css'
})
export class RegionsComponent implements OnInit{

  regiones: RegionData[] = [
    {
      nombre: 'CDMX',
      comentario: 'En los canales de Xochimilco habita una criatura ancestral: el regenerativo Axolotlón.'
    },
    {
      nombre: 'Yucatán',
      comentario: 'Entre selvas y cenotes ruge el imponente Chiltigre.'
    },
    {
      nombre: 'Puebla',
      comentario: 'Durante las festividades, en hojas de maíz se oculta el alegre Tamalchu.'
    },
    {
      nombre: 'Chihuahua',
      comentario: 'En las tierras áridas del norte crece el resistente Nopantor, cubierto de espinas como pedernal.'
    },
    {
      nombre: 'Michoacán',
      comentario: 'Calaverín resguarda las almas nobles durante el Día de Muertos, brillando entre cempasúchiles.'
    },
    {
      nombre: 'Estado de México',
      comentario: 'Teotilux vigila las ruinas con sabiduría ancestral. Sus ojos piramidales lo ven todo.'
    },
    {
      nombre: 'Tabasco',
      comentario: 'En la selva húmeda de Tabasco acecha Jaguarón, cuyos ojos disparan rayos al anochecer.'
    },
    {
      nombre: 'Morelos',
      comentario: 'Del volcán Popocatépetl emerge Chilnido, lanzando brasas y escarcha al mismo tiempo.'
    },
    {
      nombre: 'Hidalgo',
      comentario: 'En las noches de neblina, Sombrax guía a los perdidos con su aura fantasmal.'
    },
    {
      nombre: 'Tlaxcala',
      comentario: 'Molcatzin honra a los guerreros ancestrales con su fuerza y cuerpo de obsidiana.'
    },
    {
      nombre: 'Jalisco',
      comentario: 'Agavix florece cada 50 años, liberando esporas místicas desde su forma de agave azul.'
    },
    {
      nombre: 'Veracruz',
      comentario: 'Desde los cielos de Veracruz desciende Quetzaflare, dejando fuego tras su vuelo.'
    },
    {
      nombre: 'Nuevo León',
      comentario: 'Charrobite, el jinete espectral, cabalga con látigos eléctricos por el norte del país.'
    },
    {
      nombre: 'Oaxaca',
      comentario: 'He encontrado en Oaxaca un Pokémon peculiar que gira como salsa ardiente: Salsalita.'
    },
    {
      nombre: 'Guerrero',
      comentario: 'Luchafénix resurge con cada batalla, envuelto en llamas y honor luchador.'
    },
    {
      nombre: 'Zacatecas',
      comentario: 'Coyosombra aúlla solo durante eclipses. Su cuerpo de humo nunca se detiene.'
    },
    {
      nombre: 'Durango',
      comentario: 'Maizón, guardián de las cosechas, canta con el viento entre los campos de maíz.'
    },
    {
      nombre: 'San Luis Potosí',
      comentario: 'Montado en un sombrero flotante, el pequeño Chaparrón trae lluvia donde pasa.'
    }
  ]; 

  regionSeleccionada: RegionData | null = null;

  seleccionarRegion(region: RegionData): void { 
    this.regionSeleccionada = region; 
  }

  ngOnInit(): void {}

}
