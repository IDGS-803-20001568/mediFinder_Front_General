// dialog.component.ts
import { Component, OnInit } from '@angular/core';
import { DialogService } from './../../service/dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  visible: boolean = false;

  constructor(private dialogService: DialogService) {}

  ngOnInit() {
    this.dialogService.visible$.subscribe(visible => {
      this.visible = visible;
    });
  }

  hideDialog() {
    this.dialogService.hideDialog();
  }
}
