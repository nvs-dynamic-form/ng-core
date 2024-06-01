export class SubmitButton {
  component!: any;
  defaultOptions!: SubmitButtonOptions;
}

export class SubmitButtonOptions {
  label!: string;
  isFullWidth!: boolean;
  position!: 'left' | 'right' | 'center';
}
