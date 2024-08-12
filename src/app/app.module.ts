import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { NavComponent } from './shared/nav/nav.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { UserService } from './services/user/user.service';
import { LoginService } from './services/auth/login.service';
import { JwtInterceptorService } from './services/auth/jwt-interceptor.service';
import { ErrorInterceptorService } from './services/auth/error-interceptor.service';
import { ClienteService } from './services/cliente.service';
import { ClienteComponent } from './components/cliente/cliente.component';
import { TerrestreComponent } from './components/terrestre/terrestre.component';
import { MaritimoComponent } from './components/maritimo/maritimo.component';
import { TerrestreService } from './services/terrestre.service';
import { MaritimoService } from './services/maritimo.service';
import { FormsModule } from '@angular/forms';
import { BodegaService } from './services/bodega.service';
import { BodegaComponent } from './components/bodega/bodega.component';
import { PuertoService } from './services/puerto.service';
import { PuertoComponent } from './components/puerto/puerto.components';

@NgModule({
  declarations: [
    TerrestreComponent,
    MaritimoComponent,
    ClienteComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    NavComponent,
    BodegaComponent,
    PuertoComponent,
    PersonalDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ClienteService,
    TerrestreService,
    MaritimoService,
    BodegaService,
    PuertoService,
    {provide:HTTP_INTERCEPTORS,useClass:JwtInterceptorService,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
