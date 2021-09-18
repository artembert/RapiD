import esbuild from 'esbuild';
import fs from 'node:fs';

esbuild
  .build({
    bundle: true,
    minify: false,
    sourcemap: true,
    entryPoints: ['./modules/id.js'],
    legalComments: 'none',
    logLevel: 'info',
    metafile: true,
    outfile: 'dist/iD.js',
      watch: {
          onRebuild(error, result) {
              if (error) console.error('watch build failed:', error);
              else console.log('watch build succeeded');
          },
      },

  })
  .then(result => {
    fs.writeFileSync('./dist/esbuild.json', JSON.stringify(result.metafile, null, 2));
  })
  .catch(() => process.exit(1));
