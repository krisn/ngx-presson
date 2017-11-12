# ngx-presson

Angular 2+ directive that will increment or decrement a counter variable while your element is being pressed. 

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
<!-- You can now use your library component in app.component.html -->
<h1>{{title}}</h1>
<textarea [(presson)]="result"></textarea>
<p>Words: {{result && result.words}}, Letters: {{result && result.letters}}, Spaces: {{result && result.spaces}}</p>
```

In your Angular `AppModule`, import the library then use the `PressonService` to count any text in your application logic:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Import the library
import { PressonModule, PressonService } from 'ngx-presson';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    // Specify the library as an import
    PressonModule
  ],
  providers: [ PressonService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}

@Component()
class AppComponent implements OnInit {
  result: any;
  // Inject the service into your component
  constructor(private pressonService: PressonService) {}
  ngOnInit() {
    // Use the service to count any string or text
    console.log('Presson', this.pressonService.count('Big old fox jumps over a wall'));
  }
}
```


## Parameters

Parameter | Type | Default | Description 
--- | --- | --- | ---
**presson** | *json* | `null` | Results as JSON object



## License

MIT © [Kris Nyunt](mailto:kris.nyunt@gmail.com)