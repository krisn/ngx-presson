/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import * as Rx from 'rxjs/Rx';

import { PressonModule }  from '../dist/ngx-presson.umd.js';

@Component({
  selector: 'app',
  template: `
  <div>
    <h2>ngx-presson!</h2>
    <p><button [(presson)]="counter">Presson</button></p>
    <p>Counter: {{counter}}</p>
    <div class="redbar" [style.width]="counter+'px'"></div>
  </div>
  `,
  styles: [`
    .redbar { background-color: red; height: 20px; }
  `]
})
class AppComponent implements OnInit {

  counter = 0;

  constructor() {}

  ngOnInit() {

    console.log('Presson', this.counter);

  }
}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, PressonModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
