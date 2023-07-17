import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecurityModule } from './module/security/security.module';
import { StarterModule } from './module/starter/starter.module';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { StarterComponent } from './module/starter/starter.component';
import { StarterHeaderComponent } from './components/starter-header/starter-header.component';
import { StarterFooterComponent } from './components/starter-footer/starter-footer.component';
import { StarterMainSliderComponent } from './components/starter-main-slider/starter-main-slider.component';
import { StarterMainServicesComponent } from './components/starter-main-services/starter-main-services.component';
import { ConsoleHeaderComponent } from './components/console-header/console-header.component';
import { ConsoleFooterComponent } from './components/console-footer/console-footer.component';

@NgModule({
  declarations: [

    NotFoundPageComponent,
    AppComponent,
    StarterHeaderComponent,
    StarterFooterComponent,
    StarterMainSliderComponent,
    StarterMainServicesComponent,
    ConsoleHeaderComponent,
    ConsoleFooterComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SecurityModule,
    StarterModule

  ],
  providers: [],
  bootstrap: [StarterComponent]
})
export class AppModule { }
