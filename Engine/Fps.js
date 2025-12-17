let fps = 12
if (process.argv[2]) {
  const val = parseInt(process.argv[2], 10)
  if (!isNaN(val) && val > 0) {
    fps = val
  }
}
console.log(`FPS is set to: ${fps}`)
