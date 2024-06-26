
// source https://pokeapi.co/api/v2/type/${type}

export const types = {
    normal: {
        doubleDamageFrom: ["fighting"],
        doubleDamageTo: [],
        halfDamageFrom: [],
        halfDamageTo: ["rock", "steel"],
        noDamageFrom: [],
        noDamageTo: [],
    },
    fighting: {
        doubleDamageFrom: ["flying", "psychic", "fairy"],
        doubleDamageTo: ["normal", "rock", "steel", "ice", "dark"],
        halfDamageFrom: ["rock", "bug", "dark"],
        halfDamageTo: ["flying", "poison", "bug", "psychic", "fairy"],
        noDamageFrom: [],
        noDamageTo: ["ghost"],
    },
    flying: {
        doubleDamageFrom: ["rock", "electric", "ice"],
        doubleDamageTo: ["fighting", "bug", "grass"],
        halfDamageFrom: ["fighting", "bug", "grass"],
        halfDamageTo: ["rock", "steel", "electric"],
        noDamageFrom: ["ground"],
        noDamageTo: [],
    },
    poison: {
        doubleDamageFrom: ["ground", "psychic"],
        doubleDamageTo: ["grass", "fairy"],
        halfDamageFrom: ["fighting", "poison", "bug", "grass", "fairy"],
        halfDamageTo: ["poison", "ground", "rock", "ghost"],
        noDamageFrom: [],
        noDamageTo: ["steel"],
    },
    ground: {
        doubleDamageFrom: ["water", "grass", "ice"],
        doubleDamageTo: ["poison", "rock", "steel", "fire", "electric"],
        halfDamageFrom: ["poison", "rock"],
        halfDamageTo: ["bug", "grass"],
        noDamageFrom: ["electric"],
        noDamageTo: ["flying"],
    },
    rock: {
        doubleDamageFrom: ["fighting", "ground", "steel", "water", "grass"],
        doubleDamageTo: ["flying", "bug", "fire", "ice"],
        halfDamageFrom: ["normal", "flying", 'poison', 'fire'],
        halfDamageTo: ['fighting', 'ground', 'steel'],
        noDamageFrom: [],
        noDamageTo: [],
    },
    bug: {
        doubleDamageFrom: ['flying', 'rock', 'fire'],
        doubleDamageTo: ['grass', 'psychic', 'dark'],
        halfDamageFrom: ['fighting', 'ground', 'grass'],
        halfDamageTo: ['fighting', 'flying', 'poison', 'ghost', 'steel', 'fire', 'fairy'],
        noDamageFrom: [],
        noDamageTo: [],
    },
    ghost: {
        doubleDamageFrom: ["ghost", 'dark'],
        doubleDamageTo: ['ghost', 'psychic'],
        halfDamageFrom: ['poison', 'bug'],
        halfDamageTo: ['dark'],
        noDamageFrom: ['normal', 'fighting'],
        noDamageTo: ['normal'],
    },
    steel: {
        doubleDamageFrom: ['fighting', 'ground', 'fire'],
        doubleDamageTo: ['rock', 'ice', 'fairy'],
        halfDamageFrom: ['normal', 'flying', 'rock', 'bug', 'steel', 'grass', 'psychic', 'ice', 'dragon', 'fairy'],
        halfDamageTo: ['steel', 'fire', 'water', 'electric'],
        noDamageFrom: ['poison'],
        noDamageTo: [],
    },
    fire: {
        doubleDamageFrom: ['ground', 'rock', 'water'],
        doubleDamageTo: ['bug', 'steel', 'grass', 'ice'],
        halfDamageFrom: ['bug', 'steel', 'fire', 'grass', 'ice', 'fairy'],
        halfDamageTo: ['rock', 'fire', 'water', 'dragon'],
        noDamageFrom: [],
        noDamageTo: [],
    },
    water: {
        doubleDamageFrom: ['grass', 'electric'],
        doubleDamageTo: ['ground', 'rock', 'fire'],
        halfDamageFrom: ['steel', 'fire', 'water', 'ice'],
        halfDamageTo: ['water', 'grass', 'dragon'],
        noDamageFrom: [],
        noDamageTo: [],
    },
    grass: {
        doubleDamageFrom: [],
        doubleDamageTo: [],
        halfDamageFrom: [],
        halfDamageTo: [],
        noDamageFrom: [],
        noDamageTo: [],
    },
    electric: {
        doubleDamageFrom: [],
        doubleDamageTo: [],
        halfDamageFrom: [],
        halfDamageTo: [],
        noDamageFrom: [],
        noDamageTo: [],
    },
    psychic: {
        doubleDamageFrom: [],
        doubleDamageTo: [],
        halfDamageFrom: [],
        halfDamageTo: [],
        noDamageFrom: [],
        noDamageTo: [],
    },
    ice: {
        doubleDamageFrom: [],
        doubleDamageTo: [],
        halfDamageFrom: [],
        halfDamageTo: [],
        noDamageFrom: [],
        noDamageTo: [],
    },
    dragon: {
        doubleDamageFrom: [],
        doubleDamageTo: [],
        halfDamageFrom: [],
        halfDamageTo: [],
        noDamageFrom: [],
        noDamageTo: [],
    },
    dark: {
        doubleDamageFrom: [],
        doubleDamageTo: [],
        halfDamageFrom: [],
        halfDamageTo: [],
        noDamageFrom: [],
        noDamageTo: [],
    },
    fairy: {
        doubleDamageFrom: [],
        doubleDamageTo: [],
        halfDamageFrom: [],
        halfDamageTo: [],
        noDamageFrom: [],
        noDamageTo: [],
    },
}