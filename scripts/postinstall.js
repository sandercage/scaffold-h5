const { execSync } = require('child_process')

execSync(`umi generate tmp`)
execSync(`rm -rf ./node_modules/prettier-plugin-style-order`)
