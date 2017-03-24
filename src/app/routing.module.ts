import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { VrummLogin } from './login/login.cmp';
import { VrummRegistro } from './registro/registro.cmp'

import { VrummInnerApp } from './innerAppContainer/mainContainer.cmp';

import { UserProfile } from './perfil/perfil.cmp';
import { UserEdit } from './edit/edit.cmp';
import { vrummRoutes } from './vrumm.routes';


const routes: Routes = [
	{ path: '',  redirectTo: '/login', pathMatch: 'full' },
	{ path: 'login',  component: VrummLogin },
	{ path: 'registro',  component: VrummRegistro },
	{ path: 'app', component: VrummInnerApp },
	{ path: 'app', component: VrummInnerApp, children: vrummRoutes}
];



@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRouterModule{}