import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PartyComponent } from "./party/party.component";
import { VotersComponent } from "./voters/voters.component";

export const routes:Routes=[
  {path:"vote",component:VotersComponent,pathMatch:'full'},
  {path:"party",component:PartyComponent}

];



export const routing:ModuleWithProviders=RouterModule.forRoot(routes);