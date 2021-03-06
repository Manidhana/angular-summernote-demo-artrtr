import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

  // Otherwise, log the boot error
}).catch(err => console.error(err));

function addScript(link) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = link;
  document.head.append(script);
}

function addLink(css) {
  const link = document.createElement('link');
  link.href = css;
  link.rel = 'stylesheet';
  document.head.append(link);
}

addScript('https://code.jquery.com/jquery-3.4.1.min.js');
addScript('https://cdn.jsdelivr.net/npm/summernote@0.8.15/dist/summernote-lite.min.js');
addLink('https://cdn.jsdelivr.net/npm/summernote@0.8.15/dist/summernote-lite.min.css')