import {AfterViewInit, Component, ElementRef, forwardRef, OnInit, ViewChild} from '@angular/core';
import * as CodeMirror from 'codemirror/lib/codemirror';
import * as Javascript from 'codemirror/mode/javascript/javascript';
import * as Vim from 'codemirror/keymap/vim';
import * as Searchcursor from 'codemirror/addon/search/searchcursor';
import * as Dialog from 'codemirror/addon/dialog/dialog';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-rich-editor',
  templateUrl: './rich-editor.component.html',
  styleUrls: ['./rich-editor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => RichEditorComponent)
    }
  ],
})
export class RichEditorComponent implements OnInit, AfterViewInit, ControlValueAccessor {
  @ViewChild('richArea', {static: false}) richArea: ElementRef;
  disabled = false;
  model;
  codeMirrorEditor: any;
  onModelChange: (value: boolean) => void = () => null;
  onModelTouched: () => void = () => null;

  constructor() {
    Javascript;
    Vim;
    Searchcursor;
    Dialog;


  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.codeMirrorEditor = CodeMirror.fromTextArea(this.richArea.nativeElement, {
      mode: 'application/json', // 编辑器语言
      tabMode: 'indent',
      autoMatchParens: true,
      textWrapping: true,
      lineNumbers: true,
      lineWrapping: true,
      extraKeys: {
        F7: function autoFormat(editor) {
          const totalLines = editor.lineCount();
          editor.autoFormatRange({line: 0, ch: 0}, {line: totalLines});
        }// 代码格式化
      }
    });
    this.codeMirrorEditor.on('change', editor => {
      const value = editor.getDoc().getValue();
      this.onModelChange(JSON.parse(value));
    });
    this.codeMirrorEditor.setSize('auto', 'calc(100vh - 160px)');


    CodeMirror.defineExtension('autoFormatRange', function (from, to) {
      const cm = this;
      const outer = cm.getMode();
      const text = cm.getRange(from, to).split('\n');
      const state = CodeMirror.copyState(outer, cm.getTokenAt(from).state);
      const tabSize = cm.getOption('tabSize');

      let out = '';
      let lines = 0;
      let atSol = from.ch === 0;

      function newline() {
        out = out + '\n';
        atSol = true;
        ++lines;
      }

      for (let i = 0; i < text.length; ++i) {
        const stream = new CodeMirror.StringStream(text[i], tabSize);
        while (!stream.eol()) {
          const inner = CodeMirror.innerMode(outer, state);
          const style = outer.token(stream, state);
          const cur = stream.current();
          stream.start = stream.pos;
          if (!atSol || /\S/.test(cur)) {
            out += cur;
            atSol = false;
          }
          if (!atSol && inner.mode.newlineAfterToken &&
            inner.mode.newlineAfterToken(style, cur, stream.string.slice(stream.pos) || text[i + 1] || '', inner.state)) {
            newline();
          }
        }
        if (!stream.pos && outer.blankLine) {
          outer.blankLine(state);
        }
        if (!atSol) {
          newline();
        }
      }

      cm.operation(() => {
        cm.replaceRange(out, from, to);
        for (let cur = from.line + 1, end = from.line + lines; cur <= end; ++cur) {
          cm.indentLine(cur, 'smart');
        }
        cm.setSelection(from, cm.getCursor(false));
      });
    });
  }

  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onModelTouched = fn;

  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: any): void {
    this.model = obj;
    if (this.codeMirrorEditor) {
      const totalLines = this.codeMirrorEditor.lineCount();
      this.codeMirrorEditor.autoFormatRange({line: 0, ch: 0}, {line: totalLines});
      this.codeMirrorEditor.setOption('value', JSON.stringify(this.model, null, 2));
    }
  }

}
