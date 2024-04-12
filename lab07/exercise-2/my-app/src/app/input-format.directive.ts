import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[customInputFormat]'
})
export class InputFormatDirective {
  
  constructor(private el: ElementRef) {
    console.log('InputFormatDirective loaded');
   }
  
  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toUpperCase();
  }
}
