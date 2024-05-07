import { FormFieldComponents, SubmitButton } from './types';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgDynoform } from './ng-dynoform.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NgDynoform],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [NgDynoform],
})
export class NgFormBuilderModule {
  static forRoot(options: {
    submitButton: SubmitButton;
    formFields: FormFieldComponents;
  }): ModuleWithProviders<NgFormBuilderModule> {
    return {
      ngModule: NgFormBuilderModule,
      providers: [
        { provide: FormFieldComponents, useValue: options.formFields },
        { provide: SubmitButton, useValue: options.submitButton },
      ],
    };
  }
}
