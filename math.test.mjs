import assert from 'node:assert/strict';
import test from 'node:test';
import { twice } from './math.mjs';

test('doubles positive numbers', () => assert.equal(twice(3), 6));
test('clamps negative inputs at zero', () => assert.equal(twice(-3), 0));
