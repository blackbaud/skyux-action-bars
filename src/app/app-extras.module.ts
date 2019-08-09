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
  SkyModalModule, SkyConfirmModule
} from '@skyux/modals';

import {
  SkyTabsModule
} from '@skyux/tabs';

import {
  SkySplitViewModule
} from '@skyux/split-view';

import {
  SkySummaryActionBarModule
} from './public';

import {
  SkySummaryActionBarModalDemoComponent
} from './visual/summary-action-bar/summary-action-bar-modal-demo.component';

@NgModule({
  imports: [
    SkyKeyInfoModule,
    SkyModalModule,
    SkySummaryActionBarModule,
    SkyTabsModule,
    NoopAnimationsModule
  ],
  exports: [
    SkyKeyInfoModule,
    SkyModalModule,
    SkySummaryActionBarModule,
    SkyTabsModule,
    SkySplitViewModule,
    SkyConfirmModule,
    NoopAnimationsModule
  ],
  providers: [],
  entryComponents: [
    SkySummaryActionBarModalDemoComponent
  ]
})
export class AppExtrasModule { }
