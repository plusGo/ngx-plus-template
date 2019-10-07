import {Component, Inject, OnInit} from '@angular/core';
import {TemplateService} from '../../../core/service/template.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-templates-list',
  templateUrl: './templates-list.component.html',
  styleUrls: ['./templates-list.component.scss']
})
export class TemplatesListComponent implements OnInit {
  templates = [];

  constructor(private templateService: TemplateService,
              public dialogRef: MatDialogRef<TemplatesListComponent>) {
    this.templateService.findAll().subscribe(data => {
      this.templates = data;
    });
  }

  ngOnInit() {
  }

  useTemplate(template: any) {
    this.dialogRef.close(template);
  }
}
