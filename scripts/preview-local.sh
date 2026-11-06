#!/usr/bin/env bash
set -euo pipefail
repo_dir="$(cd "$(dirname "$0")/.." && pwd)"
preview_dir="/tmp/nawab_portfolio_preview"
if [[ "${PORTFOLIO_CHECK:-0}" == "1" ]]; then preview_dir="/tmp/nawab_portfolio_checks"; fi
mkdir -p "$preview_dir"
chmod 700 "$preview_dir"
rsync -a --delete --exclude='.git' --exclude='node_modules' --exclude='.next' --exclude='.env*' --exclude='.deps-lock' "$repo_dir/" "$preview_dir/"
if [[ "${PORTFOLIO_CHECK:-0}" != "1" && -f "$repo_dir/.env.local" ]]; then
  install -m 600 "$repo_dir/.env.local" "$preview_dir/.env.local"
else
  rm -f "$preview_dir/.env.local"
  if [[ "${PORTFOLIO_CHECK:-0}" != "1" ]]; then echo 'No .env.local found. Admin and email features need local configuration.'; fi
fi
cd "$preview_dir"
if [[ ! -f .deps-lock ]] || ! cmp -s package-lock.json .deps-lock; then
  env -u npm_config_allow_scripts npm ci --ignore-scripts
  cp package-lock.json .deps-lock
fi
if [[ "${PORTFOLIO_CHECK:-0}" == "1" ]]; then
  npm run check
  exec npm run build
fi
node - <<'JS'
const { loadEnvConfig } = require('@next/env');
loadEnvConfig(process.cwd());
for (const key of ['ADMIN_PASSWORD', 'SESSION_SECRET']) {
  if (!process.env[key]) console.warn(`${key} is missing; admin login may be unavailable.`);
}
JS
exec npm run dev -- --hostname 127.0.0.1 --port "${PORTFOLIO_PORT:-3001}"
