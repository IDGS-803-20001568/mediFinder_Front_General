import { DialogService } from './../../service/dialog.service';
// dialog.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  visible: boolean = false;

  constructor(private DialogService: DialogService) {}

  ngOnInit() {
    this.DialogService.visible$.subscribe(visible => {
      this.visible = visible;
    });
  }

  hideDialog() {
    this.DialogService.hideDialog();
  }
}
