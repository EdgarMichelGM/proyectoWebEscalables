import { Injectable } from "@angular/core";
import { Pokemon } from '../interfaces/pokemon.interface';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    private _pokemons: Pokemon[] = [
        {
            "id": 1,
            "nombre": "Axolotlón",
            "tipo": ["agua", "sabio"],
            "descripcion": "Una criatura ancestral que habita en los canales de Xochimilco. Es símbolo de regeneración.",
            "region": "CDMX",
            "imagen": "images/axolotlon.jpg"
        },
        {
            "id": 2,
            "nombre": "Chiltigre",
            "tipo": ["fuego", "feroz"],
            "descripcion": "Su rugido puede enchilar a cualquiera. Se dice que nació del espíritu de un jaguar y un chile habanero.",
            "region": "Yucatán",
            "imagen": "images/chiltigre.jpg"
        },
        {
            "id": 3,
            "nombre": "Tamalchu",
            "tipo": ["normal", "dulce"],
            "descripcion": "Este pokémon se esconde en hojas de maíz. Le encanta descansar en festividades.",
            "region": "Puebla",
            "imagen": "images/tamalchu.jpg"
        },
        {
            "id": 4,
            "nombre": "Nopantor",
            "tipo": ["planta", "roca"],
            "descripcion": "Tiene espinas tan duras como el pedernal. Vive en zonas áridas del norte de México.",
            "region": "Chihuahua",
            "imagen": "images/nopantor.jpg"
        },
        {
            "id": 5,
            "nombre": "Calaverín",
            "tipo": ["fantasma", "luz"],
            "descripcion": "Sale en Día de Muertos a proteger a los espíritus nobles. Brilla con colores de cempasúchil.",
            "region": "Michoacán",
            "imagen": "images/calaverin.jpg"
        },
        {
            "id": 6,
            "nombre": "Teotilux",
            "tipo": ["roca", "psíquico"],
            "descripcion": "Sus ojos en forma de pirámide ven el pasado y el futuro. Vive entre ruinas antiguas.",
            "region": "Estado de México",
            "imagen": "images/teotilux.jpg"
        },
        {
            "id": 7,
            "nombre": "Jaguarón",
            "tipo": ["siniestro", "eléctrico"],
            "descripcion": "Un depredador nocturno que domina la selva. Sus ojos emiten rayos cuando acecha.",
            "region": "Tabasco",
            "imagen": "images/jaguaron.jpg"
        },
        {
            "id": 8,
            "nombre": "Chilnido",
            "tipo": ["hielo", "fuego"],
            "descripcion": "Pokémon legendario del volcán Popocatépetl. Su aliento mezcla brasas y escarcha.",
            "region": "Morelos",
            "imagen": "images/chilnido.jpg"
        },
        {
            "id": 9,
            "nombre": "Sombrax",
            "tipo": ["fantasma", "oscuro"],
            "descripcion": "Vaga por los caminos antiguos. Dicen que guía a los perdidos en noches de neblina.",
            "region": "Hidalgo",
            "imagen": "images/sombrax.jpg"
        },
        {
            "id": 10,
            "nombre": "Molcatzin",
            "tipo": ["tierra", "lucha"],
            "descripcion": "Guerrero ancestral forjado por obsidiana. Su espíritu honra a los tlatoanis caídos.",
            "region": "Tlaxcala",
            "imagen": "images/molcatzin.jpg"
        },
        {
            "id": 11,
            "nombre": "Agavix",
            "tipo": ["planta", "veneno"],
            "descripcion": "Florece cada 50 años y libera esporas embriagantes. Tiene forma de agave azul.",
            "region": "Jalisco",
            "imagen": "images/agavix.jpg"
        },
        {
            "id": 12,
            "nombre": "Quetzaflare",
            "tipo": ["volador", "fuego"],
            "descripcion": "Inspirado en Quetzalcóatl, sobrevuela los cielos dejando una estela ardiente.",
            "region": "Veracruz",
            "imagen": "images/quetzaflare.jpg"
        },
        {
            "id": 13,
            "nombre": "Tortapresa",
            "tipo": ["normal", "acero"],
            "descripcion": "Tiene el caparazón de bolillo y ataca con carne asada. Leal y glotón.",
            "region": "CDMX",
            "imagen": "images/tortapresa.jpg"
        },
        {
            "id": 14,
            "nombre": "Charrobite",
            "tipo": ["eléctrico", "oscuro"],
            "descripcion": "Este pokémon monta un caballo fantasma con un látigo de rayos. Misterioso y veloz.",
            "region": "Nuevo León",
            "imagen": "images/charrobite.jpg"
        },
        {
            "id": 15,
            "nombre": "Salsalita",
            "tipo": ["agua", "fuego"],
            "descripcion": "Es picante y chispeante como una salsa. Gira en círculos cuando está feliz.",
            "region": "Oaxaca",
            "imagen": "images/salsalita.jpg"
        },
        {
            "id": 16,
            "nombre": "Luchafénix",
            "tipo": ["lucha", "fuego"],
            "descripcion": "Un pokémon legendario que renace de la lucha. Lleva máscara y capa de fuego.",
            "region": "Guerrero",
            "imagen": "images/luchafenix.jpg"
        },
        {
            "id": 17,
            "nombre": "Coyosombra",
            "tipo": ["oscuro", "fantasma"],
            "descripcion": "Su aullido solo se escucha durante eclipses. Tiene cuerpo de humo y mirada roja.",
            "region": "Zacatecas",
            "imagen": "images/coyosombra.jpg"
        },
        {
            "id": 18,
            "nombre": "Maizón",
            "tipo": ["planta", "normal"],
            "descripcion": "Pokémon guardián de los campos de maíz. Protege la cosecha y canta con el viento.",
            "region": "Durango",
            "imagen": "images/maizon.jpg"
        },
        {
            "id": 19,
            "nombre": "Chaparrón",
            "tipo": ["agua", "volador"],
            "descripcion": "Parece un pequeño charro de agua que flota entre nubes, montado en un sombrero.",
            "region": "San Luis Potosí",
            "imagen": "images/chaparron.jpg"
        },
        {
            "id": 20,
            "nombre": "Xocolatl",
            "tipo": ["siniestro", "hada"],
            "descripcion": "Misterioso y delicioso, lanza ataques de cacao oscuro y hechizos dulces.",
            "region": "Tabasco",
            "imagen": "images/xocolatl.jpg"
        },
        {
            "id": 21,
            "nombre": "Albadrillo",
            "tipo": ["tierra", "acero"],
            "descripcion": "Forjado en el sol de la construcción, su cuerpo está hecho de ladrillo y concreto. Usa su talocha como arma.",
            "region": "Estado de México",
            "imagen": "images/albadrillo.jpg"
        },
        {
            "id": 22,
            "nombre": "Cervezoar",
            "tipo": ["agua", "normal"],
            "descripcion": "Fermentado con lúpulo sagrado, siempre burbujea de emoción. Su ataque especial embriaga a los rivales y los vuelve lentos.",
            "region": "Jalisco",
            "imagen": "images/cervezoar.jpg"
        },
        {
            "id": 23,
            "nombre": "Chicatrón",
            "tipo": ["eléctrico", "acero"],
            "descripcion": "Criado en talleres del norte, su cuerpo está armado con refacciones de motocicletas.",
            "region": "Nuevo León",
            "imagen": "images/chicatron.jpg"
        },
        {
            "id": 24,
            "nombre": "Cigarraz",
            "tipo": ["veneno", "fuego"],
            "descripcion": "Antiguo y elegante, exhala humo espeso que adormece a sus oponentes. Su aroma recuerda a las cantinas del viejo México.",
            "region": "Sonora",
            "imagen": "images/cigarraz.jpg"
        },
        {
            "id": 25,
            "nombre": "Florazul",
            "tipo": ["planta", "hada"],
            "descripcion": "Baila con el viento entre los campos de lavanda. Su fragancia calma a los más agresivos.",
            "region": "Morelos",
            "imagen": "images/florazul.jpg"
        },
        {
            "id": 26,
            "nombre": "Frijolón",
            "tipo": ["planta", "fuego"],
            "descripcion": "Su cuerpo está hecho de frijoles cocidos al carbón. Al calentarse lanza vapor picante y huele a cocina de rancho.",
            "region": "Zacatecas",
            "imagen": "images/frijolon.jpg"
        },
        {
            "id": 27,
            "nombre": "Mariachín",
            "tipo": ["sonido", "lucha"],
            "descripcion": "Con su traje de charro y trompeta brillante, combate al ritmo del son jalisciense. Su canto sube el ánimo de su equipo.",
            "region": "Jalisco",
            "imagen": "images/mariachin.jpg"
        },
        {
            "id": 28,
            "nombre": "Nevatl",
            "tipo": ["hielo", "volador"],
            "descripcion": "Se desliza entre las nubes frías de las montañas del Ajusco. Deja una estela de copos brillantes donde pasa.",
            "region": "CDMX",
            "imagen": "images/nevatl.jpg"
        },
    ]

    private _querySearch = ""; 

    // Método público para acceder a la lista de pokemones
    get pokemons(): Pokemon[] {
        return [...this._pokemons]; // Retorna una copia del array para evitar mutaciones externas
    }
}
