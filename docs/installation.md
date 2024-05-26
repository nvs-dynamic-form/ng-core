# NVS Dynamic Form - Ng Core Installation

## Installing the NVS Dynamic Form - Ng Core Package
It is possible to use the [NVS Dynamic Form - NG Core](https://www.npmjs.com/package/@nvs-dynamic-form/ng-core) package in an Angular project. With this package, you can easily manage your form structures in your Angular projects.

```bash
npm i @nvs-dynamic-form/ng-core --save
```

```bash
yarn add @nvs-dynamic-form/ng-core
```

### Usage

> [!NOTE]  
> If you do not know how to create the components of the project, please. Please read the '[Form Field Identification](https://github.com/nvs-dynamic-form/ng-core/blob/master/docs/form-field-identification.md)' document.


In order to use it in the Angular project, we first need to define it in `app.config.ts`.

- The form elements to be used are defined with their names.
  - The component information should be given.
  - The model class used by the Component must also be specified.
- The button to be used in the form must be defined as a component and you can pass parameters by default.
  - You can make the Button component example by looking at the [ButtonComponent](https://github.com/nvs-dynamic-form/ng-core/tree/master/examples/simple-example/src/app/components/button) example.

```ts
import { ApplicationConfig, importProvidersFrom } from '@angular/core';

import { ButtonComponent } from './components/button/button.component';
import { TextboxComponent } from './components/fields/textbox/textbox.component';
import { TextboxField } from './components/fields/textbox/textbox.type';
import { NvsDynamicFormModule } from '@nvs-dynamic-form/ng-core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      NvsDynamicFormModule.forRoot({
        formFields: {
          textbox: {
            component: TextboxComponent,
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
```