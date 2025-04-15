import {CurrencyPipe, DecimalPipe, PercentPipe} from '@angular/common';
import {Component, signal} from '@angular/core';

@Component({
  selector: 'numbers-page',
  imports: [DecimalPipe, CurrencyPipe, PercentPipe],
  templateUrl: './numbers-page.component.html',
})
export default class NumbersPageComponent {


  totalSelles = signal(2453636.5567);
  percent = signal(0.4856);

}
