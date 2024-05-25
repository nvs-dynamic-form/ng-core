import { TemplateRef } from '@angular/core';
import { FieldBase } from './field-base.type';

export class TextboxField extends FieldBase<string> {
  override readonly controlType?: 'textbox' = 'textbox';
  icon?: TemplateRef<any>;
  onIconClick?: (value?: string) => void;
  type?: 'email' | 'number' | 'password' | 'tel' | 'text' | 'url';

  constructor(options: TextboxField) {
    super(options, '');
    this.type = options.type ?? 'text';
    this.icon = options.icon;
    this.onIconClick = options.onIconClick;
  }
}
