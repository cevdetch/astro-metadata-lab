// Node-only I/O for the research build and fixture endpoints.
// JSDoc types keep this boundary usable without Node typings in the Astro source.
import { readFile, readdir, writeFile } from 'node:fs/promises';

/** @type {Record<string, string | undefined>} */
export const buildEnvironment = process.env;

/** @param {URL} directory @returns {Promise<string[]>} */
export const listAssets = directory => readdir(directory);

/** @param {URL} file @returns {Promise<Uint8Array<ArrayBuffer>>} */
export const readAsset = async file => new Uint8Array(await readFile(file));

/** @param {URL} file @param {string} contents @returns {Promise<void>} */
export const writeText = (file, contents) => writeFile(file, contents, 'utf8');
