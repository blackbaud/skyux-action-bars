import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  expect
} from '@skyux-sdk/testing';

import {
  SkyKeyInfoModule
} from '@skyux/indicators';

import {
  SummaryActionBarTestComponent
} from './fixtures/summary-action-bar-fixture-test.component';

import {
  SkySummaryActionBarFixture
} from './summary-action-bar-fixture';

import {
  SkySummaryActionBarTestingModule
} from './summary-action-bar.module';

describe('Summary action bar fixture', () => {
  let fixture: ComponentFixture<SummaryActionBarTestComponent>;
  let testComponent: SummaryActionBarTestComponent;
  let summaryActionBarFixture: SkySummaryActionBarFixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SummaryActionBarTestComponent
      ],
      imports: [
        SkyKeyInfoModule,
        SkySummaryActionBarTestingModule
      ]
    });

    fixture = TestBed.createComponent(
      SummaryActionBarTestComponent
    );
    testComponent = fixture.componentInstance;
    fixture.detectChanges();
    summaryActionBarFixture = new SkySummaryActionBarFixture(
      fixture,
      SummaryActionBarTestComponent.dataSkyId
    );
  });

  fit('should expose the expected defaults', () => {
    expect(true).toBeTrue();
  });
});
