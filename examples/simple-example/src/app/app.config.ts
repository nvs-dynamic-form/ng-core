import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  DropdownField,
  TextboxField,
} from '../../../../projects/ng-dynoform/src/public-api';

import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/fields/input/input.component';
import { NgFormBuilderModule } from '../../../../projects/ng-dynoform/src/lib/ng-dynoform.module';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      NgFormBuilderModule.forRoot({
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
