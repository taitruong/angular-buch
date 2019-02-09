const version = '@5.0.0';

System.config({
  transpiler: 'ts',
  typescriptOptions: {
    'experimentalDecorators': true
  },
  packages: {
    app: { defaultExtension: 'ts' },
    rxjs: { }
  },
  meta: {
    'typescript': { 'exports': 'ts' }
  },
  paths: { 'npm:': 'https://unpkg.com/' },
  map: {
    '@angular/common': 'npm:@angular/common' + version + '/bundles/common.umd.js',
    '@angular/compiler': 'npm:@angular/compiler' + version + '/bundles/compiler.umd.js',
    '@angular/core': 'npm:@angular/core' + version + '/bundles/core.umd.js',
    '@angular/forms': 'npm:@angular/forms' + version + '/bundles/forms.umd.js',
    '@angular/http': 'npm:@angular/http' + version + '/bundles/http.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser' + version + '/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic' + version + '/bundles/platform-browser-dynamic.umd.js',
    '@angular/router': 'npm:@angular/router' + version + '/bundles/router.umd.js',
    'rxjs': 'npm:rxjs@5.5.11',
    'ts': 'npm:plugin-typescript@8.0.0/lib/plugin.js',
    'typescript': 'npm:typescript@2.9.1/lib/typescript.js'
  }
});