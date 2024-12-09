import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FlutterwaveComponent } from './pages/flutterwave/flutterwave.component';
import { SendappComponent } from './pages/sendapp/sendapp.component';
import { CarbonComponent } from './pages/carbon/carbon.component';
import { CartComponent } from './pages/cart/cart.component';
import { DishaComponent } from './pages/disha/disha.component';
import { InvisionComponent } from './pages/invision/invision.component';
import { MarketplaceComponent } from './pages/marketplace/marketplace.component';

const routes: Routes = [
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '', component: HomeComponent },
  { path: 'flutterwave', component: FlutterwaveComponent },
  { path: 'sendapp', component: SendappComponent },
  { path: 'carbon', component: CarbonComponent },
  { path: 'cart', component: CartComponent },
  { path: 'disha', component: DishaComponent },
  { path: 'invision', component: InvisionComponent },
  { path: 'marketplace', component: MarketplaceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
