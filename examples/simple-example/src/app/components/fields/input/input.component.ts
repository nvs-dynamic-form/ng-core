import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { TextboxField } from '../../../../../../../projects/ng-reactive-form-builder/src/public-api';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input({ required: true }) fieldOptions!: TextboxField;
  @Input({ required: true }) formControl!: FormControl;
}
