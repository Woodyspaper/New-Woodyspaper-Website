#!/usr/bin/env bash
set -euo pipefail

cd Frontend
npm ci --no-audit --no-fund
npm run build