import { FormFieldComponents, SubmitButton } from './types';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgDynamicFormComponent } from './ng-dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NgDynamicFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [NgDynamicFormComponent],
})
export class NgDynamicFormModule {
  static forRoot(options: {
    submitButton: SubmitButton;
    formFields: FormFieldComponents;
  }): ModuleWithProviders<NgDynamicFormModule> {
    return {
      ngModule: NgDynamicFormModule,
      providers: [
        { provide: FormFieldComponents, useValue: options.formFields },
        { provide: SubmitButton, useValue: options.submitButton },
      ],
    };
  }
}
