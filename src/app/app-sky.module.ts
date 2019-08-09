import {
  NgModule
} from '@angular/core';

import {
  SkyMediaQueryModule
} from '@skyux/core';

import {
  SkyI18nModule
} from '@skyux/i18n';

import {
  SkyKeyInfoModule,
  SkyIconModule
} from '@skyux/indicators';

import {
  SkyModalModule,
  SkyConfirmModule
} from '@skyux/modals';

import {
  SkyDropdownModule
} from '@skyux/popovers';

import {
  SkyAppLinkModule
} from '@skyux/router';

import {
  SkyTabsModule
} from '@skyux/tabs';

@NgModule({
  exports: [
    SkyAppLinkModule,
    SkyConfirmModule,
    SkyDropdownModule,
    SkyI18nModule,
    SkyIconModule,
    SkyKeyInfoModule,
    SkyMediaQueryModule,
    SkyModalModule,
    SkyTabsModule
  ]
})
export class AppSkyModule { }
