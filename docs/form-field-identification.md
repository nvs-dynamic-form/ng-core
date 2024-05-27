# Form Field Identification

In order to use the package, you need to define the form elements. While making these definitions, the input models you create must be derived from the [FieldBase](https://github.com/nvs-dynamic-form/ng-core/blob/master/projects/ng-core/src/lib/types/fields/field-base.type.ts) class.

Instead of creating a new model, you can also use the models below.

- [TextboxField](https://github.com/nvs-dynamic-form/ng-core/blob/master/projects/ng-core/src/lib/types/fields/textbox-field.type.ts)
- [TextareaField](https://github.com/nvs-dynamic-form/ng-core/blob/master/projects/ng-core/src/lib/types/fields/textarea-field.type.ts)
- [CheckboxField](https://github.com/nvs-dynamic-form/ng-core/blob/master/projects/ng-core/src/lib/types/fields/checkbox-field.type.ts)
- [DropdownField](https://github.com/nvs-dynamic-form/ng-core/blob/master/projects/ng-core/src/lib/types/fields/dropdown-field.type.ts)

## Basic Field Component
Let's make a simple input component example together. First, let's create the model that our component will use.

```ts
import { TemplateRef } from '@angular/core';
import { FieldBase } from '@nvs-dynamic-form/ng-core';

export class TextboxField extends FieldBase<string> {
  override readonly fieldType? = 'textbox';
  type?: 'email' | 'number' | 'password' | 'tel' | 'text' | 'url';

  constructor(options: TextboxField) {
    super(options, '');
    this.type = options.type ?? 'text';
  }
}
```

Let's create the component that will work in harmony with the model created. The created component must receive two inputs;

| Input Name   | Description                                                                                                              |
| ------------ | ------------------------------------------------------------------------------------------------------------------------ |
| fieldOptions | It contains the properties of the created input in itself.                                                               |
| formControl  | Since Angular relative form is used, information from the form group is taken to determine validations and input values. |

```ts
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { TextboxField } from './textbox-field.type.ts';

@Component({
  selector: 'app-textbox',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './textbox.component.html',
  styleUrl: './textbox.component.scss',
})
export class TextboxComponent {
  @Input({ required: true }) fieldOptions!: TextboxField;
  @Input({ required: true }) formControl!: FormControl;
}
```
It is necessary to make sure that the input has full width in the created design. The responsive feature provided by the package is provided in this way.

```html
<div class="textbox-component">
  <input
    [formControl]="formControl"
    [type]="fieldOptions.type"
    [id]="fieldOptions.key"
    [name]="fieldOptions.key"
    [placeholder]="fieldOptions.placeholder"
    (change)="fieldOptions.onChange && fieldOptions.onChange($event)"
  />

  @if (formControl.touched && formControl.hasError("required")) {
    <span>{{ fieldOptions.label + " is required" }}</span>
  }
</div>
```

```scss
.textbox-component {
  display: flex;
  flex-direction: column;
  width: calc(100% - 8px);

  > input {
    width: 100%;
  }
}
```