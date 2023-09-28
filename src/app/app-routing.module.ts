import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ContactComponent } from './contact/contact.component';
 import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { TodosComponent } from './todos/todos.component';


  
  
const routes:Routes=[
  {path: '', redirectTo: 'home' , pathMatch: 'full'},
{path:"home", component: HomeComponent},
{path:"about", component: AboutComponent},
{path:"gallary", component: GallaryComponent},
{path:"contact", component: ContactComponent},
{path:"users", component: UsersComponent},
{path:"products", component: ProductsComponent},
{path:"login", component: LoginComponent},
{path:"todos", component: TodosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

