import { EventComponent } from './event/event.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component'
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { PurchaseComponent } from './purchase/purchase.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'account', component: AccountComponent},
  {path: 'event/:id', component: EventComponent},
  {path: 'inventory', component: InventoryComponent},
  {path: 'purchase', component: PurchaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
