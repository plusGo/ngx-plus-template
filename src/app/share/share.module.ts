import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import {MessageBlocksComponent} from './message-blocks/message-blocks.component';
import {MarkdownItPipe} from './pipes/markdown-it.pipe';
import {FormsModule} from '@angular/forms';
import {MessageModalComponent} from './message-modal/message-modal.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {RichEditorComponent} from './rich-editor/rich-editor.component';
import {ClipboardModule} from 'ngx-clipboard';
import {ConfirmComponent} from './confirm/confirm.component';


@NgModule({
  declarations: [MessageBlocksComponent, MarkdownItPipe, MessageModalComponent, RichEditorComponent, ConfirmComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    DragDropModule,
    MatToolbarModule,
    MatSnackBarModule,
    ClipboardModule,
    MatSlideToggleModule,
  ], exports: [
    MatSlideToggleModule,
    ClipboardModule,
    MatSnackBarModule,
    MatToolbarModule,
    DragDropModule,
    MatDialogModule,
    CommonModule,
    MatButtonModule,
    MessageBlocksComponent,
    MarkdownItPipe,
    MatIconModule,
    MatSelectModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    MessageModalComponent,
    RichEditorComponent
  ],
  entryComponents: [MessageModalComponent, ConfirmComponent]
})
export class ShareModule {
}
