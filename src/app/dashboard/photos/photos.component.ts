import { Component } from '@angular/core';
import {map, Observable} from "rxjs";
import {PhotosService} from "./photos.service";
import {AsyncPipe, CommonModule, SlicePipe} from "@angular/common";
import {RemovedItemsService} from "../removed-items/removed-items.service";

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe,
    SlicePipe
  ],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent {
  photos$: Observable<any[]>;

  constructor(private photoService: PhotosService, private removedItemsService: RemovedItemsService) {
    this.photos$ = photoService.getPhotos();
  }

  removePost(photoId: number): void {
    this.photos$ = this.photos$.pipe(
      map(photos => {
        const removedPhoto = photos.find(photo => photo.id === photoId);
        if (removedPhoto) {
          this.removedItemsService.addRemovedItems(removedPhoto);
        }
        return photos.filter(photo => photo.id !== photoId);
      })
    );
  }
}
