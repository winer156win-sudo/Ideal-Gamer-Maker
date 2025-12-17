const { spawn } = require('child_process')
const path = require('path')
const fs = require('fs')

const input = process.argv[2]
if (!input) {
  console.error('Usage: node mp4-to-gif.js input.mp4 [output.gif] [fps] [scale]')
  process.exit(1)
}

const out = process.argv[3] || path.join(process.cwd(), `${path.parse(input).name}.gif`)
const fps = process.argv[4] || '12'
const scale = process.argv[5] || '480:-1'

if (fs.existsSync(out)) fs.unlinkSync(out)

const args = [
  '-y',
  '-i', input,
  '-vf', `fps=${fps},scale=${scale}:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse`,
  '-loop', '0',
  out
]

const ff = spawn('ffmpeg', args, { stdio: 'inherit' })
ff.on('exit', c => process.exit(c))
