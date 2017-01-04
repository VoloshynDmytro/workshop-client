import { enableDebugTools, disableDebugTools } from '@angular/platform-browser';
import { enableProdMode, ApplicationRef } from '@angular/core';

// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
let _decorateModuleRef = function identity(value) { return value; };

if (  ['production','staging'].includes(process.env.NODE_ENV) ) {
  // Production
  disableDebugTools();
  enableProdMode();
} else {
  _decorateModuleRef = (modRef) => {
    const appRef = modRef.injector.get(ApplicationRef);
    const cmpRef = appRef.components[0];

    let _ng = window.ng;
    enableDebugTools(cmpRef);
    window.ng.probe = _ng.probe;
    window.ng.coreTokens = _ng.coreTokens;
    return modRef;
  };

}

export const decorateModuleRef = _decorateModuleRef;