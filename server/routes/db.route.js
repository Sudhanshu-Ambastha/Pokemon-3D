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

// Function to apply limit and offset
const applyLimitAndOffset = async (Model, req, res) => {
    const limit = parseInt(req.query.limit) || 10;
    const offset = parseInt(req.query.offset) || 0;

    try {
        const pokemonData = await Model.find({}).skip(offset).limit(limit);
        res.json(pokemonData);
    } catch (error) {
        console.error(`Error fetching ${Model.modelName} Pokemon:`, error);
        res.status(500).json({ error: `Failed to fetch ${Model.modelName} Pokemon` });
    }
};

router.get('/regular', (req, res) => applyLimitAndOffset(RegularPokemon, req, res));
router.get('/shiny', (req, res) => applyLimitAndOffset(ShinyPokemon, req, res));
router.get('/alolan', (req, res) => applyLimitAndOffset(AlolanPokemon, req, res));
router.get('/hisuian', (req, res) => applyLimitAndOffset(HisuianPokemon, req, res));
router.get('/mega', (req, res) => applyLimitAndOffset(MegaPokemon, req, res));
router.get('/galar', (req, res) => applyLimitAndOffset(GalarPokemon, req, res));
router.get('/gmax', (req, res) => applyLimitAndOffset(GmaxPokemon, req, res));
router.get('/mega-shiny', (req, res) => applyLimitAndOffset(MegaShinyPokemon, req, res));
router.get('/multi-form', (req, res) => applyLimitAndOffset(MultiFormPokemon, req, res));
router.get('/shadow', (req, res) => applyLimitAndOffset(ShadowPokemon, req, res));
router.get('/unique', (req, res) => applyLimitAndOffset(UniquePokemon, req, res));
router.get('/xy', (req, res) => applyLimitAndOffset(XyPokemon, req, res));
router.get('/primal', (req, res) => applyLimitAndOffset(PrimalPokemon, req, res));
router.get('/origin', (req, res) => applyLimitAndOffset(OriginPokemon, req, res));

router.get('/all', async (req, res) => {
    const limit = parseInt(req.query.limit) || 10;
    const offset = parseInt(req.query.offset) || 0;

    try {
        const regular = await RegularPokemon.find({}).limit(721).skip(offset).limit(limit);
        const shiny = await ShinyPokemon.find({}).skip(offset).limit(limit);
        const alolan = await AlolanPokemon.find({}).skip(offset).limit(limit);
        const hisuian = await HisuianPokemon.find({}).skip(offset).limit(limit);
        const mega = await MegaPokemon.find({}).skip(offset).limit(limit);
        const galar = await GalarPokemon.find({}).skip(offset).limit(limit);
        const gmax = await GmaxPokemon.find({}).skip(offset).limit(limit);
        const megaShiny = await MegaShinyPokemon.find({}).skip(offset).limit(limit);
        const multiForm = await MultiFormPokemon.find({}).skip(offset).limit(limit);
        const shadow = await ShadowPokemon.find({}).skip(offset).limit(limit);
        const unique = await UniquePokemon.find({}).skip(offset).limit(limit);
        const xy = await XyPokemon.find({}).skip(offset).limit(limit);
        const primal = await PrimalPokemon.find({}).skip(offset).limit(limit);
        const origin = await OriginPokemon.find({}).skip(offset).limit(limit);

        const allPokemon = [
            ...regular,
            ...shiny,
            ...alolan,
            ...hisuian,
            ...mega,
            ...galar,
            ...gmax,
            ...megaShiny,
            ...multiForm,
            ...shadow,
            ...unique,
            ...xy,
            ...primal,
            ...origin,
        ];

        res.json(allPokemon);
    } catch (error) {
        console.error('Error fetching all Pokémon:', error);
        res.status(500).json({ error: 'Failed to fetch all Pokémon' });
    }
});

export default router;