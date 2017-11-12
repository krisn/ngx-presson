import { Directive, ElementRef, HostListener, Input, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[presson]'
})
export class PressonDirective {

  @Input() presson: any; // get the config json from here
  @Output() pressonChange: EventEmitter<any> = new EventEmitter<any>();

  private last: MouseEvent;
  private mouseDown = false;

  constructor(private el: ElementRef) {
  }

  @HostListener('mousedown', ['$event']) onMousedown(event) {
    this.mouseDown = true;
    this.last = event;
    console.log('mousedown', this.mouseDown);
    this.inc();
  }

  inc() {
    while (this.mouseDown) {
      this.presson++;
      this.pressonChange.emit(this.presson);
      console.log(this.presson);
    }
  }

  @HostListener('mouseup') onMouseup() {
    this.mouseDown = false;
    console.log('mouseup', this.mouseDown);
  }
  /*@HostListener('change') onChange() {
    const data = this.el.nativeElement.value ? this.el.nativeElement.value : this.el.nativeElement.innerText;
    const result = this.pressonService.count(data);
    this.pressonChange.emit(result); // Object.assign(result, this.presson || {}));
    // console.log('change', result);
  }*/

  @HostListener('mousemove', ['$event']) onMousemove(event: MouseEvent) {
    if (this.mouseDown) {
      /*this.scene.rotate(
        event.clientX - this.last.clientX,
        event.clientY - this.last.clientY
      );*/
      this.last = event;
    }
  }
}
