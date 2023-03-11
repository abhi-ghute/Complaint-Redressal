import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { EngineerComponent } from './engineer/engineer.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './administrator/create/create.component';
import { CommonModule } from '@angular/common';
import { CreateCustomerComponent } from './administrator/create/create-customer/create-customer.component';
import { ManagerComponent } from './manager/manager.component';
import { CreateManagerComponent } from './administrator/create/create-manager/create-manager.component';
import { CreateEngineerComponent } from './administrator/create/create-engineer/create-engineer.component';


@NgModule({
  declarations: [
    AppComponent,
    AdministratorComponent,
    CustomerComponent,
    ManagerComponent,
    EngineerComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    CreateComponent,
    CreateCustomerComponent,
    CreateManagerComponent,
    CreateEngineerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
