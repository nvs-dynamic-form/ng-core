# NVS Dynamic Form - Ng Core Usage

After installing the package, you can create your forms using the form elements you have created. Forms are created using the NVSDynamicFormComponent. This component takes the following parameters;

| Parameter Name          | Type   | Description                                                                                      |
| ----------------------- | ------ | ------------------------------------------------------------------------------------------------ |
| fromClass               | Input  | You can use this parameter if you want to give a style class to the created form.                |
| validatorOrOpts         | Input  | If you want to add a custom validation, we can add it to the form group via this parameter.      |
| submitButtonVisible     | Input  | Used for the visibility of the Submit button.                                                    |
| submitButtonLabel       | Input  | Used for the label of the submit button.                                                         |
| submitButtonIsFullWidth | Input  | Allows the submit button to run at full width.                                                   |
| submitButtonPosition    | Input  | Sets the position of the submit button. `left`, It has 3 different values, `right` and `center`. |
| fields                  | Input  | Allows us to create forms using the defined form elements.                                       |
| onSubmit                | Output | Represents the reaction after the Submit button is clicked.                                      |

## Simple Example

```ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Validators } from '@angular/forms';

import { NvsDynamicFormModule, TextboxField } from '@nvs-dynamic-form/ng-core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, NvsDynamicFormModule],
})
export class AppComponent {
  title = 'simple-example';

  fields = [
    new TextboxField({
      label: 'First Name',
      key: 'firstName',
      placeholder: 'test',
      validators: [Validators.required],
      screenSize: {
        desktop: 6,
        mobile: 12,
      },
    }),
    new TextboxField({
      label: 'Last Name',
      key: 'lastName',
      screenSize: {
        desktop: 6,
        mobile: 12,
      },
    }),
    new TextboxField({
      label: 'E-mail Address',
      key: 'emailAddress',
      screenSize: 12,
    }),
  ];

  onSubmit({values, valid}) {
    if(valid)
      alert(JSON.stringify(values));
  }
}
```

```html
<nvs-dynamic-form
  [fields]="fields"
  (onSubmit)="onSubmit($event)"
></nvs-dynamic-form>

```