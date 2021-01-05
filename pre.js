const path = require('path')
const fs = require('fs')

const base = path.join(process.cwd(), 'src')
const dest = path.join(process.cwd(), 'dist')

if(!fs.existsSync(base)){
  fs.mkdirSync(base)
}

if(!fs.existsSync(dest)){
  fs.mkdirSync(dest)
}