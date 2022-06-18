import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { HibaComponent } from './hiba/hiba.component';
import { TesztComponent } from './teszt/teszt.component';

const routes: Routes = [
  { path: 'teszt', component: TesztComponent },
  {path: 'dataBinding', component:DataBindingComponent},
  { path: '', redirectTo: '/teszt', pathMatch: 'full' },
  { path: '**', component: HibaComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
