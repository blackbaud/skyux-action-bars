import {
  NgModule
} from '@angular/core';

import {
  NoopAnimationsModule
} from '@angular/platform-browser/animations';

import {
  SkyKeyInfoModule
} from '@skyux/indicators';

import {
  SkyModalModule
} from '@skyux/modals';

import {
  SkyTabsModule
} from '@skyux/tabs';

import {
  SkyAppLinkModule
} from '@skyux/router';

import {
  SkySummaryActionBarModule
} from './public';

import {
  SkySummaryActionBarModalDemoComponent
} from './visual/summary-action-bar/summary-action-bar-modal-demo.component';

import {
  AppSkyModule
} from './app-sky.module';

@NgModule({
  exports: [
    AppSkyModule,
    SkyAppLinkModule,
    SkyKeyInfoModule,
    SkyModalModule,
    SkySummaryActionBarModule,
    SkyTabsModule,
    NoopAnimationsModule
  ],
  providers: [],
  entryComponents: [
    SkySummaryActionBarModalDemoComponent
  ]
})
export class AppExtrasModule { }
