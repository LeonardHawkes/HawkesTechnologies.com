import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outPath = join(__dirname, '../public/og-image.png')

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#ffffff"/>

  <!-- Subtle grid lines -->
  <line x1="0" y1="1" x2="1200" y2="1" stroke="#f0f0f0" stroke-width="1"/>
  <line x1="0" y1="629" x2="1200" y2="629" stroke="#f0f0f0" stroke-width="1"/>

  <!-- H mark, centered left area -->
  <g transform="translate(218, 155) scale(1.9)">
    <polygon points="0,90 36,55 36,240 0,240" fill="#111111"/>
    <rect x="36" y="128" width="28" height="28" fill="#111111"/>
    <polygon points="64,20 100,0 100,240 64,240" fill="#111111"/>
  </g>

  <!-- Wordmark -->
  <text x="600" y="268" text-anchor="middle"
        font-family="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
        font-size="56" font-weight="400" letter-spacing="0.18em" fill="#111111">HAWKES</text>
  <text x="600" y="318" text-anchor="middle"
        font-family="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
        font-size="26" font-weight="300" letter-spacing="0.26em" fill="#111111">TECHNOLOGIES</text>

  <!-- Divider -->
  <line x1="480" y1="358" x2="720" y2="358" stroke="#e0e0e0" stroke-width="1"/>

  <!-- Tagline -->
  <text x="600" y="402" text-anchor="middle"
        font-family="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
        font-size="20" font-weight="300" letter-spacing="0.04em" fill="#6e6e73">Software built for real impact.</text>
</svg>`

await sharp(Buffer.from(svg)).png().toFile(outPath)
console.log(`OG image written to ${outPath}`)
