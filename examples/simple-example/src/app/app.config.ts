import { ApplicationConfig, importProvidersFrom } from '@angular/core';

import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/fields/input/input.component';
import { NvsDynamicFormModule } from '../../../../projects/ng-core/src/lib/nvs-dynamic-form.module';
import { TextboxField } from '../../../../projects/ng-core/src/public-api';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      NvsDynamicFormModule.forRoot({
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
