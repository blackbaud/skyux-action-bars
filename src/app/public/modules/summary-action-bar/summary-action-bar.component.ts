import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  OnDestroy,
  ChangeDetectionStrategy
} from '@angular/core';

import {
  Subscription
} from 'rxjs/Subscription';

import {
  skyAnimationSlide
} from '@skyux/animations';

import {
  SkyMediaBreakpoints,
  SkyMediaQueryService
} from '@skyux/core';

import {
  SkySummaryActionBarSummaryComponent
} from './summary';

import {
  SkySummaryActionBarAdapterService
} from './summary-action-bar-adapter.service';
import { SkySummaryActionBarType } from './types';

/**
 * Auto-incrementing integer used to generate unique ids for summary action bar components.
 */
let nextId = 0;

@Component({
  selector: 'sky-summary-action-bar',
  templateUrl: './summary-action-bar.component.html',
  styleUrls: ['./summary-action-bar.component.scss'],
  animations: [skyAnimationSlide],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkySummaryActionBarComponent implements AfterViewInit, OnDestroy {

  @ContentChild(SkySummaryActionBarSummaryComponent, { read: ElementRef })
  public summaryElement: ElementRef;

  public isSummaryCollapsible = false;

  public isSummaryCollapsed = false;

  public slideDirection: string = 'down';

  public inModalFooter = false;

  public summaryId: string = `sky-summary-action-bar-summary-${++nextId}`;

  private mediaQuerySubscription: Subscription;

  constructor(
    private adapterService: SkySummaryActionBarAdapterService,
    private changeDetector: ChangeDetectorRef,
    private elementRef: ElementRef,
    private mediaQueryService: SkyMediaQueryService
    ) { }

  public ngAfterViewInit(): void {
    let summaryActionBarType = this.adapterService.getSummaryActionBarType(this.elementRef.nativeElement);
    this.inModalFooter = summaryActionBarType === SkySummaryActionBarType.StandardModal ||
      summaryActionBarType === SkySummaryActionBarType.FullPageModal;

    if (summaryActionBarType === SkySummaryActionBarType.Page) {
      this.setupReactiveState();

      this.adapterService.adjustWindowMarginForActionBar();
    } else {
      this.adapterService.addModalFooterStyling();

      if (summaryActionBarType === SkySummaryActionBarType.FullPageModal) {
        this.setupReactiveState();
      } else if (summaryActionBarType === SkySummaryActionBarType.StandardModal) {
        this.isSummaryCollapsible = true;
      }
    }
    this.changeDetector.detectChanges();
  }

  public ngOnDestroy(): void {
    if (!this.inModalFooter) {
      this.adapterService.adjustWindowMarginForActionBar(true);
      this.adapterService.removeResizeListener();
    }

    if (this.mediaQuerySubscription) {
      this.mediaQuerySubscription.unsubscribe();
    }
  }

  public summaryContentExists(): boolean {
    return (
      this.summaryElement &&
      this.summaryElement.nativeElement.children.length > 0
    );
  }

  public showSummarySection(): void {
    this.slideDirection = 'down';
  }

  public hideSummarySection(): void {
    this.slideDirection = 'up';
  }

  // NOTE: This function is needed so that the button is not removed until post-animation
  public summaryTransitionEnd(): void {
    if (this.slideDirection === 'up') {
      this.isSummaryCollapsed = true;
    }
  }

  // NOTE: This function is needed so that the button is added before animation
  public summaryTransitionStart(): void {
    if (this.slideDirection === 'down') {
      this.isSummaryCollapsed = false;
    }
  }

  private setupReactiveState() {
    this.mediaQuerySubscription = this.mediaQueryService.subscribe((args: SkyMediaBreakpoints) => {
      if (args === SkyMediaBreakpoints.xs) {
        this.isSummaryCollapsible = true;
      } else {
        this.isSummaryCollapsible = false;
        this.isSummaryCollapsed = false;
        this.slideDirection = 'down';
      }
      this.changeDetector.detectChanges();
    });

    this.adapterService.setupResizeListener();

    if (this.mediaQueryService.current === SkyMediaBreakpoints.xs) {
      this.isSummaryCollapsible = true;
    }
  }
}
