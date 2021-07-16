import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input[numbersOnly]'
})
export class NumbersOnlyDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this.el.nativeElement.value;
    this.el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
    if (initalValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }

  // this.el.nativeElement.value = initalValue.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');
  // // this avoids 'e', '-', '+', '.' ... all characters that are not numbers !
  // // To allow number keys only: isNaN(Number(event.key))
  // const x = event.which || event.keyCode;
  // return (x === 8 || x === 46) ? true : !isNaN(Number(event.key));

}
