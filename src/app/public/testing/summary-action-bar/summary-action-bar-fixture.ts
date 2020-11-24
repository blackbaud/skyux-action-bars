import {
  DebugElement
} from '@angular/core';

import {
  ComponentFixture
} from '@angular/core/testing';

import {
  By
} from '@angular/platform-browser';

import {
  SkyAppTestUtility
} from '@skyux-sdk/testing';

/**
 * Allows interaction with a SKY UX country field component.
 */
export class SkySummaryActionBarFixture {
  private debugEl: DebugElement;

  // /**
  //  * The value of the input field's autocomplete attribute.
  //  */
  // public get autocompleteAttribute(): string {
  //   return this.getInputElement().getAttribute('autocomplete');
  // }

  constructor(
    private fixture: ComponentFixture<any>,
    skyTestId: string
  ) {
    this.debugEl = SkyAppTestUtility.getDebugElementByTestId(fixture, skyTestId, 'sky-summary-action-bar');
  }

  // /**
  //  * Enters the search text into the input field displaying search results, but making no selection.
  //  * @param searchText The name of the country to select.
  //  * @returns The list of country names matching the search text.
  //  */
  // public async search(searchText: string): Promise<string[]> {
  //   const resultNodes = await this.searchAndGetResults(searchText, this.fixture);
  //   const resultArray = Array.prototype.slice.call(resultNodes);
  //   const results = resultArray.map((result: HTMLElement) => {
  //     const countryNameEl = result.querySelector('.sky-highlight-mark');
  //     const countryName = SkyAppTestUtility.getText(countryNameEl);
  //     return countryName;
  //   });

  //   this.fixture.detectChanges();
  //   await this.fixture.whenStable();

  //   return results;
  // }

  //#region helpers

  // private getCountryFlag(): DebugElement {
  //   return this.debugEl.query(By.css('.sky-country-field-flag'));
  // }

  //#endregion helpers
}
