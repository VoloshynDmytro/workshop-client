import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { decorateModuleRef  } from './app/core/config';
import { AppModule } from './app';

platformBrowserDynamic().bootstrapModule(AppModule)
    .then(decorateModuleRef)
    .catch(err => console.error(err));