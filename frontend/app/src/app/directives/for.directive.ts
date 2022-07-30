import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBlue]'
})
export class BlueDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = 'rgb(0, 144, 240)'
  }

}