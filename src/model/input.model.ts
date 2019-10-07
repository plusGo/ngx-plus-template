import {PlainText} from './text.model';
import {DatePicker} from './date-picker.model';

export class PlainTextInput {
  type = 'plainTextInput';
  multiline: boolean;
  placeholder: PlainText;

  constructor(multiline: boolean, placeholder: PlainText) {
    this.multiline = multiline;
    this.placeholder = placeholder;
  }
}

export class BlockInput {
  type = 'input';
  element: DatePicker | PlainTextInput;
  hint: PlainText;


  constructor(element: DatePicker | PlainTextInput, hint?: PlainText) {
    this.element = element;
    this.hint = hint;
  }
}

