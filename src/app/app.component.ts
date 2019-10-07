import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {MessageModalComponent} from './share/message-modal/message-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-plus-template';

  constructor(private dialog: MatDialog) {
  }

  openModal() {
    const dialogRef = this.dialog.open(MessageModalComponent, {
      width: '600px',
      data: {},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
