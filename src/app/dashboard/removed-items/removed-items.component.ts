import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {RemovedItemsService} from "./removed-items.service";
import {AsyncPipe, CommonModule} from "@angular/common";

@Component({
  selector: 'app-removed-items',
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe
  ],
  templateUrl: './removed-items.component.html',
  styleUrl: './removed-items.component.css'
})
export class RemovedItemsComponent {
  removedItems$: Observable<any[]>;

  constructor(private removedItemsService: RemovedItemsService) {
    this.removedItems$ = this.removedItemsService.getRemovedItems();
  }

}
