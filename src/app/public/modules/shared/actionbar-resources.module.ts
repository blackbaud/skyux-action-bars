import {
  NgModule
} from '@angular/core';

import {
  SKY_LIB_RESOURCES_PROVIDERS
} from '@skyux/i18n';

import {
  SkyActionbarResourcesProvider
} from '../../plugin-resources/actionbar-resources-provider';

@NgModule({
  providers: [{
    provide: SKY_LIB_RESOURCES_PROVIDERS,
    useClass: SkyActionbarResourcesProvider,
    multi: true
  }]
})
export class SkyActionbarResourcesModule { }
