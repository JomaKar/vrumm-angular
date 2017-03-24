import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRouterModule } from './routing.module';

import { AppComponent } from './app.component';

import { VrummLogin } from './login/login.cmp';
import { VrummRegistro } from './registro/registro.cmp'

import { VrummInnerApp } from './innerAppContainer/mainContainer.cmp';

import { UserProfile } from './perfil/perfil.cmp';
import { UserEdit } from './edit/edit.cmp';

import { VrummCatalogo } from './catalogo/catalogo.cmp';
import { VrummBrands } from './marca/marca.cmp';
import { VrummModels } from './modelo/modelo.cmp';
import { VrummVersiones } from './version/version.cmp';


@NgModule({
  declarations: [
    AppComponent,
    VrummLogin, 
    VrummRegistro,
    VrummInnerApp,
    UserProfile,
    UserEdit,
    VrummCatalogo,
    VrummBrands,
    VrummModels,
    VrummVersiones
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
