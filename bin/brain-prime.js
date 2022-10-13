#!/usr/bin/env node
import { playBrainGame } from '../src/index.js';
import { playRound, gameDescription } from '../games/brain-prime-code.js';

playBrainGame(playRound, gameDescription);
