import esbuild from 'esbuild';
import fs from 'node:fs';

esbuild
  .build({
    bundle: true,
    minify: false,
    sourcemap: 'both',
    entryPoints: ['./modules/id.js'],
    legalComments: 'none',
    logLevel: 'info',
    metafile: true,
    outfile: 'dist/iD.js',
      watch: {
          onRebuild(error) {
              if (error) {
                  console.error('watch build failed:', error);
              } else {
                  console.log(new Date().toLocaleTimeString(), 'watch build succeeded');
              }
          },
      },

  })
  .then(result => {
    fs.writeFileSync('./dist/esbuild.json', JSON.stringify(result.metafile, null, 2));
  })
  .catch(() => process.exit(1));
