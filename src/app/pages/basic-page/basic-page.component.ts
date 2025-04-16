import {Component, effect, signal} from '@angular/core';
import {LowerCasePipe, TitleCasePipe, UpperCasePipe, DatePipe} from '@angular/common';

@Component({
  selector: 'basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {

  nameLower = signal('jhonatan');
  nameUpper = signal('JHONATAN');
  nameFullName = signal('jHONAtan guErrERo');

  customDate = signal(new Date());


  tickingDateEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
    }, 1000);

    onCleanup(() => clearInterval(interval));
  });

}
