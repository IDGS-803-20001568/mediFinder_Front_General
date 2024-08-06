// dialog.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private visibleSource = new BehaviorSubject<boolean>(false);
  visible$ = this.visibleSource.asObservable();

  showDialog() {
    this.visibleSource.next(true);
  }

  hideDialog() {
    this.visibleSource.next(false);
  }
}
