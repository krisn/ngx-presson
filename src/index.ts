import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PressonDirective } from './presson.directive';

export * from './presson.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PressonDirective
  ],
  exports: [
    PressonDirective
  ]
})
export class PressonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PressonModule,
      providers: []
    };
  }
}
