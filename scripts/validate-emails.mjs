#!/usr/bin/env node
/**
 * scripts/validate-emails.mjs
 * Validates compiled email HTML output files.
 * Checks for: existence, non-empty content, required strings.
 * Usage: node scripts/validate-emails.mjs
 */

import { existsSync, readFileSync, statSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const checks = [
  {
    file: 'dist/emails/orbitflow-launch.html',
    label: 'OrbitFlow Launch Email',
    requiredStrings: [
      'OrbitFlow',
      'Start Free',
      'Unsubscribe',
      'Darshaka Lanka',
    ],
    minBytes: 10000,
  },
  {
    file: 'dist/signatures/northstar-signature.html',
    label: 'Northstar Studio Signature',
    requiredStrings: [
      'Alex Rivera',
      'Northstar Studio',
      'alex@northstarstudio.example',
      'northstarstudio.example',
      'CONFIDENTIALITY NOTICE',
    ],
    minBytes: 2000,
  },
  {
    file: 'dist/signatures/northstar-signature.txt',
    label: 'Northstar Studio Plain Text Fallback',
    requiredStrings: [
      'Alex Rivera',
      'Northstar Studio',
      'northstarstudio.example',
    ],
    minBytes: 200,
  },
  {
    file: 'dist/signatures/ingoude-signature.html',
    label: 'Ingoude Company Signature',
    requiredStrings: [
      'Jonathan Patterson',
      'Marketing Manager',
      'Ingoude Company',
      'reallygreatsite.com',
      '123-456-7890',
    ],
    minBytes: 1500,
  },
  {
    file: 'dist/signatures/ingoude-signature.txt',
    label: 'Ingoude Company Plain Text Fallback',
    requiredStrings: [
      'Jonathan Patterson',
      'Marketing Manager',
      'Ingoude Company',
      'reallygreatsite.com',
    ],
    minBytes: 150,
  },
]

let passed = 0
let failed = 0

for (const check of checks) {
  const filePath = resolve(root, check.file)
  console.log(`\n  Checking: ${check.label} (${check.file})`)

  if (!existsSync(filePath)) {
    console.error(`    ✗ File not found: ${check.file}`)
    failed++
    continue
  }

  const size = statSync(filePath).size
  if (size < check.minBytes) {
    console.error(`    ✗ File too small: ${size} bytes (min ${check.minBytes})`)
    failed++
    continue
  }

  const content = readFileSync(filePath, 'utf-8')
  let fileOk = true

  for (const str of check.requiredStrings) {
    if (!content.includes(str)) {
      console.error(`    ✗ Missing required string: "${str}"`)
      fileOk = false
    }
  }

  // Check for accidental localhost URLs in href/src attributes only (not in comments)
  if (check.file.endsWith('.html')) {
    const hrefSrcPattern = /(href|src)=["'][^"']*(?:localhost|127\.0\.0\.1)[^"']*["']/i
    if (hrefSrcPattern.test(content)) {
      console.error(`    ✗ Contains local development URL in href/src attribute (localhost/127.0.0.1)`)
      fileOk = false
    }
  }

  if (fileOk) {
    console.log(`    ✓ OK (${size.toLocaleString()} bytes)`)
    passed++
  } else {
    failed++
  }
}

console.log(`\n${'─'.repeat(50)}`)
console.log(`Results: ${passed} passed, ${failed} failed`)

if (failed > 0) {
  console.error('✗ Validation failed.')
  process.exit(1)
} else {
  console.log('✓ All checks passed.')
}
