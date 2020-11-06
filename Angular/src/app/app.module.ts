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
<<<<<<< HEAD
import { PurchaseComponent } from './purchase/purchase.component';
=======
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { QrcodeComponent } from './qrcode/qrcode.component';

>>>>>>> f63f3768e7dce52341dd619ed389fe0e65ce8fda

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
<<<<<<< HEAD
    PurchaseComponent
=======
    QrcodeComponent
>>>>>>> f63f3768e7dce52341dd619ed389fe0e65ce8fda
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
