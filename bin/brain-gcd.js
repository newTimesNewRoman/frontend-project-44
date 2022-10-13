#!/usr/bin/env node
import { playBrainGame } from '../src/index.js';
import { playRound, gameDescription } from '../games/brain-gcd-code.js';

playBrainGame(playRound, gameDescription);
