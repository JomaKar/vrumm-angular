import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Ng2DeviceDetector} from 'ng2-device-detector';

import { AppRouterModule } from './routing.module';

import { windowWidthService } from './services/windowWidthService.srv';
import { HttpService } from './services/httpService.srv';
import { UserService } from './services/userService.srv';

import { noMoreGrowDirective } from './directives/noMoreGrow.dir';
import { correctElementHightOnGridDirective } from './directives/elHighOnGrid.dir';

import { AppComponent } from './app.component';

import { VrummLogin } from './login/login.cmp';
import { VrummRegistro } from './registro/registro.cmp'
import { SideImageOutOfApp } from './sideImgOutApp/sideImage.cmp';

import { VrummInnerApp } from './innerAppContainer/mainContainer.cmp';

import { VrummNavbar } from './navbar/navbar.cmp';
import { VrummFooter } from './vrummFooter/footer.cmp';

import { UserProfile } from './perfil/perfil.cmp';
import { UserEdit } from './edit/edit.cmp';

import { VrummCatalogo } from './catalogo/catalogo.cmp';
import { VrummBrands } from './marca/marca.cmp';
import { VrummModels } from './modelo/modelo.cmp';
import { VrummVersiones } from './version/version.cmp';


@NgModule({
  declarations: [
    noMoreGrowDirective,
    correctElementHightOnGridDirective,
    AppComponent,
    VrummLogin, 
    VrummRegistro,
    SideImageOutOfApp,
    VrummInnerApp,
    VrummNavbar,
    VrummFooter,
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
    AppRouterModule,
    Ng2DeviceDetector
  ],
  providers: [
    windowWidthService, 
    HttpService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
