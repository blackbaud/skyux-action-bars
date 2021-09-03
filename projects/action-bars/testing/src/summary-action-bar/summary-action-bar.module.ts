import {
  NgModule
} from '@angular/core';

import {
  NoopAnimationsModule
} from '@angular/platform-browser/animations';

import {
  SkySummaryActionBarModule
} from '../../../src/modules/summary-action-bar/summary-action-bar.module';

@NgModule({
  exports: [
    SkySummaryActionBarModule,

    // The noop animations module needs to be loaded last to avoid
    // subsequent modules adding animations and overriding this.
    NoopAnimationsModule
  ]
})
export class SkySummaryActionBarTestingModule { }
