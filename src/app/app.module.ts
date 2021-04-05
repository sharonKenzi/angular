import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VotersComponent } from './voters/voters.component';
import { routing } from './app.routes';
import { PartyComponent } from './party/party.component';

@NgModule({
  declarations: [
    AppComponent,
    VotersComponent,
    PartyComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,routing,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
