import {
  NgModule
} from '@angular/core';

import {
  SKY_LIB_RESOURCES_PROVIDERS
} from '@skyux/i18n';

import {
  SkyActionBarResourcesProvider
} from '../../plugin-resources/action-bar-resources-provider';

@NgModule({
  providers: [{
    provide: SKY_LIB_RESOURCES_PROVIDERS,
    useClass: SkyActionBarResourcesProvider,
    multi: true
  }]
})
export class SkyActionBarResourcesModule { }
