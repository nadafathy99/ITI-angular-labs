import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from'@angular/common/http';
import { PostDetalisComponent } from './post-detalis/post-detalis.component';
import { WithDiscountComponent } from './with-discount/with-discount.component';
import { WithoutDiscountComponent } from './without-discount/without-discount.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    FilterPipe,
    HomeComponent,
    UsersComponent,
    PostsComponent,
    NotFoundComponent,
    PostDetalisComponent,
    WithDiscountComponent,
    WithoutDiscountComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent] // bootstrapping component
})
export class AppModule { }
