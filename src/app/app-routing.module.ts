import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { AboutPageComponent } from "./about-page/about-page.component";
import { ContactPageComponent } from "./contact-page/contact-page.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { ProductDetailPageComponent } from "./product-detail-page/product-detail-page.component";
import { ProductspageComponent } from "./productspage/productspage.component";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { RegisterPageComponent } from "./register-page/register-page.component";
import { LoginPageComponent } from "./login-page/login-page.component";

import { AuthGuard } from "./auth.guard";


const routes: Routes = [
    { path: '', redirectTo:'login', pathMatch:'full'  },
    { path: 'home', component: HomepageComponent, canActivate:[AuthGuard] },
    { path: 'products/cat/:catId', component: ProductspageComponent, canActivate:[AuthGuard] },
    { path: 'products/sub/:subId', component: ProductspageComponent, canActivate:[AuthGuard] },
    { path: 'products/details/:id', component: ProductDetailPageComponent, canActivate:[AuthGuard] },
    { path: 'register', component: RegisterPageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'about-us', component: AboutPageComponent, canActivate:[AuthGuard] },
    { path: 'contact-us', component: ContactPageComponent },
    { path: '**', component: ErrorPageComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}