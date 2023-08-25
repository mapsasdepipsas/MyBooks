import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FormRegisterComponent } from './component/form-register/form-register.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BooksComponent } from './pages/books/books.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //para template driven formulario //y model driven
import { IdbookPipe } from './pipes/idbook.pipe';
import { CardComponent } from './component/card/card.component';
import { AddbookComponent } from './pages/addbook/addbook.component';
import { UpdateBookComponent } from './pages/update-book/update-book.component';
import { LoginComponent } from './pages/login/login.component';
import { FormLoginComponent } from './component/form-login/form-login.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FormRegisterComponent,
    RegisterComponent,
    ProfileComponent,
    BooksComponent,
    IdbookPipe,
    CardComponent,
    AddbookComponent,
    UpdateBookComponent,
    LoginComponent,
    FormLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //añadimos esto para poder usar ngModel en los inputs del formulario de la pagina books
    ReactiveFormsModule, //para form model driven
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
