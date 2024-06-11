import { AbstractControlOptions, FormControl, FormGroup } from '@angular/forms';
import {
  ChipsField,
  IScreenSize,
  ScreenSizeType,
  SubmitButton,
  SubmitResponse,
} from './types';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

import { FieldBase } from './types/fields/field-base.type';
import { FormFieldComponents } from './types/field-components.type';

@Component({
  selector: 'nvs-dynamic-form',
  templateUrl: './nvs-dynamic-form.component.html',
  styleUrls: [
    '../../../../node_modules/nvs-flexgrid/src/main.scss',
    './nvs-dynamic-form.component.scss',
  ],
})
export class NvsDynamicFormComponent implements OnInit, OnChanges {
  protected formGroup!: FormGroup;
  @Input() fromClass?: string = '';
  @Input() validatorOrOpts?: AbstractControlOptions;
  @Input() submitButtonVisible?: boolean;
  @Input() submitButtonLabel?: string;
  @Input() submitButtonIsFullWidth?: boolean;
  @Input() submitButtonPosition?: 'left' | 'right' | 'center';

  @Output() onSubmit: EventEmitter<SubmitResponse> = new EventEmitter();
  @Input({ required: true }) fields!: Array<FieldBase<any>>;

  constructor(
    protected readonly formFieldComponents: FormFieldComponents,
    protected readonly submitButton: SubmitButton,
  ) {}

  private createFormGroup() {
    return new FormGroup(
      this.fields.reduce((acc: { [name: string]: FormControl }, field) => {
        acc[field.key] = new FormControl(field.defaultValue, field.validators);
        return acc;
      }, {}),
      this.validatorOrOpts,
    );
  }

  private getChipsValues(): { [key: string]: Array<string> } {
    return (
      this.fields.filter(
        (field) => field.fieldType === 'chips',
      ) as Array<ChipsField>
    ).reduce((acc: { [key: string]: Array<string> }, field: ChipsField) => {
      acc[field.key] = field.selectedChipsItems ?? [];
      return acc;
    }, {});
  }

  protected onSubmitForm(): void {
    this.onSubmit.emit({
      values: {
        ...this.formGroup.value,
        ...this.getChipsValues(),
      },
      valid: this.formGroup.valid,
    });
  }

  private onChangesField() {
    this.fields = this.fields.map((field) => {
      if (this.formGroup.controls[field.key])
        field.defaultValue = this.formGroup.controls[field.key].value;
      return field;
    });
    this.formGroup = this.createFormGroup();
  }

  protected createFieldItemClass(
    screenSize: ScreenSizeType | IScreenSize,
  ): Array<string> {
    const className: Array<string> = [];
    if (typeof screenSize == 'number') className.push('nvs-col-' + screenSize);
    else {
      className.push('nvs-col-md-' + screenSize?.desktop);
      if (screenSize?.tablet) className.push('nvs-col-sm-' + screenSize.tablet);
      if (screenSize?.mobile) className.push('nvs-col-xs-' + screenSize.mobile);
    }
    return className;
  }

  loadDefaultValue() {
    if (this.submitButtonLabel == undefined)
      this.submitButtonLabel = this.submitButton.defaultOptions.label;

    if (this.submitButtonIsFullWidth === undefined)
      this.submitButtonIsFullWidth =
        this.submitButton.defaultOptions.isFullWidth;

    if (this.submitButtonPosition === undefined)
      this.submitButtonPosition = this.submitButton.defaultOptions.position;
  }

  ngOnInit(): void {
    this.loadDefaultValue();
    this.formGroup = this.createFormGroup();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['fields'] && this.formGroup?.controls) this.onChangesField();
  }

  getButtonPositionClass(position: 'left' | 'right' | 'center') {
    const classes = {
      left: 'nvs-jc-start',
      right: 'nvs-jc-end',
      center: 'nvs-jc-center',
    };
    return classes[position];
  }
}
