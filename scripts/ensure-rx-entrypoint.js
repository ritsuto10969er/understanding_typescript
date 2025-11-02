const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'node_modules', 'rx', 'dist');
const shimPath = path.join(distDir, 'rx.js');

function ensureShim() {
  if (!fs.existsSync(distDir)) {
    return;
  }

  if (fs.existsSync(shimPath)) {
    return;
  }

  const candidates = [
    'rx.js',
    'rx.all.js',
    'rx.all.min.js',
    'rx.lite.js',
    'rx.lite.min.js'
  ].map((name) => path.join(distDir, name));

  const target = candidates.find((candidate) => fs.existsSync(candidate));

  if (!target) {
    console.warn('[ensure-rx-entrypoint] Unable to locate a dist file to proxy.');
    return;
  }

  const relativeTarget = `./${path.basename(target)}`;
  const shimContents = `module.exports = require('${relativeTarget}');\n`;

  fs.writeFileSync(shimPath, shimContents, 'utf8');
  console.log(`[ensure-rx-entrypoint] Created ${path.relative(projectRoot, shimPath)} -> ${path.basename(target)}`);
}

try {
  ensureShim();
} catch (error) {
  console.warn('[ensure-rx-entrypoint] Failed to create shim:', error);
}
