import { FormFieldComponents, SubmitButton } from './types';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NvsDynamicFormComponent } from './nvs-dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NvsDynamicFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [NvsDynamicFormComponent],
})
export class NvsDynamicFormModule {
  static forRoot(options: {
    submitButton: SubmitButton;
    formFields: FormFieldComponents;
  }): ModuleWithProviders<NvsDynamicFormModule> {
    return {
      ngModule: NvsDynamicFormModule,
      providers: [
        { provide: FormFieldComponents, useValue: options.formFields },
        { provide: SubmitButton, useValue: options.submitButton },
      ],
    };
  }
}
