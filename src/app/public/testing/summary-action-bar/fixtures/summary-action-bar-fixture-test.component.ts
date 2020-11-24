import {
  Component
} from '@angular/core';

@Component({
  selector: 'summary-action-bar',
  templateUrl: './summary-action-bar-fixture-test.component.html',
  styleUrls: ['./summary-action-bar-fixture-test.component.scss']
})
export class SummaryActionBarTestComponent {
  public static dataSkyId: string = 'test-summary-action-bar';

  constructor() { }

  public printHello() {
    console.log('hello');
  }
}
