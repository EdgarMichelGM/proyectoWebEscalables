import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-types',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './types.component.html',
  styleUrl: './types.component.css'
})
export class TypesComponent implements OnInit {
  tipos: string[] = [
    'agua', 'sabio', 'fuego', 'feroz', 'normal', 'dulce',
    'planta', 'roca', 'fantasma', 'luz', 'psíquico',
    'siniestro', 'eléctrico', 'hielo', 'oscuro',
    'tierra', 'lucha', 'veneno', 'volador', 'acero', 'hada'
  ]

  tipoSeleccionado: string | null = null; 

  typeInfo: Record<string, {
    descripcion: string,
    fortalezas: string[],
    debilidades: string[]
  }> = {
    fuego: {
      descripcion: "Tipo agresivo y poderoso. Usa ataques ardientes.",
      fortalezas: ['planta', 'hielo', 'bicho'],
      debilidades: ['agua', 'roca', 'tierra']
    },
    agua: {
      descripcion: "Fluye y adapta su poder. Domina los elementos fluidos.",
      fortalezas: ['fuego', 'roca', 'tierra'],
      debilidades: ['planta', 'eléctrico']
    },
    planta: {
      descripcion: "Naturaleza pura, estratégica y curativa.",
      fortalezas: ['agua', 'roca', 'tierra'],
      debilidades: ['fuego', 'hielo', 'veneno']
    },
    eléctrico: {
      descripcion: "Velocidad y energía. Ataques de alto voltaje.",
      fortalezas: ['agua', 'volador'],
      debilidades: ['tierra']
    },
    lucha: {
      descripcion: "Dominio físico y fuerza bruta.",
      fortalezas: ['normal', 'roca', 'siniestro'],
      debilidades: ['volador', 'psíquico', 'hada']
    },
    fantasma: {
      descripcion: "Etéreo y aterrador. Daña el alma.",
      fortalezas: ['fantasma', 'psíquico'],
      debilidades: ['siniestro']
    },
    roca: {
      descripcion: "Duro y resistente como la piedra.",
      fortalezas: ['fuego', 'volador', 'hielo'],
      debilidades: ['agua', 'planta', 'lucha']
    },
    tierra: {
      descripcion: "Estable y fuerte, domina la superficie.",
      fortalezas: ['eléctrico', 'fuego', 'roca'],
      debilidades: ['agua', 'planta', 'hielo']
    },
    veneno: {
      descripcion: "Tóxico y persistente. Envenena lentamente.",
      fortalezas: ['planta', 'hada'],
      debilidades: ['psíquico', 'tierra']
    },
    volador: {
      descripcion: "Ágil y evasivo, domina los cielos.",
      fortalezas: ['planta', 'lucha', 'bicho'],
      debilidades: ['eléctrico', 'roca', 'hielo']
    },
    siniestro: {
      descripcion: "Oscuro y astuto. Usa el miedo a su favor.",
      fortalezas: ['psíquico', 'fantasma'],
      debilidades: ['lucha', 'hada', 'bicho']
    },
    psíquico: {
      descripcion: "Control mental y energía invisible.",
      fortalezas: ['lucha', 'veneno'],
      debilidades: ['siniestro', 'fantasma']
    },
    hada: {
      descripcion: "Mágico y encantador, brilla con energía positiva.",
      fortalezas: ['dragón', 'lucha', 'siniestro'],
      debilidades: ['acero', 'veneno']
    },
    hielo: {
      descripcion: "Frío, implacable y peligroso.",
      fortalezas: ['planta', 'tierra', 'volador'],
      debilidades: ['fuego', 'lucha', 'roca']
    },
    acero: {
      descripcion: "Fuerte como el metal. Gran defensa.",
      fortalezas: ['roca', 'hielo', 'hada'],
      debilidades: ['fuego', 'lucha', 'tierra']
    },
    normal: {
      descripcion: "Equilibrado y versátil, sin fortalezas claras.",
      fortalezas: [],
      debilidades: ['lucha']
    },
    sabio: {
      descripcion: "Tipo legendario de sabiduría y estrategia.",
      fortalezas: ['psíquico', 'normal'],
      debilidades: ['siniestro']
    },
    feroz: {
      descripcion: "Instintivo, salvaje y muy ofensivo.",
      fortalezas: ['normal', 'planta'],
      debilidades: ['psíquico', 'hada']
    },
    dulce: {
      descripcion: "Encantador y curioso, ideal en festividades.",
      fortalezas: ['lucha', 'normal'],
      debilidades: ['fuego']
    },
    luz: {
      descripcion: "Ilumina lo oculto y protege lo justo.",
      fortalezas: ['oscuro', 'fantasma'],
      debilidades: ['siniestro']
    },
    oscuro: {
      descripcion: "Sombra viva, actúa en la penumbra.",
      fortalezas: ['psíquico', 'fantasma'],
      debilidades: ['luz', 'hada']
    }
  };

  seleccionarTipo(tipo: string){ 
    this.tipoSeleccionado = tipo; 
  }

  ngOnInit(): void {}
}
