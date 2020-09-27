import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

// Service
import { CommonService } from './common/common.service';

// plugin
import { NgxUiLoaderModule } from 'ngx-ui-loader';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    // Import NgxUiLoaderModule
    NgxUiLoaderModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})

export class AppModule { }
