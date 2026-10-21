#!/usr/bin/env node
/**
 * scripts/copy-dist-to-public.mjs
 * Copies compiled email/signature HTML into public/dist/ so Vite
 * serves them as static files in both dev and production builds.
 */

import { existsSync, mkdirSync, copyFileSync, readdirSync } from 'fs'
import { resolve, dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const copies = [
  { src: 'dist/emails', dest: 'public/dist/emails' },
  { src: 'dist/signatures', dest: 'public/dist/signatures' },
]

for (const { src, dest } of copies) {
  const srcDir = resolve(root, src)
  const destDir = resolve(root, dest)

  if (!existsSync(srcDir)) continue
  if (!existsSync(destDir)) mkdirSync(destDir, { recursive: true })

  for (const file of readdirSync(srcDir)) {
    const srcFile = join(srcDir, file)
    const destFile = join(destDir, file)
    copyFileSync(srcFile, destFile)
    console.log(`  ✓ Copied ${src}/${file} → ${dest}/${file}`)
  }
}

console.log('\n✓ copy-dist-to-public complete.')

