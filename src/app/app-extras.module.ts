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
  SkySummaryActionbarModule
} from './public';

import {
  SkySummaryActionbarModalDemoComponent
} from './visual/summary-actionbar/summary-actionbar-modal-demo.component';

@NgModule({
  imports: [
    SkyKeyInfoModule,
    SkyModalModule,
    SkySummaryActionbarModule,
    NoopAnimationsModule
  ],
  exports: [
    SkyKeyInfoModule,
    SkyModalModule,
    SkySummaryActionbarModule,
    NoopAnimationsModule
  ],
  providers: [],
  entryComponents: [
    SkySummaryActionbarModalDemoComponent
  ]
})
export class AppExtrasModule { }
