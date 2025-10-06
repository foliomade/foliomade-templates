#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const skip = new Set(['.git', '.github', '_shared', 'node_modules']);

const errors = [];
const warnings = [];

function isDir(p) {
  try { return fs.statSync(p).isDirectory(); } catch { return false; }
}

function read(file) {
  try { return fs.readFileSync(file, 'utf8'); } catch { return null; }
}

function checkTemplate(dir) {
  const name = path.basename(dir);

  const astroCfg = path.join(dir, 'astro.config.mjs');
  const indexAstro = path.join(dir, 'src', 'pages', 'index.astro');
  // Preview image is now under the template's public/ folder
  const preview = path.join(dir, 'public', 'preview.png');

  // Only validate folders that look like templates (have index.astro)
  const hasIndex = fs.existsSync(indexAstro);
  if (!hasIndex) {
    warnings.push(`[skip] ${name}: no src/pages/index.astro (treating as non-template)`);
    return;
  }

  if (!fs.existsSync(astroCfg)) {
    errors.push(`[missing] ${name}: astro.config.mjs`);
  } else {
    const content = read(astroCfg) || '';
    const expected = "export { default } from '../_shared/astro.base.mjs'";
    if (!content.includes(expected)) {
      errors.push(`[astro.config.mjs] ${name}: must re-export shared base (missing expected line)`);
    }
  }

  if (!fs.existsSync(preview)) {
    errors.push(`[missing] ${name}: preview.png`);
  } else {
    try {
      const stat = fs.statSync(preview);
      const sizeKB = Math.round(stat.size / 1024);
      if (sizeKB > 1024) {
        warnings.push(`[size] ${name}: preview.png is ${sizeKB}KB (>1024KB)`);
      }
    } catch {}
  }

  const idx = read(indexAstro) || '';
  if (!idx.includes('fetchSiteConfig')) {
    errors.push(`[index.astro] ${name}: must import/use fetchSiteConfig`);
  }
  if (!idx.includes('portfolioId')) {
    errors.push(`[index.astro] ${name}: must read portfolioId from URL`);
  }
}

function main() {
  const entries = fs.readdirSync(root, { withFileTypes: true });
  for (const e of entries) {
    if (!e.isDirectory()) continue;
    if (skip.has(e.name)) continue;
    if (e.name.startsWith('.')) continue;
    const full = path.join(root, e.name);
    checkTemplate(full);
  }

  for (const w of warnings) console.warn(w);
  if (errors.length) {
    console.error(`\nTemplate validation failed with ${errors.length} error(s):`);
    for (const err of errors) console.error(' -', err);
    process.exit(1);
  }
  console.log('Template validation passed');
}

main();
