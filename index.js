const imgmin = require('imagemin')
const fs = require('fs')
const path = require('path')
const imageminPngquant = require('imagemin-pngquant')
const imageminMozjpeg = require('imagemin-mozjpeg')

const base = path.join(process.cwd(), 'src')
const dest = path.join(process.cwd(), 'dist')
const inputs = fs.readdirSync(base).reduce((pre, cur) => {
  const file = path.join(base, cur)
  return fs.statSync(file).isDirectory() ? [...pre] : [...pre, file]
}, [])

imgmin(inputs, {glob: false, destination: dest, plugins: [
  imageminPngquant({
    quality: [0.6, 0.8]
  }),
  imageminMozjpeg({
    quality: 75,
    progressive: false
  })
]})
