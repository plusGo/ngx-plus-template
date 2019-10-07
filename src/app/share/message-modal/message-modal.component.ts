import {Component, Inject, OnInit} from '@angular/core';
import {modalData} from '../message-blocks/demo';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.scss']
})
export class MessageModalComponent implements OnInit {
  modalData = modalData;

  constructor(public dialogRef: MatDialogRef<MessageModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.modalData.blocks = this.data.blocks;
  }

  ngOnInit() {
  }

}
