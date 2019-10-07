import {PlainText} from './text.model';
import {Action, ActionType} from './section.model';

export class DatePicker extends Action {
  type: ActionType = 'datePicker';
  initialDate: string;
  placeholder: PlainText;

  constructor(placeholder: PlainText, initialDate?: string) {
    super();
    this.initialDate = initialDate;
    this.placeholder = placeholder;
  }
}
