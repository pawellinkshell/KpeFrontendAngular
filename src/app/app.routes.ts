import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard/dashboard.component";

export const routes: Routes = [
  {
    path: 'products', component: ProductsComponent,
  },
  {
    path: 'dashboard', component: DashboardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
