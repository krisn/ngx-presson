import { Directive, ElementRef, HostListener, Input, EventEmitter, Output } from '@angular/core';
import * as Rx from 'rxjs/Rx';

@Directive({
  selector: '[presson]'
})
export class PressonDirective {

  @Input() presson: any; // get the config json from here
  @Input() pressonSpeed: number;
  @Input() pressonWait: number;
  @Output() pressonChange: EventEmitter<any> = new EventEmitter<any>();

  private last: MouseEvent;
  private mouseDown = false;

  constructor(private el: ElementRef) {
    this.pressonSpeed = this.pressonSpeed || 100;
    this.pressonWait = this.pressonWait || 0;
  }

  @HostListener('mousedown', ['$event']) onMousedown(event) {
    this.mouseDown = true;
    this.last = event;
    this.inc();
  }

  @HostListener('mouseup') onMouseup() {
    this.mouseDown = false;
  }

  inc() {
    const timer = Rx.Observable
    .timer(this.pressonWait, this.pressonSpeed)
    .takeWhile(val => this.mouseDown)
    .finally(() => {
      console.log('unsubscribe', this.presson);
      timer.unsubscribe();
    })
    .subscribe(val => {
      console.log('inc', this.presson);
      this.presson++;
      this.pressonChange.emit(this.presson);
    });
  }
}
