import {AfterViewInit, Component, OnInit} from '@angular/core';
import Editor from 'tui-editor';
import {ClipboardService} from 'ngx-clipboard';

@Component({
  selector: 'app-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss']
})
export class MarkdownEditorComponent implements OnInit, AfterViewInit {
  data;
  editor;

  constructor(
    private  clipboardService: ClipboardService) {

  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.editor = new Editor({
      el: document.querySelector('#editSection'),
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      height: 'calc(100% - 60px)'
    }) as any;
    // this.editor.on('change',(editor)=>{
    //   const markdown = this.editor.getMarkdown();
    // })
  }

  copyBlocks() {
    let markdown = this.editor.getHtml();
    markdown = markdown.replace(/\r\n/g, '<br/>');
    // this.clipboardService.copyFromContent(JSON.stringify(this.blockData, null, 2));
    // this.snackBar.open('复制成功');
  }

}
