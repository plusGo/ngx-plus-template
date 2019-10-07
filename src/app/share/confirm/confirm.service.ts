import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {MatDialog} from '@angular/material';
import {ConfirmComponent} from './confirm.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {
  constructor(private dialog: MatDialog) {

  }

  public confirm(text): Subject<any> {
    const sub = new Subject();
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '250px',
      data: {'text': text},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      sub.next(result);
    });
    return sub;
  }
}
