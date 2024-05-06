import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  DropdownField,
  TextboxField,
} from '../../../../projects/ng-dynamic-form/src/public-api';

import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/fields/input/input.component';
import { NgDynamicFormModule } from '../../../../projects/ng-dynamic-form/src/lib/ng-dynamic-form.module';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      NgDynamicFormModule.forRoot({
        formFields: {
          textbox: {
            component: InputComponent,
            class: TextboxField,
          },
        },
        submitButton: {
          component: ButtonComponent,
          defaultOptions: {
            label: 'Save',
            isFullWidth: true,
            position: 'center',
            visible: true,
          },
        },
      }),
    ),
  ],
};
