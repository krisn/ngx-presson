# ngx-presson

Angular 2+ directive that will increment (or decrement) a counter variable while your element is being pressed. Similar to Medium's [claps](https://blog.medium.com/show-authors-more-%EF%B8%8F-with-s-c1652279ba01).

[Preview in Plunker](https://plnkr.co/R5W1BnfoeBOlEifUwGU7)

[![npm version](https://badge.fury.io/js/ngx-presson.svg)](https://badge.fury.io/js/ngx-presson)
[![license](https://img.shields.io/npm/l/ngx-presson.svg)](https://www.npmjs.com/package/ngx-presson)


## Installation

[![NPM](https://nodei.co/npm/ngx-presson.png?downloads=true&stars=true)](https://nodei.co/npm/ngx-presson/)

To install this library, run:

```bash
$ npm install ngx-presson --save
```

## Usage

Add the directive in any element of your Angular application's template:

```html
<!-- You can now use your library directive in app.component.html -->
<h1>{{title}}</h1>
<p><button [(presson)]="counter">Presson</button></p>
<p>Counter: {{counter}}</p>
```

In your Angular `AppModule`, import the library:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Import the library
import { PressonModule } from 'ngx-presson';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    // Specify the library as an import
    PressonModule
  ]
})
export class AppModule {}

@Component()
class AppComponent {

counter = 0;

}
```

## Parameters

Parameter | Type | Default | Description 
--- | --- | --- | ---
**presson** | *number* | `null` | Counter value
**pressonSpeed** | *number* | `100` | Counting speed in milliseconds
**pressonWait** | *number* | `0` | Delay in ms before counting starts after the mouse press
**pressonChange** | *event* | `null` | Change event to implement if using 'presson' for multiple elements


## License

MIT © [Kris Nyunt](mailto:kris.nyunt@gmail.com)