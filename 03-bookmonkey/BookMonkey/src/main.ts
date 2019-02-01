import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

console.log('test');

interface StringArray {
  [test: number]: string;
}

let authors: StringArray;
authors = ['a', 'b'];

console.log('>>>xx ' + authors);
console.log('>>> ' + authors[0]);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
