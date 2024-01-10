import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {PhotosService} from "./photos.service";
import {AsyncPipe, CommonModule, SlicePipe} from "@angular/common";

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

  constructor(private photoService: PhotosService) {
    this.photos$ = photoService.getPhotos();
  }
}
