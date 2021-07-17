import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListBankComponent } from './components/list-bank/list-bank.component';
import { ListMobileBankComponent } from './components/list-mobile-bank/list-mobile-bank.component';
import { MerchantCashComponent } from './components/merchant-cash/merchant-cash.component';
import { HttpService } from './services/http.service';
import { BillInitComponent } from './components/bill-init/bill-init.component';
import { BillVerificationComponent } from './components/bill-verification/bill-verification.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { Auth2Component } from './components/auth2/auth2.component';


@NgModule({
  declarations: [
    AppComponent,
    ListBankComponent,
    ListMobileBankComponent,
    MerchantCashComponent,
    BillInitComponent,
    BillVerificationComponent,
    AuthentificationComponent,
    Auth2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
