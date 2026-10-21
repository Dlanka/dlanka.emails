#!/usr/bin/env node
/**
 * scripts/build-emails.mjs
 * Compiles all MJML source files to standalone HTML in dist/emails/
 * Uses the MJML Node.js API (not the CLI binary) for cross-platform compat.
 * Usage: node scripts/build-emails.mjs
 */

import { createRequire } from 'module'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

// Use createRequire for MJML CJS compatibility
const require = createRequire(import.meta.url)
const mjml2html = require('mjml')

// Ensure output directory exists
const distDir = resolve(root, 'dist', 'emails')
if (!existsSync(distDir)) {
  mkdirSync(distDir, { recursive: true })
}

const emails = [
  {
    src: 'src/emails/orbitflow-launch.mjml',
    out: 'dist/emails/orbitflow-launch.html',
  },
]

let hasError = false

for (const { src, out } of emails) {
  const srcPath = resolve(root, src)
  const outPath = resolve(root, out)

  if (!existsSync(srcPath)) {
    console.error(`  ✗ Source not found: ${src}`)
    hasError = true
    continue
  }

  console.log(`  Compiling ${src} → ${out}`)

  try {
    const mjmlSource = readFileSync(srcPath, 'utf-8')

    // mjml2html is async in MJML 5.x
    const result = await mjml2html(mjmlSource, {
      filePath: srcPath,
      validationLevel: 'soft',
    })

    if (result.errors && result.errors.length > 0) {
      for (const err of result.errors) {
        console.warn(`    ⚠ ${err.formattedMessage}`)
      }
    }

    if (!result.html) {
      throw new Error('MJML returned empty HTML — check source for syntax errors.')
    }

    writeFileSync(outPath, result.html, 'utf-8')
    console.log(`  ✓ ${out} (${result.html.length.toLocaleString()} bytes)`)
  } catch (err) {
    console.error(`  ✗ MJML compile failed for ${src}:`, err.message)
    hasError = true
  }
}

if (hasError) {
  console.error('\n✗ build:emails completed with errors.')
  process.exit(1)
} else {
  console.log('\n✓ build:emails complete.')
}
