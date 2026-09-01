const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
const assetsDir = path.join(distDir, 'assets');
const cssFile = fs.readdirSync(assetsDir).find(f => f.endsWith('.css'));
const jsFile = fs.readdirSync(assetsDir).find(f => f.endsWith('.js'));
const faviconFile = fs.readdirSync(assetsDir).find(f => f.startsWith('favicon') && f.endsWith('.svg'));

const css = fs.readFileSync(path.join(assetsDir, cssFile), 'utf-8');
const js = fs.readFileSync(path.join(assetsDir, jsFile), 'utf-8');

// Read favicon
const favicon = fs.readFileSync(path.join(assetsDir, faviconFile), 'utf-8');
const faviconBase64 = Buffer.from(favicon).toString('base64');

// Create bundle
const bundle = indexHtml
  .replace('<link rel="stylesheet" crossorigin href="/assets/' + cssFile + '">', '<style>' + css + '</style>')
  .replace('<script type="module" crossorigin src="/assets/' + jsFile + '"></script>', '<script>' + js + '</script>')
  .replace('<link rel="icon" type="image/svg+xml" href="/favicon.svg" />', '<link rel="icon" type="image/svg+xml" href="data:image/svg+xml;base64,' + faviconBase64 + '" />');

fs.writeFileSync(path.join(distDir, 'bundle.html'), bundle);
console.log('Bundle created:', path.join(distDir, 'bundle.html'));