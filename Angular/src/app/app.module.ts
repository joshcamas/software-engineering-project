import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AccountComponent } from './account/account.component';
import { ScanComponent } from './scan/scan.component';
import { EventComponent } from './event/event.component';
import { CarouselComponent } from './carousel/carousel.component';
import { InventoryComponent } from './inventory/inventory.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { CreateeventComponent } from './createevent/createevent.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    AccountComponent,
    ScanComponent,
    EventComponent,
    CarouselComponent,
    InventoryComponent,
    PurchaseComponent,
    QrcodeComponent,
    SignInComponent,
    CreateaccountComponent,
    ForgotpasswordComponent,
    CreateeventComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
