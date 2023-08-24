import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BooksComponent } from './pages/books/books.component';
import { AddbookComponent } from './pages/addbook/addbook.component';
import { UpdateBookComponent } from './pages/update-book/update-book.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'}, //para que home sea la que aparezca por defecto
  {path: "home", component: HomeComponent},
  {path: "books", component: BooksComponent},
  {path: "register", component: RegisterComponent},
  {path: "profile", component: ProfileComponent},
  {path: "addbook", component: AddbookComponent},
  {path: "update-book", component: UpdateBookComponent},
  {path: "update-book/:id", component: UpdateBookComponent} //para que funcione el formulario actualizar libros (routernavigate)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
