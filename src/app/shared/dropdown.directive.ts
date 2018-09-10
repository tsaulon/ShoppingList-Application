import {
  Directive,
  HostBinding,
  Input,
  HostListener,
  ElementRef,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  isOpen = false;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.renderer.addClass(this.element.nativeElement, 'open');
    } else {
      this.renderer.removeClass(this.element.nativeElement, 'open');
    }
  }
}
