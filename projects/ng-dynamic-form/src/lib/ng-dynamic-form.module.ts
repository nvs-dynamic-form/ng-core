import { ModuleWithProviders, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormFieldComponents } from './types/field-components.type';
import { NgDynamicFormComponent } from './ng-dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SubmitButton } from './types';

@NgModule({
  declarations: [NgDynamicFormComponent],
  imports: [ReactiveFormsModule, CommonModule],
  exports: [NgDynamicFormComponent],
})
export class NgDynamicFormModule {
  static forRoot(options: {
    submitButton: SubmitButton;
    formFields: FormFieldComponents;
  }): ModuleWithProviders<CommonModule> {
    return {
      ngModule: NgDynamicFormModule,
      providers: [
        { provide: FormFieldComponents, useValue: options.formFields },
        { provide: SubmitButton, useValue: options.submitButton },
      ],
    };
  }
}
