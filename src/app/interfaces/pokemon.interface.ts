export interface Pokemon {
    _id?: string; // ID interno de MongoDB
    id?: number; 
    nombre: string;
    imagen: string;
    descripcion: string;
    tipo: string[];
    region: string; 
  }