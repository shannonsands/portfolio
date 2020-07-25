import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { routeData } from './config/route';


const routes: Routes = routeData.map(r => ({path: r.path, component: r.component} as Route));

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
