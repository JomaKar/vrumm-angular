import { Routes } from '@angular/router';

import { UserProfile } from './perfil/perfil.cmp';
import { UserEdit } from './edit/edit.cmp';

import { VrummCatalogo } from './catalogo/catalogo.cmp';
import { VrummBrands } from './marca/marca.cmp';
import { VrummModels } from './modelo/modelo.cmp';
import { VersionesRoute } from './catalogo.routes';


export const vrummRoutes: Routes = [
	{ path: 'perfil/:alias', component: UserProfile },
	{ path: 'perfil/:alias/edit', component: UserEdit },
	{ path: 'catalogo', component:  VrummCatalogo },
	{ path: 'marcas/:brandId', component: VrummBrands },
	{ path: 'marcas/:brandId/modelos/:mdlsId', component: VrummModels },
	{ path: 'marcas/:brandId/modelos/:mdlsId', component: VrummModels, children: VersionesRoute }
];