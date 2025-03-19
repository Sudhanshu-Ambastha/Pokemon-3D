import express from 'express';
const router = express.Router();

import {
    RegularPokemon,
    ShinyPokemon,
    AlolanPokemon,
    HisuianPokemon,
    MegaPokemon,
    GalarPokemon,
    GmaxPokemon,
    MegaShinyPokemon,
    MultiFormPokemon,
    ShadowPokemon,
    UniquePokemon,
    XyPokemon,
    PrimalPokemon,
    OriginPokemon,
} from '../models/db.model.js';

router.get('/ping', (req, res) => {
    res.status(200).send('pong');
});

const formModelMap = {
    regular: RegularPokemon,
    shiny: ShinyPokemon,
    alolan: AlolanPokemon,
    hisuian: HisuianPokemon,
    mega: MegaPokemon,
    galar: GalarPokemon,
    gmax: GmaxPokemon,
    megaShiny: MegaShinyPokemon,
    multiForm: MultiFormPokemon,
    shadow: ShadowPokemon,
    unique: UniquePokemon,
    xy: XyPokemon,
    primal: PrimalPokemon,
    origin: OriginPokemon,
};

router.get('/pokemon', async (req, res) => {
    const form = req.query.form ? req.query.form.toLowerCase() : null; // Convert to lowercase
    const limit = parseInt(req.query.limit) || 10;
    const offset = parseInt(req.query.offset) || 0;

    if (!form) {
        return res.status(400).json({ error: 'Form query parameter is required.' });
    }

    const Model = formModelMap[form];

    if (!Model) {
        return res.status(400).json({ error: `Invalid form parameter: ${form}` }); // More specific error
    }

    try {
        const pokemonData = await Model.find({}).skip(offset).limit(limit);
        res.json(pokemonData);
    } catch (error) {
        console.error(`Error fetching ${form} Pokemon:`, error);
        res.status(500).json({ error: `Failed to fetch ${form} Pokemon: ${error.message}` }); // Include error message
    }
});

router.get('/pokemon/all', async (req, res) => {
    const form = req.query.form ? req.query.form.toLowerCase() : null; // Convert to lowercase
    const limit = parseInt(req.query.limit) || 10;
    const offset = parseInt(req.query.offset) || 0;

    try {
        let allPokemon = [];

        if (form) {
            const Model = formModelMap[form];
            if (Model) {
                allPokemon = await Model.find({}).skip(offset).limit(limit);
            } else {
                return res.status(400).json({ error: `Invalid form parameter: ${form}` }); // more specific error
            }
        } else {
            for (const Model of Object.values(formModelMap)) {
                const pokemonData = await Model.find({}).skip(offset).limit(limit);
                allPokemon = allPokemon.concat(pokemonData);
            }
        }

        res.json(allPokemon);
    } catch (error) {
        console.error('Error fetching all Pokémon:', error);
        res.status(500).json({ error: `Failed to fetch all Pokémon: ${error.message}` }); // Include error message
    }
});

export default router;