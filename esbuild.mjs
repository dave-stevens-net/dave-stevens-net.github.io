import * as fs from 'fs'
import * as path from 'path'
import glob from 'glob'
import {build} from "esbuild"
import linaria from '@linaria/esbuild'
import yamlPlugin from 'esbuild-plugin-yaml'
import yargs from 'yargs'
import {hideBin} from "yargs/helpers"
import rimraf from 'rimraf'
import serve from 'create-serve'
import sharp from 'sharp'

const args = yargs(hideBin(process.argv))
  .option('dev-mode', { alias: 'D', type: 'boolean', description: 'Run in development mode' })
  .parse()

buildApp(args.devMode)

function buildApp(devMode) {
  rimraf.sync('./dist') // blows away dist folder
  if (devMode) {
    console.log('Running eslint in development mode...')
  }
  const watchConfig = devMode ? {
    onRebuild(err, result) {
      if (err) {
        console.error('watch build failed:', err)
      } else {
        writeHtmlFile(result.metafile)
        serve.update()
        console.log('watch build succeeded.')
      }
    }
  } : false
  glob('src/pages/**/*+(.tsx)', (err, entries) => {
    build({
      entryPoints: entries,
      bundle: true,
      minify: true,
      splitting: true,
      outdir: 'dist',
      format: 'esm',
      entryNames: '[dir]/[name]-[hash]',
      outbase: 'src/pages',
      metafile: true,
      watch: watchConfig,
      target: [
        'es2020',
        'chrome58',
        'firefox57',
        'safari11'
      ],
      plugins: [
        linaria.default(),
        yamlPlugin.yamlPlugin()
      ],
    }).then(result => {
      copyAssets()
      writeHtmlFile(result.metafile)
      if (devMode) {
        serve.start({port: 8000, root: 'dist', live: true})
        console.log('watching...')
      }
    })
  })
}

function copyAssets() {
  fs.mkdirSync('dist/assets/css', {recursive: true})
  copyFilesToAssets('node_modules/@blueprintjs/core/lib/css/*', 'dist/assets/css/').then()
  copyFilesToAssets('node_modules/@blueprintjs/icons/lib/css/*', 'dist/assets/css/').then()
  copyFilesToAssets('node_modules/@blueprintjs/popover2/lib/css/*', 'dist/assets/css/').then()
  fs.mkdirSync('dist/assets/img', {recursive: true})
  copyFilesToAssets('src/assets/img/*', 'dist/assets/img/').then(() => {
    genPlaceholderImages('dist/assets/img/*+(.jpg|.jpeg)')
  })
  fs.mkdirSync('dist/assets/favicons', {recursive: true})
  copyFilesToAssets('src/assets/favicons/*', 'dist/assets/favicons/').then()
}

function copyFilesToAssets(pattern, destDir) {
  return new Promise(resolve => {
    glob(pattern, (err, files) => {
      for (const file of files) {
        fs.copyFileSync(file, `${destDir}${path.parse(file).base}`)
      }
      resolve()
    })
  })
}

function genPlaceholderImages(pattern) {
  glob(pattern, (err, files) => {
    for (const file of files) {
      const fileParts = path.parse(file)
      const destFile = `${fileParts.dir}/${fileParts.name}-placeholder${fileParts.ext}`
      sharp(file).resize(300).blur(5).toFile(destFile).then()
    }
  })
}


/*
 * Constructs the HTML files from each MDX page based on the metadata from esbuild.
 * Note: All pages have App.tsx as the entry point, which contains the init function.
 */
function writeHtmlFile(metafile) {
  const outputs = Object.keys(metafile.outputs)
    .map(key => {return {file: key, entryPoint: metafile.outputs[key].entryPoint}})
  const pages = outputs.filter(output => output.entryPoint && !output.entryPoint.endsWith('App.tsx'));
  const appFile = outputs.filter(output => output.entryPoint?.endsWith('App.tsx') ?? false)?.[0];
  const cssFiles = outputs.filter(output => output.file.endsWith('.css'));
  // const appCssFile = cssFiles.filter(file => file.file.startsWith('dist/App-'))?.[0]
  if (!appFile) {
    console.error('Missing App.tsx in src/pages.')
    return
  }
  /*
  if (!appCssFile) {
    console.error('Missing App-[hash].css file.')
    return
  }
   */
  for (const pageFile of pages) {
    const htmlFilename = pageFile.entryPoint.replace('src/pages/', 'dist/')
      .replace('.mdx', '.html')
      .replace('.tsx', '.html')
    // Had to do this work around because esbuild-mdx doesn't let you specify
    // remark-frontmatter as a plugin to MDX and @mdx-js/esbuild doesn't yet
    // support relative paths to components.
    const pageDirname = path.dirname(pageFile.file);
    const pageImportName = './' + path.relative(pageDirname, pageFile.file)
    const appImport = './' + path.relative(pageDirname, appFile.file)
    // const appCssImport = './' + path.relative(pageDirname, appCssFile.file)
    const bpCssImport = './' + path.relative(pageDirname, 'dist/assets/css/blueprint.css')
    const bpIconsCssImport = './' + path.relative(pageDirname, 'dist/assets/css/blueprint-icons.css')
    const bpPopoverCssImport = './' + path.relative(pageDirname, 'dist/assets/css/blueprint-popover2.css')
    const assetsRoot = './' + path.relative(pageDirname, 'dist/assets/') + '/'
    const pagePrefix = pageFile.file.replace(/-[A-Z0-9]*.js/, '-')
    const pageCss = cssFiles.filter(({file}) => file.startsWith(pagePrefix))
    let pageCssHtml = ''
    if (pageCss.length > 0) {
      const pageCssPath = './' + path.relative(pageDirname, pageCss[0].file)
      pageCssHtml = `<link href="${pageCssPath}" rel="stylesheet" />`
    }
    // <link href="${appCssImport}" rel="stylesheet" />
    const html = `<!DOCTYPE html><html lang="en"><head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="${bpCssImport}" rel="stylesheet" />
        <link href="${bpIconsCssImport}" rel="stylesheet" />
        <link href="${bpPopoverCssImport}" rel="stylesheet" />
        ${pageCssHtml}
      </head><body>
      <div id="app"></div>
      <script type="module">
        import Page from '${pageImportName}'
        import {init} from '${appImport}'
        const assetsRoot = '${assetsRoot}'
        init(Page, "app", assetsRoot)
      </script>
      </body></html>`
    fs.writeFileSync(htmlFilename, Buffer.from(html))
  }
}