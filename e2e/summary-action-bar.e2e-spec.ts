import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

import {
  element,
  by
} from 'protractor';

describe('Summary Action Bar', () => {
  it('should match previous summary action bar screenshot', (done) => {
    SkyHostBrowser.get('visual/summary-action-bar');
    SkyHostBrowser.setWindowBreakpoint('lg');
    expect('.sky-summary-action-bar').toMatchBaselineScreenshot(done, {
      screenshotName: 'summary-action-bar'
    });
  });

  it('should match previous expanded summary action bar screenshot (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/summary-action-bar');
    SkyHostBrowser.setWindowBreakpoint('xs');
    expect('.sky-summary-action-bar').toMatchBaselineScreenshot(done, {
      screenshotName: 'summary-action-bar-expanded'
    });
  });

  it('should match previous collapsed summary action bar screenshot (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/summary-action-bar');
    SkyHostBrowser.setWindowBreakpoint('xs');
    element(by.css('#summary-action-bar .sky-summary-action-bar-details-collapse .sky-btn-secondary')).click();
    expect('.sky-summary-action-bar').toMatchBaselineScreenshot(done, {
      screenshotName: 'summary-action-bar-collapsed'
    });
  });

  it('should match previous summary action bar modal screenshot', (done) => {
    SkyHostBrowser.get('visual/summary-action-bar');
    SkyHostBrowser.setWindowBreakpoint('lg');
    element(by.css('#modal-trigger')).click();
    expect('.sky-modal').toMatchBaselineScreenshot(done, {
      screenshotName: 'summary-action-bar-modal'
    });
  });

  it('should match previous expanded summary action bar modal screenshot (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/summary-action-bar');
    element(by.css('#modal-trigger')).click();
    SkyHostBrowser.setWindowBreakpoint('xs');
    expect('.sky-modal').toMatchBaselineScreenshot(done, {
      screenshotName: 'summary-action-bar-modal-expanded'
    });
  });

  it('should match previous collapsed summary action bar modal screenshot (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/summary-action-bar');
    element(by.css('#modal-trigger')).click();
    SkyHostBrowser.setWindowBreakpoint('xs');
    element(by.css('.sky-modal .sky-summary-action-bar-details-collapse .sky-btn-secondary')).click();
    expect('.sky-modal').toMatchBaselineScreenshot(done, {
      screenshotName: 'summary-action-bar-modal-collapsed'
    });
  });

  it('should match previous summary action bar full screen modal screenshot', (done) => {
    SkyHostBrowser.get('visual/summary-action-bar');
    SkyHostBrowser.setWindowBreakpoint('lg');
    element(by.css('#full-modal-trigger')).click();
    expect('.sky-modal').toMatchBaselineScreenshot(done, {
      screenshotName: 'summary-action-bar-full-modal'
    });
  });

  it('should match previous expanded summary action bar modal full screen screenshot (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/summary-action-bar');
    element(by.css('#full-modal-trigger')).click();
    SkyHostBrowser.setWindowBreakpoint('xs');
    expect('.sky-modal').toMatchBaselineScreenshot(done, {
      screenshotName: 'summary-action-bar-full-modal-expanded'
    });
  });

  it('should match previous collapsed summary action bar full screen modal screenshot (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/summary-action-bar');
    element(by.css('#full-modal-trigger')).click();
    SkyHostBrowser.setWindowBreakpoint('xs');
    element(by.css('.sky-modal .sky-summary-action-bar-details-collapse .sky-btn-secondary')).click();
    expect('.sky-modal').toMatchBaselineScreenshot(done, {
      screenshotName: 'summary-action-bar-full-modal-collapsed'
    });
  });

  it('should match previous tab without summary action bar screenshot', (done) => {
    SkyHostBrowser.get('visual/tab-summary-action-bar');
    SkyHostBrowser.setWindowBreakpoint('lg');
    expect('#screenshot-tabset').toMatchBaselineScreenshot(done, {
      screenshotName: 'summary-action-bar-tab-empty'
    });
  });

  it('should match previous tab with a summary action bar screenshot', (done) => {
    SkyHostBrowser.get('visual/tab-summary-action-bar');
    SkyHostBrowser.setWindowBreakpoint('lg');
    element(by.css('#sky-tab-1-nav-btn')).click();
    expect('#screenshot-tabset').toMatchBaselineScreenshot(done, {
      screenshotName: 'summary-action-bar-tab'
    });
  });

  it('should match previous split view with a summary action bar screenshot', (done) => {
    SkyHostBrowser.get('visual/split-view-summary-action-bar');
    SkyHostBrowser.setWindowBreakpoint('lg');
    expect('#screenshot-split-view').toMatchBaselineScreenshot(done, {
      screenshotName: 'summary-action-bar-split-view'
    });
  });
});
