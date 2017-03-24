import { Routes } from '@angular/router';

import { VrummVersiones } from './version/version.cmp';


export const VersionesRoute: Routes = [
	{ path: 'versiones/:vrsId', component: VrummVersiones }
];