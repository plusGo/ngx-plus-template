import {Component, OnInit} from '@angular/core';
import {BlockKitBuilderService} from './service/block-kit-builder.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {ClipboardService} from 'ngx-clipboard';
import {ConfirmService} from '../../share/confirm/confirm.service';
import {TemplatesListComponent} from './templates-list/templates-list.component';
import {MessageModalComponent} from '../../share/message-modal/message-modal.component';

@Component({
  selector: 'app-block-kit-builder',
  templateUrl: './block-kit-builder.component.html',
  styleUrls: ['./block-kit-builder.component.scss']
})
export class BlockKitBuilderComponent implements OnInit {

  messageUIList = [
    'Section', 'Image', 'Context', 'Actions', 'Divider', 'Section with BlockImage', 'Section with BlockButton', 'Section with Select', 'Section with Multi-Select', 'Section with Overflow', 'Section with DatePicker', 'Section with Fields'
  ];

  modalUIList = [
    'Input with DatePicker', 'Input with Multiline', 'Input with SingleLine'
  ];


  blockData = {
    blocks: []
  };
  messageMode = true;

  get blockUIList() {
    if (this.messageMode) {
      return this.messageUIList;
    } else {
      return this.messageUIList.concat(this.modalUIList);
    }
  }

  constructor(private blockKitBuilderService: BlockKitBuilderService,
              private snackBar: MatSnackBar,
              private confirmService: ConfirmService,
              private dialog: MatDialog,
              private  clipboardService: ClipboardService) {
  }

  ngOnInit() {
  }

  addBlockUI(blockUI: string) {
    this.blockData.blocks = this.blockKitBuilderService.addBlockUI(this.blockData, blockUI);
    if (this.blockData.blocks.length === 50) {
      this.snackBar.open('最多只能添加50个块级元素');
      return;
    }
    this.blockData = {...this.blockData};
  }

  blockChange($event) {
    this.blockData.blocks = $event;
    this.blockData = {...this.blockData};
  }

  copyBlocks() {
    this.clipboardService.copyFromContent(JSON.stringify(this.blockData, null, 2));
    this.snackBar.open('复制成功');
  }

  clear() {
    this.confirmService.confirm('清空后将重置当前界面，请确认!').subscribe(result => {
      if (result) {
        this.blockData = {
          blocks: []
        };
      }
    });

  }

  goToChooseTemplate() {
    const dialogRef = this.dialog.open(TemplatesListComponent, {
      width: '1440px',
      height: '95vh',
      data: {},
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.blockData = {
          blocks: result.blocks
        };
      }
    });

  }

  openModal() {
    const dialogRef = this.dialog.open(MessageModalComponent, {
      width: '600px',
      data: this.blockData,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
