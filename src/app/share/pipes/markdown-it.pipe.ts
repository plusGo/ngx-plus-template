import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MarkdownItUtil} from '../../core/markdown.util';

@Pipe({
  name: 'markdownIt'
})
export class MarkdownItPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {
  }

  transform(value: any, ...args: any[]): any {
    if (!value) {
      return '';
    }
    let html = MarkdownItUtil.render(value).trim();
    if (html && html.startsWith('<p>')) {
      html = html.substring(3, html.length);
    }
    if (html && html.endsWith('</p>')) {
      html = html.substring(0, html.length - 4);
    }
    return this.domSanitizer.bypassSecurityTrustHtml(html);
  }

}
