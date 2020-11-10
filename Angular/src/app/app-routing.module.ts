import { QrcodeComponent } from './qrcode/qrcode.component';
import { EventComponent } from './event/event.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component'
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { CreateeventComponent } from './createevent/createevent.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'account', component: AccountComponent},
  {path: 'event/:id', component: EventComponent},
  {path: 'inventory/:id', component: InventoryComponent},
  {path: 'qrcode', component: QrcodeComponent},
  {path: 'purchase', component: PurchaseComponent},
  {path: 'qrcode', component: QrcodeComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'createaccount', component: CreateaccountComponent},
  {path: 'forgotpassword', component: ForgotpasswordComponent},
  {path: 'createevent', component: CreateeventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
