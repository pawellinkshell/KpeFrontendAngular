import { Component } from '@angular/core';
import {AsyncPipe, CommonModule, SlicePipe} from "@angular/common";
import {map, Observable} from "rxjs";
import {PostsService} from "./posts.service";
import {RemovedItemsService} from "../removed-items/removed-items.service";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    CommonModule,
    SlicePipe,
    AsyncPipe
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts$: Observable<any[]>;

  constructor(private postService: PostsService, private removedItemsService: RemovedItemsService) {
    this.posts$ = postService.getPosts();
  }

  removePost(postId: number): void {
    this.posts$ = this.posts$.pipe(
      map(posts => {
        const removedPost = posts.find(post => post.id === postId);
        if (removedPost) {
          this.removedItemsService.addRemovedItems(removedPost);
        }
        return posts.filter(post => post.id !== postId);
      })
    );
  }
}
