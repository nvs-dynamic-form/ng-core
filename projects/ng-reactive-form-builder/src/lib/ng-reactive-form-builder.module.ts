import { FormFieldComponents, SubmitButton } from './types';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgReactiveFormBuilder } from './ng-reactive-form-builder.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NgReactiveFormBuilder],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [NgReactiveFormBuilder],
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
