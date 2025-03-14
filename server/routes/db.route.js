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

router.get('/regular', async (req, res) => {
  try {
    const pokemonData = await RegularPokemon.find({}).limit(721);
    res.json(pokemonData);
  } catch (error) {
    console.error('Error fetching regular Pokemon:', error);
    res.status(500).json({ error: 'Failed to fetch regular Pokemon' });
  }
});

router.get('/shiny', async (req, res) => {
  try {
    const pokemonData = await ShinyPokemon.find({});
    res.json(pokemonData);
  } catch (error) {
    console.error('Error fetching shiny Pokemon:', error);
    res.status(500).json({ error: 'Failed to fetch shiny Pokemon' });
  }
});

router.get('/alolan', async (req, res) => {
  try {
    const pokemonData = await AlolanPokemon.find({});
    res.json(pokemonData);
  } catch (error) {
    console.error('Error fetching Alolan Pokemon:', error);
    res.status(500).json({ error: 'Failed to fetch Alolan Pokemon' });
  }
});

router.get('/hisuian', async (req, res) => {
  try {
    const pokemonData = await HisuianPokemon.find({});
    res.json(pokemonData);
  } catch (error) {
    console.error('Error fetching Hisuian Pokemon:', error);
    res.status(500).json({ error: 'Failed to fetch Hisuian Pokemon' });
  }
});

router.get('/mega', async (req, res) => {
  try {
    const pokemonData = await MegaPokemon.find({});
    res.json(pokemonData);
  } catch (error) {
    console.error('Error fetching Mega Pokemon:', error);
    res.status(500).json({ error: 'Failed to fetch Mega Pokemon' });
  }
});

router.get('/galar', async (req, res) => {
  try {
    const pokemonData = await GalarPokemon.find({});
    res.json(pokemonData);
  } catch (error) {
    console.error('Error fetching Galar Pokemon:', error);
    res.status(500).json({ error: 'Failed to fetch Galar Pokemon' });
  }
});

router.get('/gmax', async (req, res) => {
  try {
    const pokemonData = await GmaxPokemon.find({});
    res.json(pokemonData);
  } catch (error) {
    console.error('Error fetching Gmax Pokemon:', error);
    res.status(500).json({ error: 'Failed to fetch Gmax Pokemon' });
  }
});

router.get('/mega-shiny', async (req, res) => {
  try {
    const pokemonData = await MegaShinyPokemon.find({});
    res.json(pokemonData);
  } catch (error) {
    console.error('Error fetching Mega Shiny Pokemon:', error);
    res.status(500).json({ error: 'Failed to fetch Mega Shiny Pokemon' });
  }
});

router.get('/multi-form', async (req, res) => {
  try {
    const pokemonData = await MultiFormPokemon.find({});
    res.json(pokemonData);
  } catch (error) {
    console.error('Error fetching Multi Form Pokemon:', error);
    res.status(500).json({ error: 'Failed to fetch Multi Form Pokemon' });
  }
});

router.get('/shadow', async (req, res) => {
  try {
    const pokemonData = await ShadowPokemon.find({});
    res.json(pokemonData);
  } catch (error) {
    console.error('Error fetching Shadow Pokemon:', error);
    res.status(500).json({ error: 'Failed to fetch Shadow Pokemon' });
  }
});

router.get('/unique', async (req, res) => {
  try {
    const pokemonData = await UniquePokemon.find({});
    res.json(pokemonData);
  } catch (error) {
    console.error('Error fetching Unique Pokemon:', error);
    res.status(500).json({ error: 'Failed to fetch Unique Pokemon' });
  }
});

router.get('/xy', async (req, res) => {
  try {
    const pokemonData = await XyPokemon.find({});
    res.json(pokemonData);
  } catch (error) {
    console.error('Error fetching XY Pokemon:', error);
    res.status(500).json({ error: 'Failed to fetch XY Pokemon' });
  }
});

router.get('/primal', async (req, res) => {
  try {
    const pokemonData = await PrimalPokemon.find({});
    res.json(pokemonData);
  } catch (error) {
    console.error('Error fetching Primal Pokemon:', error);
    res.status(500).json({ error: 'Failed to fetch Primal Pokemon' });
  }
});

router.get('/origin', async (req, res) => {
  try {
    const pokemonData = await OriginPokemon.find({});
    res.json(pokemonData);
  } catch (error) {
    console.error('Error fetching Origin Pokemon:', error);
    res.status(500).json({ error: 'Failed to fetch Origin Pokemon' });
  }
});

router.get('/all', async (req, res) => {
  try {
    const regular = await RegularPokemon.find({}).limit(721);
    const shiny = await ShinyPokemon.find({});
    const alolan = await AlolanPokemon.find({});
    const hisuian = await HisuianPokemon.find({});
    const mega = await MegaPokemon.find({});
    const galar = await GalarPokemon.find({});
    const gmax = await GmaxPokemon.find({});
    const megaShiny = await MegaShinyPokemon.find({});
    const multiForm = await MultiFormPokemon.find({});
    const shadow = await ShadowPokemon.find({});
    const unique = await UniquePokemon.find({});
    const xy = await XyPokemon.find({});
    const primal = await PrimalPokemon.find({});
    const origin = await OriginPokemon.find({});

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