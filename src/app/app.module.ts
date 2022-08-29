import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductsComponent } from './products/products.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { ProductspageComponent } from './productspage/productspage.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    CategoryComponent,
    HomepageComponent,
    ProductsComponent,
    SubcategoryComponent,
    ProductspageComponent,
    ProductDetailComponent,
    ProductDetailPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    ErrorPageComponent,
    RegisterPageComponent,
    LoginPageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
