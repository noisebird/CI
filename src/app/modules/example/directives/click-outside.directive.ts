import { Attribute, Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
})
export class ClickOutsideDirective implements OnInit {

  @Input() greet;
  @Output() clickOutside = new EventEmitter<MouseEvent>();

  constructor(private elementRef: ElementRef, @Attribute('name') private name) {
    console.log(name);
  }

  /**
   * 事件处理，如果去掉document则绑定的是宿主元素的click事件
   */
  @HostListener('document:click', ['$event', '$event.target'])
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (!targetElement) {
      return;
    }

    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit(event);
    }
  }

  ngOnInit(): void {
    console.log(this.greet);
    console.log(this.name);
  }
}
