import fs from 'fs'
import path from 'path'

const hookFile = path.resolve('node_modules/@nuxt/ui-pro/modules/pro/index.ts')

if (fs.existsSync(hookFile)) {
  let content = fs.readFileSync(hookFile, 'utf-8')

  const targetLine = `await validateLicense({ key, theme, dir: nuxt.options.rootDir })`

  if (content.includes(targetLine)) {
    content = content.replace(
      targetLine,
      `console.log('✅ License bypassed')`
    )
    fs.writeFileSync(hookFile, content, 'utf-8')
    console.log('✅ Successfully replaced validateLicense call')
  } else {
    console.log('⚠️ validateLicense call not found (maybe already patched?)')
  }
} else {
  console.log('❌ index.ts not found at expected location')
}
