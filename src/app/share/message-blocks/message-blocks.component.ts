import {Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2} from '@angular/core';
import {Block} from '../../../model/section.model';

@Component({
  selector: 'app-message-blocks',
  templateUrl: './message-blocks.component.html',
  styleUrls: ['./message-blocks.component.scss']
})
export class MessageBlocksComponent implements OnInit {
  @Input()
  blocks: Block[] = [];
  @Input()
  editable = true;
  @Output()
  blockChange = new EventEmitter();
  private readonly el = this.elementRef.nativeElement;

  constructor(private renderer: Renderer2,
              private elementRef: ElementRef) {
    this.renderer.addClass(this.el, 'message-blocks');
  }

  ngOnInit() {
  }

  toggleImage(block: any, b: boolean) {
    block.$hidden = b;
  }


  onDrop(event) {
    if (event.previousIndex === event.currentIndex) {
      return;
    }
    if (!this.editable) {
      return;
    }
    const prev = this.blocks[event.previousIndex];
    const cur = this.blocks[event.currentIndex];
    this.blocks.splice(event.previousIndex, 1);
    this.blocks.splice(event.currentIndex, 0, prev);
    this.blockChange.emit([...this.blocks]);
  }

  deleteBlock(block: Block ) {
    this.blocks = this.blocks.filter($block => $block !== block);
    this.blockChange.emit(this.blocks);
  }
}
