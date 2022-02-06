import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { WithoutDiscountComponent } from './without-discount/without-discount.component';
import { WithDiscountComponent } from './with-discount/with-discount.component';
import { PostDetalisComponent } from './post-detalis/post-detalis.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"products",component:ProductsComponent,children:[{path:'with-discount',component:WithDiscountComponent},
  {path:'without-discout',component:WithoutDiscountComponent}]},
  {path:"users",component:UsersComponent},
  {path:"posts",component:PostsComponent},
  {path:"posts/:id/comments",component:PostDetalisComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
