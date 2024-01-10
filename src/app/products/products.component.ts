import {Component, OnInit} from '@angular/core';
import {ProductsService} from "./products.service";
import {Observable} from "rxjs";
import {AsyncPipe, CommonModule} from "@angular/common";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  get isListView(): boolean {
    return this._isListView;
  }

  set isListView(value: boolean) {
    this._isListView = value;
  }

  posts$: Observable<any[]>;
  photos$: Observable<any[]>;
  private _isListView: boolean = false;

  constructor(private productService: ProductsService) {
    this.posts$ = this.productService.getPosts();
    this.photos$ = this.productService.getPhotos();
  }

  ngOnInit(): void {
    // this.posts$ = this.productService.getPosts();
    // this.photos$ = this.productService.getPhotos();
  }

  addToFavorites(post: any) {

  }
}
