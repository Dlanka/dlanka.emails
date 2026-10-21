#!/usr/bin/env node
/**
 * scripts/sync-build-to-dist.mjs
 * Copies build output into dist/ so Cloudflare Pages succeeds whether
 * the output directory is configured as "dist" or "build".
 */

import { cpSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const buildDir = resolve(root, 'build')
const distDir = resolve(root, 'dist')

if (existsSync(buildDir)) {
  cpSync(buildDir, distDir, { recursive: true })
  console.log('✓ Synced build/ output into dist/ for Cloudflare compatibility.')
}
