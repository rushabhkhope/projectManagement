const babel = require('rollup-plugin-babel');
const resolve = require('@rollup/plugin-node-resolve');
const external = require('rollup-plugin-peer-deps-external');
const sucrase = require('@rollup/plugin-sucrase');
const postcss = require('rollup-plugin-postcss');
const fs = require('fs');
const packageJson = require('./package.json');
const generatePackageJson = require('rollup-plugin-generate-package-json');
const css = require("rollup-plugin-import-css");

const plugins = [
  css({output:"style.css"}),
  babel({
    exclude: 'node_modules/**',
    presets: ['@babel/preset-react']
  }),
  external(),
  resolve(),
  sucrase({
    exclude: ['node_modules/**'],
    transforms: ['typescript', 'jsx'],
  }),
//   copy({
//     targets: [
//       {
//         src: ['./styles/main.css', './styles/main.css.map'], dest: './dist/css'
//       }
//     ]
//   })
];

const getFolders = (entry) => {
  // get the names of folders and files of the entry directory
  const dirs = fs.readdirSync(entry);
  // do not include folders not meant for export and do not process index.ts
  const dirsWithoutIndex = dirs.filter(name => name !== 'index.js').filter(name => name !== 'utils').filter(name => name !== '__test__');
  return dirsWithoutIndex;
};
const subfolderPlugins = (folderName) => [
  ...plugins,
  generatePackageJson({
    baseContents: {
      name: `${packageJson.name}/${folderName}`,
      private: true,
      main: '../cjs/index.js', // --> points to cjs format entry point of whole library
      module: './index.js', // --> points to esm format entry point of individual component
      types: './index.d.ts', // --> points to types definition file of individual component
    },
  }),
];

const folderBuilds = getFolders('./src/components').map((folder) => {
  return {
    input: `src/components/${folder}/index.js`,
    output: {
      file: `dist/${folder}/index.js`,
      sourcemap: true,
      exports: 'named',
      format: 'esm',
    },
    plugins: subfolderPlugins(folder),
    external: ['react', 'react-dom'],
  };
});


module.exports = [
  {
    input: ['src/index.js'],
    output: [
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
        exports: 'named',
      },
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
      },
    ],
    plugins,
    external: ['react', 'react-dom'],
  },
  ...folderBuilds,
];

