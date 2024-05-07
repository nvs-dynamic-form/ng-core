import { FormFieldComponents, SubmitButton } from './types';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgFormBuilderComponent } from './ng-form-builder.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NgFormBuilderComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [NgFormBuilderComponent],
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
