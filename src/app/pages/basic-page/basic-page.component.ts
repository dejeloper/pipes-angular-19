import {Component, signal} from '@angular/core';
import {LowerCasePipe, TitleCasePipe, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {

  nameLower = signal('jhonatan');
  nameUpper = signal('JHONATAN');
  nameFullName = signal('jHONAtan guErrERo');


}
