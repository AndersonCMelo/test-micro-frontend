import "zone.js";
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { ButtonModule } from './app/components/button/button.module';
import { ButtonMaterialModule } from './app/components/button-material/button.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const mountApp = ()=>{
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
}

const mountButton = ()=>{
  platformBrowserDynamic().bootstrapModule(ButtonModule)
    .catch(err => console.error(err));
}

const mountButtonMaterial = ()=>{
  platformBrowserDynamic().bootstrapModule(ButtonMaterialModule)
    .catch(err => console.error(err));
}

export{ mountApp, mountButton, mountButtonMaterial }
