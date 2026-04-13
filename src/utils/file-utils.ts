import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fse from 'fs-extra';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** Root of the published package (where dist/ and assets/ live) */
export const PKG_ROOT = path.resolve(__dirname, '..');

/** Path to assets directory bundled with the package */
export const ASSETS_DIR = path.join(PKG_ROOT, 'assets');

/** Path to agents assets */
export const AGENTS_DIR = path.join(ASSETS_DIR, 'agents');

/** Path to commands assets */
export const COMMANDS_DIR = path.join(ASSETS_DIR, 'commands');

/** Path to template assets */
export const TEMPLATES_DIR = path.join(ASSETS_DIR, 'templates');

/** Path to docs assets (README.md, COMO_USAR.md) */
export const DOCS_DIR = path.join(ASSETS_DIR, 'docs');

/** Read and parse a JSON file */
export async function readJsonFile<T = unknown>(filePath: string): Promise<T | null> {
  try {
    const content = await fse.readFile(filePath, 'utf-8');
    return JSON.parse(content) as T;
  } catch {
    return null;
  }
}

/** Check if a file exists */
export async function fileExists(filePath: string): Promise<boolean> {
  return fse.pathExists(filePath);
}

/** List .md files in a directory */
export async function listMdFiles(dir: string): Promise<string[]> {
  try {
    const files = await fse.readdir(dir);
    return files.filter(f => f.endsWith('.md')).sort();
  } catch {
    return [];
  }
}

/** Get the name of the current working directory */
export function getDirName(dirPath: string): string {
  return path.basename(path.resolve(dirPath));
}
