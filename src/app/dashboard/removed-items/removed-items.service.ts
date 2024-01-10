import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RemovedItemsService {
  private removedItems = new BehaviorSubject<any[]>([]);

  constructor() {
  }

  getRemovedItems(): Observable<any[]> {
    return this.removedItems.asObservable();
  }

  addRemovedItems(item: any): void {
    const currentItems = this.removedItems.getValue();
    this.removedItems.next([...currentItems, item]);
  }
}
