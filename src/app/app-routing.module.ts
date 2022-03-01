import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PagesRoutingModule } from './pages/pages.routing';
import { UTMAPRoutingModule } from './pages/utmap/utmap-routing.module';
const routes: Routes = [
  
    { path: '', component: DashboardComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  PagesRoutingModule,
  UTMAPRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
