import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AltaComponent } from './alta/alta.component';
import {ListarComponent} from './listar/listar.component';
import {ModificacionComponent} from './modificacion/modificacion.component';

const routes: Routes = [

{ path: 'alta-component', component: AltaComponent },
{ path: 'modificacion-component', component: ModificacionComponent },
	{
		path: 'listar-component',
		component: ListarComponent,
		
	},
	//{ path: '', redirectTo: 'alta-component', pathMatch: 'full' },
	  //{ path: '**', component: AltaComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
