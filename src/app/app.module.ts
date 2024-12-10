import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
// import { CarouselModule } from "ngx-bootstrap/carousel";

import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FlutterwaveComponent } from './pages/flutterwave/flutterwave.component';
import { CarbonComponent } from './pages/carbon/carbon.component';
import { SendappComponent } from './pages/sendapp/sendapp.component';
import { DishaComponent } from './pages/disha/disha.component';
import { MarketplaceComponent } from './pages/marketplace/marketplace.component';
import { InvisionComponent } from './pages/invision/invision.component';
import { CartComponent } from './pages/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    FlutterwaveComponent,
    CarbonComponent,
    SendappComponent,
    DishaComponent,
    MarketplaceComponent,
    InvisionComponent,
    CartComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    // CarouselModule.forRoot()
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
