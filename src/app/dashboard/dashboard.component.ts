import { Component } from '@angular/core';
import {PostsComponent} from "./posts/posts.component";
import {PhotosComponent} from "./photos/photos.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    PostsComponent,
    PhotosComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
