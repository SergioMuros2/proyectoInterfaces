// nenomons.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NenomonsService {
  private selectedNenomon: any = null;

  private selectedUserNenomon: any = null;

setSelectedUserNenomon(nenomon: any) {
  this.selectedUserNenomon = nenomon;
}

getSelectedUserNenomon() {
  return this.selectedUserNenomon;
}

  private userListSubject = new BehaviorSubject<any[]>([]);
  userList$ = this.userListSubject.asObservable();

  setSelected(nenomon: any) {
    this.selectedNenomon = nenomon;
  }

  getSelected() {
    return this.selectedNenomon;
  }

  addToUserNenodex(nenomon: any) {
    const currentList = this.userListSubject.getValue();

    // Evitar duplicados
    if (currentList.find(n => n.id === nenomon.id)) {
      return;
    }

    const newList = [...currentList, nenomon];
    this.userListSubject.next(newList);
  }

  removeFromUserNenodex(nenomonId: number) {
    const currentList = this.userListSubject.getValue();
    const newList = currentList.filter(n => n.id !== nenomonId);
    this.userListSubject.next(newList);
  }
}
